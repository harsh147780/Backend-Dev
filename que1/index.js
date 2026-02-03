// Create a command-line application that allows users to perform basic file operations including
// read, write, copy, delete, and list directory contents.
const fs = require("fs");

const args = process.argv.slice(2);
const cmd = args[0];
const file = args[1] || "test.txt";

switch (cmd) {
    case "read":
        fs.readFile(file, "utf8", (err, data) => {
            if (err) return console.log(err.message);
            console.log(data);
        });
        break;

    case "write":
        fs.writeFile(file, args.slice(2).join(" "), (err) => {
            if (err) return console.log(err.message);
            console.log("File written");
        });
        break;

    case "copy":
        fs.copyFile(file, args[2] || "copy.txt", (err) => {
            if (err) return console.log(err.message);
            console.log("File copied");
        });
        break;

    case "delete":
        fs.unlink(file, (err) => {
            if (err) return console.log(err.message);
            console.log("File deleted");
        });
        break;

    case "list":
        fs.readdir(file || ".", (err, files) => {
            if (err) return console.log(err.message);
            files.forEach(f => console.log(f));
        });
        break;

    default:
        console.log("Invalid command");
}
