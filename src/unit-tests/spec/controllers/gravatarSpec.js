describe('Gravatar Controller', function() {

    beforeEach(module('jsCryptography'));

    var $scope, $rootScope, $controller;

    beforeEach(inject(function (_$injector_) {
        $rootScope = _$injector_.get('$rootScope');
        $scope = $rootScope.$new();
    }));

    beforeEach(inject(function (_$controller_){
        spyOn($scope, '$on').and.callThrough();
        $controller = _$controller_('GravatarController', {
            $scope: $scope
        });
    }));

    it('listens for events', function() {
        expect($scope.$on).toHaveBeenCalled();
    });

    it('listens to the getGravatar event', function() {
        var eventName = $scope.$on.calls.mostRecent().args[0];

        expect(eventName).toBe('getGravatar');
    });

    it('listens and runs its code when a getGravatar event is triggered on the rootScope', function() {
        var email = {
            text: 'test@example.nl',
            hash: '0c1308ec39e461d555492c4bd111b7b5'
        };
        var _function = $scope.$on.calls.mostRecent().args[1];

        $rootScope.$broadcast('getGravatar', email);

        expect($scope.$on).toHaveBeenCalledWith('getGravatar', _function);
    });
});