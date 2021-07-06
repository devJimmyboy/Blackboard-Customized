import "alpinejs"
import "tippy.js/dist/tippy.css"
import "../scripts-jquery/roundslider.min"
import "./index.css"
var $ = require("jquery")

var browser = require("webextension-polyfill")

browser.storage.local
  .set({
    [window.location.hostname]: document.title,
  })
  .then(() => {
    browser.runtime.sendMessage(`Saved document title for ${window.location.hostname}`)
  })

const elementsToRemove = [{ selector: ".brandingImgWrap" }, { selector: "" }]

// document.addEventListener("DOMContentLoaded", () => {
//   // Use default value color = 'red' and likesColor = true.
//   chrome.storage.local.get(
//     {
//       bb_customized: {
//         enabled: true,
//       },
//     },
//     function (items) {
//       chrome.tabs.getCurrent((tab) => {
//         if (tab.url.contains("elearning"))
//           chrome.scripting.removeCSS({ file: "content.css" })
//       })
//     }
//   )
// })
$.ready.then(() => {
  //Remove any elements that are in our way
  cleanUp()
  var tbl = document.querySelector("div.tabWrapper-right")
  var a = tbl.querySelector('a[target="_top"]').parentElement.parentElement
  var strR = a.innerHTML.replace(/td/, "div").replace(/(?<=id=")\w*?\s+\w*?(?=")/i, "")
  tbl.innerHTML = strR
})

function cleanUp() {
  var rmMessages = ["%cstole my lunch!\n%cRemoving...", ""]
  var logStyling = ["color: white;", ""]
  elementsToRemove.forEach((e) => {
    var rand = Math.random() * rmMessages.length
    console.log("%c" + e.selector + rmMessages[rand], ["color: red; font-weight: semibold;", logStyling[rand]])
    if (!e.page || window.location.toString().match(e.page).length > 0) $(e.selector).remove()
    else console.log("Check to remove " + e.selector + " failed.")
  })
}
