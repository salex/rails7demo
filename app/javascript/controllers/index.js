// Import and register all your controllers from the importmap under controllers/*

import { application } from "controllers/application"
import { registerControllersFrom } from "@hotwired/stimulus-importmap-autoloader"
import Flatpickr from 'stimulus-flatpickr'
application.register('flatpickr', Flatpickr)

registerControllersFrom("controllers", application)

