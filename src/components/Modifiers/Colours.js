// src/components/Colours.js
export default function Colours() {
    return (
      <div className="ColursContainer">
         <div className="item">
          <span id="patternItem" style={{ cursor: 'help' }}>Colours</span>
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
      </div>
    );
  }