const fs = require('fs');
fs.mkdir('newDirectory', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Directory is Created");
});

fs.mkdir('floders/folder1/folder2', { recursive: true }, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Directory is Created");
});

fs.readdir('floders', (err, files) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(files);
});

fs.rmdir('newDirectory', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Directory is removed");
});

fs.rm('newDirectory',(err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Directory is removed");
});