import logoMesero from "../Assets/img/logoMesero.png";
import Pollo from "../Assets/img/pollo.jpg";
import Capuchino from "../Assets/img/Cappuccino-500x500.jpg";
import Jugo from "../Assets/img/jugo-fresa.jpg";

function MenuMesero() {
  return (
    <div className="App-login hmax">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid d-flex justify-content-between  w-100">
                <div className="w-40 d-flex flex-row justify-content-between">
                    <a class="navbar-brand letter-principal" href="/">Chefk In</a>
                    <div class="d-flex align-items-center" id="navbarColor01">
                        <p className="letter-color-menu m-0">Nombre Mesero</p>
                    </div>
                </div>
                <div className="w-60 d-flex flex-row">
                    <div className="table-box selected-box">1</div>
                    <div className="table-box letter-blank">2</div>
                    <div className="table-box letter-blank">3</div>
                    <div className="table-box letter-blank box-function">+</div>
                    <div className="table-box letter-blank box-function">-</div>
                </div> 
            </div>
        </nav>
        <div className="d-flex flex-row hmax">
            <div className="w-40 resum-box">
                <div className="w-75 h-50 m-auto d-flex flex-column">
                    <div className="row">
                        <div className="col-6">
                            <div className="d-flex flex-column">
                                <p className="font-bold">Cafe</p>
                                <div className="d-flex flex-row justify-content-between">
                                    <p className="font-bold">4</p>
                                    <p>Unidad(s) a $500 por unidad</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex justify-content-end align-items-center w-100 h-100">
                            <p className="font-bold">$2.000</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="d-flex flex-column">
                                <p className="font-bold">Cafe</p>
                                <div className="d-flex flex-row justify-content-between">
                                    <p className="font-bold">4</p>
                                    <p>Unidad(s) a $500 por unidad</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex justify-content-end align-items-center w-100 h-100">
                            <p className="font-bold">$2.000</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="d-flex flex-column">
                                <p className="font-bold">Cafe</p>
                                <div className="d-flex flex-row justify-content-between">
                                    <p className="font-bold">4</p>
                                    <p>Unidad(s) a $500 por unidad</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex justify-content-end align-items-center w-100 h-100">
                            <p className="font-bold">$2.000</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="d-flex flex-column">
                                <p className="font-bold">Cafe</p>
                                <div className="d-flex flex-row justify-content-between">
                                    <p className="font-bold">4</p>
                                    <p>Unidad(s) a $500 por unidad</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex justify-content-end align-items-center w-100 h-100">
                            <p className="font-bold">$2.000</p>
                            </div>
                        </div>
                    </div>
                    <div className="col align-self-end">
                        <p className="font-bold m-0">Total: $8.000</p>
                    </div>
                </div>
                <div className="w-100 h-50 m-auto panel-box p-4">
                    <div className="d-flex flex-row w-100 order-button justify-content-center align-items-center">
                        <img className="img-mesero" src={logoMesero}/>
                        <p className="m-0 p-0">Ordenar</p>
                    </div>
                    <div className="w-100 d-flex flex-row h-75">
                        <div className="w-50 pay-box d-flex flex-column justify-content-center align-items-center">
                            <div className="circle w-50 h-50 m-auto">&#62;</div>
                            <p>Payment</p>
                        </div>
                        <form className="w-50" name="calculator">
                            <table className="w-100 h-100">
                                <tbody>
                                    <tr>
                                        <td>  <input className="w-100 h-100" value=" 7 " onclick="number(7)" type="button" /></td>
                                        <td>  <input className="w-100 h-100" value=" 8 " onclick="number(8)" type="button" /></td>
                                        <td>  <input className="w-100 h-100" value=" 9 " onclick="number(9)" type="button" /></td>
                                        <td>  <input className="w-100 h-100" value=" Qty " onclick="number(3)" type="button" /></td>
                                    </tr>
                                    <tr>
                                        <td>  <input className="w-100 h-100" value=" 4 " onclick="number(4)" type="button" /></td>
                                        <td>  <input className="w-100 h-100" value=" 5 " onclick="number(5)" type="button" /></td>
                                        <td>  <input className="w-100 h-100" value=" 6 " onclick="number(6)" type="button" /></td>
                                        <td>  <input className="w-100 h-100" value=" disc " onclick="number(3)" type="button" /></td>
                                    </tr>
                                    <tr>
                                        <td>  <input className="w-100 h-100" value=" 1 " onclick="number(1)" type="button" /></td>
                                        <td>  <input className="w-100 h-100" value=" 2 " onclick="number(2)" type="button" /></td>
                                        <td>  <input className="w-100 h-100" value=" 3 " onclick="number(3)" type="button" /></td>
                                        <td>  <input className="w-100 h-100" value=" x " onclick="number(3)" type="button" /></td>
                                    </tr>
                                    <tr>
                                        <td colSpan="4"><input className="w-100 h-100" value=" 0" onclick="number(0)" type="button"/></td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
            <div className="w-60">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="d-flex flex-row w-100 category align-items-center">
                        <div className="w-20 p-1 category-button">
                            <p className="m-0">Plato Principal</p>
                        </div>
                        <div className="w-20 p-1 category-button">
                            <p className="m-0">Sopas</p>
                        </div>
                        <div className="w-20 p-1 category-button">
                            <p className="m-0">Bebidas</p>
                        </div>
                        <div className="w-40 p-1">
                            <form class="d-flex">
                                <input class="form-control me-sm-2" type="text" placeholder="Search"/>
                                <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                    <div className="d-flex flex-row">
                        <div className="product w-25 m-2">
                            <p className="m-0 price d-flex justify-content-end">$16.000</p>
                            <img className="w-100" src={Pollo}/>
                            <p className="m-0">Pollo en salsa</p>
                        </div>
                        <div className="product w-25 m-2">
                            <p className="m-0 price d-flex justify-content-end">$16.000</p>
                            <img className="w-75" src={Capuchino}/>
                            <p className="m-0">Capuchino</p>
                        </div>
                        <div className="product w-25 m-2">
                            <p className="m-0 price d-flex justify-content-end">$16.000</p>
                            <img className="w-75" src={Jugo}/>
                            <p className="m-0">Jugo de Fresa</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default MenuMesero;