angular
    .module('jsCryptography')
    .factory('GravatarUrl', [

        function GravatarUrlFactory() {
            return {
                get: function (input) {
                    return [
                        'http://www.gravatar.com/avatar/', 
                        input.hash, 
                        '?s=', 
                        input.size,
                        '&d=404'
                    ].join('');
                }
            }
        }

    ]
);
