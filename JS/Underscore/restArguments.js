// 在ES6中可以这样定义函数，为了兼容...rest这种写法所以定义了restArguments来辅助
function test(a, ...rest) {
    console.log(a, rest);
}

function restArguments(func, startIndex) {
    // func.length 是func的形参个数，arguments是实参，并且...rest是不算做数量的
    startIndex = startIndex == null ? func.length - 1 : +startIndex;
    return function () {
        var length = Math.max(arguments.length - startIndex, 0),
            rest = Array(length),
            index = 0;
        for (; index < length; index++) {
            rest[index] = arguments[index + startIndex];
        }
        // call的性能比apply好，可以满足大多数场景
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

const restTest = restArguments(test);
restTest(1, 23, 4, 3);

export default restArguments;
