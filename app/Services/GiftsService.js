import { appState } from "../AppState.js"
import { Gift } from "../Models/Gift.js"
import { sandboxServer } from "./AxiosService.js"

class GiftsService {
  async removeGift(id) {
    const gift = appState.gifts.find(g => g.id == id)
    if (!gift) {
      throw new Error('this is a bad id')
    }
    if (gift.opened) {
      await sandboxServer.delete(`/api/gifts/` + id)
      appState.gifts = appState.gifts.filter(g => g.id !== id)
    }
  }
  async openGift(id) {
    const openedGift = appState.gifts.find(g => g.id == id)
    console.log(openedGift)
    if (!openedGift) {
      throw new Error('dis bad id')
    }
    openedGift.opened = !openedGift.opened
    const res = await sandboxServer.put(`/api/gifts/` + id, openedGift)
    openedGift.url = res.data.url
    appState.emit('gifts')
  }
  async addGift(formData) {
    const res = await sandboxServer.post("/api/gifts", formData)
    appState.gifts = [new Gift(res.data), ...appState.gifts]
    console.log(res.data)
  }
  async getGifts() {
    const res = await sandboxServer.get('/api/gifts')
    appState.gifts = res.data.map(g => new Gift(g))
  }

}
export const giftsService = new GiftsService()