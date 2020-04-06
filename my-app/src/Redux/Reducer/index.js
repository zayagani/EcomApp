import {combineReducers } from "redux";
import courses from "./courseReducer";
import payload from "./crudReducer"
import {createStore} from "redux";
import count from "./counterReducer";
import formdata from "./FormReducer"
const rootReducer=combineReducers ({

    courses,
    payload,
    count,
    formdata

})

//const store=createStore(rootReducer);

export default rootReducer;