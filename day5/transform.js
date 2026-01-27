const fs = require('fs');
const path = require('path');
const { Transform } = require('stream');       // Import Transform stream class from stream module

const inputFilePath = path.join(__dirname,"input.txt");
const transformFilePath = path.join(__dirname,"transform.txt");

const readStream  = fs.createReadStream(inputFilePath,'utf-8');
const writeStream = fs.createWriteStream(transformFilePath);


// Create a Transform stream to convert data to uppercase
// Transform stream implementation
// It reads data, transforms it, and then pushes the transformed data

const upperCaseTransform = new Transform({
    transform(chunk, encoding, callback) {                              // chunk is Buffer
        const upperCaseChunk = chunk.toString().toUpperCase();    // Convert to string and transform to uppercase
        this.push(upperCaseChunk)                                  // Push transformed chunk
        callback();                                                 // null indicates no error
                                                                      // upperCaseChunk is passed to the writable stream
    }
});

readStream.pipe(upperCaseTransform).pipe(writeStream);  // Pipe readStream to Transform stream and then to writeStream