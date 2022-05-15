export const addp = (person) => {
    return (dispatch) => {
        dispatch({ type: "ADDP", payload: person });
    };
};
export const remp = (id) => {
    return (dispatch) => {
        dispatch({ type: "REMP", payload: id });
    };
};
export const upp = (person) => {
    return (dispatch) => {
        dispatch({ type: "UPP", payload: person });
    };
};
