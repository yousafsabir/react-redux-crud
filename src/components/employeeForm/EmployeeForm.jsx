import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addp, remp, upp } from "../../store/actions/EmployeeActions";
import shortid from "shortid";
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
    const addPerson = () => {
        Object.assign(person, { id: shortid.generate() });
        dispatch(addp(person));
        clearPerson();
    };

    const remPerson = (id) => {
        dispatch(remp(id));
    };

    const [update, setUpdate] = useState(false);

    const loadPerson = (id) => {
        setUpdate(true);
        employee.map((item) => {
            if (item.id === id) {
                setPerson(item);
            }
        });
    };

    const upPerson = () => {
        dispatch(upp(person));
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
                <button className="btn" onClick={update ? upPerson : addPerson}>
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
                                    <button onClick={() => loadPerson(data.id)}>
                                        update
                                    </button>
                                    <button onClick={() => remPerson(data.id)}>
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
