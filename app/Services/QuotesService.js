import { ProxyState } from "../AppState.js"


// @ts-ignore
const quotesApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/quotes'
})

class QuotesService{

  
  async getQuotes(){
    let res = await quotesApi.get()
    ProxyState.currentQuote = res.data.content
    ProxyState.author = res.data.author
    console.log('this is the author:', ProxyState.author)


  } 



}

export const quotesService = new QuotesService()