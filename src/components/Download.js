import { useState } from 'react';

export default function Download() {
  const [isCoverVisible, setCoverVisible] = useState(true);  // Controla la visibilidad del botón "Download"

  // Esta función alterna la visibilidad entre el botón Download y los botones de PDF/JPG
  function handleDownloadClick() {
    setCoverVisible(false);  // Oculta el botón "Download"
  }

  function handleFileDownload() {
    setCoverVisible(true);  // Vuelve a mostrar el botón "Download"
  }

  return (
    <section className="download-section">
      <button 
        onClick={handleDownloadClick} 
        style={{ visibility: isCoverVisible ? 'visible' : 'hidden' }}
        id='downloadCOVERButton'
      >
        Download
      </button>
      
      <button 
        onClick={handleFileDownload} 
        style={{ visibility: isCoverVisible ? 'hidden' : 'visible' }}
        id='downloadPDFButton'
      >
        PDF (printing)
      </button>
      
      <button 
        onClick={handleFileDownload} 
        style={{ visibility: isCoverVisible ? 'hidden' : 'visible' }}
        id='downloadJPGButton'
      >
        JPG (model)
      </button>
    </section>
  );
}
