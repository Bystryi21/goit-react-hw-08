import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import Loading from "./components/Loading/Loading";
import Error from "./components/Error/Error";
import { selectLoading, selectError } from "./redux/contactsSlice";

function App() {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && !error && <Loading />}
      {error && !loading && <Error />}
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
