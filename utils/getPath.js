const fs = require("fs");
const path = require("path");

module.exports = function(fileName) {
  let targetPath = null;
  const cwd = process.cwd()
  const rootPath = path.parse(cwd).root;
  for (
    let _path = cwd;
    _path !== rootPath;
    _path = path.join(_path, "../")
  ) {
    if (fs.existsSync(path.join(_path, fileName))) {
      targetPath = _path;
      break;
    }
  }

  return targetPath;
};
