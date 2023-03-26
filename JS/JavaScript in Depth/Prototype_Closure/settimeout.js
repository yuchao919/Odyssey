// var x = 1;
function fn() {
    console.log(x);
}

setTimeout(() => {
    var x = 2;
    fn();
}, 100);
