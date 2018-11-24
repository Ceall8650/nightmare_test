/* example3.test.js */

const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

const selector = 'h1'
async function asynchronous(params) {
  try {
  const rs = await nightmare
    .goto('https://github.com/segmentio/nightmare')
    .evaluate(function (selector) {
        // now we're executing inside the browser scope.
        return document.querySelector(selector).innerText
    }, selector)  // <-- that's how you pass parameters from Node scope to browser scope
    .end()
    // nightmare
  } catch (error) {
    console.log(error)
  }
}

asynchronous()