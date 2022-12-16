import http from "../http-common";

const getAll = () => {
    return http.get("/categories");
};

const get = id => {
    return http.get(`/categories/${id}`);
};

// const getCategory = categoryId => {
//     return http.get(`/products?categoryId=${categoryId}`);
// };

const create = data => {
    return http.post("/categories", data);
};

const update = (id, data) => {
    return http.patch(`/categories/${id}`, data);
};

const remove = id => {
    return http.delete(`/categories/${id}`);
};

// const removeAll = () => {
//     return http.delete(`/tutorials`);
// };

// const findByTitle = title => {
//     return http.get(`/tutorials?title=${title}`);
// };

const CategoryService = {
    getAll,
    get,
    // getCategory,
    create,
    update,
    remove,
    // removeAll,
    // findByTitle
};

export default CategoryService;