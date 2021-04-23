import "./App.css";
import { useState } from "react";
const Colors = [];
for (let red = 0; red < 256; red += 8) {
  for (let green = 0; green < 256; green += 8) {
    for (let blue = 0; blue < 256; blue += 8) {
      Colors.push(`${red},${green},${blue}`);
    }
  }
}

function App() {
  const [show, setShow] = useState(false);
  const [zoom, setZoom]=useState(false)
  return (
    <>
      <div className="container">
        <h1>EGH RGB Colors</h1>
        {zoom && (

        <button className="button" onClick={() => setShow(!show)}>
          SHOW RGB VALUES
        </button>
        )}
      </div>

      <div className="container-info" style={{ marginTop: "10rem" }}>
        <h2>RGB Color Model</h2>
        <p>
          The RGB color model is an additive color model in which red, green, and blue light are
          added together in various ways to reproduce a broad array of colors. The name of the model
          comes from the initials of the three additive primary colors, red, green, and blue. <br />{" "}
          The main purpose of the RGB color model is for the sensing, representation, and display of
          images in electronic systems, such as televisions and computers, though it has also been
          used in conventional photography.{" "}
        </p>
        <h2>Numeric representations</h2>
        <p>
          A color in the RGB color model is described by indicating how much of each of the red,
          green, and blue is included. The color is expressed as an RGB triplet (r,g,b), each
          component of which can vary from zero to a defined maximum value. If all the components
          are at zero the result is black; if all are at maximum, the result is the brightest
          representable white.{" "}
        </p>
        <h2>Representation of colours in electronic devices</h2>
        <p>
          In devices, colors are represented based on the number of bits used in a single pixel, so
          in each pixel there can be a different number of bits. As the bit per pixel increases, the
          resulting image is richer in color.

        </p>
        <h4>This is the representation of a 15-bit RGB: {Colors.length} colors
         </h4>
         <button className="zoom" onClick={()=>setZoom(!zoom)}>
           Zoom IN/OUT</button>
      </div>
     {!zoom && (

      <div className="container-mini-palette">
        {Colors.map((color, i) => (
          <div className="palette-mini" key={i} style={{ background: `rgb(${color})` }}>
          </div>
        ))}
      </div> 
     )}

      {zoom && (

       <div className="container-palette">
        {Colors.map((color, i) => (
          <div className="palette" key={i} style={{ background: `rgb(${color})` }}>
            {show && (
              <p className="text">{color}</p>

            )}
          </div>
        ))}
      </div> 
      )}
    </>
  );
}

export default App;
