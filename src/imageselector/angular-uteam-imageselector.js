angular.module('angular-uteam', ['webcam', 'angularFileUpload', 'ui.bootstrap']).directive('imageselector', function () {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        templateUrl: 'src/imageselector/angular-uteam-imageselector.html',
        controller: function ($scope, $modal) {
            $scope.img = null;

            var showImage = function() {
                //console.log($scope.img);
                $(".imageselector img").attr("src", $scope.img);
            };

            var captureImage = function (image) {
                var reader = new FileReader();

                reader.readAsDataURL(image);
                reader.onloadend = function () {
                    $scope.img = reader.result;
                    showImage();
                };
            };

            var captureVideo = function(video) {
                var canvas = document.createElement('canvas'); //$("canvas")[0];
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;

                var ctx = canvas.getContext("2d");

                ctx.drawImage(video, 0, 0);
                $scope.img = canvas.toDataURL();
                showImage();
            }

            $scope.onFileSelect = function (files) {
                captureImage(files[0]);
            };

            $scope.webcam = function () {
                var modalInstance = $modal.open({
                    templateUrl: 'src/imageselector/take-photo-camera.html',
                    controller: function ($scope, $modalInstance) {
                        $scope.close = function() {
                            $modalInstance.close();
                        };

                        $scope.select = function() {
                            captureVideo($("video")[0]);
                            $modalInstance.close();
                        };
                    },
                    size: 'sm' /* lg */
                });
            }
        }
    };
});