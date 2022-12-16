import logoMesero from "../Assets/img/logoMesero.png";
import Navbar from '../components/navbar';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import OrderDataService from "../services/order.service";

function MenuChefOrden() {
    const { id } = useParams();
    const [currentOrder, setCurrentOrder] = useState(null);

    const getOrder = id => {
        OrderDataService.get(id)
            .then(response => {
                setCurrentOrder(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const changeStatus = () => {
        var data = {
            status: "completed"
        };

        OrderDataService.update(currentOrder.id, data)
            .then(response => {
                // setCurrentOrder({...currentOrder, status: status});
                // setSubmitted(true);
                // console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        if (id) {
            getOrder(id);
        }
    }, [id]);

    return (
        <div className="App-login hmax">
            <Navbar />
            {currentOrder && currentOrder.status === "preparing" ? (
                <div className="d-flex flex-row hmax">
                    <div className="w-100 resum-box" key={currentOrder.id}>
                        <div className="d-flex flex-column">
                            <div className="row col-12 indicador m-0 p-4">
                                <div className="d-flex flex-row justify-content-around title-chef p-1">
                                    <div className="d-flex">
                                        <p className="font-bold m-0">Mesa No.</p>
                                        <p className="font-bold m-0"># {currentOrder.table}</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <p className="font-bold m-0">Pedido No.</p>
                                        <p className="font-bold m-0"># {currentOrder.id}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-row justify-content-around p-1 m-2 mb-5">
                                <div className="d-flex">
                                    <p className="font-bold m-0">Fecha: </p>
                                    <p className=" m-0">{currentOrder.createdAt}</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <p className="font-bold m-0">Mesero: </p>
                                    <p className="m-0">{currentOrder.user.name}</p>
                                </div>
                            </div>
                            <div className="row col-12 w-75 m-auto">
                                {currentOrder.items.map(orderItem => (
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
                                <button className="btn btn-ligth mt-3 mb-3" onClick={() => changeStatus()}>Enviar pedido</button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>No hay una orden para preparar</div>
            )}

        </div>
    );

}
export default MenuChefOrden;
