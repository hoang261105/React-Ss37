import ThemeContext from "./components/B1/ThemeContext";

import Increase from "./components/B5/Increase";
import Decrease from "./components/B6/Decrease";

export default function App() {
  return (
    <div>
      <ThemeContext />
      <br />
      <Decrease />
      <br />
      <Increase />
    </div>
  );
}
