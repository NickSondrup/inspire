import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";

function _drawWeather(){
  // @ts-ignore
  document.getElementById('weather').innerHTML = /*html*/ `<img src="http://openweathermap.org/img/wn/${ProxyState.currentWeather}@2x.png">`
}
function _drawTemperature(){
let template = ''
template = ProxyState.currentTemp.Template 
document.getElementById('temperature').innerHTML = template
}
export class WeatherController{
constructor(){
  weatherService.getWeather()
  ProxyState.on('currentWeather',_drawWeather)
  weatherService.getTemp()
  ProxyState.on('currentTemp', _drawTemperature)
}

toggleTempUnits(){
  document.getElementById('fahrenheit').classList.toggle('visually-hidden')
  document.getElementById('celsius').classList.toggle('visually-hidden')

}


}