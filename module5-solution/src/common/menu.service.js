(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    console.log("I am withing getCategories method");
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getFavouriteItem = function (itemName) {
    console.log("I am withing getFavouriteItem method and processing item ", itemName);
    return $http.get(ApiPath + '/menu_items/' + itemName + '.json')
    .then(function (response) {
      console.log("Returning ", response.data);
      return response.data;
    });
  };

}



})();
