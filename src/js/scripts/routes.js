angular.module('jsCryptography')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/md5', {
                templateUrl: 'views/md5.partial.html',
                controller: 'Md5Controller'
            })
            .when('/ssh', {
                templateUrl: 'views/ssh.partial.html'
            })
            .otherwise({
                redirectTo: '/md5'
            });
        }]
    );
