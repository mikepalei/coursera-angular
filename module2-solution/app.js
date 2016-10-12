(function () {
'use strict';

var myApp = angular.module('ShoppingListCheckOff', [])
.controller('BuyListController', BuyListController)
.controller('BoughtListController', BoughtListController)
.service('ShoppingListService', ShoppingListService);

BuyListController.$inject = ['ShoppingListService'];
function BuyListController(ShoppingListService) {
  var list1 = this;
  list1.items = ShoppingListService.getItems('list1');

  list1.removeItem = function (itemIndex) {
   return ShoppingListService.removeItem(itemIndex);
};
list1.errorMessage = function() {
  var message = "";
  if(list1.items.length < 1) {
    message = "Everything already bought!";
  }
  return message;
}

 // console.log("Updated items length = " + list1.items.length);
}

BoughtListController.$inject = ['ShoppingListService'];
function BoughtListController(ShoppingListService) {
  var list2 = this;
  console.log("I am within BoughtListController");
  list2.items = ShoppingListService.getItems('list2');
  list2.errorMessage = function() {
    var message = "";
    if(list2.items.length < 1) {
      message = "Nothing bought yet!";
    }
    return message;
  }
}


function ShoppingListService() {
  var service = this;
  // List of items to buy
  var itemsToBuy = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    },
    {
      name: "Pepsi",
      quantity: "5"
    }
  ];
//List of items already bought
var itemsBought = [];
  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };

  service.removeItem = function (itemIndex) {
    itemsBought.push(itemsToBuy[itemIndex]);
    var curItem = itemsToBuy.splice(itemIndex , 1)
  };

  service.getItems = function (name) {
    if(name == 'list1') {  return itemsToBuy; }
    else {return itemsBought;}
  };
}
}
)();
