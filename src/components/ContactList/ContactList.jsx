import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
export default function ContactList({ values, deleteUser }) {
  return (
    <ul className={css.ul}>
      {values.map((value) => {
        return (
          <li className={css.li} key={value.id}>
            <Contact value={value} deleteUser={deleteUser} />
          </li>
        );
      })}
    </ul>
  );
}
