import React from "react";

const Navbar = ()=>{
        return(
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid d-flex justify-content-between w-100">
                    <a className="navbar-brand letter-principal" href="/">Chefk In</a>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarColor01">
                        <ul className="navbar-nav">
                            <div className="d-flex flex-row">
                                <li className="nav-item">
                                    <a className="nav-link letter-color" href="/">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link letter-color" href="/docInicio">Como Usarlo</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link letter-color" href="/mesero">Mesero</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link letter-color" href="/chef">Chef</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link letter-color" href="/dashboard">Dashboard</a>
                                </li>
                            </div>
                        </ul>    
                    </div>
                    <a className="navbar-brand letter-color" href="/login">Sign In</a>
                </div>
            </nav>
        );
    }

export default Navbar;