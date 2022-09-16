export class Gif {
  constructor(data) {
    this.title = data.title
    this.images = data.images
  }
  get GifTemplate() {
    return/*html*/`
    <div class="col-md-6 my-2">
      <div class="card selectable" onclick="app.gifsController.getURL('${this.images.original.url}')">
        <div class="card-body">
          <img src="${this.images.downsized.url}" alt="" class="img-fluid img-offcanvas">
          <p>${this.title}</p>
        </div>
      </div>
    </div>
    `
  }
}