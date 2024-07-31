import fs from "fs/promises";
import path from "path";

export default async function (dirPath, callback) {

  async function traverse(currentPath, folderName) {
    const entries = await fs.readdir(currentPath, { withFileTypes: true });
    if (!folderName) {
      folderName = path.basename(currentPath);
    }

    for (let entry of entries) {
      const fullPath = path.join(currentPath, entry.name);
      const obj = {
        isDirectory: entry.isDirectory(),
        entry: entry,
        folderName: folderName,
        folderPath: currentPath,
        fullPath: fullPath
      };

      const isBreak = await callback(obj);

      if (obj.isDirectory && !isBreak) {
        await traverse(fullPath, entry.name); // Recursively traverse the subdirectory
      }
    }
  }

  await traverse(dirPath);
}