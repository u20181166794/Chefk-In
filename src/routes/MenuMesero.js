import logoMesero from "../Assets/img/logoMesero.png";
import { useState, useEffect } from "react";
import { getOrder, newOrderFun, deleteOrden } from '../services/order.service';

// class MenuMesero extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { products: [] };
//     }

//     componentWillMount() {
//         fetch("http://localhost:3001/api/v1/products")
//             .then((res) => res.json())
//             .then((result) => {
//                 this.setState({ products: result });
//             },
//                 (error) => {
//                     this.setState({
//                         error
//                     })
//                 });
//     }

//     // render() {
//     // {
//     //     this.state.empleados.map((empleado, index) => {
//     //         return (
//     //             <div className="container-fluid">
//     //                 <h2>{empleado.name}</h2>
//     //                 {/* <EmpleadoList listado={this.state.empleados} /> */}
//     //             </div>
//     //         )
//     //     })
//     // }
//     render() {
//         const { error, products } = this.state;
//         if (error) {
//             return <div>Error: {error.message}</div>
//         }
//         return (
//             <div className="container-fluid">
//                 {products.map(product => (
//                     <li key={product.id}>
//                         {product.name} {product.price}
//                     </li>
//                 ))}
//             </div>
//         );
//     }
// }

// export default MenuMesero;



function MenuMesero() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const [products, setProducts] = useState([]);
    const [order, setOrder] = useState([]);
    const [users, setUsers] = useState([]);

    const [table, setTable] = useState([]);
    const [userId, setUserId] = useState([]);
    const [status, setStatus] = useState([]);


    useEffect(() => {
        fetch("api/v1/products")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setProducts(result);
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
        fetch("api/v1/users")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setUsers(result);
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

    const handleSubmit = (e) => {
        e.preventDefault();
        newOrderFun(table, userId, status)
            .then(res => {
                getOrder(res.id)
                    .then(items => {
                        setOrder(items)
                    })
                setUserId('');
                setTable('');
                setStatus('');

            });
    };


    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="App-login hmax">

                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid d-flex w-100">
                        <a class="navbar-brand letter-principal" href="/">Chefk In</a>
                        {
                            Object.keys(order).length == 0 &&
                            <form onSubmit={handleSubmit} className="d-flex w-100 justify-content-between">
                                <div className="d-flex align-items-center">
                                    <div className="w-40 d-flex flex-row justify-content-between">
                                        <div class="d-flex align-items-center" id="navbarColor01">
                                            <p className="letter-color-menu m-0">Nombre Mesero: </p>
                                            <select
                                                value={userId}
                                                onChange={event => setUserId(event.target.value)}
                                            >
                                                <option selected>Selecciona...</option>
                                                {users.map(user => (
                                                    <option value={user.id} key={user.id}>{user.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="w-60 d-flex flex-row">
                                        <label>Mesa: </label>
                                        <input type="number" onChange={event => setTable(event.target.value)} value={table} />
                                    </div>
                                    <div className="w-60 d-flex flex-row">
                                        <label>Estado del pedido: </label>
                                        <select
                                            value={status}
                                            onChange={event => setStatus(event.target.value)}
                                        >
                                            <option selected>Selecciona...</option>
                                            <option value="true">En proceso</option>
                                        </select>
                                    </div>
                                </div>
                                <button type="submit">Nueva orden</button>
                            </form>

                        }
                    </div>
                </nav>

                {
                    Object.keys(order).length > 0 &&
                    <div className="d-flex flex-row hmax">
                        <div className="w-40 resum-box">
                            <div className="w-75 h-50 m-auto d-flex flex-column" key={order.id}>
                                {order.items.map(item => (

                                    <div className="row" key={item.id}>
                                        <div className="col-6">
                                            <div className="d-flex flex-column">

                                                <p className="font-bold">{item.name}</p>
                                                <div className="d-flex flex-row justify-content-between">
                                                    <p className="font-bold">{item.OrderProduct.amount}</p>
                                                    <p>Unidad(s) a $ {item.price} por unidad</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="d-flex justify-content-end align-items-center w-100 h-100">
                                                <p className="font-bold">$ {

                                                }</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <div className="col align-self-end">
                                    <p className="font-bold m-0">Total: ${order.total}</p>
                                </div>
                            </div>

                            <div className="w-100 h-50 m-auto panel-box p-4">
                                <div className="d-flex flex-row w-100 order-button justify-content-center align-items-center">
                                    <img className="img-mesero" src={logoMesero} />
                                    <p className="m-0 p-0">Ordenar</p>
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
                                            <input class="form-control me-sm-2" type="text" placeholder="Search" />
                                            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                                        </form>
                                    </div>
                                </div>
                                <div className="d-flex flex-row">
                                    {products.map(product => (
                                        <div className="product w-25 m-2" key={product.id}>
                                            <p className="m-0 price d-flex justify-content-end">${product.price}</p>
                                            <img className="w-100" src={product.image} />
                                            <p className="m-0">{product.name}</p>
                                            <label>Cantidad</label>
                                            <input />
                                            <button>Agregar</button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default MenuMesero;