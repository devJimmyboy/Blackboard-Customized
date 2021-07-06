import "@dracula/dracula-ui/styles/dracula-ui.css"
import "@fortawesome/fontawesome-free/js/all.js"
import "@fortawesome/fontawesome-free/css/all.css"
import "alpinejs"
import "./index.css"
import { options, save_options } from "../utils/options"

chrome.storage.sync.get(options, function (res) {
  var i = 0
  for (var op of Object.keys(options)) {
    if (res[op] == null) document.getElementById("o")
  }
})

window.addEventListener("DOMContentLoaded", () => {
  var themeToggle = document.getElementById("enableTheming")
})

document.querySelector("#go-to-options").addEventListener("click", function () {
  if (chrome.runtime.openOptionsPage) {
    chrome.runtime.openOptionsPage()
  } else {
    window.open(chrome.runtime.getURL("options.html"))
  }
})
