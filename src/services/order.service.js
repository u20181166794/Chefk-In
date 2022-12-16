import http from "../http-common";

const getAll = () => {
    return http.get("/orders");
};

const get = id => {
    return http.get(`/orders/${id}`);
};

const getStatus = status => {
    return http.get(`/orders?status=${status}`);
};

const getUserId = userId => {
    return http.get(`/orders?userId=${userId}&status=completed`);
};

const getPending = (userId, status) => {
    return http.get(`/orders?status=${status}&userId=${userId}`);
};

const getPendingUser = (userId, status) => {
    return http.get(`/orders?status=${status}&userId=${userId}`);
};

const create = data => {
    return http.post("/orders", data);
};

const createItem = data => {
    return http.post("/orders/item", data);
};

const update = (id, data) => {
    return http.patch(`/orders/${id}`, data);
};

const remove = id => {
    return http.delete(`/orders/${id}`);
};

// const removeAll = () => {
//     return http.delete(`/tutorials`);
// };

// const findByTitle = title => {
//     return http.get(`/tutorials?title=${title}`);
// };

const OrderService = {
    getAll,
    get,
    getStatus,
    getUserId,
    getPending,
    getPendingUser,
    create,
    createItem,
    update,
    remove,
    // removeAll,
    // findByTitle
};

export default OrderService;