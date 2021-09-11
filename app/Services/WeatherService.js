import { ProxyState } from "../AppState.js"

// @ts-ignore
const weatherApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/weather"
})

class WeatherService{
 async getWeather() {
    let res =  await weatherApi.get()
    ProxyState.currentWeather = res.data.weather[0].icon
    // @ts-ignore
    console.log('weather res', ProxyState.currentWeather)
  }

}

export const weatherService = new WeatherService()