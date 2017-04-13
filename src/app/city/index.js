const component = {
  template: require('./index.html'),
  controller: function($rootScope, $stateParams, Weather) {
    this.name = $stateParams.id;

    this.weatherTypes = Weather.getWeatherTypes($stateParams.id);

    this.goToWeather = function (weatherTypeId){
      Weather.getData(this.weatherTypes[weatherTypeId]['url']).then(function(weather){
        $rootScope.$emit('weather', {data: weather});
      });

    }
  },
  controllerAs: 'city'
};

export default component;
