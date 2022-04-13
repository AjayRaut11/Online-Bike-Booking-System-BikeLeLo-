import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import mystore from './store';

function BookingStatus() {
    let navigate = useNavigate();

    const [datas, setData] = useState([]);

    const fetchbookall = () => {
        const reqOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                swid: (JSON.parse(localStorage.getItem("loggedinuser"))).swid
            })
        }
        fetch("http://localhost:8081/allbook", reqOptions)
            .then(resp => resp.json())
            .then(obj => {
                console.log(obj);
                localStorage.setItem("allblist", JSON.stringify(obj));
                setData(JSON.parse(localStorage.getItem("allblist")));
            })
            .catch(() => {
                alert("Error!! Try Again");
            });
    }

    const EditBook = value => () => {
        if (value.status == "Complete") {
            alert("Booking Status: Complete, No need to change Status..")
        } else if (value.status == "Cancelled") {
            alert("Booking already cancelled! No longer Active booking..")
        } else {
            sessionStorage.setItem("Editbook", JSON.stringify(value));
            navigate("/EditBook");
        }
    }

    const logoutUser = () => {
        mystore.dispatch({ type: 'LOGGEDOUT' });
        console.log("Loggedin: " + mystore.getState().loggedin);
        localStorage.removeItem("loggedinuser");
        localStorage.removeItem("swlist");
        localStorage.removeItem("allusrinfo");
        navigate("/");
    }

    return (
        <div className='container-fluid'>
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
            <div style={{ backgroundColor: 'white', width: '90%', height: '100%', marginTop: '3%', marginLeft: '5%', marginRight: '8%', opacity: 0.8 }}>
                <div className="col-md-12 login-sec"><br />
                    <div className="text-center">
                        <Link to="#" onClick={fetchbookall}>All Bookings</Link>
                    </div><br /><br />
                    <h4 className="text-center">Bookings Details: </h4><br />
                    <table className="table table-bordered">
                        <tr>
                            <th>Booking Id</th>
                            <th>Customer Name</th>
                            <th>Model Name</th>
                            <th>Color</th>
                            <th>Date of Booking</th>
                            <th>Transaction ID </th>
                            <th>Amount Paid</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>

                        {datas.map((data, index) => (
                            <tr data-index={index}>
                                <td>{data.bookingid}</td>
                                <td>{data.uid.fname} {data.uid.lname}</td>
                                <td>{data.vehicleid.modelname}</td>
                                <td>{data.cvid.colorid.colorname}</td>
                                <td>{data.dbook}</td>
                                <td>{data.trid.trid}</td>
                                <td>INR {data.trid.amt}</td>
                                <td>{data.status}</td>
                                <td><a href="#" onClick={EditBook(data)}> Edit</a></td> 
                            </tr>
                        ))}
                    </table><br /><br /><br />
                </div>
            </div><br /><br /><br />
        </div>
    );
}

export default BookingStatus;