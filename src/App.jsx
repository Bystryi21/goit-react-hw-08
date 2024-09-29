import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import { refreshUser } from "./redux/auth/operations";
import HomePage from "./pages/HomePage/HomePage";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { Route, Routes } from "react-router-dom";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFound from "./components/NotFound/NotFound";
import AppBar from "./components/AppBar/AppBar";
import RestrictedRoute from "./RestrictedRoute";
import PrivateRoute from "./PrivateRoute";

function App() {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Please wait, updaiting user info ...</b>
  ) : (
    <Layout>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={<RestrictedRoute component={<RegisterPage />} />}
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
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
