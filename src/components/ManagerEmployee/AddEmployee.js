import React, { useState, useEffect } from "react";
import { register } from "../../redux/actions/user";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { get_Department } from "../../redux/actions/Employee";

const AddEmployee = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [newEmployee, setNewEmployee] = useState({});
    const handleChange = (e) => {
        setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register(newEmployee, navigate));
    };
    useEffect(() => {
        dispatch(get_Department());
    }, []);

    const { Department } = useSelector((state) => state.managementReducer);
    return (
        <div class="page-container">
            <div class="page-content-wrapper">
                <div class="page-content">
                    <div class="page-head" style={{ marginTop: "66px" }}>
                        <div class="page-title">
                            <h1>Add New Employee</h1>
                        </div>
                    </div>

                    <form class="form-horizontal ajax_form">
                        <input name="_token" type="hidden" />
                        <div class="row ">
                            <div class="col-md-12 col-sm-12">
                                <div class="portlet light bordered">
                                    <div class="portlet-title">
                                        <div class="caption font-purple-wisteria">
                                            <i class="fa fa-user font-purple-wisteria"></i>
                                            Personal Details
                                        </div>
                                    </div>
                                    <div class="portlet-body">
                                        <div class="form-body">
                                            <div class="form-group">
                                                <label class="col-md-3 control-label">
                                                    Name{" "}
                                                    <span class="required">
                                                        *{" "}
                                                    </span>
                                                </label>

                                                <div class="col-md-9">
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
                                                    <span class="required">
                                                        *{" "}
                                                    </span>
                                                </label>

                                                <div class="col-md-9">
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
                                                            onChange={
                                                                handleChange
                                                            }
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
                                                <label class="col-md-3 control-label">
                                                    Gender
                                                </label>

                                                <div class="col-md-9">
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

                                                <div class="col-md-9">
                                                    <select
                                                        class="form-control"
                                                        name="department"
                                                        onChange={handleChange}
                                                    >
                                                        {Department.map(
                                                            (el) => {
                                                                return (
                                                                    <option
                                                                        value={
                                                                            el.Name
                                                                        }
                                                                    >
                                                                        {
                                                                            el.Name
                                                                        }
                                                                    </option>
                                                                );
                                                            }
                                                        )}
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <label class="col-md-3 control-label">
                                                    Phone
                                                </label>

                                                <div class="col-md-9">
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

                                                <div class="col-md-9">
                                                    <textarea
                                                        onChange={handleChange}
                                                        class="form-control"
                                                        name="address"
                                                        rows="3"
                                                    ></textarea>
                                                </div>
                                            </div>
                                            {/* <div class="form-group">
                                                <label class="col-md-3 control-label">
                                                    Permanent Address
                                                </label>

                                                <div class="col-md-9">
                                                    <textarea
                                                        class="form-control"
                                                        name="permanent_address"
                                                        rows="3"
                                                    ></textarea>
                                                </div>
                                            </div> */}

                                            <h4 class="block">Account Login</h4>

                                            <div class="form-group">
                                                <label class="col-md-3 control-label">
                                                    Email
                                                    <span class="required">
                                                        *{" "}
                                                    </span>
                                                </label>

                                                <div class="col-md-9">
                                                    <input
                                                        onChange={handleChange}
                                                        type="text"
                                                        name="email"
                                                        class="form-control"
                                                    />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-3 control-label">
                                                    Password
                                                    <span class="required">
                                                        *{" "}
                                                    </span>
                                                </label>

                                                <div class="col-md-9">
                                                    <input
                                                        onChange={handleChange}
                                                        type="password"
                                                        name="password"
                                                        class="form-control"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a
                                        // href="javascript: ;"
                                        class="btn green"
                                        onClick={handleSubmit}
                                        style={{
                                            transform: "translateX(600px)",
                                            width: "250px",
                                        }}
                                    >
                                        <span class="hidden-xs"> Submit </span>
                                        {/* <i class="fa fa-plus"></i> */}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddEmployee;
