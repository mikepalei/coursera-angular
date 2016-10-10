(function () {
'use strict';

var myApp = angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController',NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('matchingItems', MatchingItems);

function MatchingItems() {
  var ddo = {
  templateUrl: 'matchingItems.html',
  scope: {
    menu: '=myList'
  }
};
return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  menu.foundItems = [];
  menu.search = function () {
    menu.errorMessage="";
    if(menu.searchTerm == null || menu.searchTerm.length == 0) {
      menu.errorMessage = "Nothing found";
      return;
    }
    var foundItems = MenuSearchService.getMatchedMenuItems(menu.searchTerm);
    foundItems.then(function(result) {
    menu.foundItems = result;
    if(menu.foundItems == null || menu.foundItems.length == 0) {
      menu.errorMessage = "Nothing found";
    }
  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });
  menu.removeItem = function (itemIndex) {
    menu.foundItems.splice(itemIndex, 1);
  };
}
}

MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
    })
    .then(function(response) {
      var foundItems = [];
      for (var i = 0; i < response.data.menu_items.length; i++) {
        var current = response.data.menu_items[i].description;
      if(current.toLowerCase().includes(searchTerm)) {
        foundItems.push(response.data.menu_items[i]);
      }
  };
      return foundItems;
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });
  };

}
}
)();
