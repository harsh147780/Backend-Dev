const fs = require('fs');
const path = require('path');
const inputFilePath = path.join(__dirname,"input.txt");

const outputFilePath = path.join(__dirname,"output.txt");
// Normal async read (fs.readFile)
// Puri file ek baar me memory me load hoti hai
// Small files ke liye best hota hai
// Large files me RAM zyada use hoti hai
// Jab tak poori file read nahi hoti, tab tak process start nahi hota
// Example: Jaise pehle poori book uthao, phir padhna shuru karo

const readStream = fs.createReadStream(inputFilePath,(encoding='utf-8'));
const writeStream = fs.createWriteStream(outputFilePath);

readStream.pipe(writeStream);

// Pipe example (optional)
writeStream.on("finish", () =>{
    console.log("Writing finished");
});