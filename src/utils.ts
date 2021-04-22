import * as _ from 'lodash';

export function sanitizeResponse(input: any) {
    let data = _.isArray(input) ? input : [];
    return data;
}

//Can be part of a common ajax utility/interceptors
export async function fetchAsync(getUrl: RequestInfo) {
    let response = await fetch(getUrl, { 
        method: 'GET' });
    let data = await response.json();
    return data;
};