import { ProxyState } from "../AppState.js";


// @ts-ignore
class ClockService{
  constructor(){
    setInterval(() => {clockService.getTime()}, 1000)
  }

async getTime(){
  let today = new Date()
  let currentTime =  today.getHours() + ':' + today.getMinutes()
  if(today.getMinutes() < 10){
     currentTime = today.getHours() + ':0' + today.getMinutes();
    }
  // if(today.getHours() < 12){
  //   today.getHours() - 12
  // }
  ProxyState.currentTime = currentTime
  console.log('is this the time?', ProxyState.currentTime);
}

}


export const clockService = new ClockService()