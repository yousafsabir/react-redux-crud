import { createStore, combineReducers } from "redux";

const counterR = (state = 0, action) => {
    switch (action.type) {
        case "INC":
            return (state += 1);

        case "DEC":
            return (state -= 1);

        case "ADD":
            return (state += action.payload);

        default:
            return state;
    }
};

const employeeR = (
    state = [
        {
            fName: "yousaf",
            lName: "sabir",
            email: "y@gmail.com",
        },
        {
            fName: "nabeel",
            lName: "tahir",
            email: "n@gmail.com",
        },
        {
            fName: "ismail",
            lName: "sabir",
            email: "i@gmail.com",
        },
    ],
    action
) => {
    switch (action.type) {
        case "ADDP":
            state.push(action.payload);
            return state;

        case "REMP":
            state.splice(action.payload, 1);
            return (state = [...state]);
        case "UPP":
            state[action.payload.index] = action.payload.person;
            return state;

        default:
            return state;
    }
};

const RootReducer = combineReducers({
    counterR,
    employeeR,
});

const Store = createStore(RootReducer);

export default Store;
