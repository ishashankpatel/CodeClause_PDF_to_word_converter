const { PDFNet } = require('@pdftron/pdfnet-node');
async function main() {
    await PDFNet.addResourceSearchPath('./');
  
    // check if the module is available
    if (!(await PDFNet.StructuredOutputModule.isModuleAvailable())) {
      return;
    }
  
    await PDFNet.Convert.fileToWord('./Offer Letter.pdf', 'output.docx');
  }
  PDFNet.runWithCleanup(main,'demo:1667391635616:7aae322e0300000000088b0dfbb97cf808070aff9b005f393cf80f8279');
  export default main;