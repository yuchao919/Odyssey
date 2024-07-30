const fs = require('fs').promises;
const path = require('path');
const { traverseDirectory } = require('./traverseDirectory.js');
const { constants, writeFile, readdir, rm } = require("node:fs/promises");
const { ignorePatterns } = require("../config/self.js");


module.exports = {
  deleteIgnore: async function (dirList, options) {
    
    const ignorePatterns = Object.assign({
      folder: [],
      file: [],
      regexp: [],
      ext: []
    }, options.ignorePatterns);
    // 正则匹配
    const regExpList = ignorePatterns.regexp.map(x => new RegExp(x, 'i'));
    // 后缀名匹配
    const extPattern = `.*(${ignorePatterns.ext.map(x => "\\" + x).join('|')})$`;
    regExpList.push(new RegExp(extPattern, 'i'));

    // 转成字典类型
    const folderMap = {};
    const fileMap = {};
    ignorePatterns.folder.forEach(x => folderMap[x] = 1);
    ignorePatterns.file.forEach(x => fileMap[x] = 1);


    for (const dir of dirList) {
      await traverseDirectory(dir, async ({ isDirectory, entry, folderName, folderPath, fullPath }) => {
        const name = entry.name;
        let isDelete = regExpList.some(x => x.test(name));
        if (isDirectory) {
          // 文件夹名匹配
          isDelete = isDelete || folderMap[name];
        } else {
          // 文件名匹配
          isDelete = isDelete || fileMap[name];
        }

        if (isDelete) {
          console.log(fullPath);
          rm(fullPath, { recursive: true, force: true });
        }

        return isDelete;
      });
    }
  }
};



async function extTest(params) {
  ".xltd";
  const extList = [
    ".apk",
    ".url",
    ".txt",
    ".xltd"
  ];
  let reg = new RegExp(".*\\.xltd$");
  let extPattern = `.*(${extList.map(x => "\\" + x).join('|')})$`;
  reg = new RegExp(extPattern, 'i');
  const testcase = [
    "asd.mp4.bt.txxtxt",
    "asd.mp4.bt.txt",
    "asd.mp4.bt.XLTD",
  ];

  testcase.forEach(x => {
    const isMatch = reg.test(x);
    console.log(x + "   :  " + isMatch);
  });
};
