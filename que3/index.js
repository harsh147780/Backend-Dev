// fileSync.js
const fs = require("fs");
const path = require("path");

const sourceDir = "./que3/source";
const targetDir = "./que3/target";


// create target directory if not exists
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir);
}

fs.readdir(sourceDir, (err, files) => {
    if (err) {
        console.error("Error reading source directory:", err.message);
        return;
    }

    files.forEach(file => {
        const sourcePath = path.join(sourceDir, file);
        const targetPath = path.join(targetDir, file);

        fs.stat(sourcePath, (err, stats) => {
            if (err) return;

            if (stats.isFile()) {
                if (!fs.existsSync(targetPath)) {
                    fs.copyFile(sourcePath, targetPath, (err) => {
                        if (err) {
                            console.error("Error copying file:", err.message);
                        } else {
                            console.log("Copied:", file);
                        }
                    });
                }
            }
        });
    });
});
