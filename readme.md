# encodeuriparams [![NPM version](https://badge.fury.io/js/encodeuriparams.svg)](http://badge.fury.io/js/encodeuriparams)

Turn an object into an encoded URI parameter string.

    $ npm install encodeuriparams

-------------
## Convert a single object

    var encode = require('encodeuriparams');
    var params = encode({
        some: 'value'
    });

`params` will now equal `some=value&`.

## Maintain order with an array

    params = encode([{
        string: 'value'
    }, {
        num: 123
    }}]);

`params` will now equal `string=value&num=123&`.

## Add the question mark automatically

    params = encode({
        boolVal: true
    }, true);

`params` will now equal `?boolVal=true&`.

---------
* See: http://github.com/cobbdb/encodeuriparams
* License: MIT
