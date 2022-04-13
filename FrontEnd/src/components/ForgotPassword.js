import React, { useState } from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import validator from 'validator';

function ForgotPassword() {

    let navigate = useNavigate();

    const [usrid, setuserid] = useState("");
    const [que, setQue] = useState("");
    const [ans, setAns] = useState("");
    const [pwd, setPwd] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const fetchque = (value) => {
        console.log("fetching Ques for userid: " + value);
        setuserid(value);
        const reqOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userid: value,
            })
        }
        fetch("http://localhost:8081/fetchque", reqOptions)
            .then(resp => resp.json())
            .then(obj => {
                if (obj !== null) {
                    console.log("Question: " + JSON.parse(JSON.stringify(obj)).securityque);
                    sessionStorage.setItem("temp1", JSON.stringify(obj));
                    setQue((JSON.parse(sessionStorage.getItem("temp1"))).securityque);
                    if (((JSON.parse(sessionStorage.getItem("temp1"))).accstate !== 1)) {
                        alert("Account not Active, Please contact Admin!");
                        sessionStorage.removeItem("temp1");
                        navigate("/login");
                    }
                } else {
                    alert("Account Not found! Please check your credentials..")
                }
            });
    }

    const Cancel = () => {
        navigate("/");
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
        if ((usrid === (JSON.parse(sessionStorage.getItem("temp1"))).userid) && (ans === (JSON.parse(sessionStorage.getItem("temp1"))).ans)) {
            const reqOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userid: usrid,
                    securityque: que,
                    ans: ans,
                    pwd: pwd
                })
            }
            fetch("http://localhost:8081/resetpwd", reqOptions)
                .then(resp => resp.json())
                .then(obj => {
                    if (obj) {
                        alert("Password changed successfully, Please login..");
                        navigate("/login");
                    } else {
                        alert("Error!!!")
                    }
                });
        } else {
            alert("Incorrect Answer! Please enter correct answer to proceed");
        }
    }

    return (
        <div className="container-fluid">
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">BikeLeLo</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/searchbike">Search Bike</Nav.Link>
                            <span style={{ margin: '10px' }}></span>
                            <Nav.Link href="/comparebike">Compare Bike</Nav.Link>
                            <span style={{ margin: '10px' }}></span>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <span style={{ margin: '10px' }}></span>
                            <Nav.Link href="/UserRegister">Register User</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
            <div>
                <div style={{ backgroundColor: 'white', width: '50%', height: '50%', marginTop: '8%', marginLeft: '25%', marginRight: '25%', opacity: 0.8 }}>
                    <div>
                        <div className="col-md-12 login-sec">
                            <form><br />
                                <h3 className="text-center">Sign In</h3>
                                <div className="form-group">
                                    <label>User ID</label>
                                    <input type="text" name="usrid" className="form-control" placeholder='Enter your userid' onChange={(ev) => fetchque(ev.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Question<span style={{ margin: '8px' }}></span></label>
                                    <span style={{ margin: '10px' }}></span>{que}
                                </div>
                                <div className="form-group">
                                    <label>Enter Answer</label>
                                    <input type="text" name="ans" className="form-control" value={ans} onChange={(ev) => setAns(ev.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="text" name="pwd" className="form-control" placeholder="Enter password" onChangeCapture={(ev) => validate(ev.target.value)} onChange={(ev) => setPwd(ev.target.value)} />
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
                                <br /><br /><br />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ForgotPassword;