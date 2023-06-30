class Processor {

    static Process(data) {
        var rows = data.split('\r\n') // quebra a string em um array com as linhas \n separa pelas quebras de linha
        var arr = []

        rows.forEach(row => {
            const line = row.split(',')
            arr.push(line)
        })

        return arr
    }
}

module.exports = Processor;