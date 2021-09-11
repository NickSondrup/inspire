import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";

function _drawWeather(){
  // @ts-ignore
  document.getElementById('weather').innerHTML = /*html*/ `<img src="http://openweathermap.org/img/wn/${ProxyState.currentWeather}@2x.png">`
}
export class WeatherController{
constructor(){
  weatherService.getWeather()
  ProxyState.on('currentWeather',_drawWeather)
}


}