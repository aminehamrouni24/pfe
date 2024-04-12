import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateProfileEmployee } from '../../redux/actions/Employee';
function DashboardE() {
    const [userLogged, setUserLogged] = useState({});
    const dispatch = useDispatch();
     useEffect(() => {
        setUserLogged(jwtDecode(localStorage.getItem("token")).user);

    }, []);
    const [creationDate, setCreationDate] = useState("loading...");
    setTimeout(() => {
        userLogged.creationDate && setCreationDate(userLogged.creationDate.substr(0, 10));
    }, 2000);
    
    const [modify, setModify] = useState(false);
    const [updateProfile, setUpdateProfile] = useState({});
    const handleChange = (e) => {
        setUpdateProfile({ ...updateProfile, [e.target.name]: e.target.value });
    };
    const handleModify = () => {
        setModify(true);
    };
    const handleUpdate = () => {
        setUserLogged({ ...userLogged, ...updateProfile });
       dispatch(
            updateProfileEmployee({ id: userLogged._id, update: updateProfile })
        );
        setModify(false);
    };
  return (
    <div> <div class="wrapper">
    <div class="profile container content">
        <div class="row">
            {/*<div class="col-md-3 md-margin-bottom-40 ">
                <img
                    src="https://www.gravatar.com/avatar/0500b2ab42f89e6307060d3f45458c97?d=mm&amp;s=250"
                    class="img-responsive profile-img margin-bottom-20"
                    style={{
                        border: "1px solid #ddd",
                        margin: "0 auto",
                    }}
                    alt="ProfileImage"
                />*/}

                <p></p>
                <h3 class="text-center">{`${
                    userLogged && userLogged.Name
                } ${userLogged && userLogged.lastName}`}</h3>
                <h6 class="text-center">
                    {userLogged && userLogged.department}
                </h6>
                <h6
                    class="service-block-u"
                    style={{ textAlign: "center", padding: "10px" }}
                >
                    <strong>Start work At : </strong> {creationDate}
                </h6>
                <p></p>
                <hr />

             <div class="margin-bottom-50"></div>
            </div>

            <div class="col-md-9">
            <div class="profile-body">
            <div class="row margin-bottom-20">
            <div class="col-sm-6">
            <div class="panel panel-profile no-bg">
            <div class="panel-heading overflow-h  service-block-u">
             <h2 class="panel-title heading-sm pull-left" style={{ color: "#000" }} >
            <i class="fa fa-user"></i>Personal Details </h2>
             <i class="fa fa-pencil" onClick={handleModify}
             style={{ color: "#000", cursor: "pointer",transform:"translateX(250px) scale(1.2)",}}></i>
             </div>
             <div class="panel-body panelHolder">
             <table class="table table-light margin-bottom-0">
               <tbody>
                <tr>
                <td> <span class="primary-link"> Name</span></td>
                <td> {modify ? ( <input  onChange={handleChange } 
                type="text"
                class="form-control"
                 name="Name"
                placeholder="Name"/> ) : (`${userLogged && userLogged.Name} `)} 
                </td>
                </tr>
                 <tr>
                 <td><span class="primary-link">Last Name </span> </td>
                <td> {" "}{modify ? (<input onChange={handleChange}
                type="text"
                 className="form-control"
                 name="lastName"
                 placeholder="Last Name"/>) : (`${userLogged &&userLogged.lastName }` )}
                </td>
                 </tr>
                 <tr>
                  <td>
                                                    <span class="primary-link">
                                                        Date of Birth
                                                    </span>
                                                </td>
                                                <td>
                                                    {modify ? (
                                                        <input
                                                            onChange={
                                                                handleChange
                                                            }
                                                            type="date"
                                                            class="form-control"
                                                            name="DateOfBirth"
                                                            readonly
                                                        />
                                                    ) : (
                                                        userLogged &&
                                                        userLogged.DateOfBirth
                                                    )}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span class="primary-link">
                                                        Gender
                                                    </span>
                                                </td>
                                                <td>
                                                    {modify ? (
                                                        <div class="col-md-9">
                                                            <select
                                                                class="form-control"
                                                                name="gender"
                                                                onChange={
                                                                    handleChange
                                                                }
                                                            >
                                                                <option value="male">
                                                                    Male
                                                                </option>
                                                                <option value="female">
                                                                    Female
                                                                </option>
                                                            </select>
                                                        </div>
                                                    ) : (
                                                        userLogged &&
                                                        userLogged.gender
                                                    )}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span class="primary-link">
                                                        Email
                                                    </span>
                                                </td>
                                                <td>
                                                    {userLogged &&
                                                        userLogged.email}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span class="primary-link">
                                                        Phone
                                                    </span>
                                                </td>
                                                <td>
                                                    {modify ? (
                                                        <div class="col-md-9">
                                                            <input
                                                                onChange={
                                                                    handleChange
                                                                }
                                                                type="text"
                                                                class="form-control"
                                                                name="phone"
                                                                placeholder="Phone"
                                                            />
                                                        </div>
                                                    ) : (
                                                        userLogged &&
                                                        userLogged.phone
                                                    )}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span class="primary-link">
                                                        Local Address
                                                    </span>
                                                </td>
                                                <td>
                                                    {modify ? (
                                                        <div class="col-md-9">
                                                            <textarea
                                                                onChange={
                                                                    handleChange
                                                                }
                                                                class="form-control"
                                                                name="address"
                                                                rows="3"
                                                            ></textarea>
                                                        </div>
                                                    ) : (
                                                        userLogged &&
                                                        userLogged.address
                                                    )}
                                                </td>
                                            </tr>
                                            {modify ? (
                                                <button
                                                    type="button"
                                                    data-dismiss="modal"
                                                    class="btn purple btn-sm margin-bottom-10 "
                                                    onClick={
                                                        handleUpdate
                                                    }
                                                >
                                                    Submit
                                                </button>
                                            ) : null}
                                            {/* <tr>
                                                <td>
                                                    <span class="primary-link">
                                                        Permanent
                                                        Address
                                                    </span>
                                                </td>
                                                <td>
                                                    9744 Balistreri
                                                    Ville Apt. 339 Port
                                                    Karinemouth, MN
                                                    95181
                                                </td>
                                            </tr> */}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div class="panel panel-profile no-bg margin-top-20">
                                <div class="panel-heading overflow-h service-block-u">
                                    <h2
                                        class="panel-title heading-sm pull-left"
                                        style={{ color: "#000" }}
                                    >
                                        <i class="fa fa-briefcase"></i>
                                        Company Details
                                    </h2>
                                </div>
                                <div class="panel-body panelHolder">
                                    <table class="table table-light margin-bottom-0">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span class="primary-link">
                                                        Employee ID
                                                    </span>
                                                </td>
                                                <td>
                                                    {userLogged &&
                                                        userLogged._id}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span class="primary-link">
                                                        Department
                                                    </span>
                                                </td>
                                                <td>
                                                    {userLogged &&
                                                        userLogged.department}
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <span class="primary-link">
                                                        Date of Joining
                                                    </span>
                                                </td>
                                                <td>{creationDate}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />
                </div>
            </div>

            <div
                class="modal fade show_notice in"
                tabindex="-1"
                role="dialog"
                aria-labelledby="myModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button
                                aria-hidden="true"
                                data-dismiss="modal"
                                class="close"
                                type="button"
                            >
                                ×
                            </button>
                            <h4
                                id="myLargeModalLabel"
                                class="modal-title show-notice-title"
                            ></h4>
                        </div>
                        <div
                            class="modal-body"
                            id="show-notice-body"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default DashboardE