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


  .state('categories', {
       url: '/categories',
       templateUrl: 'src/menu/templates/main-menu.template.html',
       controller: 'CategoriesController as categories',
       resolve: {
         items: ['MenuDataService', function (MenuDataService) {
           return MenuDataService.getAllCategories();
         }]
       }
     })


.state('items', {
     url: '/items/{category}',
     templateUrl: 'src/menu/templates/items.html',
     controller: 'ItemsController as items',
     resolve: {
       categoryItems: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
         return MenuDataService.getItemsForCategory($stateParams.category);
       }]
     }
   });

}

})();
