import "../styles/Generator.css";
import html2pdf from 'html2pdf.js';

function capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function Generator({ formData }) {
  const handleGeneratePDF = (e) => {
    e.preventDefault();
    const content = document.getElementById('pdfContent');
    const pdfOptions = {
      margin: 10,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    html2pdf().from(content).set(pdfOptions).save();
  };

  return (
    <div className="generated" id="pdfContent">
      {Object.entries(formData).map(([sectionKey, sectionValue]) => (
        <div className="sectionKey" key={sectionKey}>
          <h2 style={{textAlign: 'center'}}>{capitalize(sectionKey)}</h2>
          <div className="subKeyValues">
          {Object.entries(sectionValue).map(([subKey, subValue]) => (
            <div className="subKey" key={subKey}>
              <h3>{subKey}:</h3>
              <p>{subValue}</p>
            </div>
          ))}
        </div>
        </div>
      ))}
       <button onClick={handleGeneratePDF}>Export as PDF</button>
    </div>
   );
}

export default Generator;
