HomeCtrl.$inject = ['$scope', '_', 'images', '$sce', '$timeout', 'portfolio'];
function HomeCtrl($scope, _, images, $sce, $timeout, portfolio) {

  var ctrl = this;
  ctrl.cards = [];
  ctrl.images = images;

  ctrl.tags = ['all'];
  ctrl.tag = 'all';

  function tag(newTag) {
    var tags = _.clone(ctrl.tags);
    tags.push(newTag);
    ctrl.tags = _.uniq(tags);
  }

  function addCard() {
    var i = ctrl.cards.length;
    var card = portfolio[i];
    card.img = trust(card.img);
    tag(card.tag);
    ctrl.cards.push(card);
  };
  
  $scope.headerIsDone = false;
  $scope.$watch('headerIsDone', function (n, o) {
    if (n !== o && n) {
      for (var i=0; i<portfolio.length; i++) {
        $timeout(function() {
          addCard();
        });
      }
    }
  })

  $scope.sloganIsDone = false;
  ctrl.doneFn = function () {
    // done with all the header shenanigans.
    $scope.sloganIsDone = true;
  };

  function trust(src) {
    return $sce.trustAsResourceUrl(src);
  }

  ctrl.onAsyncImgLoad = function() {};
  
  ctrl.onAsyncImgEnter = function() {
    $scope.headerIsDone = true;
  };
}

angular.module('app').component('home', {
  templateUrl: 'home.html',
  controller: HomeCtrl
});