import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filters = useSelector((state) => state.filters.name);

  const allUsersWithFiltred =
    contacts &&
    contacts.filter((value) =>
      value.name.toLocaleLowerCase().includes(filters.toLocaleLowerCase())
    );

  return (
    <ul className={css.ul}>
      {allUsersWithFiltred.map((item) => (
        <li className={css.li} key={item.id}>
          <Contact id={item.id} name={item.name} number={item.number} />
        </li>
      ))}
    </ul>
  );
}

// import css from "./ContactList.module.css";
// import Contact from "../Contact/Contact";
// export default function ContactList({ values, deleteUser }) {
//   return (
//     <ul className={css.ul}>
//       {values.map((value) => {
//         return (
//           <li className={css.li} key={value.id}>
//             <Contact value={value} deleteUser={deleteUser} />
//           </li>
//         );
//       })}
//     </ul>
//   );
// }
