import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import mystore from "./store";

function ViewBookings() {
    let navigate = useNavigate();

    const [datas, setData] = useState([]);

    const logoutUser = () => {
        sessionStorage.removeItem("Fbike");
        sessionStorage.removeItem("Sbike");
        sessionStorage.removeItem("colors1");
        sessionStorage.removeItem("bikelist");
        sessionStorage.removeItem("colors2");
        sessionStorage.removeItem("tax1");
        sessionStorage.removeItem("showrooms1");
        sessionStorage.removeItem("tax");
        sessionStorage.removeItem("Scolor");
        sessionStorage.removeItem("Sshowroom");
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

    const getcanBookings = () => {
        const reqOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                uid: (JSON.parse(localStorage.getItem("loggedinuser"))).uid
            })
        }
        fetch("http://localhost:8081/getucanbookings", reqOptions)
            .then(resp => resp.json())
            .then(obj => {
                console.log(obj);
                sessionStorage.setItem("ucanbookings", JSON.stringify(obj));
                navigate("/Viewcanbookings")
            })
            .catch(() => {
                alert("Error!! Try Again");
            });
    }

    const getubookings = () => {
        const reqOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                uid: (JSON.parse(localStorage.getItem("loggedinuser"))).uid
            })
        }
        fetch("http://localhost:8081/getubookings", reqOptions)
            .then(resp => resp.json())
            .then(obj => {
                console.log(obj);
                sessionStorage.setItem("uallbookings", JSON.stringify(obj));
                setData(JSON.parse(sessionStorage.getItem("uallbookings")));
            })
            .catch(() => {
                alert("Error!! Try Again");
            });
    }

    const getActbooking = () => {
        const reqOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                uid: (JSON.parse(localStorage.getItem("loggedinuser"))).uid
            })
        }
        fetch("http://localhost:8081/getuactbook", reqOptions)
            .then(resp => resp.json())
            .then(obj => {
                console.log(obj);
                sessionStorage.setItem("uactbookings", JSON.stringify(obj));
                setData(JSON.parse(sessionStorage.getItem("uactbookings")));
            })
            .catch(() => {
                alert("Error!! Try Again");
            });
    }

    const cancelBook = value => () => {
        console.log(value);
        let bid = value.bookingid;
        if (value.status === "Cancelled") {
            alert("Booking already cancelled!!");
            navigate("/Viewcanbookings");
        } else if(value.status === "Booked") {
            let reason = prompt("Please provide reason for cancellation: ", "");
            if (reason != null) {
                const newDate = new Date();
                let date = newDate.getDate();
                let month = newDate.getMonth() + 1;
                let year = newDate.getFullYear();
                let separator = '-';
                const curdate = `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`;   
                console.log(curdate);           
                const reqOptions = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        bookingid: bid,
                        reason: reason,
                        reqdate: curdate
                    })
                }
                fetch("http://localhost:8081/cancelBook", reqOptions)
                    .then(resp => resp.json())
                    .then(obj => {
                        if (obj) {
                            console.log(obj);
                            alert("Booking Cancelled!! Refund will be credited with next 3-4 business days.")
                            getcanBookings();
                        } else {
                            console.log("Booking Deleted: " + obj);
                        }
                    })
                    .catch(() => {
                        alert("Error!! Try Again");
                    });
            }
            else {
                alert("Please provide cancellation reason")
            }
        } else {
            alert("Showroom Process started, can not cancel the booking now. Contact Showroom for more details.");
        }
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
                    <div className="text-center">
                        <Link to="#" onClick={getubookings}>All Bookings</Link>
                        <span style={{ margin: '10px' }}></span>
                        <Link to="#" onClick={getActbooking}>Active Bookings</Link>
                        <span style={{ margin: '10px' }}></span>
                        <Link to="#" onClick={getcanBookings}>Cancelled Bookings</Link>
                    </div><br /><br />
                    <h4 className="text-center">Your Bookings: </h4><br />
                    <table className="table table-bordered">
                        <tr>
                            <th>Booking Id</th>
                            <th>Model Name</th>
                            <th>Company Name</th>
                            <th>Showroom Name</th>
                            <th>Amount Paid</th>
                            <th>Transaction ID</th>
                            <th>Booking Status</th>
                            <th>Action</th>
                        </tr>
                        {datas.map((data, index) => (
                            <tr data-index={index}>
                                <td>{data.bookingid}</td>
                                <td>{data.vehicleid.vehicleid.modelname}</td>
                                <td>{data.vehicleid.vehicleid.companyid.companyname}</td>
                                <td>{data.swid.swname}</td>
                                <td>INR {data.trid.amt}</td>
                                <td>{data.trid.trid}</td>
                                <td>{data.status}</td>
                                <td><a href="#" onClick={cancelBook(data)}>Cancel Booking</a></td>
                            </tr>
                        ))}
                    </table><br /><br /><br />
                </div>
            </div><br /><br /><br />
        </div>
    )
}

export default ViewBookings;