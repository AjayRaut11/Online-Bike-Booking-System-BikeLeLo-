import React, { useState } from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import mystore from './store';

function ViewCancelledBooking() {

    let navigate = useNavigate();

    const [datas, setData] = useState((JSON.parse(sessionStorage.getItem("ucanbookings"))));

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
            <div style={{ backgroundColor: 'white', width: '90%', height: '100%', marginTop: '3%', marginLeft: '5%', marginRight: '8%', opacity: 0.8 }}>
                <div className="col-md-12 login-sec"><br />
                    <h4 className="text-center">Cancelled Bookings Details: </h4><br />
                    <table className="table table-bordered">
                        <tr>
                            <th>Booking Id</th>
                            <th>Model Name</th>
                            <th>Showroom Name</th>
                            <th>Refund Amount</th>
                            <th>Refund Mode</th>
                            <th>Cancel Date</th>
                            <th>Booking Status</th>
                        </tr>
                        {datas.map((data, index) => (
                            <tr data-index={index}>
                                <td>{data.bookingid.bookingid}</td>
                                <td>{data.bookingid.vehicleid.modelname}</td>
                                <td>{data.bookingid.swid.swname}</td>
                                <td>INR {data.refundamt}</td>
                                <td>{data.paymode}</td>
                                <td>{data.reqdate}</td>
                                <td>{data.bookingid.status}</td>
                            </tr>
                        ))}
                    </table>
                    <p>*All Refunds will be reflected back within next 3-5 business days from the cancellation date.</p>
                </div>
            </div><br /><br /><br />
        </div>
        );
}

export default ViewCancelledBooking;