(function (ng) {
  'use strict';

  var TechStoreProvider = function () {
    var items = [];
    var main_Name = "About Us";
    var main_Description = "Alfredo Sebastian Rosadilla Ribeiro";

    var TechStore = function ($q, Technology) {
        this._$q = $q;
        this._Technology = Technology;
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
      main_Name = Name;
      main_Description = this.get(Name).links;
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
      $get: function ($q, Technology) {
        return new TechStore($q, Technology);
      }
    };
  };

  ng.module('sl.docs')
    .provider('TechStore', TechStoreProvider);
})(angular);
