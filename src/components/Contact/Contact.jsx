import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";

export default function Contact({ value }) {
  return (
    <>
      <div className={css.wraper}>
        <FaUser />
        <div>{value.name}</div>
      </div>

      <div className={css.wraper}>
        <FaPhone />
        <div>{value.number}</div>
      </div>
    </>
  );
}
