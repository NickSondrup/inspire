
export class Temperature{
  constructor(tempData){
    this.kelvin = Math.round(tempData)
    this.fahrenheit = Math.round((tempData - 273.15) * (9/5) + 32)
    this.celsius = Math.round(tempData - 273.15)
  }


  get Template(){
    return /*html*/ `

      <div id="fahrenheit" class="">
        <p>${this.fahrenheit} F</p>
      </div>

      <div id="celsius" class="visually-hidden">
         <p>${this.celsius} C</p>
      </div>
    `
  }
}