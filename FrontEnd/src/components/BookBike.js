import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar } from "react-bootstrap";
import mystore from './store';

function BookBike() {
    let navigate = useNavigate();
    const [bike, setBike] = useState((JSON.parse(sessionStorage.getItem("Sbike"))));
    const [swroom, setSwroom] = useState((JSON.parse(sessionStorage.getItem("Sshowroom"))));
    const [color, setColor] = useState((JSON.parse(sessionStorage.getItem("Scolor"))));
    const [oprice, setOprice] = useState((JSON.parse(sessionStorage.getItem("Sprice"))));

    const logoutUser = () => {
        mystore.dispatch({ type: 'LOGGEDOUT' });
        console.log("Loggedin: " + mystore.getState().loggedin);
        localStorage.removeItem("loggedinuser");
        sessionStorage.removeItem("blist");
        localStorage.setItem("logState", false);
        navigate("/");
    }

    const BookingBike = () => {
        const newDate = new Date();
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        let separator = '-';
        const curdate = `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`;
        console.log(curdate);
        const reqOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                uid: JSON.parse(localStorage.getItem("loggedinuser")).uid,
                vehicleid: JSON.parse(sessionStorage.getItem("Sbike")).vehicleid.vehicleid,
                swid: JSON.parse(sessionStorage.getItem("Sshowroom")).swid,
                dbook: curdate,
                status: "Booked",
                cvid: JSON.parse(sessionStorage.getItem("Scolor")).cvid,
                amt: JSON.parse(sessionStorage.getItem("Sprice")) / 10
            })
        }
        fetch("http://localhost:8081/savebikebook", reqOptions)
            .then(resp => resp.json())
            .then(obj => {
                console.log(obj);
                console.log(obj);
                alert("Bike Booked Sucessfully.!");
                navigate("/login");
            })
            .catch(() => {
                alert("Try Again!!!");
                <h1>Try Again!!!</h1>
            });
    }

    BookingBike();

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
                        <Nav.Link href="/bookbike">Book Bike</Nav.Link>
                        <span style={{ margin: '3px' }}></span>
                        <Nav.Link href="/bookings">View Bookings</Nav.Link>
                        <span style={{ margin: '3px' }}></span>
                        <Nav.Link href="/cancelbooking">Cancel Booking</Nav.Link>
                        <span style={{ margin: '3px' }}></span>
                        <Nav.Link href="" onClick={logoutUser}>Logout</Nav.Link>
                    </Nav>
                </Container>
            </Navbar><br />
            <h1>Book Bike</h1><br /><br />
            <h2>Selected Bike: {bike.vehicleid.companyid.companyname} {bike.vehicleid.modelname}</h2>
            <h2>Selected Showroom: {swroom.swname}, {swroom.cityid.cityname}</h2>
            <h2>Selected Color: {color.colorid.colorname}</h2>
            <h2>Vehicle On Road Price: Rs.{oprice}</h2>
        </div>
    );
}

export default BookBike;