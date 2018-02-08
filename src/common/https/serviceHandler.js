
export const fetchJSON = (url, method, payload = {}) => {
    if (method === 'GET') {
        return fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
    } else {
        return fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
    }
};

export const uploadFiles = (url, method, payload) => {

    return fetch(url, {
        method: method,
        body: payload,
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        });
};

export const fetchAuthenticatedJSON = (url, method, payload = {}) => {
    const token = window.localStorage.getItem('token');
    if (method === 'GET') {
        return fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "bearer" + token
            },
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error(response.statusText);
            }).catch((err) => {
                return err;
            })
    } else {
        return fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "bearer" + token
            },
            body: JSON.stringify(payload),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error(response.statusText);
            }).catch((err) => {
                return err;
            })
    }

};

