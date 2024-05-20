import { createContext, useState } from "react";
import Button from "../B3/Button";
export const themeContext = createContext("");
export default function ThemeContext() {
  const [theme, setTheme] = useState<string>("blue");
  return (
    <div>
      <themeContext.Provider value={theme}>
        <Button />
      </themeContext.Provider>
    </div>
  );
}
