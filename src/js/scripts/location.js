angular.module('jsCryptography')
    .config(function ($locationProvider) {
        $locationProvider.html5Mode({
            enabled: false,
            requireBase: false
        });
    });
