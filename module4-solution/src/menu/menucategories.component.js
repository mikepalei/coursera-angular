(function () {
'use strict';

angular.module('MenuApp')
.component('menuCategories', {
  templateUrl: 'src/menu/templates/menucategories.template.html',
  bindings: {
    items: '<'
  }
});

})();
