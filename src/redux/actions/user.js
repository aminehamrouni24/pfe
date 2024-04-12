import axios from "axios";
import {
    REGISTER_USER,
    LOGIN_USER,
    CURRENT_USER,
    LOGOUT_USER,
} from "../constants/actions-types";
import { get_Employees } from "./Employee";

export const register = (user, history) => async (dispatch) => {
    try {
        let result = await axios.post("api/users/register", user);
        if (result.data.status) {
            // dispatch({ type: REGISTER_USER, payload: result.data });
            dispatch(get_Employees());
            history.push("./adminEmployee");
        } else {
            alert(result.data.msg);
        }
    } catch (error) {
        if (error) {
            console.log(error);
        }
    }
};
export const current = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        let result = await axios.get("api/users/current", config);

        if (result.data.status) {
            dispatch({ type: CURRENT_USER, payload: result.data });
        } else {
            console.log(result.data.msg);
        }
    } catch (error) {
        console.log(error);
    }
};
export const employee_login = (login, history) => async (dispatch) => {
    try {
        let result = await axios.post("/api/users/login", login);

        if (result.data.status) {
            dispatch({ type: LOGIN_USER, payload: result.data });
            history.push("/dashboardE");
        } else {
            alert(result.data.msg);
        }
    } catch (error) {
        console.log(error);
    }
};
export const admin_login = (login, history) => async (dispatch) => {
    try {
        let result = await axios.post("/api/users/adminLogin", login);

        if (result.data.status) {
            dispatch({ type: LOGIN_USER, payload: result.data });
            history.push("/dashboardA");
        } else {
            alert(result.data.msg);
        }
    } catch (error) {
        console.log(error);
    }
};

export const logout = () => {
    return {
        type: LOGOUT_USER,
    };
};
