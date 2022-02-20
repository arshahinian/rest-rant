const React = require('react')
const MasterDefault = require('../default')
function index (data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div key={place.name}>
        <h2>{place.name}</h2>
        <img src={place.pic} alt={place.name}/>
      </div>
    )
  })
  return (
    <MasterDefault>
        <main>
            <h1>PLACES INDEX PAGE</h1>
            {placesFormatted}
        </main>
      </MasterDefault>
  )
}

  module.exports = index