angular
    .module('jsCryptography')
    .factory('Hash', [

        function HashFactory() {

            return {
                get: function (input) {
                    // todo: write the actual Hashing implementation.
                    return Date.now();
                }
            }
        }

    ]
);
