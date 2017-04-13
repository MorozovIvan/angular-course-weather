const app = {
  template: require('./app.html'),
  controller: function($scope, $state, Cities) {

    const cityRoute = 'app.city';

  	this.title = 'Погодный виджет';

    this.cities = Cities.getCities();
    this.selectedCity = '';

    $scope.$watch(angular.bind(this, function () {
      return this.selectedCity;
    }), function (newVal, oldVal) {

      if (newVal && newVal !== oldVal) {
        $state.go(cityRoute, {id: newVal});
      }
    });

  },
  controllerAs: '$app'
};

export default app;
