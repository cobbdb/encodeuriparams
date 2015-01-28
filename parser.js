var combine = function (set, prev) {
    var i, params = prev;
    for (i in set) {
        if (typeof set[i] !== 'function') {
            params += i + '=' + set[i] + '&';
        }
    }
    return params;
};
module.exports = function (data, addQM) {
    var i,
        params = addQM ? '?' : '',
        result = '';

    if (Array.isArray(data)) {
        result = data.reduce(function (prev, set) {
            return combine(set, prev);
        }, params);
        return encodeURI(result);
    } else {
        result = combine(data, params);
    }
    return encodeURI(result);
};
