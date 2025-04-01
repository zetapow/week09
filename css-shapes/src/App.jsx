import { useState } from "react";
import "./App.css";
import styles from "./App.module.css";
import Circle from "./components/Circle";
import TopTriangle from "./components/TopTriangle";
import Trapezoid from "./components/Trapezoid";
import LeftTriangle from "./components/LeftTriangle";

function App() {
   const [color, setColor] = useState("green");

   const changeColour = () => {
      const newColour = color === "green" ? "red" : "green";
      setColor(newColour);
      document.documentElement.style.setProperty("--triangle-color", newColour);
   };

   return (
      <>
         Hello
         <TopTriangle />
         <Trapezoid />
         <LeftTriangle />
         <Circle />
         <button onClick={changeColour}>Change Colour</button>
      </>
   );
}

export default App;
