// Site Girando.js
var wait = async (ms) => {
  return new Promise(result => setTimeout(result, ms))
}
var number = 360
var body = document.body
;(async () => {
  body.style.transition = `1s linear`
  while (true) {
    body.style.transform = `rotate(${number}deg)`
    await wait(1000)
    number += 360
  }
})();
