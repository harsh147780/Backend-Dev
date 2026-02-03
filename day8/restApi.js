const express = require('express');
const users = require('./MOCK_DATA.json');

const app = express();
const port = 8000;

// ✅ middleware (VERY IMPORTANT)
app.use(express.json());

// Routes
app.get('/users', (req, res) => {
    const html = `
    <ul>
        ${users.map(
        (user) =>
            `<li>${user.first_name} ${user.last_name} - ${user.email}</li>`
    ).join('')}
    </ul>`;
    res.send(html);
});

// REST API
app.get('/api/users', (req, res) => {
    res.json(users);
});

app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
});

// POST method
app.post('/api/users', (req, res) => {
    const { first_name, last_name, email, Job_title } = req.body;

    if (!first_name || !last_name || !email || !Job_title) {
        return res.status(400).json({ error: "Invalid user data" });
    }

    const newUser = {
        id: users.length + 1,
        first_name,
        last_name,
        email,
        Job_title,
    };

    users.push(newUser);
    res.status(201).json(newUser);
});

app.listen(port, () =>
    console.log(`Server running on http://localhost:${port}`)
);
