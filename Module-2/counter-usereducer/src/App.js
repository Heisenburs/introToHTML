import "./App.css";
import { createContext, useReducer } from "react";

import HomePage from "./pages/Homepage";

//? initialize the context
export const MyContext = createContext(null);

function App() {
  //?the reducer function & the initial state need to created
  const initialState = 0;

  //? state & dispatch are the 2 values needed to pass into the context (as an obj)
  const [state, dispatch] = useReducer(reducer, initialState);

  //? initialize the reducer function => called everytime you make an action, contains all the logic to update the state
  //? whenever you dispatch a new action => reducer receives it and updates the state
  function reducer(state, action) {
    //? destructuring the type & payload value out of action action
    const { type, payload } = action;
    console.log(action);

    //? declare a switch statement (adding the 'types' of dispatch from the buttons)
    switch (type) {
      //? the value of the cases are 'types' of dispatch from the buttons from Counter.js
      case "add":
        return state + 1;

      case "subtract":
        return state - 1;

      case "ADD_FIVE":
        //? returns the sum of the state and the value from the payload
        return state + payload;

      default:
        return state;
    }
  }

  return (
    //? wrap the app with the context we initialized in line 7 (!! dont forget .Provider !!)
    //? context.provider takes in a value that is passed down through the application
    //?                     values passed down from the useReducer hook in line 14
    <MyContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <HomePage />
      </div>
    </MyContext.Provider>
  );
}

export default App;
