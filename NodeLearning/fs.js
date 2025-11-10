import fs from 'fs'
import path from 'path';

console.log(path.dirname.toString());
fs.readFile('./commonjs.js', 'utf8', (err, data) => {

    if (data)
        console.log(data);
    else
        throw new Error("no such file name exist");


});

fs.writeFile('./first.txt', "Hello", 'utf-8', (err) => {
    if (err) {
        console.log("there is some issue");
        return;
    }
    console.log("Data written successfully")
});

fs.appendFile('./first.txt', "  this is append text", 'utf-8', (err) => {
    if (err) {
        console.log("there is some issue");
        return;
    }
    console.log("Data Append successfully")
});

//.log(__filename);