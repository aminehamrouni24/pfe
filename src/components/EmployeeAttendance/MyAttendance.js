import React, {useState , useEffect} from 'react'
import './MYAttendance.css'
import { useDispatch , useSelector} from "react-redux";
import { jwtDecode } from "jwt-decode";
import { getAttendance } from '../../redux/actions/Employee';
function MyAttendance() {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getAttendance());
  }, []);
  var id = jwtDecode(localStorage.getItem("token")).user._id;

  const { Attendance } = useSelector((state) => state.managementReducer);
  var ValidEmployee = Attendance.filter((el) => el.Employee !== null);
  var MyAttendance = ValidEmployee.filter((el) => el.Employee._id == id)
  return (
    <div id="pro" >
    <div className='bog'>
    <h2 id="h2">My attendance</h2>
    <table className='Attendance'>
       <thead>
             <tr>
             <th>Employee</th>
             <th>Date</th>
             <th>Situation</th>
          </tr>
        </thead>
         <tbody>
         {MyAttendance.map((el, index) => {return (
             <tr id="row1">
                 <td>{`${el.Employee.Name} ${el.Employee.lastName}`}</td>
                 <td>{el.date }</td>
                 <td> {el.situation} </td>
             </tr>
                ); }
         )}
         </tbody>
         </table>
 </div>
 </div>
  )
}

export default MyAttendance