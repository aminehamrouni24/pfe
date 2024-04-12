import React from 'react';
import  { useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "@fullcalendar/daygrid";
import "@fullcalendar/timegrid";
import { useHistory } from "react-router-dom";

import Card from 'react-bootstrap/Card'
import { useSelector, useDispatch } from "react-redux";
import {
    getLeave,
    get_Department,
    get_Employees,
} from "../../redux/actions/Employee";
import './Dashboard.css'

function Dashboard() {
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLeave());
        dispatch(get_Department());
        dispatch(get_Employees());
    }, []);
     const { Leaves, Department, Employees } = useSelector(
        (state) => state.managementReducer );
     var Employee = Leaves.filter((el) => el.Employee !== null);
     var PendingLeaves = Employee.filter((el) => el.Decision == "Pending");
     var reverseLeaves = [...PendingLeaves].reverse();

  return (
    <div className='gigi'>
    <div className='pr'>
      <div className="row">
     <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
       <div className="number count">  {Employees.length} </div>
                <Card>
               <Card.Body>Total Employees.</Card.Body>
               <Card.Body> <a class="more"> View More{" "}<i class="m-icon-swapright m-icon-white"></i> </a></Card.Body>
               </Card>
    </div>

    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
       <div class="number count">  {Department.length}  </div>
       
      <Card>
      <Card.Body>Total Departments.</Card.Body>
      <Card.Body> <a class="more"> View More{" "}<i class="m-icon-swapright m-icon-white"></i> </a></Card.Body>
      </Card>
    </div>

    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
      <div class="number count"> {PendingLeaves.length} </div>
      <Card>
      <Card.Body>Total Leave.</Card.Body>
      <Card.Body> <a class="more"> View More{" "}<i class="m-icon-swapright m-icon-white"></i> </a></Card.Body>
      </Card>
          
    </div>
    <div className='ch' >
                        {/*<div class="col-md-6">
                            <div class="portlet light bordered">
                                <div class="portlet-title">
                                    <div class="caption font-red">
                                        <i class="icon-users font-red"></i>{" "}
                                        Attendance
                                    </div>
                                </div>
                                  <div class="portlet-body">
                                     <FullCalendar
                                         defaultView="dayGridMonth"
                                         header={{
                                             left: "prev,next",
                                             center: "title",
                                             right: "dayGridMonth,timeGridWeek,timeGridDay",
                                         }}
                                         themeSystem="Simplex"
                                         plugins={[dayGridPlugin]}
                                         events={[]}
                                    />
                                 </div> 
                            </div>
                                        </div>*/}
                        <div >
                            <div className="good">
                                <div class="portlet-title">
                                    <div class="caption font-blue">
                                        Leaves Request
                                    </div>
                                </div>
                                <div class="portlet-body">
                                    <div
                                        id="expenseChart"
                                        style={{
                                            width: "100%",
                                            height: "400px",
                                            margin: "0 auto",
                                            overflow: "auto",
                                        }}
                                    >
                                       {reverseLeaves.length > 0 ? (
                                            reverseLeaves.map((el) => {
                                                return (
                                                    <p>{`The Employee ${el.Employee.Name} ${el.Employee.lastName} send a new Leave Request `}</p>
                                                );
                                            })
                                        ) : (
                                            <p>Waiting for new Leaves ..</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
</div>
</div>
</div>
  )
}

export default Dashboard;