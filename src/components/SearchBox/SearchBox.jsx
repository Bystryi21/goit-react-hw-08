import css from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <div className={css.container}>
      <div>Find contacts by name</div>
      <input
        type="text"
        className={css.input}
        value={value}
        onChange={(evt) => onFilter(evt.target.value)}
      />
    </div>
  );
}
