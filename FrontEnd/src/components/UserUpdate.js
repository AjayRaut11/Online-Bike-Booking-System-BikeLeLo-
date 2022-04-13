import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar } from "react-bootstrap";
import mystore from './store';
import validator from 'validator'

function UserUpdate() {

    let navigate = useNavigate();

    const [fname, setFname] = useState((JSON.parse(localStorage.getItem("loggedinuser"))).fname);
    const [lname, setLname] = useState((JSON.parse(localStorage.getItem("loggedinuser"))).lname);
    const [dob, setDob] = useState((JSON.parse(localStorage.getItem("loggedinuser"))).dob);
    const [email, setEmail] = useState((JSON.parse(localStorage.getItem("loggedinuser"))).email);
    const [paddress, setAddr] = useState((JSON.parse(localStorage.getItem("loggedinuser"))).paddress);
    const [contact, setContact] = useState((JSON.parse(localStorage.getItem("loggedinuser"))).contact);
    const [que, setSecurityq] = useState((JSON.parse(localStorage.getItem("loggedinuser"))).loginid.securityque);
    const [ans, setAns] = useState((JSON.parse(localStorage.getItem("loggedinuser"))).loginid.ans);
    const [hint, setHint] = useState((JSON.parse(localStorage.getItem("loggedinuser"))).loginid.hint);
    const [emailError, setEmailError] = useState('');
    const [moberror, setMoberror] = useState('');
    const [ques, setQues] = useState([]);
    
    const fetchall = () => {
        const reqOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch("http://localhost:8081/fetchallque", reqOptions)
            .then(resp => resp.json())
            .then(obj => {
                console.log(obj);
                sessionStorage.setItem("qlist", JSON.stringify(obj));
                setQues(JSON.parse(sessionStorage.getItem("qlist")));
            })
            .catch(() => {
                alert("Error!! Try Again");
            });
    }

    //Email
    const emailRegex = /^\S+@\S+\.\S+$/;
    const validateEmail = (event) => {
        const email = event.target.value;
        if (emailRegex.test(email)) {
            ;
            setEmailError('');
        } else {

            setEmailError('Please enter a valid email!');
        }
    };

    //Datedob
    const disableDates = () => {
        const today = new Date();
        const dd = String(today.getDate()+1).padStart(2, "0");
        const mm = String(today.getMonth()).padStart(2, "0"); //January is 0!
        const yyyy =String(today.getFullYear()-16);
        return yyyy + "-" + mm + "-" + dd;
      } 

    //Mobile number
    const mobRegex = /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;
    const validateCont = (value) => {
        const cont = value;
        if (mobRegex.test(cont)) {
            ;
            setMoberror('');
        } else {
            setMoberror('Please enter a valid Contact!');
        }
    };

    const submitForm = (ev) => {
        ev.preventDefault();
        const reqOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                loginid: (JSON.parse(localStorage.getItem("loggedinuser"))).loginid.loginid,
                fname: fname,
                lname: lname,
                dob: dob,
                contact: contact,
                email: email,
                paddress: paddress,
                securityque: que,
                ans: ans,
                hint: hint
            })
        }
        fetch("http://localhost:8081/usrupdate", reqOptions)
            .then(resp => resp.json())
            .then(obj => {
                console.log("User Update: " + obj);
                if (obj) {
                    alert("Details Updated");
                    navigate("/UserHome");
                }
            });
    }

    const Cancel = () => {
        navigate("/UserHome");
    }

    const logoutUser = () => {
        sessionStorage.removeItem("Fbike");
        sessionStorage.removeItem("Sbike");
        sessionStorage.removeItem("colors1");
        sessionStorage.removeItem("bikelist");
        sessionStorage.removeItem("colors2");
        sessionStorage.removeItem("tax1");
        sessionStorage.removeItem("showrooms1");
        sessionStorage.removeItem("tax");
        sessionStorage.removeItem("showrooms2");
        sessionStorage.removeItem("Sshowroom1");
        sessionStorage.removeItem("Scolor2");
        sessionStorage.removeItem("Scolor1");
        sessionStorage.removeItem("Sprice");
        sessionStorage.removeItem("blist");
        sessionStorage.removeItem("ucanbookings");
        sessionStorage.removeItem("uallbookings");
        sessionStorage.removeItem("uactbookings");
        localStorage.removeItem("allblist");
        mystore.dispatch({ type: 'LOGGEDOUT' });
        console.log("Loggedin: " + mystore.getState().loggedin);
        localStorage.removeItem("loggedinuser");
        localStorage.setItem("logState", false);
        navigate("/");
    }

    return (
        <div className="container-fluid">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/UserHome">BikeLeLo</Navbar.Brand>
                    <span style={{ margin: '20px' }}></span>
                    <Nav>
                        <Nav.Link href="/UserHome" >Home</Nav.Link>
                        <span style={{ margin: '3px' }}></span>
                        <Nav.Link href="/UserUpdate">Update Profile</Nav.Link>
                        <span style={{ margin: '3px' }}></span>
                        <Nav.Link href="/UserSearchBike">Search Bike</Nav.Link>
                        <span style={{ margin: '3px' }}></span>
                        <Nav.Link href="/usercomparebike">Compare Bike</Nav.Link>
                        <span style={{ margin: '3px' }}></span>
                        <Nav.Link href="/Viewbookings">View Bookings</Nav.Link>
                        <span style={{ margin: '3px' }}></span>
                        <Nav.Link href="" onClick={logoutUser}>Logout</Nav.Link>
                    </Nav>
                </Container>
            </Navbar><br/>
            <Nav.Link href="/UserChangePassword"><span style={{ marginLeft: '75%' }}></span>Change Password</Nav.Link>
            <div style={{ backgroundColor: 'white', width: '70%', height: '50%', marginTop: '3%', marginLeft: '15%', marginRight: '15%', opacity: 0.8 }}>
                <div className="col-md-12 login-sec">
                    <form><br />
                        <h3 className="text-center">User Details Update: </h3><br />
                        <div className="form-group">
                            <label>Enter First Name:</label>
                            <input type="text" name="fname" className="form-control" value={fname} onChange={(ev) => setFname(ev.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" name="lname" className="form-control" value={lname} onChange={(ev) => setLname(ev.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" name="email" className="form-control" value={email} onChange={(ev) => { setEmail(ev.target.value); validateEmail(ev) }} />
                            <span style={{ fontWeight: 'normal', color: 'red', }}>{emailError}</span>
                        </div>
                        <div className="form-group">
                            <label>Date Of Birth</label>
                            <input type="date" name="dob" className="form-control" value={dob} min={"1931-01-01"} max={disableDates()} onChange={(ev) => setDob(ev.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" name="paddress" className="form-control" value={paddress} onChange={(ev) => setAddr(ev.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Contact</label>
                            <input type="text" name="contact" className="form-control" value={contact} onChangeCapture={(ev) => validateCont(ev.target.value)} onChange={(ev) => setContact(ev.target.value)} />
                            <span style={{ fontWeight: 'normal', color: 'red', }}>{moberror}</span>
                        </div>
                        <div className="form-group">
                            <label>User ID</label>
                            <span style={{ margin: '10px' }}></span>{(JSON.parse(localStorage.getItem("loggedinuser"))).loginid.userid}
                        </div>
                        <div className="form-group">
                            <label>Question<span style={{ margin: '8px' }}></span></label>
                            <select name='que' required onClick={fetchall} onChange={(ev) => setSecurityq(ev.target.value)}>
                                <option>Select Question</option>
                                {
                                    ques.map((q) => {
                                        return (<option value={q.quetext}>{q.quetext}</option>)
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Enter Answer</label>
                            <input type="text" name="ans" className="form-control" value={ans} onChange={(ev) => setAns(ev.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Hint</label>
                            <input type="text" name="hint" className="form-control" value={hint} onChange={(ev) => setHint(ev.target.value)} />
                        </div><br />
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <input type="submit" className="btn btn-primary btn-block" value="Update" onClick={submitForm} />
                        </div><span style={{ margin: '10px' }}></span>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-primary btn-block" onClick={Cancel}>Cancel</button>
                        </div>
                        <br /><br />
                    </form>
                </div>
            </div><br /><br /><br />
        </div>
    );
}
export default UserUpdate;
