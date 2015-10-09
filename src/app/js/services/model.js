(function (ng) {
  'use strict';

  var Model = function ($resource) {
    return {
      create: function () {
        var resource = $resource(
          'http://localhost:8000/technologies/:id',
          {id: "@id"},
          {
            get: { method: "GET" },
            query: { method: "GET", isArray: true },
            update: { method: "PUT" },
            create: { method: "POST" },
            delete: { method: "DELETE" }
          }
        );
        return resource;
      }
    };
  };

  ng.module('sl.docs')
    .service('Model', Model);
})(angular);
