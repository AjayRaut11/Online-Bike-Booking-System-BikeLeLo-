import { createStore } from "redux"
import reducer from "./reducer";
const initialSt = { loggedin: false };
const mystore = createStore(reducer, initialSt);

export default mystore;