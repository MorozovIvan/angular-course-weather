const component = {
    template: require('./index.html'),
    controller: function($rootScope, $stateParams) {
        $rootScope.$on('weather', angular.bind(this, function (event, data) {
            return this.data = data;
        }));
    },
    controllerAs: 'current'
};

export default component;
