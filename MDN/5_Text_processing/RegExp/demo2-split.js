var text = 'Some text\nAnd some more\r\nAnd yet\rThis is the end'; // \r 没换行
var lines = text.split(/\r\n|\r|\n/);
console.log(text);
console.log();
console.log(lines); // logs [ 'Some text', 'And some more', 'And yet', 'This is the end' ]
