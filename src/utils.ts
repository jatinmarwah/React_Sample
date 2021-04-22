import * as _ from 'lodash';

export function sanitizeResponse(input: Object) {
    let data = _.isArray(input) ? input : [];
    return data;
}