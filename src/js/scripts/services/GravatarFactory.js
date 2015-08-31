angular
    .module('jsCryptography')
    .factory('Gravatar', [

        '$http',
        'GravatarUrl',

        function GravatarFactory ($http, GravatarUrl) {
            return {
                get: function (data) {
                    var controller = data.controller;
                    var url = GravatarUrl.get({
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
