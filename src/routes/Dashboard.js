import Navbar from '../components/navbar';
import React, { useState, useEffect } from "react";
import ProductDataService from "../services/product.service";
import CategoryDataService from "../services/category.service";
import UserDataService from "../services/user.service";

function Dashboard() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function data() {
            const categoriesResponse = await CategoryDataService.getAll();
            setCategories(categoriesResponse.data);
        };

        data();
    }, []);

    // ========= Add new user =========
    const [user, setUser] = useState([]);

    function saveUser(event) {
        event.preventDefault();
        const data = {
            name: event.target.name.value,
            email: event.target.email.value,
            user: event.target.user.value,
            password: event.target.password.value,
            role: event.target.role.value,
            status: event.target.status.value
        }
        UserDataService.create(data)
            .then(response => {
                setUser({
                    id: response.data.id,
                    name: response.data.name,
                    user: response.data.user,
                    password: response.data.password,
                    role: response.data.role,
                    status: response.data.status
                });
            })
            .catch(e => {
                console.log(e);
            })
    }

    // ========= Add new category =========
    const [category, setCategory] = useState([]);

    function saveCategory(event) {
        event.preventDefault();
        const data = {
            name: event.target.name.value,
            status: event.target.status.value
        }
        CategoryDataService.create(data)
            .then(response => {
                setCategory({
                    id: response.data.id,
                    name: response.data.name,
                    status: response.data.status
                });
            })
            .catch(e => {
                console.log(e);
            })
    }

    // ========= Add new product =========
    const [product, setProduct] = useState([]);

    function saveProduct(event) {
        event.preventDefault();
        const data = {
            name: event.target.name.value,
            price: event.target.price.value,
            categoryId: event.target.categoryId.value,
            description: event.target.description.value,
            image: event.target.image.value,
            status: event.target.status.value
        }
        ProductDataService.create(data)
            .then(response => {
                setProduct({
                    id: response.data.id,
                    name: response.data.name,
                    price: response.data.price,
                    categoryId: response.data.categoryId,
                    description: response.data.description,
                    image: response.data.image,
                    status: response.data.status
                });
            })
            .catch(e => {
                console.log(e);
            })
    }

    return (
        <div className="App">
            <Navbar />
            <div className="container">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="pills-user-tab" data-bs-toggle="pill" data-bs-target="#pills-user" type="button" role="tab" aria-controls="pills-user" aria-selected="true">Nuevo usuario</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-category-tab" data-bs-toggle="pill" data-bs-target="#pills-category" type="button" role="tab" aria-controls="pills-category" aria-selected="false">Nueva categoria</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-product-tab" data-bs-toggle="pill" data-bs-target="#pills-product" type="button" role="tab" aria-controls="pills-product" aria-selected="false">Nuevo producto</button>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-user" role="tabpanel" aria-labelledby="pills-user-tab" tabindex="0">
                        <form onSubmit={saveUser}>
                            <label>Nombre: </label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                            />

                            <label>Correo: </label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                            />

                            <label>Usuario: </label>
                            <input
                                type="text"
                                className="form-control"
                                name="user"
                            />

                            <label>Contraseña: </label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                            />

                            <label>Rol: </label>
                            <input
                                type="text"
                                className="form-control"
                                name="role"
                            />

                            <label>Estado: </label>
                            <select
                                className="form-control"
                                name="status"
                            >
                                <option value="true">Activo</option>
                                <option value="false">Inactivo</option>
                            </select>

                            <button type="submit" className='btn btn-success'>Agregar</button>
                        </form>
                    </div>
                    <div className="tab-pane fade" id="pills-category" role="tabpanel" aria-labelledby="pills-category-tab" tabindex="0">
                        <form onSubmit={saveCategory}>
                            <label>Nombre: </label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                            />

                            <label>Estado: </label>
                            <select
                                className="form-control"
                                name="status"
                            >
                                <option value="true">Activa</option>
                                <option value="false">Inactiva</option>
                            </select>

                            <button type="submit" className='btn btn-success'>Agregar</button>
                        </form>
                    </div>
                    <div className="tab-pane fade" id="pills-product" role="tabpanel" aria-labelledby="pills-product-tab" tabindex="0">
                        <form onSubmit={saveProduct}>
                            <label>Nombre: </label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                            />

                            <label>Precio: </label>
                            <input
                                type="number"
                                className="form-control"
                                name="price"
                            />

                            <label>Categoria: </label>
                            <select
                                className="form-control"
                                name="categoryId"
                            >
                                {categories.map(category => (
                                    <option key={category.id} value={category.id}>{category.name}</option>
                                ))}
                            </select>

                            <label>Descripcion: </label>
                            <textarea
                                className="form-control"
                                name="description"
                            ></textarea>

                            <label>Url imagen: </label>
                            <input
                                type="text"
                                className="form-control"
                                name="image"
                            />

                            <label>Estado: </label>
                            <select
                                className="form-control"
                                name="status"
                            >
                                <option value="true">Activo</option>
                                <option value="false">Inactivo</option>
                            </select>

                            <button type="submit" className='btn btn-success'>Agregar</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Dashboard;