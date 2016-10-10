(function () {
'use strict';

angular.module('MenuApp')
.controller('MainMenuController', MainMenuController);


MainMenuController.$inject = ['MenuListService', 'items'];
function MainMenuController(MenuListService, items) {
  var categories = this;
  categories.items = items;
}

})();
