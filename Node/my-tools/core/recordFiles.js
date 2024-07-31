import { Sequelize, DataTypes, Op } from 'sequelize';
import traverseDirectory from './traverseDirectory.js';


async function recordFiles(dirList, options) {
  const { seqConfig, tableVersion } = options;

  const sqConfig = Object.assign({
    define: {
      freezeTableName: true,
    }
  }, seqConfig);

  const sequelize = new Sequelize(sqConfig);
  let suffix = "";
  if (tableVersion) {
    suffix += "_" + tableVersion;
  }


  const RfFolder = sequelize.define('RfFolder' + suffix, {
    Id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    FolderName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Path: {
      type: DataTypes.STRING,
    }
  }, {});


  const RfFile = sequelize.define('RfFile' + suffix, {
    Id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    FileName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    FolderName: {
      type: DataTypes.STRING
    },
    FolderPath: {
      type: DataTypes.STRING
    },
    Path: {
      type: DataTypes.STRING
    }
  }, {});

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync({ force: true });
    console.log("All models were synchronized successfully.");


    // const dirList = ["D:\\Codes\\yuchao919\\Odyssey\\Node\\my-tools\\docs"];

    const folderList = [];
    const fileList = [];



    for (const dir of dirList) {
      console.log(`${dir} : ${new Date()} Begin`);
      await traverseDirectory(dir, async function recordFiles({ isDirectory, entry, folderName, folderPath, fullPath }) {
        const name = entry.name;

        if (isDirectory) {
          folderList.push({ FolderName: name, Path: fullPath });
        } else {
          fileList.push({ FileName: name, FolderName: folderName, FolderPath: folderPath, Path: fullPath });
        }
      });
      console.log(`${dir} : ${new Date()} End`);
    }

    await RfFolder.bulkCreate(folderList);
    await RfFile.bulkCreate(fileList);

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export { recordFiles };