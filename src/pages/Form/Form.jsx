import { useState } from "react";
import styles from "./form.module.css";
import locale from "./locale.json";
import useLang from "../../shared/useLang";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { lang } = useLang();
  const emailLang = locale.email[lang];
  const passwordLang = locale.password[lang];
  const btn = locale.btn[lang];

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);

        break;
      default:
        return;
    }
  };

  return (
    <form className={styles.form} autoComplete="off">
      <label className={styles.label}>
        <span>{emailLang}</span>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </label>

      <label className={styles.label}>
        <span>{passwordLang}</span>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
      </label>

      <button type="submit">{btn}</button>
    </form>
  );
};
export default Form;
