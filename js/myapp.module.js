// Tutorials:
// http://www.tothenew.com/blog/angulars-resource-for-crud-operations/
// http://schemaform.io/  ANGULAR SCHEMA fORM
// https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
// https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4
// https://coderwall.com/p/gjs7wq/angular-s-resource-module-is-amazing

angular.module('myapp', ['ngResource'])
// .factory('Student', ['$resource',
//     function ($resource) {
//         return $resource('/products', {}, {
//             query: { method: "GET", isArray: true },
//             create: { method: "POST"},
//             get: { method: "GET"},
//             remove: { method: "DELETE"},
//             update: { method: "PUT"}
//         });

app.factory('Students', function($resource){
    return $resource('/localhost:3000/api/student:id');
});

}]);
