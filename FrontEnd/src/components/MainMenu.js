import { React, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import videobg from "../data/bik.mp4"
import pic from "../data/logo.png"

function MainMenu() {
    
    return (
        <div className="overlay">
            <div className="content">
                <div className="content">
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand href="/"><img src = {pic} width="50px" height="50px" /><span style={{ margin: '10px' }}></span>BikeLeLo - Book your desired bike here</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href="/searchbike">Search Bike</Nav.Link>
                                <span style={{ margin: '10px' }}></span>
                                <Nav.Link href="/CompareBike">Compare Bike</Nav.Link>
                                <span style={{ margin: '10px' }}></span>
                                <Nav.Link href="/login">Login</Nav.Link>
                                <span style={{ margin: '10px' }}></span>
                                <Nav.Link href="/UserRegister">Register</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                    <video loop autoPlay muted id='video' style={{opacity: 0.8}}
                        src={videobg}
                        type="video/mp4"
                        height="90%" />
                </div>
            </div>
        </div>
    )
}

export default MainMenu;