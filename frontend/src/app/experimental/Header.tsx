'use client'
import React, { useState } from "react";
import Modal from "./Modal";

function Header() {
    const [open, setOpen] = useState(false);
    const [isLoginOpen, setLoginOpen] = useState(false);
    const [isRegisterOpen, setRegisterOpen] = useState(false);
    const [isAdminOpen, setAdminOpen] = useState(false);

    const navLinks = [
        { href: "#login", label: "Login", openModal: () => setLoginOpen(true) },
        { href: "#register", label: "Register", openModal: () => setRegisterOpen(true) },
        { href: "#admin", label: "Admin", openModal: () => setAdminOpen(true) },
    ];

    return (
        <header className="bg-success position-fixed w-100 top-0 playfair text-white">
            <div className="bg-light text-dark d-none d-sm-flex align-items-center px-5">
                <div style={{ width: '80px', height: '80px' }}>
                    <img 
                        src="../images/logo_no_title.png" 
                        alt="logo" 
                        style={{ width: '90%', height: '90%', objectFit: 'contain' }} 
                    />
                </div>
                <h1 className="fs-1 text-success">
                    CCS Manuscript Repository
                </h1>
            </div>
            <nav className="d-flex justify-content-between align-items-center p-3">
                <h1 className="mb-0">Welcome Pythons!</h1>
                <ul className={`list-unstyled d-flex ${open ? 'd-none' : ''}`}>
                    {navLinks.map((item, index) => {
                        const isNotLastItem = index !== navLinks.length - 1;
                        const listItemClass = `nav-item px-3 ${isNotLastItem ? 'border-end' : ''}`;

                        return (
                            <li key={item.label} className={listItemClass}>
                                <a onClick={item.openModal} className="nav-link text-white" href={item.href}>{item.label}</a>
                            </li>
                        );
                    })}
                </ul>
                <button onClick={() => setOpen(!open)} className="d-block d-sm-none position-absolute end-0 top-0 m-3">
                    {open ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    )}
                </button>
            </nav>

            <div>
                <Modal title="LOGIN" isOpen={isLoginOpen} onClose={() => setLoginOpen(false)}>
                    <form>
                        <div className="mb-3">
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>
                        <div className="d-flex justify-content-between">
                            <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" /> Remember me
                            </label>
                            <a className="text-primary" href="#">Forgot Password?</a>
                        </div>
                        <button type="submit" className="btn btn-success w-100 my-3">LOGIN</button>
                        <div className="text-center">
                            <p>Don't have an account? <a className="text-primary" href="#">Sign Up Now</a></p>
                        </div>
                    </form>
                </Modal>

                <Modal title="Register" isOpen={isRegisterOpen} onClose={() => setRegisterOpen(false)}>
                    <form>
                        <div className="d-flex flex-wrap">
                            {/* First container with first 5 inputs */}
                            <div className="flex-fill me-3 mb-3">
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="First Name" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="Middle Name" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="Last Name" />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="Username" />
                                </div>
                            </div>
                            
                            {/* Second container with next 5 inputs */}
                            <div className="flex-fill ms-3 mb-3">
                                <div className="mb-3">
                                    <input type="password" className="form-control" placeholder="Password" />
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control" placeholder="Confirm Password" />
                                </div>
                                <div className="mb-3">
                                    <select className="form-select">
                                        <option disabled selected>Select Role</option>
                                        <option>Admin</option>
                                        <option>User</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <select className="form-select">
                                        <option disabled selected>Select Program</option>
                                        <option>Program 1</option>
                                        <option>Program 2</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="Code" />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success w-100 mt-3">Sign Up</button>
                    </form>
                </Modal>

                <Modal title="Admin" isOpen={isAdminOpen} onClose={() => setAdminOpen(false)}>
                    <form>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Username" />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-success w-100 mt-3">Submit</button>
                    </form>
                </Modal>
            </div>
        </header>
    );
}

export default Header;
