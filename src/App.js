import "./App.css";
import {useState} from 'react'
const Colors = [];
for (let red = 0; red < 256; red+=8) {
  for (let green = 0; green < 256; green+=8) {
      for (let blue = 0; blue < 256; blue+=8) {
        Colors.push(`${red},${green},${blue}`)
      }
  }
}

function App() {
  const [show,setShow]=useState(false)
  return (
    <>
    <div className="container">
      <h1>EGH Color Palette</h1>
      <button className="button" onClick={()=>setShow(!show)}>SHOW RG VALUES</button>

    </div>
      <div className="container-palette">
        {Colors.map((color, i) => (
          <div className="palette" key={i} style={{ background: `rgb(${color})` }}>
            {show && (
              <p className="text">{color}</p>

            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
