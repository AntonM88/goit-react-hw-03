import s from "./SearchBox.module.css";

export const SearchBox = ({ searchValue, setSearchValue }) => {
  return (
    <div>
      <input
        className={s.input}
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};
