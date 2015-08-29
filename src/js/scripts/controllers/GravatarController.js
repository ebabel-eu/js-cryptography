angular
    .module('jsCryptography')
    .controller('GravatarController', [

        // Dependencies.
        '$scope',
        'Gravatar',

        // Gravatar Controller.
        function GravatarController ($scope, Gravatar) {
            var controller = this;

            // Listen to a custom event, ready to be triggered from anywhere in the app.
            $scope.$on('getGravatar', function (event, args) {
                Gravatar.get({
                    controller: controller,
                    args: args
                });
            });
        }

    ]
);
