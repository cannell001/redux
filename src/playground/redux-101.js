import { createStore } from "redux";

const store = createStore((state = { count: 10 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
}); //Set default state

console.log(store.getState()); //Return current state object

// Actions -an object that gets sent to the store

// Increment the count - dispatch sends action object to the store
store.dispatch({
  type: "INCREMENT"
});

store.dispatch({
  type: "INCREMENT"
});

store.dispatch({
  type: "RESET"
});

store.dispatch({
  type: "DECREMENT"
});

console.log(store.getState());
