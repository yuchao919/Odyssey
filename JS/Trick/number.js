/**
 * 将科学计算法表示的数字转化成标准数值（例如：1e-7 =>0.0000001）
 * @param {Number} num    数字
 */
// const regx = /(\d(?:\.(\d*))?)e(([+-])\d+)/
// eslint-disable-next-line no-useless-escape
var regx = /(\-)?(\d(?:\.(\d*))?)e(([+-])\d+)/;
export function transform(num) {
    var res = num;
    if (!num)
        return res;
    if (typeof num !== 'number') {
        return num;
    }
    if (res >= 0.000001) {
        return res;
    }
    var m;
    m = String(num);
    // 需要先检查一次是否是科学计数，大部分场景不是，使用正常存在性能损耗
    if (m.indexOf('e') < 0) {
        return res;
    }
    m = m.match(regx);
    // num: 0.000000069
    // 0: "6.9e-8" // 匹配的全结果
    // 1: 正负： -或者没有
    // 2: "6.9" // 底数
    // 3: "9" // 底数中的小数
    // 4: "-8" // 指数
    // 5: "-" // 指数的正负号
    if (m && m.length) {
        var intPart = String(m[2]).replace('.', '');
        // 小数场景，不考虑整数出现科学计数法场景
        if (m[5] === '-') {
            var pLen = Math.max(0, (m[3] || '').length - m[4]);
            var abs = pLen - intPart.length;
            var zero = [];
            for (var j = 0; j < abs; j++) {
                zero.push('0');
            }
            var zf = m[1] ? m[1] : '';
            res = zf + '0.' + zero.join('') + intPart;
        }
    }
    return res;
}
/**
 * 把 Number 四舍五入为指定小数位数的数字
 * @param {Number} number    数字
 * @param {Number} length 小数位位数
 */
export function toFixed(number, length) {
    if (length === void 0) { length = 0; }
    number = transform(number);
    length = length || 0;
    var carry = 0; // 存放进位标志
    var num; // 原浮点数放大multiple倍后的数
    var multiple; // 10的length次方
    var str = number + ''; // 将调用该方法的数字转为字符串
    var dot = str.indexOf('.'); // 找到小数点的位置
    var places = dot >= 0 ? str.substr(dot + 1).length : 0; // 小数点后几位数
    var result = str;
    // 如果当前值的小数位位数大于要保留的小数位位数，节省性能以及为了修复toFixed(99.96, 4)这种景返回99.9599不正确值的问题
    if (places > length) {
        // 找到要进行舍入的数的位置，手动判断是否大于等于5，满足条件进位标志置为1
        if (result.substr(dot + length + 1, 1) >= 5) {
            carry = 1;
        }
        var isNegative = str.startsWith('-');
        multiple = Math.pow(10, length); // 设置浮点数要扩大的倍数
        multiple = isNegative ? multiple * -1 : multiple;
        if (result.length > 15) {
            var decimal = str.substr(dot + 1);
            var integerPart = result.substr(0, dot);
            var decimalPart = decimal.substr(0, length);
            // @ts-ignore
            // 直接使用整数和小数位拼接得到整数加上舍入值，最后缩小倍数，解决之前在扩大倍数产生的精度问题
            num = Math.abs(integerPart + decimalPart) + carry; //去掉舍入位后的所有数，然后加上我们的手动进位数
            result = num / multiple + ''; //将进位后的整数再缩小为原浮点数
        }
        else {
            // @ts-ignore
            num = Math.floor(number * multiple) + carry; //去掉舍入位后的所有数，然后加上我们的手动进位数
            result = num / multiple + ''; //将进位后的整数再缩小为原浮点数
        }
    }
    // 处理进位后无小数
    dot = result.indexOf('.');
    if (dot < 0) {
        result += '.';
        dot = result.indexOf('.');
    }
    // 处理多次进位
    var len = result.length - (dot + 1);
    if (len < length) {
        for (var i = 0; i < length - len; i++) {
            result += 0;
        }
    }
    // 小数位为0时删除小数点
    if (dot === result.length - 1) {
        result = result.substr(0, dot);
    }
    return result;
}
/**
 * 格式化数字
 * @param {Number} val    要格式化的数字
 * @param {String} format 格式字符串,`#,###.000`:保留三位小数,`#,###`:没有小位数
 * @return {String}       转换后的字符串
 */
