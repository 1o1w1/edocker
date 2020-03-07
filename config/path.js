
const getPath = require('../utils/getPath')



function getDockerFile() {
    
  return   getPath('Dockerfile')


}

module.exports = {
    getDockerFile
}