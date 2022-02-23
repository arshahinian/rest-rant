const React = require('react')
const MasterDefault = require('./default')

function home () {
    return (
      <MasterDefault>
          <main>
              <h1>HOME</h1>
              <div>
                <img className="img-home" src="/images/deryn-macey-IooxyWj2uso-unsplash_small.jpg" alt="food"/>
                  <div>
                    Photo by <a href="https://unsplash.com/@runningonrealfood?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Deryn Macey</a> on <a href="https://unsplash.com/photos/MsTOg6rhRVk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                  </div>
              </div>
              <a href="/places">
                <button className="btn-primary">Places Page</button>
              </a>
          </main>
      </MasterDefault>
    )
  }

module.exports = home