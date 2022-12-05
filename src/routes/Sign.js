import logo from "../Assets/img/ImageSign.png";
function Sign() {
  return (
    <div className="App-login hmax">
        <div className="d-flex flex-row hmax">
        <div className="w-50 column-2 d-flex justify-content-center align-items-center">
                <img class="m-auto " src={logo}/>
            </div>
            <div className="w-50">
                <nav class="navbar navbar-expand-lg">
                        <div class="container-fluid d-flex justify-content-between w-100">
                            <a class="navbar-brand letter-principal" href="/">Chefk In</a>
                            <div class="collapse navbar-collapse justify-content-end" id="navbarColor01">
                                <ul class="navbar-nav">
                                    <div class="d-flex flex-row">
                                        <li class="nav-item">
                                            <a class="nav-link letter-color" href="/login">Login</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link letter-color active" href="/Sign">Sign In</a>
                                        </li>
                                    </div>
                                </ul>    
                            </div>
                        </div>
                    </nav>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <form className="w-75">
                        <h1>REGISTRARSE</h1>
                        <div class="form-group">
                            <label for="exampleInputEmail1" class="form-label mt-4">Nombre Completo *</label>
                            <input type="text" class="form-control"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1" class="form-label mt-4">Correo Electronico *</label>
                            <input type="email" class="form-control"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1" class="form-label mt-4">Nombre de Usuario *</label>
                            <input type="text" class="form-control"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1" class="form-label mt-4">Contraseña *</label>
                            <input type="password" class="form-control"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1" class="form-label mt-4">Repita la Contraseña *</label>
                            <input type="password" class="form-control"/>
                        </div>
                        <button type="submit" class="btn btn-outline-info btn-submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Sign;