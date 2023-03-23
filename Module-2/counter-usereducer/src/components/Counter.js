//? ALL children receiving the context must have the useContext hook from react AND the context that you initialized in the parent (line 7 in App.js)
import { useContext } from "react";
import { MyContext } from "../App";

function Counter() {
  //? declaring a new variable containing the context to use in this component
  const ctx = useContext(MyContext);
  console.log(ctx);

  //? dispatch an action => {type: 'add', payload: 'any'}
  return (
    <div>
      <h2>Counter: {ctx.state}</h2>

      {/*  adding event handlers to buttons */}
      {/* using the context to pass the dispatch function ->
      dispatch function accepts the TYPE and the payload object -> sends the action to the reducer function in App.js */}
      <button onClick={() => ctx.dispatch({ type: "add", payload: null })}>
        Add
      </button>
      <button onClick={() => ctx.dispatch({ type: "subtract", payload: null })}>
        Subtract
      </button>
      <button onClick={() => ctx.dispatch({ type: "ADD_FIVE", payload: 5 })}>
        Add 5
      </button>
    </div>
  );
}

export default Counter;
