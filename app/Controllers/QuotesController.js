import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";

function _drawQuote(){
  document.getElementById('quote').innerHTML= /*html*/ `<div title ="-${ProxyState.author} -Michael Scott" >"${ProxyState.currentQuote}"</div>`
}

export class QuotesController{
constructor(){
  quotesService.getQuotes()
  ProxyState.on('currentQuote', _drawQuote)
  ProxyState.on('author', _drawQuote)
}


}