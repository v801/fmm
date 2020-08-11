// ==UserScript==
// @name         fmm
// @namespace    https://github.com/v801/fmm
// @version      1.0.2
// @description  click main logo to toggle side nav menu
// @author       v801
// @match        https://*.wiki.fextralife.com/*
// @grant        none
// ==/UserScript==

const menu = $('#sidebar-wrapper')
const wrapper = $('#wrapper')
const logo = $('#form-header img').first()

const toggleMenu = () => {
  const menuActive = $('#sidebar-wrapper:visible').length == 1
  if (menuActive) {
    hideMenu()
  } else {
    showMenu()
  }
}

const hideMenu = () => {
  menu.hide()
  wrapper.css('padding-left', '0px')
}

const showMenu = () => {
  menu.show()
  wrapper.css('padding-left', '400px')
}

const init = () => {
  wrapper.css('transition', 'none')
  hideMenu()
}

logo.click(function(e) {
  e.preventDefault()
  toggleMenu()
})

init()
