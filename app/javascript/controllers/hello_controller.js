import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log('in hellow controller')
    this.element.textContent = "Hello World!"
  }
}
