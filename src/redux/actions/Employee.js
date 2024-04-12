import {
    GET_EMPLOYEE,
    GET_DEPARTMENT,
    GET_LEAVE,
    GET_ATTENDANCE,
    GET_CURRENT,
} from "../constants/actions-types";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const get_Employees = () => async (dispatch) => {
    try {
        let result = await axios.get("api/getEmployee");
        dispatch({ type: GET_EMPLOYEE, payload: result.data });
    } catch (error) {
        console.log(error);
    }
};
export const delete_employee = (id) => async (dispatch) => {
    try {
        console.log(id);
        let result = await axios.delete(`api/deleteEmployee/${id}`);
        console.log(result.data);
        dispatch(get_Employees());
    } catch (error) {
        console.log(error);
    }
};
export const get_Department = () => async (dispatch) => {
    try {
        let department = await axios.get("api/getDepartment");
        dispatch({ type: GET_DEPARTMENT, payload: department });
    } catch (error) {
        console.log(error);
    }
};

export const add_Department = (newDepartment) => async (dispatch) => {
    try {
        let new_department = await axios.post(
            "api/addDepartment",
            newDepartment
        );

        dispatch(get_Department());
    } catch (err) {
        console.log(err);
    }
};

export const getLeave = () => async (dispatch) => {
    try {
        let allLeaves = await axios.get("api/getLeave");

        dispatch({ type: GET_LEAVE, payload: allLeaves.data });
    } catch (err) {
        console.log(err);
    }
};
export const addLeave = (newLeave) => async (dispatch) => {
    const navigate = useNavigate;
    try {
        let new_Leave = await axios.post("api/addLeave", newLeave);
        if (new_Leave.status) {
            dispatch(getLeave());
            navigate("/EmployeeMyLeave");
        }
    } catch (err) {
        console.log(err);
    }
};

export const updateDecision =
    ({ id, Decision }) =>
    async (dispatch) => {
        try {
            let update_Decision = await axios.put(
                `api/updateDecision/${id}`,
                Decision
            );
            console.log(update_Decision);
            dispatch(getLeave());
        } catch (err) {
            console.log(err);
        }
    };
export const addAttendance = (attendance) => async (dispatch) => {
    try {
        let Attendance = await axios.post(`api/addAttendance/`, attendance);
        console.log(Attendance);
    } catch (err) {
        console.log(err);
    }
};

export const getAttendance = () => async (dispatch) => {
    try {
        let allAttendance = await axios.get("/api/allAttendance");
        dispatch({ type: GET_ATTENDANCE, payload: allAttendance.data });
    } catch (err) {
        console.log(err);
    }
};

export const AdminuUpdateEmployee = (update) => async (dispatch) => {
    try {
        let updateEmployee = await axios.put(
            `/api/adminUpdateEmployee/${update.id}`,
            update.updateEmployee
        );
        dispatch(get_Employees());
    } catch (err) {
        console.log(err);
    }
};

export const AdminDeleteDepartment = (id) => async (dispatch) => {
    try {
        let deleteDepartment = await axios.delete(
            `api/adminDeleteDepartment/${id}`
        );
        console.log(deleteDepartment);
        dispatch(get_Department());
    } catch (err) {
        console.log(err);
    }
};

export const updateProfileEmployee = (Employee) => async (dispatch) => {
    try {
        let updateProfile = await axios.put(
            `/api/EmployeeUpdateProfile/${Employee.id}`,
            Employee.update
        );
        console.log(updateProfile);
    } catch (err) {
        console.log(err);
    }
};

export const getCurrentEmployee = (id) => async (dispatch) => {
    try {
        let employee = await axios.get(`/api/CurrentEmployee/${id}`);
        dispatch({ type: GET_CURRENT, payload: employee.data });
    } catch (err) {
        console.log(err);
    }
};
