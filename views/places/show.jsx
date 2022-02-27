const React = require('react')
const MasterDefault = require('../default')

function show (props) {
    return (
        <MasterDefault>
          <main>
            <h1>{props.place.name}</h1>
            <div>
              <p className="text-center">
                {props.place.cuisines}
              </p>
              <p className="text-center">
                <img src={props.place.pic} alt={props.place.name}/>
              </p>
              <p className="text-center">
                Located in {props.place.city}, {props.place.state}
              </p>
            </div>
            <div>
              <h2>Comments</h2>
              <p>
                Coming Soon!
              </p>
            </div>
            <div>
              <a href={`/places/${props.id}/edit`} className="btn btn-warning"> 
                Edit
              </a>  
              <form method="POST" action={`/places/${props.id}?_method=DELETE`}> 
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
              </form>
            </div>
          </main>
        </MasterDefault>
    )
}

module.exports = show