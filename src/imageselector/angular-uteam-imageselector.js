angular.module('angular-uteam-imageselector', []).directive('imageselector', function() {
	return {
		restrict: 'E',
		transclude : true,
		replace : true,
 		templateUrl : '/src/imageselector/angular-uteam-imageselector.html',
 		link : function(scope, element, attrs) {
 		},
		controller : function($scope, $element, $timeout) {
		}
	};
});