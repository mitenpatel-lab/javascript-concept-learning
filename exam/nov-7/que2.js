function getstr(s) {

    let str = s.split(" ");

    let temp = "";

    str.forEach(element => {

        if (element.length > temp.length) {
            temp = element;
        }
    });
    return temp;
}

console.log(getstr("hello jay miten"));