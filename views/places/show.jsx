const React = require('react')
const MasterDefault = require('../default')

function show (place) {
    return (
        <MasterDefault>
          <main>
            <h1>{place.name}</h1>
            <div>
              <p className="text-center">
                {place.cuisines}
              </p>
              <p className="text-center">
                <img src={place.pic} alt={place.name}/>
              </p>
              <p className="text-center">
                Located in {place.city}, {place.state}
              </p>
            </div>
            <div>
              <h2>Comments</h2>
              <p>
                Coming Soon!
              </p>
            </div>
          </main>
        </MasterDefault>
    )
}

module.exports = show