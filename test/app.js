var tagApp = angular.module('tagApp', [ 'angularSMTag', 'angularSMMenu', 'angularTracker','angularUTCarrusel' ]);

tagApp.controller('MainController', function($scope) {
	$scope.tags = [{title: 'Varios', type: 'categories'}, 
	               {title: 'Naomi',type: 'username'}];
	
	$scope.search = "";
	$scope.menu = [{title: 'Usuario', icon: 'icon-user'},
	               {title: 'Publicar', icon: 'icon-tag'}];
	
}).controller('Main2Controller', function($scope) {
	$scope.tags = [];
	$scope.search = "";
	
	$scope.menu = [{title: 'Usuario', icon: 'icon-user'},
	               {title: 'Publicar', icon: 'icon-tag'}];
});