// ==UserScript==
// @name         MK64 ranking coloriser
// @namespace    https://www.mariokart64.com/
// @version      1.0
// @description  Applies color to the various ranks on mariokart64.com
// @author       You
// @match        https://www.mariokart64.com/*
// @icon         none
// @grant        none
// ==/UserScript==

(function() {
    setInterval(() => {
        const allStandards = document.querySelectorAll('.col-standard')

        allStandards.forEach(std => {
            const value = std.innerHTML
            if (value.includes('King')) {
               std.setAttribute('style', 'color: gold;')
            } else if (value.includes('Legend')) {
               std.setAttribute('style', 'color: #ff41f2;')
            } else if (value.includes('Elite')) {
               std.setAttribute('style', 'color: #379dba;')
            } else if (value.includes('God')) {
               std.setAttribute('style', 'color: #7c47fd; font-weight: bold;')
            } else {
               std.setAttribute('style', 'color: gray;')
            }
        })
    }, 500)
})();
