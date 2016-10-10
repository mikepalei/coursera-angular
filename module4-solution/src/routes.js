(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menu/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menu/templates/main-menu.template.html',
    controller: 'MainMenuController as categories',
    resolve: {
      items: ['MenuListService', function (MenuListService) {
        return MenuListService.getItems();
      }]
    }
  })

  // Item detail
  .state('categories.itemDetail', {
    templateUrl: 'src/menu/templates/item-detail.template.html',
    controller: 'ItemDetailController as itemDetail',
    params: {
      itemId: null
    }
  });

}

})();
