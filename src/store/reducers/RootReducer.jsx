import { combineReducers } from "redux";

import counterR from "./CounterReducer";
import employeeR from "./EmployeeReducer";

const RootReducer = combineReducers({
    counterR,
    employeeR,
});

export default RootReducer;
