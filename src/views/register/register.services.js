import { fetchJSON } from '../../common/https/serviceHandler';

export const register = (payload) => {
    return fetchJSON('http://poc.luezoid.com:8050/api/v1/register', 'POST', payload);
};

