import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import mystore from './store';

function DeleteCustomer() {

    let navigate = useNavigate();

    const [flag, setFlag] = useState(false); //to check info available or not
    const [datas, setData] = useState([]);

    const deleteUser = value => () => {
        console.log(value);
        let lid = (JSON.parse(localStorage.getItem("loggedinuser"))).loginid.loginid;
        if (value.loginid.accstate === 0) {
            alert("Account already deleted!!");
        } else {
            const reqOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    loginid: value.loginid.loginid
                })
            }
            fetch("http://localhost:8081/deluser", reqOptions)
                .then(resp => resp.json())
                .then(obj => {
                    if (obj) {
                        console.log("User Deleted: " + obj);
                        alert("Customer Account deleted!!")
                        navigate("/AdminHome")
                    } else {
                        console.log("User Deleted: " + obj);
                    }
                })
                .catch(() => {
                    alert("Error!! Try Again");
                });
        }
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

    const fetchCust = () => {
        const reqOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch("http://localhost:8081/allusr", reqOptions)
            .then(resp => resp.json())
            .then(obj => {
                console.log(obj);
                localStorage.setItem("allusrinfo", JSON.stringify(obj));
                setFlag(true);
                setData(JSON.parse(localStorage.getItem("allusrinfo")));
            })
            .catch(() => {
                alert("Error!! Try Again");
            });
    }

    const fetchusract = () => {
        const reqOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch("http://localhost:8081/actusr", reqOptions)
            .then(resp => resp.json())
            .then(obj => {
                console.log(obj);
                localStorage.setItem("allusrinfo", JSON.stringify(obj));
                setFlag(true);
                setData(JSON.parse(localStorage.getItem("allusrinfo")));
            })
            .catch(() => {
                alert("Error!! Try Again");
            });
    }

    const fetchusrcl = () => {
        const reqOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch("http://localhost:8081/clusr", reqOptions)
            .then(resp => resp.json())
            .then(obj => {
                console.log(obj);
                localStorage.setItem("allusrinfo", JSON.stringify(obj));
                setFlag(true);
                setData(JSON.parse(localStorage.getItem("allusrinfo")));
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
                        {/*<span style={{ margin: '3px' }}></span>
                            <Nav.Link href="/AdminRegister">Register Admin</Nav.Link>*/}
                        <span style={{ margin: '3px' }}></span>
                        <Nav.Link href="/AddBike">Add Bike</Nav.Link>
                        <span style={{ margin: '3px' }}></span>
                        <Nav.Link href="" onClick={logoutUser}>Logout</Nav.Link>
                    </Nav>
                </Container>
            </Navbar><br />
            <div style={{ backgroundColor: 'white', width: '90%', height: '100%', marginTop: '3%', marginLeft: '5%', marginRight: '8%', opacity: 0.8 }}>
                <div className="col-md-12 login-sec"><br />
                    <div className="text-center">
                        <Link to="#" onClick={fetchCust}>All Customers</Link>
                        <span style={{ margin: '10px' }}></span>
                        <Link to="#" onClick={fetchusract}>Active Customers</Link>
                        <span style={{ margin: '10px' }}></span>
                        <Link to="#" onClick={fetchusrcl}>Closed Customers</Link>
                    </div><br /><br />
                    <h4 className="text-center">List of Customers: </h4><br />
                    <table className="table table-bordered">
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Role</th>
                            <th>Account State</th>
                            <th>Action</th>
                        </tr>
                        {datas.map((data, index) => (
                            <tr data-index={index}>
                                <td>{data.uid}</td>
                                <td>{data.fname}</td>
                                <td>{data.lname}</td>
                                <td>{data.email}</td>
                                <td>{data.contact}</td>
                                <td>{data.loginid.role}</td>
                                <td>{data.loginid.accstate===1?'Active':'Closed'}</td>
                                <td><a href="#" onClick={deleteUser(data)}>Delete</a></td>
                            </tr>
                        ))}
                    </table><br /><br /><br />
                </div>
            </div><br /><br /><br />
        </div>
    )
}

export default DeleteCustomer;


{/* 
else if (value.loginid.loginid === lid) {
            alert("Current user can't be deleted!!")
        }
*/}