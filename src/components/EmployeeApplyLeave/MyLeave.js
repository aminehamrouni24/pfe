import React, { useEffect } from 'react';
import './MyLeave.css';
import { useDispatch, useSelector } from 'react-redux';
import { jwtDecode } from "jwt-decode";
import { getLeave, updateDecision } from '../../redux/actions/Employee';
function MyLeave() {
  const dispatch = useDispatch();
  const { Leaves } = useSelector((state) => state.managementReducer);
  useEffect(() => {
      dispatch(getLeave());
  }, []);

  var id = jwtDecode(localStorage.getItem("token")).user._id;
  var LeavesReversed = [...Leaves].reverse();
  var ValidEmployee = LeavesReversed.filter((el) => el.Employee !== null);
  var myLeaves = ValidEmployee.filter((el) => el.Employee._id == id);
   
  return (
    
    <div className='gg'>
    <h2>Your leave list</h2>
    <table className='leave-table'>
      <thead>
        <tr>
          <th>Employee Name</th>
          <th>Leave Start</th>
          <th>Leave End</th>
          <th>Leave Type</th>
          <th>Reason</th>
          <th>Decision</th>
        </tr>
      </thead>
      <tbody>
      {myLeaves.map((el, index) => {return ( 
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
                                                                        {el.LeaveEnd.substr( 0,10 )}
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
                                                                </tr>
        )})}
        </tbody>
    </table>
  </div>

  )
}

export default MyLeave