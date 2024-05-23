import React, { useReducer } from "react";
interface Action {
  type: "decrease";
}
interface State {
  count: number;
}

const initial: State = { count: 10 };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "decrease":
      return state.count > 0 ? { count: state.count - 1 } : state;
    default:
      return state;
  }
};
export default function Decrease() {
  const [state, dispatch] = useReducer(reducer, initial);
  return (
    <div>
      <p>Current value: {state.count}</p>
      <button onClick={() => dispatch({ type: "decrease" })}>Decrease</button>
    </div>
  );
}
