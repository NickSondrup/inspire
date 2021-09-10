import { ProxyState } from "../AppState.js";


// @ts-ignore
const weatherApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/weather"
})

class WeatherService{
  constructor(){
    setInterval(() => {weatherService.getTime()}, 1000)
  }

async getTime(){
  let today = new Date()
  let currentTime =  today.getHours() + ':' + today.getMinutes()
  if(today.getMinutes() < 10){
     currentTime = today.getHours() + ':0' + today.getMinutes();
    }
  ProxyState.currentTime = currentTime
  console.log('is this the time?', ProxyState.currentTime);
}

}


export const weatherService = new WeatherService()