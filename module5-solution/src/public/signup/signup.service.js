(function () {
"use strict";

angular.module('public')
.service('SignupService', SignupService);


SignupService.$inject = ['$http', 'ApiPath'];
function SignupService($http, ApiPath) {
  var service = this;
  service.put = function (object) {
    console.log(object);
    service.data = object;
  };
  service.get = function () {
    console.log("Fetching data");
    console.log("Data = ", service.data);
    return service.data;
  };
}



})();
