angular
    .module('jsCryptography')
    .controller('GravatarController', [

        // Dependencies.
        '$scope',

        // Gravatar Controller.
        function GravatarController ($scope) {
            var controller = this;
            var gravatarUrl = 'http://www.gravatar.com/avatar/';
            var size = 200;

            this.avatar = {
                url: null,
                found: false
            };

            $scope.$on('updateGravatar', function (event, args) {
                controller.avatar = {
                    url: [gravatarUrl, args.hash, '?s=', size].join(''),
                    found: true
                };
            });
        }

    ]
);
