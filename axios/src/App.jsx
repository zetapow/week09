import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
   const [users, setUsers] = useState([]);

   useEffect(() => {
      axios
         .get("https://reqres.in/api/users")
         .then((result) => {
            setUsers(result.data.data);
            console.log(result.data);
         })
         .catch((error) => console.error(error));
   }, []);

   return (
      <div className="App">
         {users.map((user) => (
            <div key={user.id}>
               <img src={user.avatar} alt={user.first_name} />
               <h3>
                  {user.first_name} {user.last_name}
               </h3>
            </div>
         ))}
      </div>
   );
}

export default App;
