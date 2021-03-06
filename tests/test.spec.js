describe('encodeURIParams', function () {
    var parse = require('../parser.js');
    describe('no question mark', function () {
        it('returns empty with no args', function () {
            var params = parse();
            expect(params).toEqual('');
        });
        it('converts obj to param string', function () {
            var params = parse({
                test: 'value',
                '123': 456,
                'bool': false
            });
            expect(params).toEqual('123=456&test=value&bool=false&');
        });
        it('encode special chars', function () {
            var params = parse({
                name: 'test value'
            });
            expect(params).toEqual('name=test%20value&');
        });
        it('maintains order if arg is array', function () {
            var params = parse([{
                test: 'value'
            }, {
                'bool': false
            }, {
                '123': 456
            }]);
            expect(params).toEqual('test=value&bool=false&123=456&');
        });
        it('ignores empty objects', function () {
            var params = parse([{
                'bool': false
            }, {
            }]);
            expect(params).toEqual('bool=false&');
        });
        it('ignores functions', function () {
            var params = parse([{
                testkey: 'testval',
                testfun: function () {}
            }, {
                lastkey: 'lastval'
            }]);
            expect(params).toEqual('testkey=testval&lastkey=lastval&');
        });
    });
    describe('with question mark', function () {
        it('returns empty with no args', function () {
            var params = parse('', true);
            expect(params).toEqual('?');
        });
        it('converts obj to param string', function () {
            var params = parse({
                test: 'value'
            }, true);
            expect(params).toEqual('?test=value&');
        });
    });
});
