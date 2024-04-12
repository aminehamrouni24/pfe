import React, { useEffect } from "react";
import { MDBDataTableV5 } from "mdbreact";
import { get_Employees, getAttendance } from "../../redux/actions/Employee";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ViewAttendance = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAttendance());
    }, []);
    const { Attendance } = useSelector((state) => state.managementReducer);
    var validEmployee = Attendance.filter((el) => el.Employee !== null);
    var reversedEmployee = [...validEmployee].reverse();
    var AttendanceRows = reversedEmployee.map((el) => {
        const data = {
            name: `${el.Employee.Name} ${el.Employee.lastName}`,
            date: `${el.date}`,
            Situation: `${el.situation}`,
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
                label: "Date",
                field: "date",
                width: 270,
            },
            {
                label: "Situation",
                field: "Situation",
                width: 200,
            },
        ],
        rows: AttendanceRows,
    });
    return (
        <div class="page-container">
            <div class="page-content-wrapper">
                <div class="page-content">
                    <div class="page-head" style={{ marginTop: "66px" }}>
                        <div class="page-title">
                            <h1>View Attendance</h1>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <div class="portlet light bordered">
                                <div class="portlet-body">
                                    <div class="table-toolbar">
                                        <div class="row">
                                            <div class="col-xs-6"></div>
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
    );
};

export default ViewAttendance;
