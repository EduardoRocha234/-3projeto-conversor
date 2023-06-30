class Table {

    constructor(arr) {
        this.headers = arr[0] // pega a primeira linha do array que seria o cabeçalho
        arr.shift() // remove a primeira linha do array (cabeçalho)
        this.rows = arr // pega o restante que são as linhas
    }

    get RowsCount() {
        return this.rows.length
    }

    get ColumnsCount() {
        return this.headers.length
    }

}

module.exports = Table