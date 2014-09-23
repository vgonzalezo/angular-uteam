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
