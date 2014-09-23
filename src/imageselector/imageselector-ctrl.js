uteamApp.controller('imageselector-ctrl', ['$scope', '$rootScope', '$modal',
    function ($scope, $rootScope, $modal) {
        var hasGetUserMedia = function () {
            return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
                navigator.mozGetUserMedia || navigator.msGetUserMedia);
        };

        if (hasGetUserMedia()) {
            // Good to go!
            //alert("GO!");
            var text = "A1";
            //console.log(text.match(/^[0-9]*\.?[0-9]*/));
            navigator.webkitGetUserMedia({video: true}, function(stream) {
                console.log(stream);
            }, function() {
                //alert("WRONG!");
            });
        } else {
            alert('getUserMedia() is not supported in your browser');
        }

        var captureImage = function (image) {
            var reader = new FileReader();

            reader.readAsDataURL(image);
            reader.onloadend = function () {
                $rootScope.img = reader.result;
                $rootScope.showImage();
            };
        };

        $scope.onFileSelect = function (files) {
            captureImage(files[0]);
        };

        $scope.webcam = function () {
            $modal.open({
                template: '<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true" ng-click="close()">&times;</button><h4 class="modal-title">TOMA TU FOTO</h4></div><div class="modal-body"><div id="takePhoto" class="modal-container"><webcam></webcam></div></div><div class="modal-footer"><div class="pull-right"><button type="button" class="btn btn-orange" ng-click="select()">Aceptar</button><button type="button" class="btn btn-orange" ng-click="close()">Cancelar</button></div></div>',
                /*templateUrl: 'src/webcam/angular-uteam-webcam.html',*/
                controller: 'webcam-ctrl',
                size: 'sm' /* lg */
            });
        };
    }
]);
