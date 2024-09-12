import { useState } from 'react';

// src/components/FrecuencyAngleIntensity.js
export default function FrecuencyAngleIntensity({ actualizarVariables, checkEnter }) {
  const [frecuencyRed, setFrecuencyRed] = useState(5);
  const [frecuencyGreen, setFrecuencyGreen] = useState(5);
  const [frecuencyBlue, setFrecuencyBlue] = useState(5);
  const [angleRed, setAngleRed] = useState(45);
  const [angleGreen, setAngleGreen] = useState(45);
  const [angleBlue, setAngleBlue] = useState(45);
  const [intensityRed, setIntensityRed] = useState(127);
  const [intensityGreen, setIntensityGreen] = useState(127);
  const [intensityBlue, setIntensityBlue] = useState(127);

  return (
    <div className='ValuesContainer'>
      <div className="item grid">
        <span id="frecuencyItem" style={{ cursor: 'help' }}>Frecuency</span>
      </div>
      <div className="item grid">
        <input
          type="text"
          value={frecuencyRed}
          onChange={(e) => setFrecuencyRed(e.target.value)}
          onBlur={actualizarVariables}
          onKeyDown={(e) => checkEnter(e, 'frecuencyRed')}
        />
      </div>
      <div className="item grid">
        <input
          type="text"
          value={frecuencyGreen}
          onChange={(e) => setFrecuencyGreen(e.target.value)}
          onBlur={actualizarVariables}
          onKeyDown={(e) => checkEnter(e, 'frecuencyGreen')}
        />
      </div>
      <div className="item grid">
        <input
          type="text"
          value={frecuencyBlue}
          onChange={(e) => setFrecuencyBlue(e.target.value)}
          onBlur={actualizarVariables}
          onKeyDown={(e) => checkEnter(e, 'frecuencyBlue')}
        />
      </div>
      <div className="item grid">
        <span id="angleItem" style={{ cursor: 'help' }}>Angle</span>
      </div>
      <div className="item grid">
        <input
          type="text"
          value={angleRed}
          onChange={(e) => setAngleRed(e.target.value)}
          onBlur={actualizarVariables}
          onKeyDown={(e) => checkEnter(e, 'angleRed')}
        />
      </div>
      <div className="item grid">
        <input
          type="text"
          value={angleGreen}
          onChange={(e) => setAngleGreen(e.target.value)}
          onBlur={actualizarVariables}
          onKeyDown={(e) => checkEnter(e, 'angleGreen')}
        />
      </div>
      <div className="item grid">
        <input
          type="text"
          value={angleBlue}
          onChange={(e) => setAngleBlue(e.target.value)}
          onBlur={actualizarVariables}
          onKeyDown={(e) => checkEnter(e, 'angleBlue')}
        />
      </div>
      <div className="item grid">
        <span id="intensityItem" style={{ cursor: 'help' }}>Intensity</span>
      </div>
      <div className="item grid">
        <input
          type="text"
          value={intensityRed}
          onChange={(e) => setIntensityRed(e.target.value)}
          onBlur={actualizarVariables}
          onKeyDown={(e) => checkEnter(e, 'intensityRed')}
        />
      </div>
      <div className="item grid">
        <input
          type="text"
          value={intensityGreen}
          onChange={(e) => setIntensityGreen(e.target.value)}
          onBlur={actualizarVariables}
          onKeyDown={(e) => checkEnter(e, 'intensityGreen')}
        />
      </div>
      <div className="item grid">
        <input
          type="text"
          value={intensityBlue}
          onChange={(e) => setIntensityBlue(e.target.value)}
          onBlur={actualizarVariables}
          onKeyDown={(e) => checkEnter(e, 'intensityBlue')}
        />
      </div>
    </div>
  );
}