import { useContext } from "react";
import { themeContext } from "../B1/ThemeContext";

export default function B3() {
  const theme = useContext(themeContext);
  return (
    <div>
      <button style={{ background: theme, color: "white" }}>Click me</button>
    </div>
  );
}
