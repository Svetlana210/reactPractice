// import { Route, Routes } from "react-router-dom";
// import AppBar from "./components/AppBar/AppBar";
// import SignupForm from "./components/SignupForm/SignupForm";
import UserRoutes from "./Routes";
import Navbar from "./Navbar/Navbar";
import LangContext from "../shared/langContext.js";
import styles from "./app.module.css";

export default function App() {
  return (
    <LangContext>
      <div className={styles.container}>
        <Navbar />
        <UserRoutes />
      </div>
    </LangContext>
  );
}
