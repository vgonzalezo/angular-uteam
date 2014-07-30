'use strict';

/*************************
   CONTROLLER TAKE PHOTO
*************************/

angular.module('angular-uteam').controller('takePhotoCtrl', ['$scope', '$rootScope', '$modalInstance',
    function($scope, $rootScope, $modalInstance) {
        $rootScope.log.debug('INICIO TAKE PHOTO CTRL ');
        // DATA INITIALIZATION
        $scope.data = {}
        // CAMERA
        $scope.makeSnapshot = function makeSnapshot() {
            if (_video) {
                var patCanvas = document.querySelector('#snapshot');
                if (!patCanvas) return;
                patCanvas.width = _video.width;
                patCanvas.height = _video.height;
                var ctxPat = patCanvas.getContext('2d');
                var idata = getVideoData($scope.patOpts.x, $scope.patOpts.y, $scope.patOpts.w, $scope.patOpts.h);
                ctxPat.putImageData(idata, 0, 0);
                //patData = idata;
            }
        };
        // MODAL
        $scope.data.cancelSelection = function() {
            $modalInstance.dismiss('cancel');
        }
        $scope.data.goSelection = function() {
            $scope.makeSnapshot();
            $modalInstance.close();
        }
        $rootScope.log.debug('FIN MAP SELECTION CTRL ');
    }
]);
