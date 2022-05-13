import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./EmployeeForm.css";

const EmployeeForm = () => {
    const employee = useSelector((state) => state.employeeR);
    const dispatch = useDispatch();

    const [person, setPerson] = useState({
        fName: "",
        lName: "",
        email: "",
    });

    const inputHandler = (e) => {
        setPerson({ ...person, [e.target.name]: e.target.value });
    };

    const clearPerson = () => {
        setPerson({
            fName: "",
            lName: "",
            email: "",
        });
    };

    // Actions
    const addp = () => {
        dispatch({ type: "ADDP", payload: person });
        clearPerson();
    };
    const remp = (index) => {
        dispatch({ type: "REMP", payload: index });
    };

    const [updIdx, setUpdIdx] = useState(0);
    const [update, setUpdate] = useState(false);

    const upp1 = (index) => {
        setUpdate(true);
        setPerson(employee[index]);
        setUpdIdx(index);
    };
    const upp2 = () => {
        dispatch({ type: "UPP", payload: { index: updIdx, person: person } });
        clearPerson();
        setUpdate(false);
    };

    return (
        <div className="container">
            <form className="form-feild" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="fName">First Name:</label>
                <input
                    type="text"
                    name="fName"
                    value={person.fName}
                    onChange={inputHandler}
                />
                <label htmlFor="lName">Last Name:</label>
                <input
                    type="text"
                    name="lName"
                    value={person.lName}
                    onChange={inputHandler}
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    value={person.email}
                    onChange={inputHandler}
                />
                <button className="btn" onClick={update ? upp2 : addp}>
                    {update ? "Update" : "Add Person"}
                </button>
            </form>

            <table className="table">
                <thead>
                    <tr>
                        <th>Sr no.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employee.map((data, index) => {
                        return (
                            <tr>
                                <th>{index + 1}</th>
                                <td>{data.fName}</td>
                                <td>{data.lName}</td>
                                <td>{data.email}</td>
                                <td>
                                    <button onClick={() => upp1(index)}>
                                        update
                                    </button>
                                    <button onClick={() => remp(index)}>
                                        delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeForm;
