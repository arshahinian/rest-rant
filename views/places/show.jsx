const React = require('react')
const MasterDefault = require('../default')

function show (props) {
    return (
        <MasterDefault>
          <main>
            <div className="row">
              <div className="col-sm-6">
                <br/>
                <img src={props.place.pic} alt={props.place.name} />
                <br/>
                <h3>Proud to be located in {props.place.city}, {props.place.state}</h3>
                <br/>
              </div>
              <div className="col-sm-6">
                <br/>
                <h1>{props.place.name}</h1>
                <br/>               
                <h2>Description</h2>
                <h3>{props.place.showEstablished()}</h3>
                <h4>Serving {props.place.cuisines}</h4>
                <br/>      
                <h2>Comments</h2>
                <p>Coming Soon!</p>
                <br/>
                <p>
                  <a href={`/places/${props.id}/edit`} className="btn btn-warning">Edit</a>  
                </p>            
                <form method="POST" action={`/places/${props.id}?_method=DELETE`}> 
                  <button type="submit" className="btn btn-danger">Delete</button>
                </form>
                <br/>
              </div>            
            </div>
          </main>
        </MasterDefault>
    )
}

module.exports = show