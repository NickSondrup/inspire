import { ProxyState } from "../AppState.js";
import { clockService } from "../Services/ClockService.js";

function _drawClock(){
  document.getElementById('clock').innerHTML =  `<div> ${ProxyState.currentTime} </div>`
}


export class ClockController{
  constructor(){
    clockService.getTime()
    
    _drawClock()
    ProxyState.on('currentTime', _drawClock)
  }


}