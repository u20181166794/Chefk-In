import Navbar from '../components/navbar';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import OrderDataService from "../services/order.service";
import ProductDataService from "../services/product.service";
import CategoryDataService from "../services/category.service";

const MenuMeseroOrden = props => {
    const { id } = useParams();

    //=============== Get data (currentOrder, products, categories) ===============

    const [currentOrder, setCurrentOrder] = useState(null);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        if (id) {
            async function data(id) {
                const orderResponse = await OrderDataService.get(id);
                setCurrentOrder(orderResponse.data);

                const productsResponse = await ProductDataService.getAll();
                setProducts(productsResponse.data);

                const categoriesResponse = await CategoryDataService.getAll();
                setCategories(categoriesResponse.data);
            };

            data(id);
        }

    }, [id, currentOrder]);

    //=============== Filter products ===============

    const [selectCategory, setSelectCategory] = useState('');
    const [searchName, setSearchName] = useState('');

    const filteredProducts = products.filter(product => {
        if (selectCategory && product.categoryId !== parseInt(selectCategory)) {
            return false;
        }
        if (searchName && !product.name.toLowerCase().includes(searchName.toLowerCase())) {
            return false;
        }
        return true;
    });

    //=============== Capture item and save ===============

    // ======== Capture item ========

    const [currentProductId, setCurrentProductId] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

    const setActiveProduct = (productId, index) => {
        setCurrentProductId(productId);
        setCurrentIndex(index);
    };

    // ======== Save item ========

    const initialItemState = {
        orderId: id,
        amount: ""
    };

    const [item, setItem] = useState(initialItemState);

    const onChangeAmount = event => {
        const { name, value } = event.target;
        setItem({ ...item, [name]: value });
    };

    const saveItem = () => {
        var data = {
            orderId: item.orderId,
            productId: currentProductId,
            amount: item.amount
        };

        OrderDataService.createItem(data)
            .then(response => {
                setItem({
                    id: response.data.id,
                    orderId: response.data.orderId,
                    productId: response.data.productId,
                    amount: response.data.amount
                });
            })
            .catch(e => {
                console.log(e);
            });
    };

    //=============== Send order to preparation ===============

    const [message, setMessage] = useState("");

    const changeStatus = () => {
        var data = {
            status: "preparing"
        };

        OrderDataService.update(item.orderId, data)
            .then(response => {
                setMessage("The order was sent to preparation");
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div className="App-login hmax">
            <Navbar />
            <div>
                {message === '' ? ( // ========== Validate if the order has already been sent and there is a message ==========
                    currentOrder ? (  // ========== Validate if an order exists ==========
                        currentOrder.status === "pending" ? (
                            <div className="d-flex flex-row hmax">
                                <div className="w-40 resum-box">
                                    <div className="w-75 h-50 m-auto d-flex flex-column" key={currentOrder.id}>
                                        {currentOrder.items.map(item => (
                                            <div className="row" key={item.id}>
                                                <div className="col-6">
                                                    <div className="d-flex flex-column">
                                                        <p className="font-bold">{item.name}</p>
                                                        <div className="d-flex flex-row justify-content-between">
                                                            <p className="font-bold me-1">{item.OrderProduct.amount}</p>
                                                            <p>Unidad(s) a $ {item.price} por unidad</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="d-flex justify-content-end align-items-center w-100 h-100">
                                                        <p className="font-bold">$ {
                                                            item.price * item.OrderProduct.amount
                                                        }</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                        <div className="col align-self-end">
                                            <p className="font-bold m-0">Total: ${}</p>
                                        </div>
                                    </div>

                                    {/* ========== Change the status of the order to preparation ========== */}

                                    <div className="w-100 h-50 m-auto panel-box p-4">
                                        <div className="d-flex flex-row w-100 order-button justify-content-center align-items-center">
                                            <button className="btn btn-ligth mt-3 mb-3" onClick={() => changeStatus()}>Ordenar</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-60">
                                    <div className="d-flex flex-column justify-content-center align-items-center">
                                        <div className="d-flex flex-row w-100 category align-items-center">
                                            {/* ========== Capture the id of the category to filter and display the filtered order ========== */}
                                            <div className="d-flex">
                                                <label>Categoria: </label>
                                                <select
                                                    className="form-control me-sm-2"
                                                    value={selectCategory}
                                                    onChange={e => setSelectCategory(e.target.value)}
                                                >
                                                    <option value="">All</option>
                                                    {categories.map(category => (
                                                        <option key={category.id} value={category.id}>
                                                            {category.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            {/* ========== Enter the name of the product to filter and display the filtered product ========== */}
                                            <div className="w-60 p-1">
                                                <form className="d-flex">
                                                    <input
                                                        className="form-control me-sm-2"
                                                        type="text"
                                                        placeholder="Search"
                                                        value={searchName}
                                                        onChange={e => setSearchName(e.target.value)}
                                                    />
                                                </form>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row">
                                            {products ? ( // ========== Validate if there are products ==========
                                                // ========== Display the products, enter the quantity and the id to save the product in the product ==========
                                                filteredProducts.map((product, index) => (
                                                    <div className={"product w-25 m-2 p-3 text-center " + (index === currentIndex ? "active" : "")} onClick={() => setActiveProduct(product.id, index)} key={index}>
                                                        <img className="w-50 h-25" src={product.image} />
                                                        <p className="m-0">{product.name} - $ {product.price}</p>
                                                        <input
                                                            className="form-control"
                                                            type="number"
                                                            name="amount"
                                                            id="amount"
                                                            required
                                                            value={index === currentIndex ? item.amount : ""}
                                                            onChange={onChangeAmount}
                                                        />
                                                        <input
                                                            type="hidden"
                                                            name="productId"
                                                            id="productId"
                                                            value={currentProductId}
                                                        />
                                                        <button className="btn btn-ligth mt-3" onClick={saveItem}>Agregar</button>
                                                    </div>
                                                ))

                                            ) : ( // ========== If there are no products ==========
                                                <div>
                                                    <p>No existen productos, por favor agrega unos</p>
                                                </div>
                                            )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div>{/* ========== If the selected order is not pending ========== */}
                                <br />
                                <p>Por favor selecciona una orden pendiente...</p>
                                <Link
                                    to={"/mesero/" + id}
                                    className="btn btn-success"
                                >
                                    Volver
                                </Link>
                            </div>
                        )
                    ) : (
                        <div>{/* ========== If the id of the selected order does not exist ========== */}
                            <br />
                            <p>Por favor crea una orden nueva...</p>
                        </div>
                    )
                ) : (
                    <div>{/* ========== If the order has already passed to preparation and a message has been sent ========== */}
                        <p>{message}</p>
                        <Link
                            to={"/mesero/" + id}
                            className="btn btn-success"
                        >
                            Ir por otra orden
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MenuMeseroOrden;