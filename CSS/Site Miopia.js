// Site Miopia.js
var wait = async (ms) => {
  return new Promise(result => setTimeout(result, ms))
}
var body = document.body
;(async () => {
  body.style.transition = `1s ease-in-out`
  while (true) {
    body.style.filter = `blur(5px)`
    await wait(1000)
    body.style.filter = `blur(0px)`
    await wait(1000)
  }
})();
