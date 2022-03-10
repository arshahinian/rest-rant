const React = require('react')
const MasterDefault = require('../default')

function editForm (props) {
    return (
        <MasterDefault>
            <h1>Add a New Place</h1>
            <form method="POST" action={`/places/${props.place.id}?_method=PUT`}>
                <div className="form-group">
                    <label htmlFor="name">Place Name:</label>
                    <input className="form-control" id="name" name="name" value={props.place.name} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="pic">Place Picture:</label>
                    <input className="form-control" id="pic" name="pic" value={props.place.pic}/>
                </div>
                <div className="form-group">
                    <label htmlFor="city">City:</label>
                    <input className="form-control" id="city" name="city" value={props.place.city}/>
                </div>
                <div className="form-group">
                    <label htmlFor="state">State:</label>
                    <input className="form-control" list="state-list" id="state" name="state"/>
                    <datalist id="state-list">
                        <option value="AK">Alaska</option>
                        <option value="AL">Alabama</option>
                        <option value="AR">Arkansas</option>
                        <option value="AZ">Arizona</option>
                        <option value="CA">California</option>
                        <option value="CT">Connecticut</option>
                        <option value="CO">Colorado</option>
                        <option value="DE">Delaware</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="IA">Iowa</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="MA">Massachussets</option>
                        <option value="MD">Maryland</option>
                        <option value="ME">Maine</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MO">Missouri</option>
                        <option value="MS">Mississippi</option>
                        <option value="MT">Montana</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="NE">Nebraska</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NV">Nevada</option>
                        <option value="NY">New York</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OH">Ohio</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VA">Virginia</option>
                        <option value="VT">Vermont</option>
                        <option value="WA">Washington</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WV">West Virginia</option>
                        <option value="WY">Wyoming</option>
                    </datalist>
                </div>
                <div className="form-group">
                    <label htmlFor="cuisines">Cuisines:</label>
                    <input className="form-control" id="cuisines" name="cuisines" value={props.place.cuisines} required/>
                </div>
                <div className="form-group col-sm-4">
                    <label htmlFor="founded">Founded Year</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="founded" 
                        name="founded" 
                        value={props.place.founded} />
                </div>
                <input className="btn btn-primary" type="submit" value="Update Place"></input>
            </form>
        </MasterDefault>
    )
}

module.exports = editForm