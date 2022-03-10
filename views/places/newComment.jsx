const React = require('react')
const MasterDefault = require('../default')

function newCommentForm (props) {
    return (
        <MasterDefault>
            <h1>Add a New Comment</h1>
            <form method="POST" action={`/places/${props.id}/rant`}>
                <div className="form-group">
                    <label htmlFor="author">Author:</label>
                    <input className="form-control" id="author" name="author" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content:</label>
                    <input className="form-control" type="textarea" id="content" name="content" />
                </div>
                <div className="form-group">
                    <label htmlFor="stars">Star Rating:</label>
                    <input className="form-control" type="number" min="0" max="5" id="stars" name="stars" />
                </div>                
                <div className="form-group">
                    <label className="form-check-label" htmlFor="rant">Is this a Rant? (Please check the box if it is!)</label>                                       
                    <input className="form-check-input" type="checkbox" id="rant" name="rant"/>                    
                </div>        
                <input className="btn btn-primary" type="submit" value="Add Comment"></input>
            </form>
        </MasterDefault>
    )
}

module.exports = newCommentForm