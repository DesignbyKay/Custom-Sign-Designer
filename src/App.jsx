import { useState } from 'react';

function App() {
  const [text, setText] = useState("Welcome");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Custom Sign Designer</h1>

      <div style={{ marginBottom: "1rem" }}>
        <label>Sign Text: </label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ padding: "0.5rem", fontSize: "1rem", width: "300px" }}
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>Background Color: </label>
        <input
          type="color"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>Text Color: </label>
        <input
          type="color"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
        />
      </div>

      <div
        style={{
          marginTop: "2rem",
          padding: "2rem",
          backgroundColor: bgColor,
          borderRadius: "12px",
          fontSize: "2.5rem",
          color: textColor,
          textAlign: "center",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid #ccc",
        }}
      >
        {text}
      </div>
    </div>
  );
}

export default App;
