import s from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";

export const Contact = ({ id, name, number, handleDeleteUser }) => {
  return (
    <li className={s.item} key={id}>
      <p className={s.name}>
        <FaUser className={s.icon} />
        {name}
      </p>
      <p className={s.number}>
        <FaPhone className={s.icon} />
        {number}
      </p>
      <button onClick={() => handleDeleteUser(id)} className={s.btn}>
        Delete
      </button>
    </li>
  );
};

function IconBxsUser(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z" />
    </svg>
  );
}

export default IconBxsUser;
