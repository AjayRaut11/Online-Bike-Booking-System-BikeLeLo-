import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

import mystore from './store';
import showroomimg from "../data/bmw.jpeg";
function ShowroomHome() {
    let navigate = useNavigate();

    const logoutUser = () => {
        mystore.dispatch({ type: 'LOGGEDOUT' });
        console.log("Loggedin: " + mystore.getState().loggedin);
        localStorage.removeItem("loggedinuser");
        localStorage.setItem("logState", false);
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
            </Navbar>
            <h3>{(JSON.parse(localStorage.getItem("loggedinuser"))).swname} Showroom Home</h3>
            <img src = {showroomimg} width="100%" height="600px" /><br />
        </div>
    );
}

export default ShowroomHome;