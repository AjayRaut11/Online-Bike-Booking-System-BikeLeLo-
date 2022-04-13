import React, { Component, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar } from "react-bootstrap";

function ViewMore() {
    let navigate = useNavigate();

    const [bike, setBike] = useState((JSON.parse(sessionStorage.getItem("vmbike"))));
    const [colors, setColors] = useState((JSON.parse(sessionStorage.getItem("colors"))));
    const [showrooms, setShowrooms] = useState([]);
    const [oprice, setOprice] = useState("");

    const calculatePrice = () => {
        let xprice = (JSON.parse(sessionStorage.getItem("vmbike"))).vehicleid.xswprice;
        let tax = (JSON.parse(sessionStorage.getItem("tax")));
        var oprice = xprice + (xprice * (tax / 100));
        setOprice(oprice);
    }

    const saveinfo = () => {
        sessionStorage.setItem("Sbike", JSON.stringify(bike));
        sessionStorage.setItem("Sprice", JSON.stringify(oprice));
        sessionStorage.removeItem("showrooms");
        sessionStorage.removeItem("vmbike");
        sessionStorage.removeItem("colors");
        sessionStorage.removeItem("blist");
        if ((JSON.parse(localStorage.getItem("logState")))) {
            if ((JSON.parse(localStorage.getItem("loggedinuser"))).loginid.role === "User")
                navigate("/bookbike");
        } else {
            alert("Please Login to book vehicle");
            navigate("/login");
        }
    }

    const getSws = (value) => {
        const reqOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cityid: value,
                companyid: bike.vehicleid.companyid
            })
        }
        fetch("http://localhost:8081/getsws", reqOptions)
            .then(resp => resp.json())
            .then(obj => {
                console.log(obj);
                sessionStorage.setItem("showrooms", JSON.stringify(obj));
                setShowrooms(JSON.parse(sessionStorage.getItem("showrooms")));
            })
            .catch(() => {
                alert("Error!! Try Again");
            });
    }

    const setSwroom = (value) => {
        console.log(value);
        showrooms.forEach(e => {
            if (e.swid == value) {
                console.log(e);
                sessionStorage.setItem("Sshowroom", JSON.stringify(e));
            }
        });
    }

    const setColor = (value) => {
        console.log(value);
        colors.forEach(e => {
            if (e.colorid.colorid == value) {
                console.log(e);
                sessionStorage.setItem("Scolor", JSON.stringify(e));
            }
        });
    }

    const getTax = (value) => {
        const reqOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cityid: value
            })
        }
        fetch("http://localhost:8081/gettax", reqOptions)
            .then(resp => resp.json())
            .then(obj => {
                console.log(obj);
                sessionStorage.setItem("tax", JSON.stringify(obj));
                calculatePrice(obj);
            })
            .catch(() => {
                alert("Error!! Try Again");
            });
    }

    return (
        <div className="container-fluid">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">BikeLeLo</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/searchbike">Search Bike</Nav.Link>
                        <span style={{ margin: '10px' }}></span>
                        <Nav.Link href="/CompareBike">Compare Bike</Nav.Link>
                        <span style={{ margin: '10px' }}></span>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <span style={{ margin: '10px' }}></span>
                        <Nav.Link href="/UserRegister">Register User</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div style={{ backgroundColor: 'white', width: '70%', height: '50%', marginTop: '3%', marginLeft: '15%', marginRight: '15%', opacity: 0.8 }}>
                <div className="col-md-12 login-sec">
                    <form><br />
                        <h3 className="text-center">Vehicle Details: </h3><br />
                        <div>
                            <div className='row'>
                                <div className='col'>
                                    <div className="form-group">
                                        <label>Model Name:</label>
                                        <span style={{ margin: '10px' }}></span>{(bike.vehicleid.modelname)}
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="form-group">
                                        <label>Company Name:</label>
                                        <span style={{ margin: '10px' }}></span>{(bike.vehicleid.companyid.companyname)}
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <div className="form-group">
                                        <label>Category :</label>
                                        <span style={{ margin: '10px' }}></span>{(bike.vehicleid.catid.catname)}
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="form-group">
                                        <label>Engine Capacity :</label>
                                        <span style={{ margin: '10px' }}></span>{(bike.engcap)}
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <div className="form-group">
                                        <label>Fuel Capacity :</label>
                                        <span style={{ margin: '10px' }}></span>{(bike.fuelcap)}
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="form-group">
                                        <label>Mileage :</label>
                                        <span style={{ margin: '10px' }}></span>{(bike.mileage)}
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <div className="form-group">
                                        <label>Power :</label>
                                        <span style={{ margin: '10px' }}></span>{(bike.power)}
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="form-group">
                                        <label>Brake System :</label>
                                        <span style={{ margin: '10px' }}></span>{(bike.brakesys)}
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <div className="form-group">
                                        <label>Front Brake Type :</label>
                                        <span style={{ margin: '10px' }}></span>{(bike.fbraketype)}
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="form-group">
                                        <label>Rear Brake Type :</label>
                                        <span style={{ margin: '10px' }}></span>{(bike.rbraketype)}
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <div className="form-group">
                                        <label>No. of Cylinder/s :</label>
                                        <span style={{ margin: '10px' }}></span>{(bike.cylinder)}
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="form-group">
                                        <label>Emission Standard :</label>
                                        <span style={{ margin: '10px' }}></span>{(bike.emissionstd)}
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <div className="form-group">
                                        <label>Kerb Weight :</label>
                                        <span style={{ margin: '10px' }}></span>{(bike.kerbweight)}
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="form-group">
                                        <label>Seat Height :</label>
                                        <span style={{ margin: '10px' }}></span>{(bike.seatheight)}
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <div className="form-group">
                                        <label>Torque :</label>
                                        <span style={{ margin: '10px' }}></span>{(bike.torque)}
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="form-group">
                                        <label>Kill Switch :</label>
                                        <span style={{ margin: '10px' }} >{ bike.killswitch===0?'No':'Yes'}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <div className="form-group">
                                        <label>Warranty :</label>
                                        <span style={{ margin: '10px' }}></span>{(bike.warranty)} Yrs.
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>About :</label>
                                <span style={{ margin: '10px' }}></span>{(bike.about)}
                            </div><br />
                            <div className='row'>
                                <div className='col'>
                                    <div className="form-group">
                                        <label>Select City<span style={{ margin: '8px' }}></span></label>
                                        <select name="City" required onChange={(ev) => { getTax(ev.target.value); getSws(ev.target.value) }}>
                                            <option >Select City</option>
                                            <option value="1">Pune</option>
                                            <option value="2">Mumbai</option>
                                            <option value="3">Nagpur</option>
                                            <option value="4">Satara</option>
                                            <option value="5">Ahmednagar</option>
                                            <option value="6">Kolhapur</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="form-group">
                                        <label>Select Showroom<span style={{ margin: '8px' }}></span></label>
                                        <select name="swroom" required onChange={(ev) => setSwroom(ev.target.value)}>
                                            <option >Select Showroom</option>
                                            {
                                                showrooms.map((showroom) => {
                                                    return (<option value={showroom.swid}>{showroom.swname}</option>)
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <div className="form-group">
                                        <label>Ex-Showroom Price :</label>
                                        <span style={{ margin: '8px' }}></span>INR {(bike.vehicleid.xswprice)}
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="form-group">
                                        <label>Select Color<span style={{ margin: '8px' }}></span></label>
                                        <select name='color' required onChange={(ev) => setColor(ev.target.value)}>
                                            <option>Select Color</option>
                                            {
                                                colors.map((color) => {
                                                    return (<option value={color.colorid.colorid}>{color.colorid.colorname}</option>)
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <div className="form-group">
                                        <label>On-Road Price :</label>
                                        <span style={{ margin: '10px' }}></span>INR {oprice}
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className='text-center'>
                                <a href='#' onClick={saveinfo}><b>Book Bike</b></a>
                            </div>
                        </div>
                    </form>
                </div><br /><br />
            </div >
        </div >
    );
}

export default ViewMore;