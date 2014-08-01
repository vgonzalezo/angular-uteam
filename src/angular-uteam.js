var uteamApp = angular.module('angular-uteam', ['webcam', 'angularFileUpload', 'ui.bootstrap']);

uteamApp.run(function($rootScope) {
        $rootScope.img = null;

        $rootScope.showImage = function() {
            //console.log($scope.img);
            $(".imageselector img").attr("src", $rootScope.img);
        };
    }
);
