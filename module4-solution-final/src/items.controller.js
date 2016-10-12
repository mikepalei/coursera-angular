(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['itemNames'];
function ItemsController(itemNames) {
  var items = this;
  items.categoryName = itemNames.category.name;
  items.itemNames = itemNames.menu_items;
}

})();
