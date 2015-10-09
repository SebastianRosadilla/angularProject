(function (ng) {
  'use strict';

  var MainCtrl = function ($rootScope, Model) {
    var $scope = this;
    $scope.filter = "";
    $rootScope.tech_title = "About Us";
    $rootScope.tech_description = "Alfredo Sebastian Rosadilla Ribeiro";
    $scope.names = [];
    $scope.slugs = [];
    $scope.types = [];
    $scope.versions = [];
    $scope.index_paths = [];
    $scope.db_paths = [];
    $scope.links = [];
    $scope.mtimes = [];
    $scope.db_sizes = [];
    $scope.model = Model.create();
    $scope.data = $scope.model.query(function(data) {
      // COPY THE DATA TO $SCOPE
      data.forEach(function (tec) {
        // NAMES
        $scope.names.push(tec.name);
        // SLUGS
        $scope.slugs.push(tec.slug);
        // TYPES
        $scope.types.push(tec.type);
        // VERSION
        $scope.versions.push(tec.version);
        // INDEX PATHS
        $scope.index_paths.push(tec.index_path);
        // DB PATHS
        $scope.db_paths.push(tec.db_path);
        // LINKS
        $scope.links.push(tec.links);
        // MTIMES
        $scope.mtimes.push(tec.mtime);
        // DB SIZES
        $scope.db_sizes.push(tec.db_size);
      });
    });
  };

  ng.module('sl.docs.main')
    .controller('MainCtrl', MainCtrl);
})(angular);
