const React = require('react')
const MasterDefault = require('./default')

function error404 () {
    return (
      <MasterDefault>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                <img className="img-error" src="/images/YouAreLost.jpg" alt="food"/>                  
              </div>
          </main>
      </MasterDefault>
    )
  }

module.exports = error404