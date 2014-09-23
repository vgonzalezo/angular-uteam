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

uteamApp.directive('imageselector',
    function () {
        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            template: '<div class="imageselector" ng-file-drop="onFileSelect($files);" accept="image/*" ng-file-drag-over-class=""><img ng-src="{{src}}" /><div class="toolbar"><button class="btn btn-orange" ng-click="webcam()"><i class="glyphicon glyphicon-camera"></i></button><button class="btn btn-orange"><i class="glyphicon glyphicon-picture"></i><input type="file" ng-file-select="onFileSelect($files)" accept="image/*" /></button></div></div>',
            /*templateUrl: 'imageselector/angular-uteam-imageselector.html',*/
            controller: 'imageselector-ctrl',
            scope: {
                src: '@'
            }
        };
    }
);


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

uteamApp.directive('menu',
    function () {
        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            /*template: '',*/
            templateUrl: 'menu/angular-uteam-menu.html',
            controller: 'menu-ctrl',
            scope: {
                src: '@'
            }
        };
    }
);
uteamApp.controller('menu-ctrl', ['$scope', '$rootScope', '$modal',
    function ($scope, $rootScope, $modal) {
        $('#menu').mmenu({
            classes			: 'mm-white',
            counters		: true,
            searchfield	: {
                add: true,
                search: true,
                placeholder: 'Buscar...',
                noResults: 'No se han encontrado resultados.'
            },
            header			: {
                add		: true,
                update	: true,
                title	: 'StoreDocs'
            }
        });
    }
]);

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