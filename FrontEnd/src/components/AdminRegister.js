import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import validator from 'validator'

function AdminRegister() {

    let navigate = useNavigate();

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [dob, setDob] = useState("");
    const [email, setEmail] = useState("");
    const [paddress, setAddr] = useState("");
    const [contact, setContact] = useState("");
    const [usrid, setUsrid] = useState("");
    const [pwd, setPwd] = useState("");
    const [securityque, setSecurityq] = useState("");
    const [ans, setAns] = useState("");
    const [hint, setHint] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const [emailError, setEmailError] = useState('');
    const [moberror, setMoberror] = useState('');
    const [idMessage, setIdMessage] = useState('');
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

    const Cancel = () => {
        navigate("/AdminHome");
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

    const submitForm = (ev) => {
        ev.preventDefault();
        const reqOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fname: fname,
                lname: lname,
                dob: dob,
                email: email,
                paddress: paddress,
                contact: contact,
                userid: usrid,
                pwd: pwd,
                securityque: securityque,
                ans: ans,
                hint: hint,
                role: "Admin",
                accstate: 1
            })
        };
        fetch("http://localhost:8081/usersave", reqOptions)
            .then(resp => resp.json())
            .then(obj => {
                console.log(obj);
                console.log(obj);
                alert("Registration Successful");
                navigate("/login");
            })
            .catch(() => {
                alert("Try Again!!!");
                <h1>Try Again!!!</h1>;
            });
    }
    return (
        <div className="container">
            <form>
                <h3>User Registeration</h3><br />
                <div className="form-group">
                    <label>First Name:</label>
                    <input type="text" name="fname" className="form-control" placeholder="Enter First Name" onChange={(ev) => setFname(ev.target.value)} />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" name="lname" className="form-control" placeholder="Enter Last Name" onChange={(ev) => setLname(ev.target.value)} />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" name="email" className="form-control" placeholder="Enter Email" onChange={(ev) => { setEmail(ev.target.value); validateEmail(ev) }} />
                    <span style={{ fontWeight: 'normal', color: 'red', }}>{emailError}</span>
                </div>
                <div className="form-group">
                    <label>Date of Birth</label>
                    <input type="Date" name="dob" className="form-control" placeholder="Enter Birthdate" onChange={(ev) => setDob(ev.target.value)} />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" name="address" className="form-control" placeholder="Enter Address" onChange={(ev) => setAddr(ev.target.value)} />
                </div>
                <div className="form-group">
                    <label>Contact</label>
                    <input type="text" name="contact" className="form-control" placeholder="Enter Contact" onBlur={(ev) => validateCont(ev.target.value)} onChange={(ev) => setContact(ev.target.value)} />
                    <span style={{ fontWeight: 'normal', color: 'red', }}>{moberror}</span>
                </div>
                <div className="form-group">
                    <label>User ID</label>
                    <input type="text" name="usrid" className="form-control" placeholder="Enter User ID" onBlur={(ev) => validateid(ev.target.value)} onChange={(ev) => setUsrid(ev.target.value)} />
                    <span style={{ fontWeight: 'normal', color: 'red', }}>{idMessage}</span>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="text" name="pwd" className="form-control" placeholder="Enter password" onChangeCapture={(ev) => validate(ev.target.value)} onChange={(ev) => setPwd(ev.target.value)} />
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
                    <label>Enter Answer</label>
                    <input type="text" name="ans" className="form-control" placeholder="Enter Answer" onChange={(ev) => setAns(ev.target.value)} />
                </div>
                <div className="form-group">
                    <label>Hint</label>
                    <input type="text" name="hint" className="form-control" placeholder="Hint" onChange={(ev) => setHint(ev.target.value)} />
                </div>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <input type="submit" className="btn btn-primary btn-block" value="Submit" onClick={submitForm} />
                </div><span style={{ margin: '10px' }}></span>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-primary btn-block" onClick={Cancel}>Cancel</button>
                </div>
                <br /><br /><br />
            </form>
        </div>
    );
}

export default AdminRegister;