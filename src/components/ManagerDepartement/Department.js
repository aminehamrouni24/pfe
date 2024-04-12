import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    get_Department,
    add_Department,
    AdminDeleteDepartment,
} from "../../redux/actions/Employee";

const Department = () => {
   const dispatch = useDispatch();
    useEffect(() => {
        dispatch(get_Department());
    }, []);

    const { Department } = useSelector((state) => state.managementReducer);

    const [show, setShow] = useState(false);
    const [newDepartment, setNewDepartment] = useState("");

    const handleShow = () => {
        setShow(!show);
    };

    const handleChange = (e) => {
        setNewDepartment(e.target.value);
    };

    const handleAddDepartment = () => {
        dispatch(add_Department({ Name: newDepartment }));
    };

    const handleDelete = (id) => {
        dispatch(AdminDeleteDepartment(id));
    };

    return (
        <div className="page-container">
            <div className="page-content-wrapper">
                <div className="page-content">
                    <div className="page-head">
                        <div className="page-head" style={{ marginTop: "66px" }}>
                            <div className="page-title">
                                <h1>Departments</h1>
                            </div>
                        </div>

                        <div id="load"></div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="portlet light bordered">
                                    <div className="portlet-body">
                                        <div className="table-toolbar">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="btn-group">
                                                        <a
                                                            className="btn green"
                                                            onClick={handleShow}
                                                        >
                                                            Add New Department
                                                            <i className="fa fa-plus"></i>{" "}
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-md-6"></div>
                                            </div>
                                        </div>
                                        <div className="table-responsive">
                                            <table className="table table-striped table-bordered table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>Sr No. </th>
                                                        <th>Department Name</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {Department.map(
                                                        (el, index) => (
                                                            <tr key={`row${index}`}>
                                                                <td>{index + 1}</td>
                                                                <td>{el.Name}</td>
                                                                <td>
                                                                    <button
                                                                        className="btn red btn-sm margin-bottom-10"
                                                                        style={{
                                                                            width: "94px",
                                                                        }}
                                                                        onClick={() =>
                                                                            handleDelete(
                                                                                el._id
                                                                            )
                                                                        }
                                                                    >
                                                                        <i className="fa fa-trash"></i>{" "}
                                                                        Delete
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {show && (
                        <div
                            className="modal-dialog"
                            style={{
                                position: "absolute",
                                top: "143px",
                                left: "365px",
                            }}
                        >
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-hidden="true"
                                        onClick={handleShow}
                                    ></button>
                                    <h4 className="modal-title">Add Department</h4>
                                </div>
                                <div
                                    className="modal-body"
                                    id="info"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <label style={{ marginRight: "10px" }}>
                                        Department Name:{" "}
                                    </label>
                                    <input
                                        style={{
                                            outline: "none",
                                            border: "1px solid #000ff",
                                            width: "250px",
                                            height: "30px",
                                        }}
                                        type="text"
                                        name="Name"
                                        className="form-control"
                                        placeholder="Department Name ..."
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        data-dismiss="modal"
                                        className="btn purple btn-sm margin-bottom-10 "
                                        onClick={handleAddDepartment}
                                    >
                                        Submit
                                    </button>
                                    <button
                                        type="button"
                                        data-dismiss="modal"
                                        className="btn purple btn-sm margin-bottom-10 "
                                        onClick={() => setShow(false)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Department;
