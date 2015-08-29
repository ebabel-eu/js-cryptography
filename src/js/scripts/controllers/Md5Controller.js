angular
    .module('jsCryptography')
    .controller('Md5Controller', [

        // Dependencies.
        '$rootScope',
        'Hash',

        // MD5 Controller.
        function Md5Controller ($rootScope, Hash) {

            this.setHash = function (toUpdate) {
                toUpdate.hash = Hash.get(toUpdate.text);

                // Emit a custom event to communicate with another controller.
                $rootScope.$broadcast('getGravatar', toUpdate);
            };

        }

    ]
);
