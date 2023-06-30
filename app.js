// classes
const Reader = require('./Reader')
const Processor = require('./Processor')
const Writer = require('./Writer')
const Table = require('./Table')
const HtmlParser = require('./HtmlParser')
const PDFWriter = require('./PDFWriter')

const read = new Reader()
const writer = new Writer()

async function main() {
    // ler o arquivo excel
    const data = await read.Read('./exemple.csv') 
    // preocesso os dados (transforma em arrays)
    const dataProcess = Processor.Process(data) 
    // cria a tabela com header e rows
    const users = new Table(dataProcess)
    // cria o html com os dados
    const tableHtml = await HtmlParser.Parse(users) 
    // gera o arquivo html
    writer.Write(Date.now() + '.html', tableHtml) 
    // gera o arquivo pdf
    PDFWriter.WritePDF(Date.now() + '.pdf', tableHtml)
}

main()