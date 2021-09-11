import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";

function _drawQuote(){
  document.getElementById('quote').innerHTML= /*html*/ `
  <p>"${ProxyState.currentQuote}"</p>
  <p id="author" class="visually-hidden">- ${ProxyState.author} - Michael Scott</p>
  
  `
}

export class QuotesController{
constructor(){
  quotesService.getQuotes()
  ProxyState.on('currentQuote', _drawQuote)
  ProxyState.on('author', _drawQuote)
}

toggleAuthor(){
  document.getElementById('author').classList.toggle('visually-hidden')
}

}