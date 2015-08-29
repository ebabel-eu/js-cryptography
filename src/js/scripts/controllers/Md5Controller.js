angular
    .module('jsCryptography')
    .controller('Md5Controller', [

        function Md5Controller () {
            var controller = this;

            this.email = {
                text: null,
                hash: null
            };

            this.setHash = function () {
                return 'test@test.com';
            };

            this.sayHello = function () {
                return controller.email.text = 'Hello';
            }
        }

    ]
);
