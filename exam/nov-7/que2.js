// function getstr(s) {

//     let str = s.split(" ");

//     let temp = "";

//     str.forEach(element => {

//         if (element.length > temp.length) {
//             temp = element;
//         }
//     });
//     return temp;
// }

// console.log(getstr("hello jay miten"));

function getstr(s) {

    let str = s.split(" ");

    str.reduce((largest, current) => {
        largest.length > current.length ? largest : current;


    }, "");
}

console.log(getstr("hello jay miten"));