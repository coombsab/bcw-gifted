import { giphyService } from "../Services/GifsService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"

export class GifsController {
  constructor() {

  }

  async getGifs() {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      // @ts-ignore
      const search = form.search.value
      await giphyService.getGifs(search)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error("[getGif]", error)
      Pop.error(error)
    }
  }
}