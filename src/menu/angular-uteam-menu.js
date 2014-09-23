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