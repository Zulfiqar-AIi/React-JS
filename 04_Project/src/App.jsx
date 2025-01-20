import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  // State to keep track of the background color of the page
  const [bgColor, setBgColor] = useState("white");

  // Array of colors and their names
  const colors = [
    { name: "Red", value: "red" },
    { name: "Blue", value: "blue" },
    { name: "Green", value: "green" },
    { name: "Yellow", value: "yellow" },
    { name: "Orange", value: "orange" },
    { name: "Purple", value: "purple" },
    { name: "Pink", value: "pink" },
    { name: "Cyan", value: "cyan" },
  ];

  // Function to handle changing the background color
  const handleColorChange = (color) => {
    setBgColor(color);
  };

  return (
    <div
      style={{
        backgroundColor: bgColor,
        height: "100vh",
        margin: "0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        {colors.map((color) => (
          <button
            key={color.value}
            onClick={() => handleColorChange(color.value)}
            style={{
              backgroundColor: color.value,
              color: "white",
              border: "none",
              padding: "10px 20px",
              margin: "0 5px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {color.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;