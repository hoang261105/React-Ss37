import { createContext, useState } from "react";
import Button from "../B4/Button";
import SomeTheme from "../B2/SomeTheme";
import B3 from "../B3/B3";
export const themeContext = createContext("");
export default function ThemeContext() {
  const [theme, setTheme] = useState<string>("blue");
  return (
    <div>
      <themeContext.Provider value={theme}>
        <SomeTheme />
        <B3 />
        <Button />
      </themeContext.Provider>
    </div>
  );
}
