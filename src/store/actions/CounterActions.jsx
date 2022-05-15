export const increment = () => {
    return (dispatch) => {
        dispatch({ type: "INC" });
    };
};
export const decrement = () => {
    return (dispatch) => {
        dispatch({ type: "DEC" });
    };
};
export const add = () => {
    return (dispatch) => {
        dispatch({ type: "ADD", payload: 10 });
    };
};
