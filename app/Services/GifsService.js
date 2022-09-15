import { appState } from "../AppState.js"
import { giphyServer } from "./AxiosService.js"

class GifsService {
  async getGifs(search) {
    const res = await giphyServer.get("", {
      params: {
        limit: 10,
        q: search
      }
    })
    console.log(`searching for ${search}`, res.data)
  }
  constructor() {

  }
}

export const giphyService = new GifsService()