import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrementCounter = () => {
    dispatch(actions.increment());
  };

  const decrementCounter = () => {
    dispatch(actions.decrement());
  };

  const addBy = () => {
    dispatch(actions.addBy(10));
  };

  const resetCounter = () => {
    dispatch(actions.resetCounter());
  };

  return (
    <div className="app">
      <h1> Counter App </h1>
      <h2>{counter}</h2>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
      <button onClick={addBy}>Add By 10</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
}

export default App;
