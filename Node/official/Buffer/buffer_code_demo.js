let defaultBuf = Buffer.from('a'); // utf8
// a -> 97(ASCII)=utf8
// a -> 01100001 (ASCII)
// 011000 010000 000000 000000  分割成base64 并且4个字节一组，后面全部用0补齐
//   24     16     =       =    对应base64的十进制编码
//   Y      Q      =       =    输出YQ==(base64)defaultBuf.toString('base64')

let base64Buf = Buffer.from('YQ==', 'base64');
console.log(base64Buf.toString());
