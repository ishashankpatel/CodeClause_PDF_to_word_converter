import React from 'react';
import { useState } from 'react';
import './App.css';
import axios from 'axios';
import iconn from './w.png';

function App() {
  
  const [fil, setfil] = useState('');
  const data = new FormData();
  const[warning,setwarning]=useState('');
  const options = {
    method: 'POST',
    url: 'https://pdf4me.p.rapidapi.com/RapidApi/ConvertPdfToWord',
    params: {quality: 'high'},
    headers: {
      'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
      'Accept-Encoding': 'gzip',
      Accept: '*/*',
      'X-RapidAPI-Key': 'fe5f4ce388mshf7a4f05f17972f3p144c49jsnbf7e62bc4e06',
      'X-RapidAPI-Host': 'pdf4me.p.rapidapi.com'
    },
    data: data
  };
  /**
   * This sample illustrates how to export a PDF file to a Word (DOCX) file
   * <p>
   * Refer to README.md for instructions on how to run the samples.
   */
  
   var blob = new Blob([fil], { type: "application/docx" });
   data.append("File",blob,fil);

async function cnvt(){

 
  console.log(data)
await axios.request(options).then(function (response) {
    console.log(response.data);
    setwarning("API limit exceeds, get txt of pdf")
  }).catch(function (error) {
    console.error(error);
    setwarning("API limit exceeds, get txt of pdf")
  });
}


// PDFNet.runWithCleanup(main, '')
  return (
    <div className="App">
      <div className='headd'>
        <img src={iconn} className='imgg' alt='logo' />
      
      <h1>PDF to WORD</h1></div>
      <div className='cont'>
        <div className='contt'>
        {/* <form action="https://v2.convertapi.com/convert/pdf/to/txt?Secret=tA67ZfcNPgO4Iukp&download=attachment" method="post" enctype="multipart/form-data">
       <input className='inputt' type={"file"} name="File" accept='application/pdf' value={fil} onChange={e=> setfil(e.target.value) } />
      <input type={"submit"} onClick={cnvt} className='btn' value={"convert file"} />
      </form> */}

      <form action="https://v2.convertapi.com/convert/pdf/to/txt?Secret=mN63yftP9pQOxOF4&download=attachment" method="post" enctype="multipart/form-data">
            <input type="file" name="File" className='inputt' accept='application/pdf' value={fil} onChange={e=>setfil(e.target.value)} />
            <input type="submit" value="Convert file" onClick={cnvt} className='btn' />
        </form>



      </div>
     <h4 className='warn'>{warning}</h4>
     </div>
      
       {/* <body>
        <form action="https://v2.convertapi.com/convert/pdf/to/txt?Secret=tA67ZfcNPgO4Iukp&download=attachment" method="post" enctype="multipart/form-data">
            <input type="file" name="File" />
            <input type="submit" value="Convert file"/>
        </form>
    </body> */}</div>
    
  );
}

export default App;
