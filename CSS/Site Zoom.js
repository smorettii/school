// Site Zoom.js
var wait = async (ms) => {
  return new Promise(result => setTimeout(result, ms))
}
var body = document.body
;(async () => {
  body.style.transition = `1s ease-in-out`
  while (true) {
    body.style.transform = `scale(1.1)`
    await wait(1000)
    body.style.transform = `scale(1)`
    await wait(1000)
  }
})();
