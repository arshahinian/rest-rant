# Project REST-Rant

REST-Rant is an app where users can review restaurants.

**********************
Method:     GET
Path:       /
Purpose:    Home page
User Story: As a typical user I need the Home Page to open so I can start to use the website.
**********************
Method:     GET
Path:       /places
Purpose:    Places index page
User Story: As a typical user I need see all the restaurants so I can which ones I want to comment on.
**********************
Method:     POST
Path:       /places
Purpose:    Create new place
User Story: As a typical user I need create a new restaurant so I can add a new place to the site.
**********************
Method:     GET
Path:       /places/new
Purpose:    Form page for creating a new place
User Story: As a typical user I need to have a page to add specific information about the restaurant I am adding so I can input specific information about my added place.
**********************
Method:     GET
Path:       /places/:id
Purpose:    Details about a particular place
User Story: As a typical user I need view a specific restaurants details so I can look at the restaurants qualities.
**********************
Method:     PUT
Path:       /places/:id
Purpose:    Update a particular place
User Story: As a typical user I need to update specific restaurants so I can change information that needs to be updated for a place.
**********************
Method:     GET
Path:       /places/:id/edit
Purpose:    Form page for editing an existing place
User Story: As a typical user I need have a page to update specific information about the restaurant I am changing so I can change information that needs to be updated.
**********************
Method:     DELETE
Path:       /places/:id
Purpose:    Delete a particular place
User Story: As a typical user I need to delete a restaurant so I can remove a place from the site.
**********************
Method:     POST
Path:       /places/:id/rant
Purpose:    Create a rant (comment) about a particular place
User Story: As a typical user I need create a comment about a restaurant so I can let others using the site know what I think of that place.
**********************
Method:     DELETE
Path:       /places/:id/rant/:rantId
Purpose:    Delete a rant (comment) about a particular place
User Story: As a typical user I need delete a comment I made about a restaurant so I can remove a comment I no longer want others to associate with that place.
**********************
Method:     GET
Path:       *
Purpose:    404 page (matches any route not defined above)
User Story: As a typical user I need a page that lets me know I am lost and have the wrong url so I can get back to a familure part of the site and find my way around.
