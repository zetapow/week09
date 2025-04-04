import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Update() {
   const [book, setBook] = useState({
      title: "",
      description: "",
      price: null,
      cover: "",
   });

   const navigate = useNavigate();
   const location = useLocation();

   console.log(location.pathname.split("/")[2]);
   const bookId = location.pathname.split("/")[2];

   const handleChange = (evt) => {
      setBook((prev) => ({ ...prev, [evt.target.name]: evt.target.value }));
   };

   const handleSubmit = async (evt) => {
      evt.preventDefault();

      try {
         await axios.put("http://localhost:3456/books/" + bookId, book);
         navigate("/");
      } catch (error) {
         console.error(error);
      }
   };

   console.log(book);

   return (
      <form className="form">
         <h1>Update book</h1>
         <input
            type="text"
            name="title"
            onChange={handleChange}
            placeholder="title"
         />
         <input
            type="text"
            name="description"
            placeholder="description"
            onChange={handleChange}
         />
         <input
            type="text"
            name="cover"
            onChange={handleChange}
            placeholder="cover"
         />
         <input
            type="number"
            name="price"
            onChange={handleChange}
            placeholder="price"
         />

         <button className="formButton" onClick={handleSubmit}>
            Update
         </button>
      </form>
   );
}

export default Update;
