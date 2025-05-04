const fs = require('node:fs');
const path = require('node:path');

// const fileList = fs.readdirSync("E:\\", { withFileTypes: true });

// for (const item of fileList) {
//   const dir = path.resolve(item.parentPath, item.name);
//   const stats = fs.access(dir);
//   console.log(stats);
// }

let testDir = 'E:\\System Volume Information';

// const result = fs.accessSync(testDir, fs.constants.W_OK);

// const result = fs.readdirSync(testDir, { withFileTypes: true });

const result = fs.statSync(testDir);

return result;