import { useState } from "react";
import "./App.css";
import DOMpurify from "dompurify";

function App() {
   const [data, setData] = useState("<h2>Content will appear here</h2>");

   // these functions need to fetch from your backend using the right endpoint and setData with the response data
   function fetchText() {
      fetch("http://localhost:4000/text")
         .then((res) => res.json())
         .then((resData) => {
            console.log(resData);
            setData(resData.content);
         });
   }

   function fetchImage() {
      fetch("http://localhost:4000/image")
         .then((res) => res.json())
         .then((resData) => {
            console.log(resData);
            setData(resData.content);
         });
   }

   function fetchTextAndImage() {
      fetch("http://localhost:4000/text-and-image")
         .then((res) => res.json())
         .then((resData) => {
            console.log(resData);
            setData(resData.content);
         });
   }

   const content = { __html: DOMpurify.sanitize(data) };
   return (
      <>
         <h1>Click buttons to see content</h1>
         <button onClick={fetchText}>Click me for text</button>
         <button onClick={fetchImage}>Click me for an image</button>
         <button onClick={fetchTextAndImage}>
            Click me for text and an image in a flexbox
         </button>
         <div dangerouslySetInnerHTML={content}></div>
      </>
   );
}

export default App;
