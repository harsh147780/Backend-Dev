//QUE -> Build a program that reads log files using streams, parses them, and generates a summary
// report with error counts and statistics.


// logAnalyzer.js
const fs = require("fs");

const logFile = "./que2/app.log";

let totalLines = 0;
let errorCount = 0;

const readStream = fs.createReadStream(logFile, {
    encoding: "utf8"
});

readStream.on("data", (chunk) => {
    const lines = chunk.split("\n");
    lines.forEach(line => {
        if (line.trim() !== "") {
            totalLines++;
            if (line.includes("ERROR")) {
                errorCount++;
            }
        }
    });
});

readStream.on("end", () => {
    console.log("Log Summary Report");
    console.log("Total Lines:", totalLines);
    console.log("Error Count:", errorCount);
});

readStream.on("error", (err) => {
    console.error("Error reading stream:", err.message);
});

