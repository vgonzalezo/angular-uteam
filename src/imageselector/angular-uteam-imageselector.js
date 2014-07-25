angular.module('angular-uteam-imageselector', []).directive('imageselector', function() {
	return {
		restrict: 'E',
		transclude : true,
		replace : true,
 		templateUrl : 'component/angular-sm-tags/angular-sm-tags.html',
 		link : function(scope, element, attrs) {
 		},
		controller : function($scope, $element, $timeout) {
 			var autoajuste = function() {
 				$timeout(function () {
	 				var tagsContainer = 0;
	 				
	 				if ($('.tag', $element).length > 0) {
	 					$.each($('.tag', $element), function () {
	 						tagsContainer += $(this).width() + 14;
	 					});
	 				}
	 				
	 				var tags = $($element).width();
	 				var input = tags - tagsContainer - 5;
	 				
	 				if (input < 50 || tagsContainer == 0)
	 					input = '100%';
	 				
	 				$('[ng-transclude]', $element).width(input);
 				}, 0);
 			}
 			
 			$( window ).resize( function() {
 				autoajuste();
 			}).resize(); 			
 			
 			$scope.addTag = function(text) {
				$scope.tags.push({title: text, type: 'categories'});
	 			autoajuste();				
 			}
 			
			$scope.removeTag = function(index) {
				$scope.tags.splice(index, 1);
	 			autoajuste();
			}
		}
	};
});