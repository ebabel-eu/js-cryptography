angular
    .module('jsCryptography')
    .controller('Md5Controller', [

        // Dependencies.
        '$scope', 
        'Hash',

        // MD5 Controller.
        function Md5Controller ($scope, Hash) {

            this.setHash = function (toUpdate) {
                toUpdate.hash = Hash.get(toUpdate.text);
            };

        }

    ]
);
