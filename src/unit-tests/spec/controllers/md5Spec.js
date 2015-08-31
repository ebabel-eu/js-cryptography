describe('Md5 Controller', function() {

    beforeEach(module('jsCryptography'));

    var $rootScope, $controller;

    beforeEach(inject(function(_$controller_, _$rootScope_){
        $rootScope = _$rootScope_.$new();
        $controller = _$controller_('Md5Controller');
    }));

    it('makes a setHash function available', function() {
        expect($controller.setHash).toBeDefined();
    });

    it('hashes e-mail test@example.nl to 0c1308ec39e461d555492c4bd111b7b5', function() {
        var toUpdate = {
            text: 'test@example.nl'
        };

        $controller.setHash(toUpdate);

        expect(toUpdate.hash).toBe('0c1308ec39e461d555492c4bd111b7b5');
    });

    it('consitently produces the same hash twice for the same e-mail test@example.nl', function() {
        var first = {
            text: 'test@example.nl'
        };
        var second = {
            text: 'test@example.nl'
        }

        $controller.setHash(first);
        $controller.setHash(second);

        expect(first.hash).toBe(second.hash);
    });

    // todo: mock test the rootScope broadcast event has been emitted.
});