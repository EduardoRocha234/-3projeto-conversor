// lib para geralção de pdf
const pdf = require('html-pdf')

class PDFWriter {
    static WritePDF(filename, html) {
        // gera o pdf com base no html passado como parametro
        pdf.create(html, {}).toFile(filename, (err => console.log(err)))
    }
}

module.exports = PDFWriter