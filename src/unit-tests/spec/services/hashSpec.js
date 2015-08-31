describe('Hash Factory', function() {
    'use strict';

    var $factory;

    beforeEach(module('jsCryptography'));

    beforeEach(inject(function (Hash){
        $factory = Hash;
    }));

    it('is defined', function() {
        expect($factory).toBeDefined();
    });

    it('can hash any string with the MD5 algorythm', function() {
        var input = 'hello world';
        var hash = '5eb63bbbe01eeed093cb22bb8f5acdc3';
        var result = $factory.get(input);

        expect(result).toBe(hash);
    });

});
