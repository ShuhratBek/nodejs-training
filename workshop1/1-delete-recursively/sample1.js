const fs = require('fs');

const deleteFolderRecursive = (path) => {
  let files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);

    files.forEach((file, index) => {
      let curPath = path + "/" + file;
      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
};

deleteFolderRecursive('files');
