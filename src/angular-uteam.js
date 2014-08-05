var uteamApp = angular.module('angular-uteam', ['webcam', 'angularFileUpload', 'ui.bootstrap']);

uteamApp.run(['$rootScope',
        function($rootScope) {
            $rootScope.img = null;

            $rootScope.showImage = function() {
                console.log($rootScope.img);
                $(".imageselector img").attr("src", $rootScope.img);
            };
        }
]);
