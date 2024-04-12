import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MDBDataTableV5 } from "mdbreact";
import { get_Employees, addAttendance, getAttendance } from "../../redux/actions/Employee";
import { Link } from "react-router-dom";
import './Markattendance.css'

const MarkAttendance = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get_Employees());
        dispatch(getAttendance());
    }, []);

    const { Employees, Attendance } = useSelector(state => state.managementReducer);
    const [attendance, setAttendance] = useState([]);
    const [situation, setSituation] = useState("");

    const handleChange = (e) => {
        setSituation(e.target.value);
    };

    const today = new Date();
    const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

    const handleSave = (id, index) => {
        setAttendance([
            ...attendance,
            { Employee: id, situation: situation, date },
        ]);
        document.querySelector(`#button${index}`).disabled = true;
    };

    const handleSend = () => {
        dispatch(addAttendance(attendance));
    };

    const attendanceRegistred = attendance.filter(el => el.date === date);

    return (
        <div className="page-container">
            <div className="page-content-wrapper">
                <div className="page-content">
                    <div className="page-head" /*style={{ marginTop: "30px" }}*/>
                        <div className="page-title">
                            <h1>Mark Attendance</h1>
                        </div>
                    </div>
                    <div id="load"></div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="portlet light bordered">
                                <div className="portlet-body">
                                    <div className="table-toolbar">
                                  <div className="row">
                                            <div className="col-md-6"></div>
                                            <div className="col-md-6"></div>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <h2 style={{ textAlign: "center" }}>{`Today ${date}`}</h2>
                                        <table className="tablee">
                                            <thead>
                                                <tr>
                                                    <th>Employee Name</th>
                                                    <th>Attendance</th>
                                                    <th>Save</th>
                                                </tr>
                                            </thead>
                                           <tbody>
                                                {Employees.map((el, index) => (
                                                    <tr key={`row${index}`}>
                                                        <td>{`${el.Name} ${el.lastName}`}</td>
                                                        <td>
                                                            {attendanceRegistred.length === 0 ? (
                                                                <select
                                                                    className="form-control"
                                                                    id="date_range_leaveType"
                                                                    name="Decision"
                                                                    onChange={handleChange}
                                                                >
                                                                    <option>Choose</option>
                                                                    <option value="Present">Present</option>
                                                                    <option value="Absent">Absent</option>
                                                                    <option value="Leave">Leave</option>
                                                                </select>
                                                            ) : (
                                                                <p>Attendance for Today Registered</p>
                                                            )}
                                                        </td>
                                                        <td>
                                                            {attendanceRegistred.length === 0 ? (
                                                                <button
                                                                    className="btn red btn-sm margin-bottom-10"
                                                                    style={{ width: "94px" }}
                                                                    id={`button${index}`}
                                                                    onClick={() => handleSave(el._id, index)}
                                                                >
                                                                    Save
                                                                </button>
                                                            ) : null}
                                                        </td>
                                                    </tr>
                                                ))}
                                                            </tbody>
                                        </table>
                                        {attendanceRegistred.length === 0 ? (
                                            <button
                                               id="bttn" className="btn red btn-sm margin-bottom-10"
                                                style={{ width: "94px" }}
                                                onClick={handleSend}
                                            >
                                                Send
                                            </button>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarkAttendance;
