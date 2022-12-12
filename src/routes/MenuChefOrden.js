import logoMesero from "../Assets/img/logoMesero.png";
import Pollo from "../Assets/img/pollo.jpg";
import Capuchino from "../Assets/img/Cappuccino-500x500.jpg";
import Jugo from "../Assets/img/jugo-fresa.jpg";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function MenuChefOrden() {
    const params = useParams();

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/api/v1/orders/" + params.id)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setOrder(result);
                },
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
                            <a href="/chef">Volver</a>
                        </div>
                    </div>
                </nav>
                <div className="d-flex flex-row hmax">
                    <div className="w-100 resum-box" key={order.id}>
                        <div className="d-flex flex-column">
                            <div className="row col-12 indicador m-0 p-4">
                                <div className="d-flex flex-row justify-content-around title-chef p-1">
                                    <div className="d-flex">
                                        <p className="font-bold m-0">Mesa No.</p>
                                        <p className="font-bold m-0"># {order.table}</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <p className="font-bold m-0">Pedido No.</p>
                                        <p className="font-bold m-0"># {order.id}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-row justify-content-around p-1 m-2 mb-5">
                                <div className="d-flex">
                                    <p className="font-bold m-0">Fecha: </p>
                                    <p className=" m-0">{order.createdAt}</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <p className="font-bold m-0">Mesero: </p>
                                    <p className="m-0">{order.user.name}</p>
                                </div>
                            </div>
                            <div className="row col-12 w-75 m-auto">
                                {order.items.map(orderItem => (
                                    <div className="d-flex flex-row justify-content-between mb-5" key={orderItem.id}>
                                        <p className="font-bold">{orderItem.OrderProduct.amount}</p>
                                        <p className="font-bold">{orderItem.name}</p>
                                        <p>{orderItem.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-100 m-auto panel-box p-4">
                            <div className="d-flex flex-row w-100 order-button justify-content-around align-items-center p-4">
                                <p className="m-0 p-0">Tiempo Restante: </p>
                                <p className="m-0 p-0">00:00</p>
                            </div>
                            <div className="d-flex flex-row w-100 order-button justify-content-center align-items-center p-4">
                                <p className="m-0 p-0 font-bold">Enviar Pedido</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default MenuChefOrden;