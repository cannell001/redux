import { createStore } from "redux";

const store = createStore((state = { count: 10 }) => {
  console.log("running");
  return state;
}); //Set default state

console.log(store.getState()); //Return current state object

// Actions -an object that gets sent to the store

// Increment the count - dispatch sends action object to the store
store.dispatch({
  type: "INCREMENT"
});

console.log(store.getState());
