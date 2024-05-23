import { useContext } from "react";
import { themeContext } from "../B1/ThemeContext";

export default function SomeTheme() {
  const theme = useContext(themeContext);
  return <div style={{ color: theme }}>The current theme is {theme}</div>;
}
