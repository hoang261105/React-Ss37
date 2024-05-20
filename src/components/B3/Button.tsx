import { useContext, useState } from "react";
import { themeContext } from "../B1/ThemeContext";

export default function Button() {
  const themeBlue = useContext(themeContext);
  const [themeRed] = useState<string>("red");
  const [changeTheme, setChangeTheme] = useState<boolean>(false);

  const handleClick = () => {
    setChangeTheme(!changeTheme);
  };
  return (
    <div>
      {changeTheme ? (
        <div>
          <p>Màu nền: {themeRed}</p>
          <button style={{ background: themeRed }} onClick={handleClick}>
            Click me
          </button>
        </div>
      ) : (
        <div>
          <p>Màu nền: {themeBlue}</p>
          <button style={{ background: themeBlue }} onClick={handleClick}>
            Click me
          </button>
        </div>
      )}
    </div>
  );
}
