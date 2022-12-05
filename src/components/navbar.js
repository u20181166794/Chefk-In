import React, {Component} from "react";

class Navbar extends Component{
    render(){
        return(
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid d-flex justify-content-between w-100">
                    <a class="navbar-brand letter-principal" href="/">Chefk In</a>
                    <div class="collapse navbar-collapse justify-content-center" id="navbarColor01">
                        <ul class="navbar-nav">
                            <div class="d-flex flex-row">
                                <li class="nav-item">
                                    <a class="nav-link letter-color" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link letter-color" href="#">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link letter-color" href="#">Contact</a>
                                </li>
                            </div>
                        </ul>    
                    </div>
                    <a class="navbar-brand letter-color" href="/login">Sign In</a>
                </div>
            </nav>
        );
    }
}

export default Navbar;