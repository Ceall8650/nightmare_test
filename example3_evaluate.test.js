/* example3.test.js */
//  Get the text content of H1 element

const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })
const selector2 = 'h2'

const selector = 'h1'
nightmare
  .goto('https://github.com/segmentio/nightmare')
  .evaluate(function (selector) {
    // now we're executing inside the browser scope.
    return document.querySelector(selector).innerText
  }, selector)  // <-- that's how you pass parameters from Node scope to browser scope
 .end(rs => {
  console.log('end rs', rs)
  return rs + '123'
 })
  .then(rs => {
    console.log(rs)
  }).catch(error => {
    console.error('Search failed:', error)
  })