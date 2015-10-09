(function (ng) {
  'use strict';

  var MainCtrl = function ($rootScope, TechStore) {
    var $scope = this;
    $scope.filter = "";
    $scope.TechStore = TechStore;

    TechStore
      .getAll()
      .then(function (techs) {
        $scope.data = techs;
      });
  };


  ng.module('sl.docs.main')
    .controller('MainCtrl', MainCtrl);
})(angular);
