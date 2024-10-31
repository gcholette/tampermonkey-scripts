// ==UserScript==
// @name         HTB Academy theming - low contrast
// @namespace    https://academy.hackthebox.com/
// @version      2024-10-31
// @description  try to take over the world!
// @author       You
// @match        https://academy.hackthebox.com/module/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const styleDark = document.createElement('style');
    const cssStringDark = `
    body { background-color: #1b283d; color: #6e7c9b; }
    h1,h2,h3,h4,h5,.module-question { color: #6e7c9b; }
    .text-success { color: #1488b0 !important; }
    #TOC>div>a {color: #6e7c9b; background: #1b283d;}
    #TOC>div { background: #141f2f; }
    code { color: #e0ad1a; }
    img { opacity: 0.5; }
    .startInstanceBtn { background-color: #2a659e; border-color: #0086ef; }
    `
    styleDark.appendChild(document.createTextNode(cssStringDark));

    const styleLight = document.createElement('style');
    const cssStringLight = `
    body { background-color: #e4e4e9; color: rgb(102 110 121); }
    .card { background-color: #d0d0d9; color: rgb(102 110 121); }
    .card-title-desc { color: rgb(102 110 121); }
    .card-body { background-color: #d0d0d9; color: rgb(102 110 121); }
    h1,h2,h3,h4,h5,.module-question { color: rgb(102 110 121); }
    .text-white { color: rgb(102 110 121)!important; }
    .btn-outline-warning {color: #ff2e00; border-color: #ff0000;}
    .badge-soft-dark { color: rgb(102 110 121); }
    .text-success { color: #1488b0 !important; }
    #TOC>div>a {color: #6e7c9b; background: #c6c6d2;}
    #TOC>div { background-color: #d0d0d9; color: rgb(102 110 121); }
    code { color: #0089e9; }
    img { opacity: 0.8; border: 2px solid #d1d6dd!important; }
    .startInstanceBtn { background-color: #2a659e; border-color: #0086ef; }
    `
    styleLight.appendChild(document.createTextNode(cssStringLight));

    document.head.appendChild(styleDark);
    const stylesheet2 = document.createElement('style');
    const cssString2 = `
    .page-content>.row:nth-child(3)>div:nth-child(2) { display: none!important; }
    `
    stylesheet2.appendChild(document.createTextNode(cssString2));

    const button = document.createElement('button');
    button.textContent = '';
    button.style.position = "fixed"
    button.style.right = "25px"
    button.style.top = "194px"
    button.style.borderRadius = "50px"
    button.style.border = "solid 0px black"
    button.style.background = "#5ea1e3"
    button.style.width = "35px"
    button.style.height = "35px"
    button.style.boxShadow= "0px 0px 4px 2px #3f6e81"
    document.body.appendChild(button);

    window.isStylesheetActive = false;
    button.addEventListener('click', () => {
        if (window.isStylesheetActive) {
            document.head.removeChild(stylesheet2);
        } else {
            document.head.appendChild(stylesheet2);
        }
        window.isStylesheetActive = !window.isStylesheetActive;
    });

    const button2 = document.createElement('button');
    button2.textContent = '';
    button2.style.position = "fixed"
    button2.style.right = "25px"
    button2.style.top = "250px"
    button2.style.borderRadius = "50px"
    button2.style.border = "solid 0px black"
    button2.style.background = "rgb(254 168 52)"
    button2.style.width = "35px"
    button2.style.height = "35px"
    button2.style.boxShadow= "0px 0px 4px 2px #3f6e81"
    document.body.appendChild(button2);

    window._darkMode1 = false;
    button2.addEventListener('click', () => {
        if (!window._darkMode1) {
            document.head.appendChild(styleLight);
            document.head.removeChild(styleDark);
        } else {
            document.head.appendChild(styleDark);
            document.head.removeChild(styleLight);
        }
        window._darkMode1 = !window._darkMode1;
    });
})();
