import React, { useState } from 'react';

export default function FrecuencyAngleIntensity() {
  // Estado para los valores de frecuencia, ángulo e intensidad
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
      <div className='item grid'>
        <span id='frecuencyItem' style={{ cursor: 'help' }}>Frecuency</span>
      </div>
      <div className='item grid'>
        <input 
          type='text' 
          id='frecuencyRed' 
          value={frecuencyRed} 
          onBlur={() => actualizarVariables()} 
          onChange={(e) => setFrecuencyRed(e.target.value)} 
          onKeyDown={(event) => checkEnter(event, 'frecuencyRed')} 
        />
      </div>
      <div className='item grid'>
        <input 
          type='text' 
          id='frecuencyGreen' 
          value={frecuencyGreen} 
          onBlur={() => actualizarVariables()} 
          onChange={(e) => setFrecuencyGreen(e.target.value)} 
          onKeyDown={(event) => checkEnter(event, 'frecuencyGreen')} 
        />
      </div>
      <div className='item grid'>
        <input 
          type='text' 
          id='frecuencyBlue' 
          value={frecuencyBlue} 
          onBlur={() => actualizarVariables()} 
          onChange={(e) => setFrecuencyBlue(e.target.value)} 
          onKeyDown={(event) => checkEnter(event, 'frecuencyBlue')} 
        />
      </div>
      <div className='item grid'>
        <span id='angleItem' style={{ cursor: 'help' }}>Angle</span>
      </div>
      <div className='item grid'>
        <input 
          type='text' 
          id='angleRed' 
          value={angleRed} 
          onBlur={() => actualizarVariables()} 
          onChange={(e) => setAngleRed(e.target.value)} 
          onKeyDown={(event) => checkEnter(event, 'angleRed')} 
        />
      </div>
      <div className='item grid'>
        <input 
          type='text' 
          id='angleGreen' 
          value={angleGreen} 
          onBlur={() => actualizarVariables()} 
          onChange={(e) => setAngleGreen(e.target.value)} 
          onKeyDown={(event) => checkEnter(event, 'angleGreen')} 
        />
      </div>
      <div className='item grid'>
        <input 
          type='text' 
          id='angleBlue' 
          value={angleBlue} 
          onBlur={() => actualizarVariables()} 
          onChange={(e) => setAngleBlue(e.target.value)} 
          onKeyDown={(event) => checkEnter(event, 'angleBlue')} 
        />
      </div>
      <div className='item grid'>
        <span id='intensityItem' style={{ cursor: 'help' }}>Intensity</span>
      </div>
      <div className='item grid'>
        <input 
          type='text' 
          id='intensityRed' 
          value={intensityRed} 
          onBlur={() => actualizarVariables()} 
          onChange={(e) => setIntensityRed(e.target.value)} 
          onKeyDown={(event) => checkEnter(event, 'intensityRed')} 
        />
      </div>
      <div className='item grid'>
        <input 
          type='text' 
          id='intensityGreen' 
          value={intensityGreen} 
          onBlur={() => actualizarVariables()} 
          onChange={(e) => setIntensityGreen(e.target.value)} 
          onKeyDown={(event) => checkEnter(event, 'intensityGreen')} 
        />
      </div>
      <div className='item grid'>
        <input 
          type='text' 
          id='intensityBlue' 
          value={intensityBlue} 
          onBlur={() => actualizarVariables()} 
          onChange={(e) => setIntensityBlue(e.target.value)} 
          onKeyDown={(event) => checkEnter(event, 'intensityBlue')} 
        />
      </div>
    </div>
  );
}