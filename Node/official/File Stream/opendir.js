const fs = require('fs/promises');

async function print(path) {
  const dir = await fs.opendir(path);
  for await (const dirent of dir) {
    console.log(dirent.name);
  }
}
// /c/Users/yuc05/TestFile/
print('C:\\Users\\yuc05\\Pictures\\TestFile\\').catch(console.error);
