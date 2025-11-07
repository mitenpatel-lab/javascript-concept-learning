function getstr(s) {

    let str = s.split(" ");

    let sortedarr = str.reverse();

    if (sortedarr[0].length == sortedarr[1]) {
        return sortedarr[1];

    }
    else {
        return sortedarr[0];

    }
}

console.log(getstr("n patel mitenfgf dfghtythth"));