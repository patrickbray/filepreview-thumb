var filepreview = require('filepreview');

const inputFile = '/opt/thumb-generator/sample.pdf';
const outputFile = './myPdf_preview.gif';

filepreview.generate(inputFile, outputFile, function(error) {
  if (error) {
    return console.log(error);
  }
  console.log('File preview is available at ' + outputFile);
});
