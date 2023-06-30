const fs = require('fs') // manipulador de arquivos do node
const util = require('util') // contém varias funcoes uteis do node

class Reader {

    constructor() {
        this.reader = util.promisify(fs.readFile) // transforma uma função callback simples em uma promisse
    }

    async Read(filePath) {
        try {
            return await this.reader(filePath, 'utf8')
        } catch(err) {
            return undefined
        }
    }
}

module.exports = Reader