import React, { useEffect, useState } from "react";
import { MDBDataTableV5 } from "mdbreact";
// import "./Employee.css";
import { getLeave, updateDecision } from "../../redux/actions/Employee";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const LeaveList = () => {
    const dispatch = useDispatch();
    const { Leaves } = useSelector((state) => state.managementReducer);
    useEffect(() => {
        dispatch(getLeave());
    }, []);
    var [Decision, setDecision] = useState("Pending");
    const handleChange = (e) => {
        setDecision({ [e.target.name]: e.target.value });
    };

    const handleSubmit = (id) => {
        dispatch(updateDecision({ id, Decision }));
    };
    var ValidEmployee = Leaves.filter((el) => el.Employee !== null);
    var LeavesReversed = [...ValidEmployee].reverse();

    return (
        <div class="page-container">
            <div class="page-content-wrapper">
                <div class="page-content">
                    <div class="page-head">
                        <div class="page-head" style={{ marginTop: "66px" }}>
                            <div class="page-title">
                                <h1>Leave List</h1>
                            </div>
                        </div>

                        <div id="load"></div>

                        <div class="row">
                            <div class="col-md-12">
                                <div class="portlet light bordered">
                                    <div class="portlet-body">
                                        <div class="table-toolbar">
                                            <div class="row">
                                                <div class="col-md-6"></div>
                                                <div class="col-md-6"></div>
                                            </div>
                                        </div>
                                        <div class="table-responsive">
                                            <table class="table table-striped table-bordered table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>Employee Name </th>
                                                        <th>Leave Start</th>
                                                        <th>Leave End</th>
                                                        <th>Leave Type</th>
                                                        <th>Reason</th>
                                                        <th>Decision</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {LeavesReversed.map(
                                                        (el, index) => {
                                                            return (
                                                                <tr id="row1">
                                                                    <td>
                                                                        {`${el.Employee.Name} ${el.Employee.lastName}`}
                                                                    </td>
                                                                    <td>
                                                                        {el.LeaveD.substr(
                                                                            0,
                                                                            10
                                                                        )}
                                                                    </td>
                                                                    <td>
                                                                        {el.LeaveEnd.substr(
                                                                            0,
                                                                            10
                                                                        )}
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            el.LeaveType
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            el.Reason
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            el.Decision
                                                                        }
                                                                    </td>

                                                                    <td class=" ">
                                                                        {el.Decision ==
                                                                        "Pending" ? (
                                                                            <>
                                                                                {" "}
                                                                                <select
                                                                                    class="form-control"
                                                                                    id="date_range_leaveType"
                                                                                    name="Decision"
                                                                                    onChange={
                                                                                        handleChange
                                                                                    }
                                                                                >
                                                                                    <option>
                                                                                        Choose
                                                                                    </option>
                                                                                    <option value="Accept">
                                                                                        Accept
                                                                                    </option>
                                                                                    <option value="Refuse">
                                                                                        Refuse
                                                                                    </option>
                                                                                </select>
                                                                                <button
                                                                                    class="btn red btn-sm margin-bottom-10"
                                                                                    style={{
                                                                                        width: "94px",
                                                                                    }}
                                                                                    onClick={() =>
                                                                                        handleSubmit(
                                                                                            el._id
                                                                                        )
                                                                                    }
                                                                                >
                                                                                    Send
                                                                                </button>
                                                                            </>
                                                                        ) : null}
                                                                    </td>
                                                                </tr>
                                                            );
                                                        }
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
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

export default LeaveList;
