// ==UserScript==
// @name         Facebook & messenger call button remover
// @namespace    https://facebook.com
// @version      0.1
// @description  Remove all the "call" buttons so I don't misclick them.
// @author       You
// @match        https://*.facebook.com/**
// @match        https://*.messenger.com/**
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    setInterval(() => {
        const elements = []
        elements.push(document.querySelector('[aria-label="Start a video call"]'))
        elements.push(document.querySelector('[aria-label="Start a voice call"]'))
        elements.push(document.querySelector('[aria-label="Create new room"]'))
        elements.push(document.querySelector('[aria-label="New call"]'))
        elements.forEach(element => {
            if (element) {
                element.remove();
            }
        })

    }, 1000)
})();
