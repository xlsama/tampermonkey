// ==UserScript==
// @name         修复北京教育考试院 bug
// @namespace    http://tampermonkey.net/
// @version      2024-01-13
// @description  try to take over the world!
// @author       You
// @match        https://zikao.bjeea.cn/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bjeea.cn
// @grant        none
// ==/UserScript==

;(function () {
  'use strict'

  window.addEventListener('load', event => {
    try {
      const fnList = [index, ajaxlogincheck, exitlogin, registtcheck]
      for (let fn of fnList) {
        const fnStr = fn.toString().replace(`dataType: "jsonp",`, '')
        window[fn.name] = new Function(`return ${fnStr}`)()
      }
    } catch (err) {
      console.log(err)
    }

    try {
      const frames = document.querySelectorAll('frame')
      const links = []
      for (let frame of frames) {
        links.push(...frame.contentDocument.body.querySelectorAll('a'))
      }

      for (let a of links) {
        if (a.href.startsWith('https://zikao.bjeea.cn/server.zkzhfwpt.domin')) {
          a.href = a.href.replace(
            'https://zikao.bjeea.cn/server.zkzhfwpt.domin',
            '',
          )
        }
      }
    } catch (err) {
      console.log(err)
    }
  })
})()
