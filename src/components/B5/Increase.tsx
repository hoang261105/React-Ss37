import { useReducer } from "react";

interface State {
  count: number;
}

interface Type {
  type: "INCREASE";
}

const initial: State = { count: 0 };

const reducer = (state: State, action: Type) => {
  switch (action.type) {
    case "INCREASE": // hành động giảm
      return { count: state.count + 1 };
    default:
      return state;
  }
};

export default function Increase() {
  const [state, dispatch] = useReducer(reducer, initial);
  return (
    <div>
      <p>Giá trị hiện tại: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREASE" })}>Increase</button>
    </div>
  );
}
