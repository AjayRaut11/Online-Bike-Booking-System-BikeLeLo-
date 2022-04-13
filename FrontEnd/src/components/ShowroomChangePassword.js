import React, { useState } from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import mystore from './store';
import validator from 'validator';

function ShowroomChangePassword() {

    let navigate = useNavigate();
    const [usrid, setuserid] = useState("");
    const [cpwd, setCpwd] = useState("");
    const [npwd, setNpwd] = useState("");
    const [errorMessage, setErrorMessage] = useState('');

    const Cancel = () => {
        navigate("/ShowroomHome");
    }

     //Password
     const validate = (value) => {

        if (validator.isStrongPassword(value, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {

            setErrorMessage('')
        } else {
            setErrorMessage('Too short !! Must contain atleast one uppercase,lowercase,special character,number ')
        }
    }
    const submitForm = (ev) => {
        ev.preventDefault();
        if ((usrid === (JSON.parse(localStorage.getItem("loggedinuser"))).loginid.userid) && (cpwd === (JSON.parse(localStorage.getItem("loggedinuser"))).loginid.pwd)) {
            const reqOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userid: usrid,
                    pwd: cpwd,
                    npwd: npwd
                })
            }
            fetch("http://localhost:8081/uchngpwd", reqOptions)
                .then(resp => resp.json())
                .then(obj => {
                    if (obj) {
                        mystore.dispatch({ type: 'LOGGEDOUT' });
                        console.log("Loggedin: " + mystore.getState().loggedin);
                        localStorage.removeItem("loggedinuser");
                        alert("Password changed successfully, Please login again..");
                        navigate("/login");
                    } else {
                        alert("Error!!!")
                    }
                });
        } else {
            alert("Incorrect credentials! Please try again");
        }
    }

    const logoutUser = () => {
        mystore.dispatch({ type: 'LOGGEDOUT' });
        console.log("Loggedin: " + mystore.getState().loggedin);
        localStorage.removeItem("loggedinuser");
        localStorage.setItem("logState", false);
        navigate("/");
    }

    return (
        <div className="container-fluid">
            <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/ShowroomHome">BikeLeLo</Navbar.Brand>
                    <span style={{ margin: '20px' }}></span>
                    <Nav>
                        <Nav.Link href="/ShowroomHome">Home</Nav.Link>
                        <span style={{ margin: '10px' }}></span>
                        <Nav.Link href="/ShowroomUpdate">Update Profile</Nav.Link>
                        <span style={{ margin: '10px' }}></span>
                        <Nav.Link href="/updatestatus">Update Booking Status</Nav.Link>
                        <span style={{ margin: '10px' }}></span>
                        <Nav.Link href="" onClick={logoutUser}>Logout</Nav.Link>
                    </Nav>
                </Container>
            </Navbar><br/>
            </div>
            <div>
                <div style={{ backgroundColor: 'white', width: '50%', height: '50%', marginTop: '5%', marginLeft: '25%', marginRight: '25%', opacity: 0.8 }}>
                    <div>
                        <div className="col-md-12 login-sec"><br/>
                        <h3 className="text-center">Change Password</h3>
                            <form><br />
                                <div className="form-group">
                                    <label>User ID</label>
                                    <input type="text" name="usrid" className="form-control" placeholder='Enter your userid' onChange={(ev) => setuserid(ev.target.value)} />
                                </div>
                                
                                <div className="form-group">
                                    <label>Current Password</label>
                                    <input type="text" name="cpwd" className="form-control" placeholder='Enter current password'  onChange={(ev) => setCpwd(ev.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>New Password</label>
                                    <input type="text" name="npwd" className="form-control" placeholder="Enter new password" onChangeCapture={(ev) => validate(ev.target.value)} onChange={(ev) => setNpwd(ev.target.value)} />
                                    <span style={{ fontWeight: 'normal', color: 'red', }}>{errorMessage}</span>
                                </div><br />
                                <div>
                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        <input type="submit" className="btn btn-primary btn-block" value="Submit" onClick={submitForm} />
                                    </div><span style={{ margin: '10px' }}></span>
                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" className="btn btn-primary btn-block" onClick={Cancel}>Cancel</button>
                                    </div>
                                </div>
                                <br /><br />
                            </form>
                        </div>
                    </div>
                </div>
            </div><br /><br /><br />
        </div >
    );
}

export default ShowroomChangePassword;