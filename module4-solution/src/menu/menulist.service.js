(function () {
'use strict';

angular.module('MenuApp')
.service('MenuListService', MenuListService)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

MenuListService.$inject = ['$http', 'ApiBasePath']
  function MenuListService($http, ApiBasePath) {
  var service = this;

  // List of menu items
  service.getItems = function (searchTerm) {
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"),
      })
      .then(function(response) {
        return response.data.menu_items;
      })
      .catch(function (error) {
        console.log("Something went terribly wrong.");
      });
    };
}

})();
