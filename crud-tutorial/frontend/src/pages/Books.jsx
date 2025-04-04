import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Books() {
   const [books, setBooks] = useState([]);

   useEffect(() => {
      const fetchBooks = async () => {
         try {
            const res = await axios.get("http://localhost:3456/books");
            // console.log(res);
            setBooks(res.data);
         } catch (error) {
            console.error(error);
         }
      };
      fetchBooks();
   }, []);

   const handleDelete = async (id) => {
      try {
         await axios.delete("http://localhost:3456/books/" + id);
         window.location.reload();
      } catch (error) {
         console.error(error);
      }
   };

   return (
      <div>
         <h1>Book Store</h1>
         <div className="books">
            {books.map((book) => (
               <div key={book.id} className="book">
                  {book.cover && <img src={book.cover} alt={book.title} />}
                  <h2>{book.title}</h2>
                  <p>{book.description}</p>
                  <span>{book.price}</span>
                  <button
                     className="delete"
                     onClick={() => handleDelete(book.id)}>
                     Delete
                  </button>
                  <button className="update">
                     <Link to={`/update/${book.id}`}>Update</Link>
                  </button>
               </div>
            ))}
         </div>
         <button>
            <Link to="/add">Add New Book</Link>
         </button>
      </div>
   );
}

export default Books;
