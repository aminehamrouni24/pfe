import React, { useEffect, useState } from "react";
import { MDBDataTableV5 } from "mdbreact";
import "./Employee.css";
import {
    delete_employee,
    get_Employees,
    get_Department,
    AdminuUpdateEmployee,
} from "../../redux/actions/Employee";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Employee = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get_Employees());
        dispatch(get_Department());
    }, []);

    const { Employees, Department } = useSelector(
        (state) => state.managementReducer
    );
    // const [show, setShow] = useState(false);
    // const handleClose = () => {
    //     setShow(false);
    // };

    const EditModal = ({ employee }) => {
        const dispatch = useDispatch();

        const [show, setShow] = useState(false);
        const handleClose = () => {
            setShow(false);
        };
        const [updateEmployee, setUpdateEmployee] = useState({});
        const handleChange = (e) => {
            setUpdateEmployee({
                ...updateEmployee,
                [e.target.name]: e.target.value,
            });
        };
        const handleSave = () => {
            dispatch(
                AdminuUpdateEmployee({ id: employee._id, updateEmployee })
            );
            handleClose();
        };
        return (
            <>
                <a
                    class="btn purple btn-sm margin-bottom-10 "
                    onClick={() => setShow(true)}
                >
                    <i class="fa fa-edit"></i> Edit
                </a>
                {show ? (
                    <div
                        style={{
                            position: "absolute",
                            top: "-150px",
                            left: "30%",
                        }}
                    >
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5
                                        class="modal-title"
                                        id="exampleModalLabel"
                                    >
                                        Edit Employee
                                    </h5>
                                </div>
                                <div
                                    class="modal-body"
                                    style={{ height: "533px" }}
                                >
                                    {" "}
                                    <div class="form-body">
                                        <div class="form-group">
                                            <label class="col-md-3 control-label">
                                                Name{" "}
                                                <span class="required">* </span>
                                            </label>

                                            <div class="col-md-12">
                                                <input
                                                    onChange={handleChange}
                                                    type="text"
                                                    class="form-control"
                                                    name="Name"
                                                    placeholder="Name"
                                                />
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="col-md-3 control-label">
                                                Last Name{" "}
                                                <span class="required">* </span>
                                            </label>

                                            <div class="col-md-12">
                                                <input
                                                    onChange={handleChange}
                                                    type="text"
                                                    class="form-control"
                                                    name="lastName"
                                                    placeholder="Last Name"
                                                />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-md-3">
                                                Date of Birth
                                            </label>

                                            <div class="col-md-3">
                                                <div
                                                    class="input-group input-medium date date-picker"
                                                    data-date-format="dd-mm-yyyy"
                                                    data-date-viewmode="years"
                                                >
                                                    <input
                                                        onChange={handleChange}
                                                        type="date"
                                                        class="form-control"
                                                        name="DateOfBirth"
                                                        readonly
                                                    />
                                                    <span class="input-group-btn">
                                                        <button
                                                            class="btn default"
                                                            type="button"
                                                        >
                                                            <i class="fa fa-calendar"></i>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            {/* <label class="col-md-3 control-label">
                                            Gender
                                        </label> */}

                                            <div class="col-md-12">
                                                Gender
                                                <select
                                                    class="form-control"
                                                    name="gender"
                                                    onChange={handleChange}
                                                >
                                                    <option value="male">
                                                        Male
                                                    </option>
                                                    <option value="female">
                                                        Female
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-md-3 control-label">
                                                Departement
                                            </label>

                                            <div class="col-md-12">
                                                <select
                                                    class="form-control"
                                                    name="department"
                                                    onChange={handleChange}
                                                >
                                                    {Department.map((el) => {
                                                        return (
                                                            <option
                                                                value={el.Name}
                                                            >
                                                                {el.Name}
                                                            </option>
                                                        );
                                                    })}
                                                </select>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="col-md-3 control-label">
                                                Phone
                                            </label>

                                            <div class="col-md-12">
                                                <input
                                                    onChange={handleChange}
                                                    type="text"
                                                    class="form-control"
                                                    name="phone"
                                                    placeholder="Phone"
                                                />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-md-3 control-label">
                                                Local Address
                                            </label>

                                            <div class="col-md-12">
                                                <textarea
                                                    onChange={handleChange}
                                                    class="form-control"
                                                    name="address"
                                                    rows="3"
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button
                                        type="button"
                                        class="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                        onClick={handleClose}
                                    >
                                        Close
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-primary"
                                        onClick={handleSave}
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
            </>
        );
    };
    const Edit = ({ employee }) => {
        return (
            <>
                <EditModal employee={employee} />

                <a
                    class="btn red btn-sm margin-bottom-10"
                    style={{
                        width: "94px",
                    }}
                    onClick={() => dispatch(delete_employee(employee._id))}
                >
                    <i class="fa fa-trash"></i> Delete
                </a>
            </>
        );
    };

    var EmployeeRows = Employees.map((el) => {
        const data = {
            name: `${el.Name} ${el.lastName}`,
            department: `${el.department}`,
            phone: `${el.phone}`,
            action: <Edit employee={el} />,
        };
        return data;
    });
    const [datatable, setDatatable] = React.useState({
        columns: [
            {
                label: "Name",
                field: "name",
                width: 150,
                attributes: {
                    "aria-controls": "DataTable",
                    "aria-label": "Name",
                },
            },
            {
                label: "Department",
                field: "department",
                width: 270,
            },
            {
                label: "Phone",
                field: "phone",
                width: 200,
            },
            {
                label: "Action",
                field: "action",
                width: 100,
            },
        ],
        rows: EmployeeRows,
    });

    return (
        <>
            <div class="page-container">
                <div class="page-content-wrapper">
                    <div class="page-content">
                        <div class="page-head" style={{ marginTop: "66px" }}>
                            <div class="page-title">
                                <h1>Employees</h1>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <div class="portlet light bordered">
                                    <div class="portlet-body">
                                        <div class="table-toolbar">
                                            <div class="row">
                                                <div class="col-xs-6">
                                                    <div class="btn-group">
                                                        <Link
                                                            to="/adminAddEmployee"
                                                            class="btn green"
                                                        >
                                                            <span class="hidden-xs">
                                                                {" "}
                                                                Add New Employee{" "}
                                                            </span>
                                                            <i class="fa fa-plus"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <MDBDataTableV5
                                            hover
                                            entriesOptions={[5, 20, 25]}
                                            entries={5}
                                            pagesAmount={4}
                                            data={datatable}
                                            pagingTop
                                            searchTop
                                            searchBottom={false}
                                            barReverse
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Employee;