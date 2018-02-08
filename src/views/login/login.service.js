import { fetchJSON } from '../../common/https/serviceHandler';

export default function loginUser(payload, user) {

    return fetchJSON('http://poc.luezoid.com:8050/api/v1/authenticate', 'POST', payload);

}
