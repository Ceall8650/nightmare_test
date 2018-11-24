/* Get Google cookies */
const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

//  If cookie.url is not set, it will set the cookie on the current url
nightmare
  .goto('http://google.com')
  .cookies.get()
  .end()
  .then(cookies => {
    console.log('Get all cookies :', cookies);
    // do something with the cookies
  })