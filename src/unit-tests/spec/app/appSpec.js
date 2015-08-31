describe('Main app module', function() {
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

    it('has no dependencies', function() {
        var dependencies = $module.requires;

        expect(dependencies.length).toBe(0);
    });
});
