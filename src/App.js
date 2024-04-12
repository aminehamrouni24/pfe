import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

// Import components
import Login from "./Pages/Login";
import Navigation from "./components/Navigation/Navigation";
import Department from "./components/ManagerDepartement/Department";
import Employee from "./components/ManagerEmployee/Employee";
import AddEmployee from "./components/ManagerEmployee/AddEmployee";
import ViewAttendance from "./components/ManagerAttendance/ViewAttendance";
import LeaveList from "./components/ManagerLeaveList/LeaveList";
import MarkAttendance from "./components/ManagerAttendance/Markattendance";
import EmployeeNavigation from "./components/EmployeeDashboard/EmployeeNavigation";
import Dashboard from "./components/Manager Dashboard/Dashboard";
import DashboardE from "./components/EmployeeDashboard/DashboardE";
import Leave from "./components/EmployeeApplyLeave/Leave";
import MyLeave from "./components/EmployeeApplyLeave/MyLeave";
import MyAttendance from "./components/EmployeeAttendance/MyAttendance";

function App() {
  const [userLogged, setUserLogged] = useState("");

  const isLoggedIn = () => {
    return localStorage.getItem("token") ? true : false;
  };
  useEffect(() => {
    if (isLoggedIn()) {
      setUserLogged(jwtDecode(localStorage.getItem("token")).user.role);
    }
  }, [isLoggedIn()]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn() ? (
              userLogged === "admin" ? (
                <Navigate to="/dashboardA" replace />
              ) : (
                <Navigate to="/dashboardE" replace />
              )
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route path="/login" element={<Login />} />

        {userLogged && (
          <>
            <Route
              path="/dashboardA"
              element={
                userLogged === "admin" ? (
                  <Dashboard />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route
              path="/dashboardE"
              element={
                userLogged === "Employee" ? (
                  <DashboardE />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route
              path="/adminDepartment"
              element={
                userLogged === "admin" ? (
                  <Department />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route
              path="/adminEmployee"
              element={
                userLogged === "admin" ? (
                  <Employee />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route
              path="/adminAddEmployee"
              element={
                userLogged === "admin" ? (
                  <AddEmployee />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route
              path="/adminViewAttendance"
              element={
                userLogged === "admin" ? (
                  <ViewAttendance />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route
              path="/AdminLeaveList"
              element={
                userLogged === "admin" ? (
                  <LeaveList />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route
              path="/AdminMarkAttendance"
              element={
                userLogged === "admin" ? (
                  <MarkAttendance />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route
              path="/EmployeeApplyLeave"
              element={
                userLogged === "Employee" ? (
                  <Leave />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route
              path="/EmployeemyLeave"
              element={
                userLogged === "Employee" ? (
                  <MyLeave />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route
              path="/EmployeeMyAttendance"
              element={
                userLogged === "Employee" ? (
                  <MyAttendance />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
          </>
        )}

        {/* Handle 404 - Page Not Found */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
