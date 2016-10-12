(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

// Version with resolving to 1 item based on $stateParams in route config
ItemDetailController.$inject = ['$stateParams', 'categoryItems'];
function ItemDetailController($stateParams, categoryItems) {
  var itemDetail = this;
  // var item = items[$stateParams.itemId];
  // itemDetail.name = item.name;
  // itemDetail.quantity = item.quantity;
  // itemDetail.description = item.description;
  console.log("State params " + $stateParams.categoryItems);
  itemDetail.items = categoryItems.menu_items;
  itemDetail.category = categoryItems.category.name;
}

})();
