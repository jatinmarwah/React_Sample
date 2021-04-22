import * as _ from 'lodash';

export function sanitizeResponse(input: Object) {
    let data = _.isObject(input) ? input : {};
    return data;
}