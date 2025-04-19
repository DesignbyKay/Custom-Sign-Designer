import { useState } from "react";

function App() {
  const [text, setText] = useState("Welcome");
  const [font, setFont] = useState("serif");
  const [bgColor, setBgColor] = useState("white");
  const [textColor, setTextColor] = useState("black");
  const [shape, setShape] = useState("rectangle");
  const [size, setSize] = useState(18);

  const fonts = ["serif", "sans-serif", "cursive", "monospace"];
  const shapes = ["rectangle", "circle", "arch", "double arch"];
  const bgColors = ["white", "black", "clear", "pink", "blue"];
  const textColors = ["black", "white", "gold", "silver", "custom paint fill"];

  return (
    <div className="flex h-screen font-sans">
      {/* LEFT: Controls */}
      <div className="w-1/3 p-6 border-r bg-gray-100 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Customize Your Sign</h2>

        <div className="mb-4">
          <label className="block font-medium mb-1">Sign Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Font</label>
          <select
            value={font}
            onChange={(e) => setFont(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          >
            {fonts.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Background Color</label>
          <select
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          >
            {bgColors.map((color) => (
              <option key={color}>{color}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Text Color</label>
          <select
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          >
            {textColors.map((color) => (
              <option key={color}>{color}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Shape</label>
          <select
            value={shape}
            onChange={(e) => setShape(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          >
            {shapes.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label className="block font-medium mb-1">Width (inches)</label>
          <input
            type="range"
            min="10"
            max="36"
            value={size}
            onChange={(e) => setSize(parseInt(e.target.value))}
            className="w-full"
          />
          <p>{size}" wide</p>
        </div>
      </div>

      {/* RIGHT: Preview */}
      <div className="w-2/3 flex items-center justify-center bg-white relative">
        <div
          className="flex items-center justify-center border relative"
          style={{
            width: `${size * 10}px`,
            height: `${size * 6}px`,
            backgroundColor: bgColor,
          }}
        >
          <p
            style={{
              color: textColor,
              fontFamily: font,
              fontSize: `${size}px`,
            }}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
