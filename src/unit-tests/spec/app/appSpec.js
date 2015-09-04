describe('jsCryptography module', function() {
    'use strict';

    var $module;

    beforeEach(inject(function() {
        $module = angular.module('jsCryptography');
    }));

    it('is defined', function() {
        var module = $module;

        expect(module).toBeDefined();
    });

    it('has the correct name', function() {
        var name = $module.name;

        expect(name).toBe('jsCryptography');
    });

    it('has 1 dependency', function() {
        var dependencies = $module.requires;

        expect(dependencies.length).toBe(1);
    });

    it('depends on ngRoute', function() {
        var dependencies = $module.requires;
        var found = dependencies.indexOf('ngRoute') !== -1;

        expect(found).toBe(true);
    });
});
