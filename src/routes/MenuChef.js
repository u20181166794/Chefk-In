import logoMesero from "../Assets/img/logoMesero.png";
import Pollo from "../Assets/img/pollo.jpg";
import Capuchino from "../Assets/img/Cappuccino-500x500.jpg";
import Jugo from "../Assets/img/jugo-fresa.jpg";
import { useState, useEffect } from "react";

function MenuChef() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [order, setOrder] = useState([]);
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        fetch("api/v1/orders/3")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setOrder(result);
                },
                // Nota: es importante manejar errores aquí y no en 
                // un bloque catch() para que no interceptemos errores
                // de errores reales en los componentes.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    useEffect(() => {
        fetch("api/v1/orders")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setOrders(result);
                },
                // Nota: es importante manejar errores aquí y no en 
                // un bloque catch() para que no interceptemos errores
                // de errores reales en los componentes.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="App-login hmax">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid d-flex justify-content-between  w-100">
                        <div className="w-40 d-flex flex-row justify-content-between">
                            <a class="navbar-brand letter-principal" href="/">Chefk In</a>
                            <div class="d-flex align-items-center" id="navbarColor01">
                                <p className="letter-color-menu m-0">Nombre chef</p>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="d-flex flex-row hmax">
                    <div className="d-flex flex-column">
                        <div className="row mr-0 justify-content-center">
                            {orders.map(order => (
                                <div className="product m-2 col-3" key={order.id}>
                                    <div className="d-flex flex-column p-2">
                                        <div className="d-flex flex-row">
                                            <p className="m-0 price">Mesa No.</p>
                                            <p className="m-0 ml-4"># {order.table}</p>
                                        </div>
                                        <div className="d-flex flex-row">
                                            <p className="m-0 price">Pedido No.</p>
                                            <p className="m-0"># {order.id}</p>
                                        </div>
                                    </div>
                                    <div className="row col-12 w-75 m-auto">
                                        <a className="btn btn-outline-light mb-3" href={`/ChefOrden/${order.id}`}>Preparar Pedido</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuChef;