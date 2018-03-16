angular.module('app').directive('card', [function () {
    return {
        scope: {
            card: '=it'
        },
        templateUrl: 'card.html',
        link: function(scope, elem, attrs) {
            elem.bind('click', function() {
                //window.location.href = scope.card.link;
            });
        }
    };
}]);
