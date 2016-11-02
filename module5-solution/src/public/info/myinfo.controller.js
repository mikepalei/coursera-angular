(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['SignupService'];
function MyInfoController(SignupService) {
  console.log("I am within MyInfoController");
  var $ctrl = this;
  $ctrl.data = SignupService.get();
  if($ctrl.data) {
    $ctrl.itemName = $ctrl.data.favMenuItem.short_name.substring(0,1);
  }
}


})();
