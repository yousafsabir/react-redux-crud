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
            // let newArr = state.filter((item) => action.payload != email);
            // return newArr;
            return (state = [...state]);
        case "UPP":
            state[action.payload.index] = action.payload.person;
            return state;

        default:
            return state;
    }
};

export default employeeR;
