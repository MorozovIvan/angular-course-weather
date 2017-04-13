const API_KEY = '752bfbff090d32bb16a9c80fb5b71aa5';
const HOST = 'http://api.openweathermap.org/data/2.5';


class WeatherService {
    constructor($http) {
        this.$http = $http;
        this.city = 'odessa';
        this.tail = `?APPID=${API_KEY}&q=${this.city}`;
        this.weatherTypes = [
            {
                id: 0,
                name: 'Текущий',
                route: 'app.city.current',
                url: `${HOST}/weather${this.tail}`
            },
            {
                id: 1,
                name: 'На 5 дней',
                route: 'app.city.five',
                url: `${HOST}/forecast${this.tail}`
            },
            {
                id: 2,
                name: 'На 16 дней',
                route: 'app.city.sixteen',
                url: `${HOST}/forecast/daily${this.tail}`
            }
        ];
    }

    getData(url){
        return this.$http.get(url).then(function (response){
            console.log("status:" + response.status);

            return response.data;
        }).catch(function(response) {

            console.error('Error occurred:', response.status, response.data);

        }).finally(function() {

            console.log("Task Finished.");

        });
    }

    getWeatherTypes(city){
        this.city = city;

        return this.weatherTypes;
    }

    static get $inject() {
        return ['$http'];
    }

}

export default WeatherService;