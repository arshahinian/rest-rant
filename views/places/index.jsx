const React = require('react')
const MasterDefault = require('../default')
function index (data) {
  let placesFormatted = data.places.map((place,index) => {
    return (
      <div key={place.name} className="col-sm-6">
        
        <h2>
          <a href={`/places/${index}`}>
            {place.name}
          </a>          
        </h2>        
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
    )
  })
  return (
    <MasterDefault>
        <main>
            <h1>Places to Rant or Rave About</h1>
            <div className="row">
              {placesFormatted}
            </div>           
        </main>
      </MasterDefault>
  )
}

  module.exports = index