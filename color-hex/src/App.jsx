import { useState } from "react";
import "./css/style.css";

function App() {
  const [color, setColor] = useState("#000000");
  const [opacity, setOpacity] = useState(1);

  function handleColorChange(e) {
    setColor(e.target.value);
  }

  function handleOpacityChange(e) {
    setOpacity(Number(e.target.value));
  }

  function getOpacityPercentage() {
    return Math.round(opacity * 100) + "%";
  }

  function getRGB() {
    return `
        rgb(${parseInt(color.slice(1, 3), 16)}, 
            ${parseInt(color.slice(3, 5), 16)}, 
            ${parseInt(color.slice(5, 7), 16)})`;
  }

  function getCSSCode() {
    return `background-color: ${color}; opacity: ${opacity};`.trim();
  }

  return (
    <div className="App">
      <h1>Color Generator</h1>
      <input type="color" value={color} onChange={handleColorChange} />
      <br />
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={opacity}
        onChange={handleOpacityChange}
      />
      {color && (
        <div
          className="color-box"
          style={{ backgroundColor: color, opacity: opacity }}
        ></div>
      )}
      {color && (
        <div className="color-info">
          <p>Hex: {color}</p>
          <p>RGB: {getRGB()}</p>
          <p>Opacity: {getOpacityPercentage()}</p>
          <pre>
            <code>{getCSSCode()}</code>
          </pre>
        </div>
      )}
    </div>
  );
}

export default App;
