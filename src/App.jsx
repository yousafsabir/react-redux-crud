import { useSelector, useDispatch } from "react-redux";
import EmployeeForm from "./components/employeeForm/EmployeeForm";
import { increment, decrement, add } from "./store/actions/CounterActions";
import "./App.css";

function App() {
    const counter = useSelector((state) => state.counterR);
    const dispatch = useDispatch();

    return (
        <>
            <EmployeeForm />
            <div className="counter-cont">
                <h1>Counter App</h1>
                <div>
                    <button onClick={() => dispatch(decrement())}>-</button>
                    <span>{counter}</span>
                    <button onClick={() => dispatch(increment())}>+</button>
                </div>
                <button onClick={() => dispatch(add())}>Add</button>
            </div>
        </>
    );
}

export default App;
