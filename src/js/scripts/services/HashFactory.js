angular
    .module('jsCryptography')
    .factory('Hash', [

        function HashFactory() {

            return {
                get: function (input) {
                    return CryptoJS.MD5(input).toString();
                }
            }
        }

    ]
);
