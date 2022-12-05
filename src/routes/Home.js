import Navbar from '../components/navbar';
import logo from '../Assets/img/ImageLandingPage.png';

function Home() {
  return (
    <div className="App">
        <Navbar/>
        <div class="container">
            <div class="d-flex flex-row justify-content-between align-items-center">
                <div class="col-6 d-flex flex-column">
                    <h1>Sistema - Toma de <br/>Pedidos</h1>
                    <p class="text-principal">Lorem ipsum dolor sit amet, consectetur<br/>
                    adipiscing elit. Curabitur pretium commodo<br/>
                    odio id commodo.</p>
                    <button type="button" class="btn btn-outline-dark boton-prinicipal">Mas Detalles</button>
                </div>
                <div class="col-6 d-flex flex-column">
                    <img class="w-75 m-auto" src={logo}/>
                </div>
            </div>
            <h2 class="footer-person">All Right Reserved</h2>
        </div>

    </div>
  );
}

export default Home;
