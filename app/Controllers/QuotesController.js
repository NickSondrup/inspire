import { quotesService } from "../Services/QuotesService.js";

export class QuotesController{
constructor(){
  quotesService.getQuotes()
}


}