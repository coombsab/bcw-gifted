import { appState } from "../AppState.js"
import { gifsService } from "../Services/GifsService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML, setText } from "../Utils/Writer.js"

function _drawGifs() {
  let template = ""
  const allGifs = appState.gifs.slice(0, appState.gifs.length)
  appState.totalPages = Math.ceil(allGifs.length / appState.perPage)
  appState.currentPage = Math.floor((appState.offset + appState.perPage) / appState.perPage)
  
  allGifs.splice(appState.offset, appState.perPage).forEach(gif => template += gif.GifTemplate)
  // appState.gifs.forEach(gif => template += gif.GifTemplate)
  setHTML("gifs", template)
}

function _drawTotalPages() {
  setText("total-pages", appState.totalPages)
}

function _drawCurrentPage() {
  setText("current-page", appState.currentPage)
}

export class GifsController {
  constructor() {
    appState.on("gifs", _drawGifs)
    appState.on("currentPage", _drawCurrentPage)
    appState.on("totalPages", _drawTotalPages)
    _drawCurrentPage()
    _drawTotalPages()
  }

  async getGifs() {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      // @ts-ignore
      const search = form.search.value
      await gifsService.getGifs(search)
      // @ts-ignore
      // form.reset()
    } catch (error) {
      console.error("[getGif]", error)
      Pop.error(error)
    }
  }

  getURL(url) {
    gifsService.getURL(url)
  }
  
  previous() {
    gifsService.previous()
    _drawGifs()
  }
  
  next() {
    gifsService.next()
    _drawGifs()
  }
}