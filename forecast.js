class Forecast {
    constructor() {
        this.key = '01YpcbAaVX7PhY9Kfunmj5W1DoMbr6Km';
        this.weatherURI = 'https://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'https://dataservice.accuweather.com/locations/v1/cities/search'; 
    }

    async updateCity(city) {
        const cityDets = await this.getcity(city);
        const weather = await this.getWeather(cityDets.Key);
        return { cityDets, weather };
    }

    async getcity(city) {
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURI + query);
        const data = await response.json();
        return data[0];
    }

    async getWeather(id) {
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURI + query);
        const data = await response.json();
        return data[0];
    }
}
