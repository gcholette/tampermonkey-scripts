// ==UserScript==
// @name         Amazon tracking refresher
// @namespace    https://www.amazon.ca
// @version      1.0
// @description  Refreshes the tracking page to make sure I don't miss the delivery. Flashes the screen red & blue when it's delivered. Also updates the page title so if the page is not on the foreground I may see it aswell.
// @author       gcholette
// @match        https://www.amazon.ca/progress-tracker/package*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const text="delivered"
    document.title="No"

    setInterval(() => {
     if (document.body.textContent.toLowerCase().includes(text.toLowerCase())) {
        document.body.style.background = "red";
        document.title="DELIVERED"

     }
    }, 3000)

    setInterval(() => {
     if (document.body.textContent.toLowerCase().includes(text.toLowerCase())) {
        document.body.style.background = "cyan";
        document.title="++DELIVERED++"
     }
    }, 2000)

    setInterval(() => {
        location.reload()
    }, 20000)
})();
