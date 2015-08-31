describe('Gravatar Factory', function() {
    'use strict';

    var $factory, $httpBackend, GravatarUrl;

    beforeEach(module('jsCryptography'));

    beforeEach(inject(function($injector) {
        $factory = $injector.get('Gravatar');
        $httpBackend = $injector.get('$httpBackend');
        GravatarUrl = $injector.get('GravatarUrl');

        $httpBackend.when('GET', 'http://www.gravatar.com/avatar/0c1308ec39e461d555492c4bd111b7b5?s=200&d=404').respond(200, '');
        $httpBackend.when('GET', 'http://www.gravatar.com/avatar/xxx?s=200&d=404').respond(404, '');
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('is defined', function() {
        expect($factory).toBeDefined();
    });

    it('calls the Gravatar API successfully and updates the avatar as expected', function() {
        var _controller = {};

        $factory.get({
            controller: _controller,
            args: {
                text: 'test@example.nl',
                hash: '0c1308ec39e461d555492c4bd111b7b5'
            }
        });

        $httpBackend.flush();

        expect(_controller.avatar).toEqual({
            url: 'http://www.gravatar.com/avatar/0c1308ec39e461d555492c4bd111b7b5?s=200&d=404',
            found: true,
            response: true
        });
    });

    it('calls the Gravatar API but does not find any matching avatar for the supplied hash and gets a 404 instead', function() {
        var _controller = {};

        $factory.get({
            controller: _controller,
            args: {
                text: 'test@example.nl',
                hash: 'xxx'
            }
        });

        $httpBackend.flush();

        expect(_controller.avatar).toEqual({
            url: './img/sad-kitty-by-rakuhund.jpg',
            found: false,
            response: true
        });
    });


});
