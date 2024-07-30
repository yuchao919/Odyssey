const { recordFiles } = require("./core/recordFiles.js");
const { deleteIgnore } = require("./core/deleteIgnore.js");

const config = require("./config/self.js");


const dirList = [
  // "C:\\Programs\\Hentai",
  // "D:\\Self\\Downloads\\迅雷下载",
  // "E:\\Hentai"
  "U:\\FC2PPV"
];
// const dirList = [
//   "U:\\",
//   "V:\\",
//   "W:\\",
//   "X:\\",
//   "Y:\\",
//   "Z:\\"
// ];


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

recordFiles_exe();

// deleteIgnore_exe();