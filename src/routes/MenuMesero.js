import Navbar from '../components/navbar';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import OrderDataService from "../services/order.service";
import UserDataService from "../services/user.service";
import ProductDataService from "../services/product.service";


const AddOrder = props => {
    const { userId } = useParams();
    const [orders, setOrders] = useState(null);
    const [pendings, setPendings] = useState(null);

    const getOrders = () => {
        OrderDataService.getUserId(userId)
            .then(response => {
                setOrders(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const getPending = () => {
        OrderDataService.getPendingUser(userId, "pending")
            .then(response => {
                setPendings(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const initialOrderState = {
        id: null,
        table: "",
        userId: userId,
        status: "pending"
    };

    const [order, setOrder] = useState(initialOrderState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setOrder({ ...order, [name]: value });
    };

    const saveOrder = () => {
        var data = {
            table: order.table,
            userId: order.userId,
            status: order.status
        };

        OrderDataService.create(data)
            .then(response => {
                setOrder({
                    id: response.data.id,
                    table: response.data.table,
                    userId: response.data.userId,
                    status: response.data.status
                });
                setSubmitted(true);
                getPending();
            })
            .catch(e => {
                console.log(e);
            });
    };

    const newOrder = () => {
        setOrder(initialOrderState);
        setSubmitted(false);
    };

    useEffect(() => {
        if (userId) {
            getOrders();
            getPending();

        }
    }, [userId]);

    return (
        <div className="App-login hmax">
            <Navbar />
            <div className="submit-form">
                <div>
                    {submitted ? (
                        <div>
                            <h4>Se ha creado satisfactoriamente la orden!</h4>
                            <button className="btn btn-success" onClick={newOrder}>
                                Nueva orden
                            </button>
                        </div>
                    ) : (
                        <div className="text-center">
                            <h2>Crear nueva orden</h2>
                            <label>Mesa</label>
                            <input
                                className="form-control w-25 m-auto"
                                type="number"
                                value={order.table}
                                name="table"
                                id="table"
                                onChange={handleInputChange}
                            />

                            <button onClick={saveOrder} className="btn btn-primary mt-3 mb-3">Crear orden</button>

                        </div>
                    )}
                </div>

                <div>
                    <h2 className="text-center">Historial de ordenes</h2>
                    {orders ? (
                        <div>
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
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="text-center">
                            <button className="btn btn-primary" type="button" disabled>
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                Loading...
                            </button>
                        </div>
                    )}
                </div>

                <div>
                    <h2 className="text-center">Ordenes pendientes</h2>
                    {pendings ? (
                        <div className="row mr-0 justify-content-center">
                            {pendings.map(pending => (
                                <div className="product m-2 col-3" key={pending.id}>
                                    <div className="d-flex flex-column p-2">
                                        <div className="d-flex flex-row">
                                            <p className="m-0 price">Mesa No.</p>
                                            <p className="m-0 ml-4"># {pending.table}</p>
                                        </div>
                                        <div className="d-flex flex-row">
                                            <p className="m-0 price">Pedido No.</p>
                                            <p className="m-0"># {pending.id}</p>
                                        </div>
                                        <div className="d-flex flex-row">
                                            <Link
                                                to={"/MeseroOrden/" + pending.id}
                                                className="btn btn-success"
                                            >
                                                Preparar orden
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center">
                            <button className="btn btn-primary" type="button" disabled>
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                Loading...
                            </button>
                        </div>
                    )}
                </div>

            </div>
        </div >
    );
};

export default AddOrder;