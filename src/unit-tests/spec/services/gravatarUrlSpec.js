describe('GravatarUrl Factory', function() {
    'use strict';

    var $factory;

    beforeEach(module('jsCryptography'));

    beforeEach(inject(function (GravatarUrl){
        $factory = GravatarUrl;
    }));

    it('is defined', function() {
        expect($factory).toBeDefined();
    });

    it('returns expected url', function() {
        var input = {
            hash: '5eb63bbbe01eeed093cb22bb8f5acdc3',
            size: 200
        };
        var url = 'http://www.gravatar.com/avatar/5eb63bbbe01eeed093cb22bb8f5acdc3?s=200&d=404';
        var result = $factory.get(input);

        expect(result).toBe(url);
    });
});
