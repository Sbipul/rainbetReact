import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <div className="d-flex align-items-center">
                <div className="logoContainer bg-dark">
                    <Link to="/home" className='logo py-2 bg-dark'>
                        <img src="https://rainbet24.com/asset/images/logoIcon/logo.png" alt="" />
                    </Link>
                </div>
                <div className="headerAndSub">
                    <div className='subheader d-flex align-items-center justify-content-between bg-primary p-2'>
                        <div>
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-facebook-messenger"></i>
                            <i className="fab fa-twitter"></i>
                        </div>
                        <div>
                            <button className='border-0'>Login</button>
                            <button className='border-0'>Register</button>
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-between p-2 bg-dark'>
                        <Link className='text-light text-decoration-none' to="#">SPORTS</Link>
                        <Link className='text-light text-decoration-none' to="#">SPORTS</Link>
                        <Link className='text-light text-decoration-none' to="#">SPORTS</Link>
                        <Link className='text-light text-decoration-none' to="#">SPORTS</Link>
                        <Link className='text-light text-decoration-none' to="#">SPORTS</Link>
                        <Link className='text-light text-decoration-none' to="#">SPORTS</Link>
                        <Button variant="primary" onClick={handleShow} className="me-2">Open</Button>
                    </div>
                </div>
            </div>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements you
                have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default Header;