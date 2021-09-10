import { ProxyState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js";

function _drawImage(){
  document.getElementById('background-image').style.backgroundImage = `url("${ProxyState.currentImg}")`
}
export class ImageController{
  constructor(){
    imageService.getImage()
    ProxyState.on('currentImg', _drawImage)
  }


}