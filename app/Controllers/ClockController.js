import { ProxyState } from "../AppState.js";
import { clockService } from "../Services/ClockService.js";

function _drawClock(){
  document.getElementById('clock').innerHTML =  `<h1> ${ProxyState.currentTime} </h1>`
}


export class ClockController{
  constructor(){
    clockService.getTime()
    
    _drawClock()
    ProxyState.on('currentTime', _drawClock)
  }


}