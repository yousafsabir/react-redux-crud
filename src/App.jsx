import { useSelector, useDispatch } from "react-redux";
import EmployeeForm from "./components/employeeForm/EmployeeForm";
import "./App.css";

function App() {
    const counter = useSelector((state) => state.counterR);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch({ type: "INC" });
    };
    const decrement = () => {
        dispatch({ type: "DEC" });
    };
    const add = () => {
        dispatch({ type: "ADD", payload: 10 });
    };
    return (
        <>
            <EmployeeForm />
            <div className="counter-cont">
                <h1>Counter App</h1>
                <div>
                    <button onClick={decrement}>-</button>
                    <span>{counter}</span>
                    <button onClick={increment}>+</button>
                </div>
                <button onClick={add}>Add</button>
            </div>
        </>
    );
}

export default App;
