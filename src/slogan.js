angular.module('app').directive('slogan', ['$timeout', function ($timeout) {
    return {
        scope: {
            finished: '&'
        },
        templateUrl: 'slogan.html',
        controller: ['$scope', function ($scope) {
            var ctrl = this;
            
            ctrl.doneTyping = false;
            ctrl.startDate = new Date(2002,05,03);
            ctrl.seen = localStorage.getItem('seen');
            localStorage.setItem('seen', true);

            ctrl.words = ['ounds', 'ketches', 'cripts', 'erver'];
            // ctrl.words = ['erver'];
            ctrl.words2 = ["Hi, I'm Juan"];
            ctrl.wait = 2 * ctrl.words.length + 2;
            
            function allDone () {
                $scope.finished();
                ctrl.doneTyping = true;
            };

            ctrl.allDone = allDone;
            
            if (ctrl.seen) {
                allDone();
            }
        }],
        controllerAs: '$ctrl',
        link: function(scope, element, attrs) {
            scope.doneFn = function () {
                //element.html('<div id="slogan" class="headertext intro">Hi, I\'m Juan UYS</div>');
                $timeout(function() {
                    angular.element(element[0].querySelectorAll('#s')).remove();
                    $timeout(function() {
                        angular.element(element[0].querySelectorAll('#y')).remove();
                        $timeout(function() {
                            angular.element(element[0].querySelectorAll('#u')).remove();
                        }, 500);
                    }, 500);
                }, 800);
            };
        }
    };
}]);
