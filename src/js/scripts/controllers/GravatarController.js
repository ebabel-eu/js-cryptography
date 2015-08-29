angular
    .module('jsCryptography')
    .controller('GravatarController', [

        // Dependencies.
        '$scope',
        'Gravatar',

        // Gravatar Controller.
        function GravatarController ($scope, Gravatar) {
            var controller = this;

            $scope.$on('updateGravatar', function (event, args) {
                Gravatar.update({
                    controller: controller,
                    args: args
                });
            });
        }

    ]
);
