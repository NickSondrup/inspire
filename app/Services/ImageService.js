import { ProxyState } from "../AppState.js"


// @ts-ignore
const imageApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/images"
})

class ImageService{

  async getImage(){
    let res = await imageApi.get()
    console.log('image res', res.data)
    ProxyState.currentImg = res.data.largeImgUrl
    console.log('image?', ProxyState.currentImg);
  }

}


export const imageService = new ImageService()

