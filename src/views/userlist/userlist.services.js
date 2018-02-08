import { fetchAuthenticatedJSON } from '../../common/https/serviceHandler';

// URLS
const baseUrl = 'http://poc.luezoid.com'

export const getuserList = () => {
    const url = `${baseUrl}/admin/v1/users`;
    return fetchAuthenticatedJSON(url, 'GET', {});
};

export const grantAccess = (id) => {
    const url = `${baseUrl}/admin/v1/users/${id}/grant-access`;
    return fetchAuthenticatedJSON(url, 'GET', {});
};

export const declineAccess = (id) => {
    const url = `${baseUrl}/admin/v1/users/${id}/decline-access`;
    return fetchAuthenticatedJSON(url, 'GET', {});
};
