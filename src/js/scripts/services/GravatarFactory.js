angular
    .module('jsCryptography')
    .factory('Gravatar', [

        '$http',

        function GravatarFactory ($http) {

            function getUrl (input) {
                return [
                    'http://www.gravatar.com/avatar/', 
                    input.hash, 
                    '?s=', 
                    input.size,
                    '&d=404'
                ].join('');
            }

            return {
                get: function (data) {
                    var controller = data.controller;
                    var url = getUrl({
                        hash: data.args.hash,
                        size: 200
                    });

                    $http.get(url)
                        .then(function (response) {
                            // Success.
                            controller.avatar = {
                                url: url,
                                found: true,
                                response: true
                            };
                        }, function (response) {
                            // Error.
                            // todo: use the cute cat picture here.
                            controller.avatar = {
                                url: './img/sad-kitty-by-rakuhund.jpg',
                                found: false,
                                response: true
                            };
                        });
                }
            }
        }

    ]
);
