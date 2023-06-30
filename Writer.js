const fs = require('fs') // manipulador de arquivos do node
const util = require('util') // contém varias funcoes uteis do node

class Writer {

    constructor() {
        this.writer = util.promisify(fs.writeFile)
    }

    async Write(filename, data) {
        try {
            await this.writer(filename, data)
            return true
        } catch(err) {
            console.log(err);
            return false
        }
    }   

}

module.exports = Writer