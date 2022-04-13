import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import mystore from './store';

function EditBook() {
    let navigate = useNavigate();

    const [bookinstatus, setbookinstatus] = useState((JSON.parse(sessionStorage.getItem("Editbook"))));
    const [status, setStatus] = useState("");

    const Cancel = () => {
        navigate("/ShowroomHome");
    }

    const logoutUser = (ev) => {
        mystore.dispatch({ type: 'LOGGEDOUT' });
        console.log("Loggedin: " + mystore.getState().loggedin);
        localStorage.removeItem("loggedinuser");
        localStorage.removeItem("swlist");
        localStorage.removeItem("allusrinfo");
        navigate("/");
    }

    const saveinfo = () => {
        console.log(status);
            const reqOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    bookingid: bookinstatus.bookingid,
                    status: status
                })
            }
            fetch("http://localhost:8081/editstat", reqOptions)
                .then(resp => resp.json())
                .then(obj => {
                    console.log("Booking Update: " + obj);
                    if (obj) {
                        alert("Status Updated");
                        navigate("/ShowroomHome");
                    }
                });
    }

    return (
        <div className="container-fluid">
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
            </Navbar><br />
            <div style={{ backgroundColor: 'white', width: '70%', height: '50%', marginTop: '3%', marginLeft: '15%', marginRight: '15%', opacity: 0.8 }}>
                <div className="col-md-12 login-sec">
                    <form><br />
                        <h3 className="text-center">Booking Details: </h3><br />
                        <div>
                            <div className="form-group">
                                <label>Booking Id :</label>
                                <span style={{ margin: '10px' }}></span>{(bookinstatus.bookingid)}
                            </div>
                            <div className="form-group">
                                <label>User ID :</label>
                                <span style={{ margin: '10px' }}></span>{(bookinstatus.uid.loginid.userid)}
                            </div>
                            <div className="form-group">
                                <label>Vehicle Id :</label>
                                <span style={{ margin: '10px' }}></span>{(bookinstatus.vehicleid.modelname)}
                            </div>
                            <div className="form-group">
                                <label>Showroom :</label>
                                <span style={{ margin: '10px' }}></span>{(bookinstatus.swid.swname)}
                            </div>
                            <div className="form-group">
                                <label>Date of Booking :</label>
                                <span style={{ margin: '10px' }}></span>{(bookinstatus.dbook)}
                            </div>
                            <div className="form-group">
                                <label>Transaction id :</label>
                                <span style={{ margin: '10px' }}></span>{(bookinstatus.trid.trid)}
                            </div>
                            {/* <div className="form-group">
                                        <label>Status :</label>
                                        <span style={{ margin: '10px' }}></span>{(bookinstatus.status)}
                                 </div>*/}
                            <div className="form-group">
                                <label>Update Status<span style={{ margin: '8px' }}></span></label>
                                <select name="Status" onChange={(ev) => { setStatus(ev.target.value) }}>
                                    <option >Update Status</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Complete">Complete</option>
                                </select>
                            </div>
                            <br />
                            <div className='text-center'>
                                <a href='#' onClick={saveinfo}><b>Save</b></a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditBook;