import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar } from "react-bootstrap";
import mystore from './store';
import validator from 'validator'

function ShowroomRegister() {

    let navigate = useNavigate();
    
    const [ques, setQues] = useState([]);
    const [swname, setSwname] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [landmark, setLandmark] = useState("");
    const [pincode, setPincode] = useState("");
    const [usrid, setUsrid] = useState("");
    const [pwd, setPwd] = useState("");
    const [que, setQue] = useState("");
    const [ans, setAns] = useState("");
    const [hint, setHint] = useState("");
    const [city, setCity] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const [emailError, setEmailError] = useState('');
    const [moberror, setMoberror] = useState('');
    const [idMessage, setIdMessage] = useState('');

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

    //Userid
    const validateid = (value) => {
        console.log(value);
        const reqOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userid: value
            })
        }
        fetch("http://localhost:8081/uidvalidcheck", reqOptions)
            .then(resp => resp.json())
            .then(obj => {
                console.log(obj);
                if (obj) {
                    setIdMessage('');
                } else {
                    setIdMessage('Userid not available, please try different one!');
                }
            })
            .catch(() => {
                alert("Error!! Try Again");
            });
    }

    const Cancel = () => {
        navigate("/AdminHome");
    }

    const submitForm = (ev) => {
        ev.preventDefault();
        const reqOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                swname: swname,
                email: email,
                contact: contact,
                paddress: landmark,
                cityid: city,
                pincode: pincode,
                userid: usrid,
                pwd: pwd,
                securityque: que,
                ans: ans,
                hint: hint,
                role: "Showroom",
                accstate: 1
            })
        }
        fetch("http://localhost:8081/showroomsave", reqOptions)
            .then(resp => resp.json())
            .then(obj => {
                console.log(obj);
                console.log(obj);
                alert("Registration Successful");
                navigate("/AdminHome");
            })
            .catch(() => {
                alert("Try Again!!!");
                <h1>Try Again!!!</h1>
            });
    }

    const logoutUser = () => {
        mystore.dispatch({ type: 'LOGGEDOUT' });
        console.log("Loggedin: " + mystore.getState().loggedin);
        localStorage.removeItem("loggedinuser");
        localStorage.removeItem("swlist");
        localStorage.removeItem("allusrinfo");
        sessionStorage.removeItem("allbook");
        localStorage.setItem("logState", false);
        navigate("/");
    }

    return (
        <div className="container-fluid">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/AdminHome">BikeLeLo</Navbar.Brand>
                    <span style={{ margin: '20px' }}></span>
                    <Nav>
                        <Nav.Link href="/AdminHome">Home</Nav.Link>
                        <span style={{ margin: '3px' }}></span>
                        <Nav.Link href="/ShowroomRegister">Register Showroom</Nav.Link>
                        <span style={{ margin: '3px' }}></span>
                        <Nav.Link href="/DeleteShowroom">Delete Showroom</Nav.Link>
                        <span style={{ margin: '3px' }}></span>
                        <Nav.Link href="/DeleteCustomer">Delete User</Nav.Link>
                        <span style={{ margin: '3px' }}></span>
                        <Nav.Link href="/reportGenerate">Generate Reports</Nav.Link>
                        {/*<span style={{ margin: '3px' }}></span>
                        <Nav.Link href="/AdminRegister">Register Admin</Nav.Link>*/}
                        <span style={{ margin: '3px' }}></span>
                        <Nav.Link href="/AddBike">Add Bike</Nav.Link>
                        <span style={{ margin: '3px' }}></span>
                        <Nav.Link href="" onClick={logoutUser}>Logout</Nav.Link>
                    </Nav>
                </Container>
            </Navbar><br />
            <div style={{ backgroundColor: 'white', width: '70%', height: '50%', marginTop: '3%', marginLeft: '15%', marginRight: '15%', opacity: 0.8 }}>
                <div className="col-md-12 login-sec">
                    <form><br />
                        <h3 className="text-center">Showroom Registration</h3><br />
                        <div className="form-group">
                            <label>Showroom Name</label>
                            <input type="text" name="swname" required className="form-control" placeholder="Enter Showroom Name" onChange={(ev) => setSwname(ev.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Showroom Contact No</label>
                            <input type="text" name="contact" required className="form-control" placeholder="Enter Contact No" onBlur={(ev) => validateCont(ev.target.value)} onChange={(ev) => setContact(ev.target.value)} />
                            <span style={{ fontWeight: 'normal', color: 'red', }}>{moberror}</span>
                        </div>
                        <div className="form-group">
                            <label>Showroom Email</label>
                            <input type="text" name="email" required className="form-control" placeholder="Enter Email" onChange={(ev) => { setEmail(ev.target.value); validateEmail(ev) }} />
                            <span style={{ fontWeight: 'normal', color: 'red', }}>{emailError}</span>
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" name="landmark" required className="form-control" placeholder="Enter Address" onChange={(ev) => setLandmark(ev.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Pincode</label>
                            <input type="text" name="pincode" required className="form-control" placeholder="Enter Pincode" onChange={(ev) => setPincode(ev.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>City<span style={{ margin: '8px' }}></span></label>
                            <select name="City" required onChange={(ev) => setCity(ev.target.value)}>
                                <option value="">Select City</option>
                                <option value="1">Pune</option>
                                <option value="2">Mumbai</option>
                                <option value="3">Nagpur</option>
                                <option value="4">Satara</option>
                                <option value="5">Ahmednagar</option>
                                <option value="6">Kolhapur</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Showroom userid</label>
                            <input type="text" name="usrid" className="form-control" placeholder="Enter User ID" onBlur={(ev) => validateid(ev.target.value)} onChange={(ev) => setUsrid(ev.target.value)} />
                            <span style={{ fontWeight: 'normal', color: 'red', }}>{idMessage}</span>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="pwd" required className="form-control" placeholder="Enter Showroom Password" onChangeCapture={(ev) => validate(ev.target.value)} onChange={(ev) => setPwd(ev.target.value)} />
                            <span style={{ fontWeight: 'normal', color: 'red', }}>{errorMessage}</span>
                        </div>
                        <div className="form-group">
                        <label>Security Question<span style={{ margin: '8px' }}></span></label>
                            <select name='que' required onClick={fetchall} onChange={(ev) => setQue(ev.target.value)}>
                            <option>Select Question</option>
                            {
                                ques.map((q) => {
                                    return (<option value={q.quetext}>{q.quetext}</option>)
                                })
                            }
                        </select>
                        </div>
                        <div className="form-group">
                            <label>Answer</label>
                            <input type="text" name="ans" required className="form-control" placeholder="Enter Answer" onChange={(ev) => setAns(ev.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Hint</label>
                            <input type="text" name="hint" required className="form-control" placeholder="Enter Hint" onChange={(ev) => setHint(ev.target.value)} />
                        </div><br />
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <input type="submit" className="btn btn-primary btn-block" value="Submit" onClick={submitForm} />
                        </div><span style={{ margin: '10px' }}></span>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-primary btn-block" onClick={Cancel}>Cancel</button>
                        </div>
                        <br /><br /><br />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ShowroomRegister;