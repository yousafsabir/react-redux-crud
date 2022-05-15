const employeeR = (state = [], action) => {
    switch (action.type) {
        case "ADDP":
            return [...state, action.payload];

        case "REMP":
            return state.filter((item) => action.payload != item.id);

        case "UPP":
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return (item = action.payload);
                } else {
                    return item;
                }
            });

        default:
            return state;
    }
};

export default employeeR;
