import { ProxyState } from "../AppState.js"


// @ts-ignore
const quotesApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/quotes'
})

class QuotesService{

  
  async getQuotes(){
    let res = await quotesApi.get()
    ProxyState.currentQuote = res.data.content
    console.log('this is the quote:', ProxyState.currentQuote)

  } 



}

export const quotesService = new QuotesService()