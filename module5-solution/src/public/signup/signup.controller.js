(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignupService', 'MenuService'];
function SignUpController(SignupService, MenuService) {
  var $ctrl = this;
  $ctrl.itemName = null;
  console.log("Created signup controller");
  $ctrl.submit = function () {
    $ctrl.message = null;
    console.log("Submitting firstname = ", this.user.firstName);
    MenuService.getFavouriteItem(this.favMenuItem)
    .then(function(data)
  {
    console.log("I am within then in SignUpController");
    $ctrl.user.favMenuItem = data;
    console.log("Data in controller = ", data);

    console.log("Added item = " + $ctrl.user.favMenuItem);
    SignupService.put($ctrl.user);
    $ctrl.message = "Success";
    console.log("Message = " + $ctrl.message);
  })
  .catch(function(e) {
    console.log("I am within error handler in SignUpController");
    $ctrl.message = "Error";
  });


  };
  $ctrl.fetch = function() {
    //SignupService.get();
  };
}


})();
