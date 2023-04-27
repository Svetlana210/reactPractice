import { langContext } from "shared/langContext";
import { useContext } from "react";

const useLang = () => {
  const context = useContext(langContext);
  return context;
};

export default useLang;
