import React, { Component, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar } from "react-bootstrap";
import mystore from './store';

function GenerateReport() {

    let navigate = useNavigate();

    const [datas, setData] = useState([]);

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

    const fetchbymonth = (value) => {
        console.log(value);
        const reqOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                month: value,
            })
        }
        fetch("http://localhost:8081/fetchbymonth", reqOptions)
            .then(resp => resp.json())
            .then(obj => {
                console.log(obj);
                sessionStorage.setItem("allbook", JSON.stringify(obj));
                setData(JSON.parse(sessionStorage.getItem("allbook")));
            })
            .catch(() => {
                alert("Error!! Try Again");
            });
    }

    const fetchallbook = () => {
        const reqOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch("http://localhost:8081/adallbook", reqOptions)
            .then(resp => resp.json())
            .then(obj => {
                console.log(obj);
                sessionStorage.setItem("allbook", JSON.stringify(obj));
                setData(JSON.parse(sessionStorage.getItem("allbook")));
            })
            .catch(() => {
                alert("Error!! Try Again");
            });
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
                        <span style={{ margin: '3px' }}></span>
                        <Nav.Link href="/AddBike">Add Bike</Nav.Link>
                        <span style={{ margin: '3px' }}></span>
                        <Nav.Link href="" onClick={logoutUser}>Logout</Nav.Link>
                    </Nav>
                </Container>
            </Navbar><br />
            <div style={{ backgroundColor: 'white', width: '90%', height: '100%', marginTop: '3%', marginLeft: '5%', marginRight: '8%', opacity: 0.8 }}>
                <div className="col-md-12 login-sec"><br />
                    <form>
                        <table>
                            <tr>
                                <span style={{ marginLeft: '600px' }}></span>
                                <td>
                                    <div className="form-group">
                                    <Link to="#" onClick={fetchallbook}>All Bookings</Link>
                                            <span style={{ margin: '10px' }}></span>
                                    </div>
                                </td>
                                <span style={{ margin: '20px' }}></span>
                                <td>
                                    <div className="form-group">
                                        <label>Select Month:  <span style={{ margin: '8px' }}></span></label>
                                        <select name="month" required onChange={(ev) => fetchbymonth(ev.target.value)}>
                                            <option value="">Select Month</option>
                                            <option value="January">January</option>
                                            <option value="February">February</option>
                                            <option value="March">March</option>
                                            <option value="April">April</option>
                                            <option value="May">May</option>
                                            <option value="June">June</option>
                                            <option value="July">July</option>
                                            <option value="August">August</option>
                                            <option value="September">September</option>
                                            <option value="October">October</option>
                                            <option value="November">November</option>
                                            <option value="December">December</option>
                                        </select>
                                    </div >
                                </td>
                                <span style={{ margin: '20px' }}></span>
                                <td>
                                    <div className="form-group">

                                    </div >
                                </td>
                                <span style={{ marginLeft: '80px' }}></span>
                            </tr>
                        </table>
                    </form>
                    <h4 className="text-center">Booking Details: </h4><br />
                    <table className="table table-bordered">
                        <tr>
                            <th>Booking Id</th>
                            <th>Customer Name</th>
                            <th>Model Name</th>
                            <th>Company Name</th>
                            <th>Showroom Name</th>
                            <th>Showroom City</th>
                            <th>Amount Paid</th>
                            <th>Booking Status</th>
                            <th>Booking Date</th>
                        </tr>
                        {datas.map((data, index) => (
                            <tr data-index={index}>
                                <td>{data.bookingid}</td>
                                <td>{data.uid.fname} {data.uid.lname}</td>
                                <td>{data.vehicleid.modelname}</td>
                                <td>{data.vehicleid.vehicleid.companyid.companyname}</td>
                                <td>{data.swid.swname}</td>
                                <td>{data.swid.cityid.cityname}</td>
                                <td>INR {data.trid.amt}</td>
                                <td>{data.status}</td>
                                <td>{data.dbook}</td>
                            </tr>
                        ))}
                    </table><br /><br /><br />
                </div>
            </div><br /><br /><br />
        </div>
    )
}

export default GenerateReport;