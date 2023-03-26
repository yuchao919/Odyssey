function restArguments(func, startIndex) {
    // func.length 是func的形参个数，arguments是实参
    startIndex = startIndex == null ? func.length - 1 : +startIndex;
    return function () {
        var length = Math.max(arguments.length - startIndex, 0),
            rest = Array(length),
            index = 0;
        for (; index < length; index++) {
            rest[index] = arguments[index + startIndex];
        }
        // call的性能比apply的高
        switch (startIndex) {
            case 0:
                return func.call(this, rest);
            case 1:
                return func.call(this, arguments[0], rest);
            case 2:
                return func.call(this, arguments[0], arguments[1], rest);
        }
        var args = Array(startIndex + 1);
        for (index = 0; index < startIndex; index++) {
            args[index] = arguments[index];
        }
        args[startIndex] = rest;
        return func.apply(this, args);
    };
}

var now =
    Date.now ||
    function () {
        return new Date().getTime();
    };

function debounce(func, wait, immediate) {
    var timeout, previous, args, result, context;

    var later = function () {
        var passed = now() - previous;
        if (wait > passed) {
            timeout = setTimeout(later, wait - passed);
        } else {
            timeout = null;
            if (!immediate) result = func.apply(context, args);
            if (!timeout) args = context = null;
        }
    };

    // var debounced = restArguments(function (_args) {
    //     context = this;
    //     args = _args;
    //     previous = now();
    //     if (!timeout) {
    //         timeout = setTimeout(later, wait);
    //         if (immediate) result = func.apply(context, args);
    //     }
    //     return result;
    // });
    var restArguments = function (func) {
        return function () {
            return func.apply(this, arguments);
        };
    };

    var debounced = restArguments(function (_args) {
        context = this;
        args = _args;
        previous = now();
        if (!timeout) {
            timeout = setTimeout(later, wait);
            if (immediate) result = func.apply(context, args);
        }
        return result;
    });
    debounced.cancel = function () {
        clearTimeout(timeout);
        timeout = args = context = null;
    };

    return debounced;
}

var a = function (hello, world) {
    console.log(hello, world);
};

var debounceA = debounce(a, 10000);

debounceA("hi", "sb");
debounceA("sss", "bbb");
