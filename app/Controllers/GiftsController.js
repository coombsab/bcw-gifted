import { appState } from "../AppState.js"
import { Gift } from "../Models/Gift.js"
import { giftsService } from "../Services/GiftsService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"


function _drawGifts() {
  let template = ""
  appState.gifts.forEach(gift => template += gift.GiftTemplate)
  setHTML("gifts", template)
}
export class GiftsController {
  constructor() {
    this.getGifts()
    appState.on("gifts", _drawGifts)
  }
  async getGifts() {
    try {
      await giftsService.getGifts()
    } catch (error) {
      console.error('[getGifts]', error)
      Pop.error(error)
    }
  }
  async openGift(id) {
    try {
      await giftsService.openGift(id)
    } catch (error) {
      console.log('[openGift]', error)
      Pop.error(error)
    }
  }
  async removeGift(id) {
    try {
      await giftsService.removeGift(id)
    } catch (error) {
      console.log('[removeGift],error', error)
      Pop.error(error)
    }
  }

  async addGift() {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      const formData = getFormData(form)
      await giftsService.addGift(formData)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error("[addGift]", error)
      Pop.error(error)
    }
  }
}