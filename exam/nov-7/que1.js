function pyramid(n) {
    for (let i = 1; i <= n; i++) {
        let print = "";

        for (let j = 0; j < n - i; j++) {
            print += " ";
        }

        for (let k = 1; k <= i; k++) {
            print += k;
        }

        for (let l = i - 1; l >= 1; l--) {
            print += l;
        }

        console.log(row);
    }
}

pyramid(5);