export function formatNumber(val, format) {
    /**
     * 保留位<=小数补零位数，则按照保留位进行精度处理，按照小数补零位数做补零操作，按照精度处理完成后，进行适当的补零
     * 保留位> 小数补零位数，则按照保留位进行精度处理，不做补零操作，用户输入多少位小数就显示多少位，按照保留位处理精度即可
     */
    if (val === null || val === undefined) {
        return '';
    }
    if (typeof format !== 'string' || format === '') {
        return val;
    }
    var strVal = val.toString();
    var oPointIndex = strVal.indexOf('.'); // 原始数值的小数点位置
    var oPointNum = oPointIndex === -1 ? 0 : strVal.length - (oPointIndex + 1); // 原始数值的小数位
    var pointIndex = format.indexOf('.'); // 小数点的位置
    var asteriskIndex = format.indexOf('*'); // 星号的位置(补零）
    var notFillZero = format.indexOf('-') !== -1; // 判断是否需要补零
    var comma = format.indexOf(',') > -1; // 逗号的位置
    if (pointIndex !== -1) {
        // 小数位位数
        var pointNum = format.length - (pointIndex + 1);
        var asteriskNum = 0;
        if (asteriskIndex !== -1) {
            // 星号位数
            asteriskNum = format.length - asteriskIndex;
            // 处理保留位(减去补零）
            var decimalPlace = pointNum - asteriskNum;
            val = toFixed(parseFloat(val), decimalPlace);
            // 处理补零
            val = toFixed(parseFloat(val), pointNum);
        }
        else {
            if (notFillZero && oPointNum < pointNum) {
                // ##0.--- 代表的实际数据小于保留位时输出实际数据
                pointNum = oPointNum;
            }
            // 处理保留位
            val = toFixed(parseFloat(val), pointNum);
            if (notFillZero) {
                // 去除补零
                val = parseFloat(val).toString();
            }
        }
    }
    else {
        // 没有小数位
        // @ts-ignore
        val = toFixed(val, 0);
    }
    if (comma) {
        pointIndex = val.indexOf('.');
        var sFixed = '';
        if (pointIndex !== -1) {
            sFixed = val.substr(pointIndex); // 小数位的值
            val = val.substr(0, pointIndex); // 整数位的值
        }
        var arr = val.split('');
        var negative = arr[0] === '-'; // 负数
        if (negative) {
            arr.shift();
        }
        arr.reverse(); // 将数组反转
        val = '';
        for (var j = 0; j < arr.length; j++) {
            // 将整数部分按三位分组显示 #,###
            if (j > 0 && j % 3 === 0) {
                val = ',' + val;
            }
            val = arr[j] + val;
        }
        if (negative) {
            val = '-' + val;
        }
        val += sFixed; // 加上小数位
    }
    return val;
}
/**
 * 创建数值格式文本
 * @private
 * @param {Number} rounding 保留位
 * @param {Number=} decimalPlaces 小数位
 * @param {Boolean=} showThousandths 是否显示千分位
 * @returns {string}
 */
export function createNumberFormat(rounding, decimalPlaces, showThousandths) {
    var format = showThousandths ? '##,##0.' : '####0.';
    var placeHolder = '0';
    if (decimalPlaces === -1) {
        // 小数位为-1时不补零
        placeHolder = '-';
    }
    var i = rounding;
    while (i > 0) {
        format += placeHolder;
        i--;
    }
    if (rounding < decimalPlaces) {
        var j = decimalPlaces - rounding;
        while (j > 0) {
            format += '*';
            j--;
        }
    }
    return format;
}
/**
 * 整数高位补0
 * @private
 * @param  {Number} num    需要补0的整数
 * @param  {Number} length 指定长度
 * @return {String}        补0后的字符串
 */
export function padNumber(num, length) {
    var text = num.toString();
    var len = text.length;
    while (len < length) {
        text = '0' + text;
        len++;
    }
    return text;
}
export function isNumber(v) {
    return !isNaN(Number(v));
}
//# sourceMappingURL=number.js.map