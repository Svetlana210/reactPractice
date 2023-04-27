import LangSwitcher from "components/LanguageSwitcher/LangSwitcher";
import { NavLink } from "react-router-dom";
import useLang from "../../shared/useLang";
import locale from "./locale.json";
import styles from "./navbar.module.css";

const getFullName = ({ isActive }) => {
  return isActive ? `${styles.link} ${styles.active}` : styles.link;
};

const Navbar = () => {
  const { lang } = useLang();

  const form = locale.form[lang];
  const picker = locale.picker[lang];
  const counter = locale.counter[lang];
  const clock = locale.clock[lang];
  const pokemon = locale.pokemon[lang];
  const counterUseRed = locale.counterUseRed[lang];
  const friends = locale.friends[lang];
  const ref = locale.ref[lang];
  return (
    <div>
      <header>
        <nav className={styles.nav}>
          <LangSwitcher />
          <NavLink to="/form" className={getFullName}>
            {form}
          </NavLink>
          <NavLink to="/colorpicker" className={getFullName}>
            {picker}
          </NavLink>
          <NavLink to="/counter" className={getFullName}>
            {counter}
          </NavLink>
          <NavLink to="/clock" className={getFullName}>
            {clock}
          </NavLink>
          <NavLink to="/pokemon" className={getFullName}>
            {pokemon}
          </NavLink>
          <NavLink to="/useReducer" className={getFullName}>
            {counterUseRed}
          </NavLink>
          <NavLink to="/useMemo" className={getFullName}>
            {friends}
          </NavLink>
          <NavLink to="/useRef" className={getFullName}>
            {ref}
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
