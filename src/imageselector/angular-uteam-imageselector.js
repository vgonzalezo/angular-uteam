angular.module('angular-uteam', ['webcam', 'angularFileUpload', 'ui.bootstrap']).directive('imageselector', function () {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        templateUrl: 'src/imageselector/angular-uteam-imageselector.html',
        controller: function ($scope, $modal) {
            var showImage = function (image) {
                var reader = new FileReader();

                reader.readAsDataURL(image);
                reader.onloadend = function () {
                    $(".imageselector img").attr("src", reader.result);
                };
            };

            var screenshot = function(video) {
                var canvas = $("canvas");
                var ctx = canvas[0].getContext("2d");

                ctx.drawImage(video, 0, 0);
            }

            var drawImage = function (image) {


                /*console.log("img.width: " + img.width + " | img.height: " + img.height);
                 console.log("canvas.width: " + canvas.width() + " | canvas.height: " + canvas.height());
                 ctx.drawImage(img,0,0, img.width, img.height, 0, 0, canvas.width() / 3, canvas.height() / 3);*/
            };

            $scope.onFileSelect = function (files) {
                showImage(files[0]);
            };

            $scope.webcam = function () {
                var modalInstance = $modal.open({
                    templateUrl: 'src/imageselector/take-photo-camera.html',
                    controller: function ($scope, $modalInstance) {
                        $scope.close = function() {
                            $modalInstance.close();
                        };

                        $scope.select = function() {
                            screenshot($("video")[0]);
                            $modalInstance.close();
                        };
                    },
                    size: 'sm', /* lg */
                    resolve: {
                        /*items: function () {
                         return $scope.items;
                         }*/
                    }
                });
            }
        }
    };
});