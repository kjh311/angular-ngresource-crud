// Tutorials:
// http://www.tothenew.com/blog/angulars-resource-for-crud-operations/
// http://schemaform.io/  ANGULAR SCHEMA fORM
// https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications


angular.module('myapp')
.factory('ProductService', ['$resource',
    function ($resource) {
        return $resource('/products', {}, {
            query: { method: "GET", isArray: true },
            create: { method: "POST"},
            get: { method: "GET"},
            remove: { method: "DELETE"},
            update: { method: "PUT"}
        });

}]);
