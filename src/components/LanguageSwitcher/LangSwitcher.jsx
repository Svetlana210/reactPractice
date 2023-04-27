import useLang from "../../shared/useLang";
import styles from "./lang-switcher.module.css";

const LangSwitcher = () => {
  const { lang, toggleLang } = useLang();
  return (
    <div className={styles.container}>
      <span
        className={lang === "ua" ? styles.currentLang : styles.lang}
        onClick={toggleLang}
      >
        UA
      </span>
      |
      <span
        className={lang === "en" ? styles.currentLang : styles.lang}
        onClick={toggleLang}
      >
        EN
      </span>
    </div>
  );
};

export default LangSwitcher;
