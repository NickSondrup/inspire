import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";

function _drawClock(){
  document.getElementById('clock').innerHTML =  `<div> ${ProxyState.currentTime} </div>`
}


export class ClockController{
  constructor(){
    weatherService.getTime()
    
    _drawClock()
    ProxyState.on('currentTime', _drawClock)
  }


}