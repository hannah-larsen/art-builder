import React from "react";

function Shapes({ canvasHeight, selectedShape, lineColor, shapeDistance }) {
  const canvasWidth = 400; // Set canvas width
  const numShapes = 10; // Increase the number of shapes for a more noticeable effect
  const maxSize = canvasWidth * 0.8;
  const minSize = 30;

  const shapes = Array.from({ length: numShapes }, (_, index) => {
    // Randomize size within a range, getting larger as the shapes move outward
    const randomSize = Math.random() * (maxSize - minSize) + minSize + index * 15;
    // Randomize the distance between shapes, with a slight random offset
    const randomDistance = shapeDistance + Math.random() * 0.8 - 0.2; // Slight random gap
    const randomOffsetX = Math.random() * 10 - 5; // Slight horizontal offset
    const randomOffsetY = Math.random() * 10 - 5; // Slight vertical offset
    return { size: randomSize, distance: randomDistance, offsetX: randomOffsetX, offsetY: randomOffsetY };
  });

  const renderShape = (shape, index) => {
    const size = shape.size;
    const distance = shape.distance;

    const borderStyle = "0.5px"; // Constant border size for all shapes

    switch (selectedShape) {
      case "circle":
        return (
          <div
            key={index}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: "50%",
              border: `${borderStyle} solid ${lineColor}`,
              background: "transparent",
              position: "absolute",
              left: `calc(50% - ${size / 2}px + ${distance + shape.offsetX}px)`,
              top: `calc(50% - ${size / 2}px + ${distance + shape.offsetY}px)`,
              overflow: "hidden",
            }}
          ></div>
        );
      case "oval":
        return (
          <div
            key={index}
            style={{
              width: `${size * 1.5}px`,
              height: `${size}px`,
              borderRadius: "50%",
              border: `${borderStyle} solid ${lineColor}`,
              background: "transparent",
              position: "absolute",
              left: `calc(50% - ${size * 0.75}px + ${distance + shape.offsetX}px)`,
              top: `calc(50% - ${size / 2}px + ${distance + shape.offsetY}px)`,
              overflow: "hidden",
            }}
          ></div>
        );
      case "star":
        return (
          <svg
            key={index}
            viewBox="0 0 100 100"
            width={size}
            height={size}
            style={{
              position: "absolute",
              left: `calc(50% - ${size / 2}px + ${distance + shape.offsetX}px)`,
              top: `calc(50% - ${size / 2}px + ${distance + shape.offsetY}px)`,
            }}
          >
            <polygon
              points="50,5 61,39 98,39 67,59 78,95 50,75 22,95 33,59 2,39 39,39"
              fill="transparent"
              stroke={lineColor}
              strokeWidth={borderStyle}
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {shapes.map((shape, index) => renderShape(shape, index))}
    </>
  );
}

export default Shapes;
