import { useState } from "react";
import Shapes from "./shapes"; // Import the updated Shapes component

function App() {
  const [bgColor, setBgColor] = useState("#c67da2");
  const [bgGradient, setBgGradient] = useState({
    start: "#ec85c1",
    end: "#bd5e8d",
  });
  const [selectedShape, setSelectedShape] = useState("circle");
  const [lineColor, setLineColor] = useState("#ffffff");
  const [shapeDistance, setShapeDistance] = useState(20);
  const [canvasHeight] = useState(700); // Set canvas height
  const [backgroundType, setBackgroundType] = useState("solid"); // Solid or gradient background

  return (
    <div className="app" style={{ textAlign: "center", padding: "20px" }}>
      <h1>Virtual Art Creator</h1>

      {/* Background Type Selector */}
      <div>
        <label>Background Type: </label>
        <select value={backgroundType} onChange={(e) => setBackgroundType(e.target.value)}>
          <option value="solid">Solid</option>
          <option value="gradient">Gradient</option>
        </select>
      </div>

      {/* Background Color Picker */}
      <label>Choose Background Color: </label>
      <input
        type="color"
        value={bgColor}
        onChange={(e) => setBgColor(e.target.value)}
      />

      {/* Gradient Background Picker */}
      {backgroundType === "gradient" && (
        <div>
          <label>Start Gradient Color: </label>
          <input
            type="color"
            value={bgGradient.start}
            onChange={(e) => setBgGradient({ ...bgGradient, start: e.target.value })}
          />
          <label>End Gradient Color: </label>
          <input
            type="color"
            value={bgGradient.end}
            onChange={(e) => setBgGradient({ ...bgGradient, end: e.target.value })}
          />
        </div>
      )}

      {/* Shape Line Color Picker */}
      <label>Shape Border Color: </label>
      <input
        type="color"
        value={lineColor}
        onChange={(e) => setLineColor(e.target.value)}
      />

      {/* Shape Picker */}
      <div>
        <label>Select Shape: </label>
        <select value={selectedShape} onChange={(e) => setSelectedShape(e.target.value)}>
          <option value="circle">Circle</option>
          <option value="oval">Oval</option>
          <option value="star">Star</option>
        </select>
      </div>

      <div
        className="canvas"
        style={{
          width: "50%",
          height: `${canvasHeight}px`,
          background: backgroundType === "gradient"
            ? `linear-gradient(${bgGradient.start}, ${bgGradient.end})`
            : bgColor,
          margin: "20px auto",
          border: "1px solid black",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Shapes
          canvasHeight={canvasHeight}
          selectedShape={selectedShape}
          lineColor={lineColor}
          shapeDistance={shapeDistance}
        />
      </div>
    </div>
  );
}

export default App;
