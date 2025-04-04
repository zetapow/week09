import { useState } from "react";
import "./App.css";
import Add from "./pages/Add";
import Books from "./pages/Books";
import Update from "./pages/Update";
import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
   const [count, setCount] = useState(0);

   return (
      <div className="App">
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Books />} />
               <Route path="/add" element={<Add />} />
               <Route path="/update/:id" element={<Update />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
