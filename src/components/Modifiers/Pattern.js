// src/components/Pattern.js
export default function Pattern() {
    return (
      <div className="PatternContainer">
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
      </div>
    );
  }