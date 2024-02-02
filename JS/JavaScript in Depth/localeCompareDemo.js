const chineseNames = [
    "张三 (Zhang San)",
    "李四 (Li Si)",
    "王五 (Wang Wu)",
    "赵六 (Zhao Liu)",
    "陈七 (Chen Qi)"
];

chineseNames.sort((a, b) => {
    // Extract the Pinyin part (text in parentheses) and compare them
    const pinyinA = a.match(/\(([^)]+)\)/)[1];
    const pinyinB = b.match(/\(([^)]+)\)/)[1];
    return pinyinA.localeCompare(pinyinB, 'zh');
});
console.log(chineseNames);
//  ['陈七 (Chen Qi)', '李四 (Li Si)', '王五 (Wang Wu)', '张三 (Zhang San)', '赵六 (Zhao Liu)']
console.log([
    "张三 (Zhang San)",
    "李四 (Li Si)",
    "王五 (Wang Wu)",
    "赵六 (Zhao Liu)",
    "陈七 (Chen Qi)"
].sort((a, b) => { return a.localeCompare(b, 'zh'); }));
//  ['陈七 (Chen Qi)', '李四 (Li Si)', '王五 (Wang Wu)', '张三 (Zhang San)', '赵六 (Zhao Liu)']

const string1 = "你好";
const string2 = "再见";

console.log(string1.localeCompare(string2, 'zh')); // Output: -1
console.log(string2.localeCompare(string1, 'zh')); // Output: 1
console.log(string1.localeCompare(string1, 'zh')); // Output: 0