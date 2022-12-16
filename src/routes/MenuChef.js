import logoMesero from "../Assets/img/logoMesero.png";
import Navbar from '../components/navbar';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import OrderDataService from "../services/order.service";

function MenuChef() {
    const [orders, setOrders] = useState([]);

    const getOrders = () => {
        OrderDataService.getStatus("preparing")
            .then(response => {
                setOrders(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getOrders();
    }, []);

    return (
        <div className="App-login hmax">
            <Navbar />
            <div>
                <h2 className="text-center">Ordenes pendientes de preparar</h2>
                {orders ? (
                    <div className="row mr-0 justify-content-center">
                        {orders.map(order => (
                            <div className="product m-2 col-3" key={order.id} >
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
                                    <Link
                                        to={"/ChefOrden/" + order.id}
                                        className="btn btn-success"
                                    >
                                        Preparar pedido
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                ) : (
                    <div>
                        <p>No hay ordenes para preparar</p>
                    </div>
                )}
            </div >
        </div >

    );

}

export default MenuChef;