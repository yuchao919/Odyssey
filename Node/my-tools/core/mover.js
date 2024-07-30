const fs = require('fs');
const readline = require('readline');
const path = require('path');
const parseTorrent = require('parse-torrent');

/**
 * 获取种子文件的信息，解析失败返回null
 * @param {*} filePath
 */
function getTorrent(filePath) {
  try {
    return parseTorrent(fs.readFileSync(filePath));
  } catch (error) {
    return;
  }
}

/**
 * 如果种子只含有一个没有文件夹的文件，则返回该文件名，否则返回null
 * @param {*} torrent
 */
function getSingleFileName(torrent) {
  if (!torrent || !Array.isArray(torrent.files) || torrent.files.length !== 1) {
    return;
  }

  var file = torrent.files[0];
  // file.path === file.name ? file.name : null
  return torrent.files[0].name;
}

/**
 * 检查文件是否存在于当前目录中。
 * @param {*} filePath
 */
function isExists(filePath) {
  try {
    fs.accessSync(filePath, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

/*
 1. 检测种子是不是只有一个文件，如果不是则跳过
 2. 检测这个文件的当前文件夹是否与文件名相等，如果是则跳过
 3. 判断本目录下是否存在这个文件，如果不存在则跳过
 4. 判断这个文件所在目录是不是自己，如果是的就跳过
*/
function moveTogether(dir) {
  const curDirectory = path.resolve(dir);
  const curFolderName = curDirectory.match(/([^\\]+)$/)[0];
  const files = fs.readdirSync(curDirectory, { withFileTypes: true });
  for (const f of files) {
    if (!f.isFile() || path.extname(f.name) !== '.torrent') {
      continue;
    }
    // 种子的绝对路径
    const torrentPath = path.join(curDirectory, f.name);
    // 获取种子解析对象
    const torrent = getTorrent(torrentPath);
    // 解析失败或者解析出来的种子文件不止一个就跳过
    if (!torrent || !torrent.files || torrent.files.length != 1) {
      continue;
    }

    // 获取到文件名
    const fileName = torrent.files[0].name;
    // 对应视频文件的绝对路径
    const filePath = path.join(curDirectory, fileName);
    // 获取不带扩展名的文件夹名
    const fileParse = path.parse(fileName);
    const folderName = fileParse.name;
    // 如果想要创建的文件夹名称和当前名称相等则跳过
    if (curFolderName === folderName) {
      continue;
    }
    // 目标文件夹
    const destFolderPath = path.join(curDirectory, folderName);

    if (!isExists(destFolderPath)) {
      fs.mkdirSync(destFolderPath, { recursive: true });
    }
    // 移动文件和种子
    fs.renameSync(torrentPath, path.resolve(destFolderPath, f.name));
    if (isExists(filePath)) {
      fs.renameSync(filePath, path.resolve(destFolderPath, fileName));
    }

    console.log(folderName);
  }
}

(function () {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('请输入要规整的文件夹路径：', (destFolderPath) => {
    moveTogether(destFolderPath);
    console.log('Done');
  });
})();
