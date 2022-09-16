import { appState } from "../AppState.js"
import { Gif } from "../Models/Gif.js"
import { Pop } from "../Utils/Pop.js"
import { giphyServer } from "./AxiosService.js"

class GifsService {
  next() {
    if (appState.offset < appState.gifs.length - appState.perPage) {
      appState.offset += appState.perPage
    }
  }
  previous() {
    if (appState.offset - appState.perPage < 0) {
      appState.offset = 0
    } else {
      appState.offset -= appState.perPage
    }
  }
  getURL(url) {
    // @ts-ignore
    document.getElementById("url-input").value = url
  }
  async getGifs(search) {
    const res = await giphyServer.get("", {
      params: {
        limit: 1000,
        q: search
      }
    })
    // console.log(res.data.data)
    // res.data.data.forEach(item => {
    //   if (item.url) {
    //     console.log(`searching for ${search}`, item.images.original.url)
    //   }
    // })
    appState.gifs = res.data.data.map(rawData => new Gif(rawData))
    // console.log(appState.gifs)
    appState.offset = 0
    appState.currentPage = 1
  }
  constructor() {

  }
}

export const gifsService = new GifsService()