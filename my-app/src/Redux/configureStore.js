import { createStore } from "redux";
import CreateReducer from "./Reducer";

export default function configureStore() {

    return createStore(CreateReducer)
}


//const configureStore=createStore(CreateReducer);

//export default configureStore;

