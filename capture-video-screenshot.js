// ==UserScript==
// @name         截图当前视频保存为图片
// @namespace    http://tampermonkey.net/
// @version      2024-01-17
// @description  try to take over the world!
// @author       You
// @match        https://ani.gamer.com.tw/animeVideo.php*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gamer.com.tw
// @grant        none
// ==/UserScript==

;(function () {
  'use strict'

  function captureFrame() {
    const video = document.querySelector('video')
    let canvas = document.createElement('canvas')
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    let ctx = canvas.getContext('2d')
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

    let img = new Image()
    img.src = canvas.toDataURL('image/png')

    let link = document.createElement('a')
    link.href = img.src
    link.download = 'video_screenshot.png'

    link.click()
  }

  document.addEventListener('keydown', function (event) {
    if (event.metaKey && event.key === 's') {
      event.preventDefault()
      captureFrame()
    }
  })
})()
