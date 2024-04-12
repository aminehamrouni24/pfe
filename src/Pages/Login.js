import React from "react";
import { useState } from "react";
import { employee_login, admin_login } from "../redux/actions/user";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const handleEmployee = () => {
    var Manager = document.getElementById("Manager");
    var Employee = document.getElementById("Employee");
    var manager = document.getElementById("manager");
    var employee = document.getElementById("employee");

    Manager.classList.remove("active");
    Employee.classList.add("active");
    manager.classList.remove("active");
    employee.classList.add("active");
  };
  const handleManager = () => {
    var manager = document.getElementById("Manager");
    var employee = document.getElementById("Employee");
    var Manager = document.getElementById("manager");
    var Employee = document.getElementById("employee");
    Manager.classList.add("active");
    Employee.classList.remove("active");
    manager.classList.add("active");
    employee.classList.remove("active");
  };
  const [login, setLogin] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    dispatch(employee_login(login, navigate));
  };
  const [adminLogin, setAdminLogin] = useState({});

  // const adminChange = (e) => {
  //     setAdminLogin({ ...adminLogin, [e.target.name]: e.target.value });
  // };
  const adminSubmit = () => {
    dispatch(admin_login(login, navigate));
  };
  return (
    <div class="container">
      <div class="reg-block">
        <div class="reg-block-header">
          <h2>
            <img
              src="https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_640.png"
              height="80px"
            />
          </h2>
        </div>
        <div class="tab-v2">
          <ul class="nav nav-tabs">
            <li class="" id="Employee" onClick={handleEmployee}>
              <a>
                <i class="fa fa-user" style={{ paddingRight: "10px" }}></i>
                Employee
              </a>
            </li>
            <li class="active" id="Manager" onClick={handleManager}>
              <a>
                <i class="fa fa-lock" style={{ paddingRight: "10px" }}></i>
                Manager
              </a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade active in" id="employee">
              <div id="login-form" class="login-form">
                <input name="_token" type="hidden" />
                <div class="form-group rem margin-bottom-20">
                  <div>
                    <div class="input-group">
                      <span class="input-group-addon">
                        <i class="fa fa-envelope"></i>
                      </span>
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div class="form-group rem margin-bottom-20">
                  <div>
                    <div class="input-group">
                      <span class="input-group-addon">
                        <i class="fa fa-lock"></i>
                      </span>
                      <input
                        type="password"
                        class="form-control"
                        name="password"
                        onChange={handleChange}
                        placeholder="Password"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-10 col-md-offset-1">
                    <button
                      type="submit"
                      class="btn-u btn-block input-group"
                      id="submitbutton"
                      onClick={handleSubmit}
                    >
                      Login
                    </button>
                  </div>
                </div>

                <hr />
                <div class="forget-password">
                  <h4>Forgot your password?</h4>

                  <p>
                    no worries, click{" "}
                    <a style={{ color: "#F44336" }} id="forget-password">
                      here{" "}
                    </a>
                    front To Reset Your Password
                  </p>
                </div>
              </div>
            </div>

            <div class="tab-pane fade in" id="manager">
              <div class="login-form-admin" id="login-form-admin">
                <input name="_token" type="hidden" />
                <div class="form-group rem margin-bottom-20">
                  <div>
                    <div class="input-group">
                      <span class="input-group-addon">
                        <i class="fa fa-envelope"></i>
                      </span>
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        id="email"
                        placeholder="Email"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group rem margin-bottom-20">
                  <div>
                    <div class="input-group">
                      <span class="input-group-addon">
                        <i class="fa fa-lock"></i>
                      </span>
                      <input
                        type="password"
                        class="form-control"
                        name="password"
                        id="password"
                        placeholder="Password"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-10 col-md-offset-1">
                    <button
                      type="submit"
                      class="btn-u btn-block input-group"
                      id="submitbuttonAdmin"
                      onClick={adminSubmit}
                    >
                      Login
                    </button>
                  </div>
                </div>
                <hr />
                <div class="forget-password">
                  <h4>Forgot your password?</h4>
                  <p>
                    no worries, click{" "}
                    <a style={{ color: "#F44336" }} id="forget-password-admin">
                      here{" "}
                    </a>
                    front.ToResetYourPassword
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
