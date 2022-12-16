import http from "../http-common";

const getAll = () => {
    return http.get("/products");
};

const get = id => {
    return http.get(`/products/${id}`);
};

const getCategory = categoryId => {
    return http.get(`/products?categoryId=${categoryId}`);
};

const findByName = name => {
    return http.get(`/products?name=${name}`);
};

const create = data => {
    return http.post("/products", data);
};

const update = (id, data) => {
    return http.patch(`/products/${id}`, data);
};

const remove = id => {
    return http.delete(`/products/${id}`);
};

// const removeAll = () => {
//     return http.delete(`/tutorials`);
// };

// const findByTitle = title => {
//     return http.get(`/tutorials?title=${title}`);
// };

const ProductService = {
    getAll,
    get,
    findByName,
    getCategory,
    create,
    update,
    remove,
    // removeAll,
    // findByTitle
};

export default ProductService;