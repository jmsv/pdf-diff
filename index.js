const PDFParser = require('pdf2json')
const jsonDiff = require('json-diff')

const getPdf = filename => {
  const pdfParser = new PDFParser()

  return new Promise((resolve, reject) => {
    pdfParser.on('pdfParser_dataError', errData => {
      const error = errData.parserError
      console.log('pdf-diff error :', errData)
      return reject(error)
    })

    pdfParser.on('pdfParser_dataReady', pdfData => {
      return resolve(pdfData)
    })

    pdfParser.loadPDF(filename)
  })
}

const diff = (pdf1, pdf2) => {
  return Promise.all([getPdf(pdf1), getPdf(pdf2)]).then(files => {
    return jsonDiff.diff(files[0].formImage.Pages, files[1].formImage.Pages)
  })
}

module.exports = diff
