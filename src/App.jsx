import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;

// import "./App.css";
// import { useEffect, useState } from "react";
// import ContactList from "./components/ContactList/ContactList";
// import SearchBox from "./components/SearchBox/SearchBox";
// import ContactForm from "./components/ContactForm/ContactForm";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";

// function App() {
//   const contact = useSelector((state) => state.contacts.items);

//   const [filter, setFilter] = useState("");

//   const [user, setUsers] = useState(() => {
//     const savedUsers = JSON.parse(localStorage.getItem("user"));
//     return savedUsers ?? [];
//   });

//   useEffect(() => {
//     localStorage.setItem("user", JSON.stringify(user));
//   }, [user]);

//   const filterUsers = user.filter((value) =>
//     value.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
//   );

//   const addedUser = (newUser) => {
//     setUsers((prevUsers) => [...prevUsers, newUser]);
//   };

//   const deleteUSer = (id) => {
//     setUsers((prevUser) => prevUser.filter((user) => user.id !== id));
//   };

//   return (
//     <div className="container">
//       <h1>Phonebook</h1>
//       <ContactForm onSubmit={addedUser} />
//       <SearchBox value={filter} onFilter={setFilter} />
//       <ContactList values={filterUsers} deleteUser={deleteUSer} />
//     </div>
//   );
// }

// export default App;
