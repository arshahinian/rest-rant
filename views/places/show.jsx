const React = require('react')
const MasterDefault = require('../default')

function show (props) {
    let comments = (
      <h3 className="inactive">
        No comments yet!
      </h3>
    )
    let rating = (
      <h3 className="inactive">
        No ratings yet!
      </h3>
    )
    if (props.place.comments.length) {
      comments = props.place.comments.map(c =>{
        return (
          <div className="border">
            <h2 className="rant">
              {c.rant ? 'Rant! :(':'Rave! :)'}
            </h2>
            <h4>{c.content}</h4>
            <h3>
              <strong>-{c.author}</strong>
            </h3>
            <h4>Rating: {c.stars}</h4>
          </div>
        )
      })
      let sumRatings = props.place.comments.reduce((tot, c) => {
        return tot + c.stars
      }, 0)
      let averageRating = Math.round(sumRatings / props.place.comments.length)
      let stars = '';
      for(let i = 0 ; i < averageRating ; i++)
      {
        stars += '*'
      }
      rating = (
        <h3>
          {stars} stars
        </h3>
      )
    }
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
                <h2>Rating</h2>{rating}
                <br/>
                <h2>Description</h2>
                <h3>{props.place.showEstablished()}</h3>
                <h4>Serving {props.place.cuisines}</h4>
                <br/>      
                <h2>Comments</h2>
                <p>{comments}</p>
                <br/>
                <p>
                  <a href={`/places/${props.place.id}/edit`} className="btn btn-warning">Edit</a>  
                </p>            
                <form method="POST" action={`/places/${props.place.id}?_method=DELETE`}> 
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