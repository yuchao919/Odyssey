import { recordFiles } from "./core/recordFiles.js";
import { deleteIgnore } from "./core/deleteIgnore.js";
import { moveSingleToFolder } from "./core/mover.js";;

import config from "./config/self.js";


const dirList = [
  // "C:\\Programs\\Hentai",
  // "D:\\Self\\Downloads\\迅雷下载",
  // "E:\\Hentai"
  // "U:\\FC2PPV"
];
// const dirList = [
//   "U:\\",
//   "V:\\",
//   "W:\\",
//   "X:\\",
//   "Y:\\",
//   "Z:\\"
// ];

dirList.push("U:\\FC2PPV\\");

debugger;

async function recordFiles_exe() {
  const tableVersion = Date.now();
  console.log("tableVersion:" + tableVersion);
  const options = {
    seqConfig: config.seqConfig,
    tableVersion: tableVersion
  };

  await recordFiles(dirList, options);

  console.log("\n\n\nDone\n\n\n");
};


async function deleteIgnore_exe() {
  const options = {
    ignorePatterns: config.ignorePatterns
  };

  await deleteIgnore(dirList, options);

  console.log("\n\n\nDone\n\n\n");
};

async function moveSingleToFolder_exe() {

  await moveSingleToFolder(dirList);

  console.log("\n\n\nDone\n\n\n");
}

// recordFiles_exe();

// deleteIgnore_exe();

moveSingleToFolder_exe();