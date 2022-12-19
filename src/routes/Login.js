import logo from "../Assets/img/ImageLogin.png";
function Login() {
  return (
    <div className="App-login hmax">
        <div className="d-flex flex-row hmax">
            <div className="w-50">
                <nav className="navbar navbar-expand-lg pb-6">
                        <div className="container-fluid d-flex justify-content-between w-100">
                            <a className="navbar-brand letter-principal" href="/">Chefk In</a>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarColor01">
                                <ul className="navbar-nav">
                                    <div className="d-flex flex-row">
                                        <li className="nav-item">
                                            <a className="nav-link letter-color active" href="/login">Login</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link letter-color" href="/Sign">Sign In</a>
                                        </li>
                                    </div>
                                </ul>    
                            </div>
                        </div>
                    </nav>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <form className="w-75">
                        <h1>LOGIN</h1>
                        <small className="text-muted">INGRESA PARA CONTINUAR EN TU APLICACION</small>
                        <div className="form-group">
                            <label for="exampleInputEmail1" className="form-label mt-4">Nombre de Usuario</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese su Nombre de Usuario"/>
                            </div>
                            <div className="form-group">
                            <label for="exampleInputPassword1" className="form-label mt-4">Contraseña</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Ingrese su Contraseña"/>
                        </div>
                        <button type="submit" className="btn btn-outline-info btn-submit">Login</button>
                    </form>
                </div>
            </div>
            <div className="w-50 column-2 d-flex justify-content-center align-items-center">
                <img className="m-auto " src={logo}/>
            </div>
        </div>
    </div>
  );
}

export default Login;