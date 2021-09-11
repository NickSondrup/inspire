import { ProxyState } from "../AppState.js"
import { Temperature } from "../Models/Temperature.js"

// @ts-ignore
const weatherApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/weather"
})

class WeatherService{
 async getTemp() {
   let res = await weatherApi.get()
   let tempData = res.data.main.temp 
   ProxyState.currentTemp =new Temperature(tempData)
   ProxyState.currentTemp = ProxyState.currentTemp
   console.log('temp res', ProxyState.currentTemp);
 }
 async getWeather() {
    let res =  await weatherApi.get()
    ProxyState.currentWeather = res.data.weather[0].icon
    // @ts-ignore
    console.log('weather res', ProxyState.currentWeather)
  }

  

}

export const weatherService = new WeatherService()