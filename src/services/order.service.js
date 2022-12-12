export function getOrder(id) {
    return fetch(`http://localhost:3001/api/v1/orders/${id}`)
        .then(data => data.json())
}

export function newOrderFun(table, userId, status) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            table: table,
            userId: userId,
            status: status
        })
    }
    return fetch("http://localhost:3001/api/v1/orders", requestOptions)
        .then(res => res.json())
}

export function deleteOrden(id) {
    fetch(`http://localhost:3001/api/v1/orders/${id}`, { method: 'DELETE' })
        // .then(res => {
        //     if (!res.id) {
        //         return res.status;
        //     }
        //     return res.json();
        // })
}