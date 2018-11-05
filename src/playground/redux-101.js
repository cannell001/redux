import { createStore } from "redux";

const store = createStore((state = { count: 0 }) => {
  return state;
}); //Set default state

console.log(store.getState()); //Return current stae object

// Actions
// I'd like to increment the count
// I'd like to reset the count to zero
