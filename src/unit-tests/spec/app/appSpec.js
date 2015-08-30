describe('jsCryptography', function() {
    'use strict';

    it('is defined', function() {
        var module = angular.module('jsCryptography');

        expect(module).toBeDefined();
    });

    it('has the correct name', function() {
        var name = angular.module('jsCryptography').name;

        expect(name).toBe('jsCryptography');
    });

    it('has no dependencies', function() {
        var dependencies = angular.module('jsCryptography').requires;

        expect(dependencies.length).toBe(0);
    });
});
