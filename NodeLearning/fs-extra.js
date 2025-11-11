import fs from 'fs-extra';



const data = "this is the data practiced with fs-extra";
async function fsbasic() {

    try {
        await fs.writeFile('./fs-extra.txt', data, 'utf-8');
        await fs.copy('./fs-extra.txt', './fscopy.txt');
        const content = await fs.readFile('./fscopy.txt', 'utf8');
        console.log(content);
        await fs.remove('./fscopy.txt');

        console.log("All operation are Done");

    } catch (error) {
        console.error(error);
    }
}

fsbasic();

