import logo from "../Assets/img/ImageLogin.png";
function Login() {
  return (
    <div className="App-login hmax">
        <div className="d-flex flex-row hmax">
            <div className="w-50">
                <nav class="navbar navbar-expand-lg pb-6">
                        <div class="container-fluid d-flex justify-content-between w-100">
                            <a class="navbar-brand letter-principal" href="/">Chefk In</a>
                            <div class="collapse navbar-collapse justify-content-end" id="navbarColor01">
                                <ul class="navbar-nav">
                                    <div class="d-flex flex-row">
                                        <li class="nav-item">
                                            <a class="nav-link letter-color active" href="/login">Login</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link letter-color" href="/Sign">Sign In</a>
                                        </li>
                                    </div>
                                </ul>    
                            </div>
                        </div>
                    </nav>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <form className="w-75">
                        <h1>LOGIN</h1>
                        <small class="text-muted">INGRESA PARA CONTINUAR EN TU APLICACION</small>
                        <div class="form-group">
                            <label for="exampleInputEmail1" class="form-label mt-4">Nombre de Usuario</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese su Nombre de Usuario"/>
                            </div>
                            <div class="form-group">
                            <label for="exampleInputPassword1" class="form-label mt-4">Contraseña</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Ingrese su Contraseña"/>
                        </div>
                        <button type="submit" class="btn btn-outline-info btn-submit">Login</button>
                    </form>
                </div>
            </div>
            <div className="w-50 column-2 d-flex justify-content-center align-items-center">
                <img class="m-auto " src={logo}/>
            </div>
        </div>
    </div>
  );
}

export default Login;