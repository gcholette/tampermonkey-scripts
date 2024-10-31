// ==UserScript==
// @name         HTB Academy theming - low contrast
// @namespace    https://academy.hackthebox.com/
// @version      2024-10-31
// @description  Low contrast text and background when in a lesson.
// @author       gcholette
// @match        https://academy.hackthebox.com/module/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const style = document.createElement('style');
    const cssString = `
    body { background-color: #1b283d; color: #6e7c9b; }
    h1,h2,h3,h4,h5,.module-question { color: #6e7c9b; }
    .text-success { color: #1488b0 !important; }
    #TOC>div>a {color: #6e7c9b; background: #1b283d;}
    #TOC>div { background: #141f2f; }
    code { color: #e0ad1a; }
    img { opacity: 0.5; }
    .startInstanceBtn {
      background-color: #2a659e;
      border-color: #0086ef;
    }
    `
    style.appendChild(document.createTextNode(cssString));
    document.head.appendChild(style);
})();
