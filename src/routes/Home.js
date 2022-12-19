import Navbar from '../components/navbar';
import logo from '../Assets/img/ImageLandingPage.png';

function Home() {
  return (
    <div className="App">
        <Navbar/>
        <div className="container">
            <div className="d-flex flex-row justify-content-between align-items-center">
                <div className="col-6 d-flex flex-column">
                    <h1>Sistema - Toma de <br/>Pedidos</h1>
                    <p className="text-principal">Lorem ipsum dolor sit amet, consectetur<br/>
                    adipiscing elit. Curabitur pretium commodo<br/>
                    odio id commodo.</p>
                    <button type="button" className="btn btn-outline-dark boton-prinicipal">Mas Detalles</button>
                </div>
                <div className="col-6 d-flex flex-column">
                    <img className="w-75 m-auto" src={logo}/>
                </div>
            </div>
            <h2 className="footer-person">All Right Reserved</h2>
        </div>

    </div>
  );
}

export default Home;
