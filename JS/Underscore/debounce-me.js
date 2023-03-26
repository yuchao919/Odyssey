function debounce(func, wait, immediate) {
    var timeout, previous, args, result, context;

    previous = 0;

    var debounced = function () {
        var args = arguments;
        var now = Date.now();
        var elapse = now - previous;
        if (elapse < wait) {
            if (timeout) {
                clearTimeout(timeout);
            }
        }
        previous = now;

        if (immediate) {
            func.apply(this, args);
        }

        timeout = setTimeout(() => {
            func.apply(this, args);
        }, wait);
    };

    return debounced;
}

function test(a, b) {
    console.log(a, b);
}

var debounceA = debounce(test, 1000, true);

debounceA("hi", "s");
debounceA("hi", "sb");
debounceA("hi", "sbb");
setTimeout(() => {
    debounceA("hello", "sbbb");
}, 500);
setTimeout(() => {
    debounceA("hello", "sbbbb");
}, 1000);
setTimeout(() => {
    debounceA("hello", "sbbbbb");
}, 2000);
