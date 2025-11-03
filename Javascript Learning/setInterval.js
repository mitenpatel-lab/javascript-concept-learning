let dateformat = "";
function update() {
    dateformat = new Date().toString();
    console.clear();
    console.log(dateformat);

}
const settimer = setInterval(update, 1000);

setTimeout(() => {

    clearInterval(settimer);
}, 5000);