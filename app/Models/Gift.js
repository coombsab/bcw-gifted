export class Gift {
  constructor(data) {
    this.id = data.id
    this.tag = data.tag
    this.url = data.url
    this.opened = data.opened
  }
  get GiftTemplate() {

    if (this.opened) {
      return /*html*/`
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <img src="${this.url}" class="img-fluid" alt="${this.tag}">
            </div>
            <div class="card-footer text-center on-hover">
              <p><b>${this.tag}</b></p>
              <!-- TODO Make on-hover work right -->
              <div>
                <i class="mdi mdi-delete selectable" onclick="app.giftsController.removeGift('${this.id}')"></i>
              </div>
            </div>
          </div>
        </div>
      `
    } else {
      return /*html*/`
        <div class="col-md-4">
          <div class="card open-gift-img">
          <!-- TODO make onclick to toggle opened and send edit to server -->
            <div class="card-body open-card selectable" onclick="app.giftsController.openGift('${this.id}')">
              <p>${this.tag}</p>
            </div>
          </div>
        </div>
      `
    }

  }
}