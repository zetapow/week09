import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Add() {
   const [book, setBook] = useState({
      title: "",
      description: "",
      price: null,
      cover: "",
   });

   const navigate = useNavigate();

   const handleChange = (evt) => {
      setBook((prev) => ({ ...prev, [evt.target.name]: evt.target.value }));
   };

   const handleSubmit = async (evt) => {
      evt.preventDefault();

      try {
         await axios.post("http://localhost:3456/books", book);
         navigate("/");
      } catch (error) {
         console.error(error);
      }
   };

   console.log(book);

   return (
      <form className="form">
         <h1>Add new book</h1>
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

         <button onClick={handleSubmit}>Add Book</button>
      </form>
   );
}

export default Add;
