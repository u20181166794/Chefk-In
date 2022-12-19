import logo from "../Assets/img/ImageSign.png";
function Sign() {
  return (
    <div className="App-login hmax">
        <div className="d-flex flex-row hmax">
        <div className="w-50 column-2 d-flex justify-content-center align-items-center">
                <img className="m-auto " src={logo}/>
            </div>
            <div className="w-50">
                <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid d-flex justify-content-between w-100">
                            <a className="navbar-brand letter-principal" href="/">Chefk In</a>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarColor01">
                                <ul className="navbar-nav">
                                    <div className="d-flex flex-row">
                                        <li className="nav-item">
                                            <a className="nav-link letter-color" href="/login">Login</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link letter-color active" href="/Sign">Sign In</a>
                                        </li>
                                    </div>
                                </ul>    
                            </div>
                        </div>
                    </nav>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <form className="w-75">
                        <h1>REGISTRARSE</h1>
                        <div className="form-group">
                            <label for="exampleInputEmail1" className="form-label mt-4">Nombre Completo *</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1" className="form-label mt-4">Correo Electronico *</label>
                            <input type="email" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1" className="form-label mt-4">Nombre de Usuario *</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1" className="form-label mt-4">Contraseña *</label>
                            <input type="password" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1" className="form-label mt-4">Repita la Contraseña *</label>
                            <input type="password" className="form-control"/>
                        </div>
                        <button type="submit" className="btn btn-outline-info btn-submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Sign;