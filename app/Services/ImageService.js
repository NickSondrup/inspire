import { ProxyState } from "../AppState.js"


// @ts-ignore
const imageApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/images"
})

class ImageService{

  async getImage(){
    let res = await imageApi.get()
    
    ProxyState.currentImg = res.data.largeImgUrl
    
  }

}


export const imageService = new ImageService()

