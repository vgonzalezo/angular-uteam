uteamApp.controller('webcam-ctrl', ['$scope', '$rootScope', '$modalInstance',
    function ($scope, $rootScope, $modalInstance) {
        var captureVideo = function(video) {
            var canvas = document.createElement('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            var ctx = canvas.getContext("2d");

            ctx.drawImage(video, 0, 0);
            $rootScope.img = canvas.toDataURL();
            $rootScope.showImage();
        };

        $scope.close = function() {
            $modalInstance.close();
        };

        $scope.select = function() {
            captureVideo($("video")[0]);
            $modalInstance.close();
        };
    }
]);