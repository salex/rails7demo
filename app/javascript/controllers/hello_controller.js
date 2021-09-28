import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {

    console.log("kdsj  djflk ldjs kldjfjdldfj d ")
    this.element.textContent = "Hello World!"
  }
}
