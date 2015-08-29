angular
    .module('jsCryptography')
    .factory('Gravatar', [
        function GravatarFactory() {
            return {
                update: function (data) {
                    var gravatarUrl = 'http://www.gravatar.com/avatar/';
                    var size = 200;
                    var controller = data.controller;
                    var args = data.args;

                    // todo: use $http to make a call here.
                    controller.avatar = {
                        url: [gravatarUrl, args.hash, '?s=', size].join(''),
                        found: true
                    };
                }
            }
        }

    ]
);
