(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$http', 'ApiBasePath']
  function MenuDataService($http, ApiBasePath) {
  var service = this;

  // List of menu categories
  service.getAllCategories = function () {
      return $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json")
      })
      .then(function(response) {
        // return response.data.menu_items;
        return response.data;
      })
      .catch(function (error) {
        console.log("Unable to fetch categories");
      });
    };

//List of items per category
service.getItemsForCategory = function (categoryShortName) {
  return $http({
    method: "GET",
    url: (ApiBasePath + "/menu_items.json"),
    params: {
    category: categoryShortName
}
  })
  .then(function(response) {
    return response.data;
  })
  .catch(function (error) {
    console.log("Unable to get items for category.");
  });
};
}

})();
