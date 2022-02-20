const React = require('react')
const masterDefault = require('./default')

function error404 () {
    return (
      <masterDefault>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
          </main>
      </masterDefault>
    )
  }

module.exports = error404