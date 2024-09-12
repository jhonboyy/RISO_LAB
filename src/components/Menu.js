export default function Menu() {

    const actualizarVariables = () => {
      // Aquí defines lo que hace la función
      console.log("Variables actualizadas");
    };
  
    const checkEnter = (event, field) => {
      if (event.key === 'Enter') {
        console.log(`Enter presionado en ${field}`);
      }
    };
  
    return (   
      <div className="menu">
        <div className="item">
          <span style={{ cursor: 'help' }} id="channel">Channels</span>
        </div>
        <div className="item">
          <a style={{ backgroundColor: 'red', cursor: 'pointer' }} id="buttonred">Red</a>
        </div>
        <div className="item">
          <a style={{ backgroundColor: 'green', cursor: 'pointer' }} id="buttongreen">Green</a>
        </div>
        <div className="item">
          <a style={{ backgroundColor: 'blue', cursor: 'pointer' }} id="buttonblue">Blue</a>
        </div>
        <div className="item">
          <span id="patternItem" style={{ cursor: 'help' }}>Pattern</span>
        </div>
        <div className="item">
          <a style={{ cursor: 'pointer' }} id="patternRed">Circle</a>
        </div>
        <div className="item">
          <a style={{ cursor: 'pointer' }} id="patternGreen">Circle</a>
        </div>
        <div className="item">
          <a style={{ cursor: 'pointer' }} id="patternBlue">Circle</a>
        </div>
        <div className="item grid">
          <span id="frecuencyItem" style={{ cursor: 'help' }}>Frecuency</span>
        </div>
        <div className="item grid">
          <input type="text" id="frecuencyRed" value="5" onBlur={actualizarVariables} onKeyDown={(e) => checkEnter(e, 'frecuencyRed')} />
        </div>
        <div className="item grid">
          <input type="text" id="frecuencyGreen" value="5" onBlur={actualizarVariables} onKeyDown={(e) => checkEnter(e, 'frecuencyGreen')} />
        </div>
        <div className="item grid">
          <input type="text" id="frecuencyBlue" value="5" onBlur={actualizarVariables} onKeyDown={(e) => checkEnter(e, 'frecuencyBlue')} />
        </div>
        <div className="item grid">
          <span id="angleItem" style={{ cursor: 'help' }}>Angle</span>
        </div>
        <div className="item grid">
          <input type="text" id="angleRed" value="45" onBlur={actualizarVariables} onKeyDown={(e) => checkEnter(e, 'angleRed')} />
        </div>
        <div className="item grid">
          <input type="text" id="angleGreen" value="45" onBlur={actualizarVariables} onKeyDown={(e) => checkEnter(e, 'angleGreen')} />
        </div>
        <div className="item grid">
          <input type="text" id="angleBlue" value="45" onBlur={actualizarVariables} onKeyDown={(e) => checkEnter(e, 'angleBlue')} />
        </div>
        <div className="item">
          <span id="intensityItem" style={{ cursor: 'help' }}>Intensity</span>
        </div>
        <div className="item">
          <input type="text" id="intensityRed" value="127" onBlur={actualizarVariables} onKeyDown={(e) => checkEnter(e, 'intensityRed')} />
        </div>
        <div className="item">
          <input type="text" id="intensityGreen" value="127" onBlur={actualizarVariables} onKeyDown={(e) => checkEnter(e, 'intensityGreen')} />
        </div>
        <div className="item">
          <input type="text" id="intensityBlue" value="127" onBlur={actualizarVariables} onKeyDown={(e) => checkEnter(e, 'intensityBlue')} />
        </div>
      </div>
    );  
  }