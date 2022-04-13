import React from 'react';
import { useNavigate } from "react-router-dom";
import mystore from './store';
import { Container, Nav, Navbar } from "react-bootstrap";
import pic1 from "../data/img1.jpg"

function UserHome() {

    let navigate = useNavigate();

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
        <div className='container-fluid'>
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
            </Navbar>
            <h3>Welcome, {(JSON.parse(localStorage.getItem("loggedinuser"))).fname}</h3>
            <img src = {pic1} width="100%" height="90%" /><br />
        </div>
    );
}

export default UserHome;