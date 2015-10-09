(function (ng) {
  'use strict';

  var TechStoreProvider = function () {
    var items = [];
    var main_Name = "About us";
    var main_Description = "http://localhost:3000";

    var TechStore = function ($q, $sce, Technology) {
        this._$q = $q;
        this._Technology = Technology;
        this._$sce = $sce;
    };

    TechStore.prototype.getAll = function () {
      if (this.isEmpty()) {
        return this.download();
      }

      // Use the local data.
      var defered = this._$q.defer();
      defered.resolve(items);

      return defered.promise;
    };

    // RETURN THE MAIN NAME
    TechStore.prototype.getName = function () {
      return main_Name;
    }

    // RETURN THE MAIN DESCRIPTION
    TechStore.prototype.getDescription = function () {
      return main_Description;
    }

    TechStore.prototype.get = function (name) {
      for(var i = 0; i < items.length; i++) {
        if(items[i].name === name) {
          return items[i];
        }
      }
    };

    TechStore.prototype.isEmpty = function () {
      return items.length === 0
    };

    // SET THE MAIN NAME
    TechStore.prototype.setMainName = function(Name) {
      var $scope = this;
      main_Name = Name;
      if(this.get(Name).links !== null) {
        main_Description = $scope._$sce.trustAsResourceUrl(this.get(Name).links.home);
      }
    };

    TechStore.prototype.download = function () {
      var defered = this._$q.defer();
      var Technology = this._Technology;
      var store = this;

      if (this.promise) {
        return this.promise;
      } else {
        this.promise = defered.promise;
      }

      Technology.query(function (data) {
        items = data;
        defered.resolve(items);
        store.promise = null;
      }, function (err) {
        store.promise = null;
        defered.reject();
      });

      return defered.promise;
    }

    return {
      $get: function ($q, $sce, Technology) {
        return new TechStore($q, $sce, Technology);
      }
    };
  };

  ng.module('sl.docs')
    .provider('TechStore', TechStoreProvider);
})(angular);
