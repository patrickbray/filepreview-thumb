var filepreview = require('filepreview');

const inputUrl = 'https://s3.amazonaws.com/raken-dev/2018/02/31566d4d-fd5d-4af4-9194-856492d2baea';
const inputFile = '/opt/thumb-generator/sample.pdf';
const outputFile = './myPdf_preview.gif';

filepreview.generate(inputFile, outputFile, function(error) {
  if (error) {
    return console.log(error);
  }
  console.log('File preview is available at ' + outputFile);
});
