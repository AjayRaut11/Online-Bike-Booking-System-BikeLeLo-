import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import mystore from './store';
import pic2 from "../data/hayabusa.jpg"
function AdminHome() {
    let navigate = useNavigate();

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
        <div className='container-fluid'>
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
            </Navbar>
            <h3>Welcome, {(JSON.parse(localStorage.getItem("loggedinuser"))).fname}</h3>
            <img src = {pic2} width="100%" height="600px" /><br />
        </div>
    );
}

export default AdminHome;