/* Get Google cookies */
const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

//  If cookie.url is not set, it will set the cookie on the current url

nightmare
  .goto('http://google.com')
  .cookies.set({
    name: 'token',
    value: 'some token',
    path: '/',
    secure: true
  })
  .cookies.get('token')
  .end()
  .then(cookie => {
    // console.log('Get token cookie :', cookie);
    // do something with the cookies
  })

console.log('nightmare :', nightmare.pah);