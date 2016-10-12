(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['catNames'];
function CategoriesController(catNames) {
  var categories = this;
  categories.catNames = catNames;
}

})();
