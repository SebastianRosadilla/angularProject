(function (ng) {
  'use strict';

  var Technology = function ($resource) {
    return $resource(
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
  };

  ng.module('sl.docs')
    .service('Technology', Technology);
})(angular);
