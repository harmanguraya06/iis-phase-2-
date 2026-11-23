# Phase 2 

Prose word count: 369

## Project status
* Developed a frontend prototype showing four outcomes: known, low confidence, unknown and failed identification.
* Simulated: initial notification and expanded notification with different outcomes and actions available to the user (view live feed, explicit dimiss, form for incorrect identification with undo, form to add as known visitor with undo and contact emergency help) using fake data.
* Planned: integration with a doorbell and its hardware (sensors), software (facial recognition) and database for persistent visitor management and notification preferences.

## Technology stack
* Docker to contain the development environment and Vite for fast set up.
* React and JavaScript for frontend simulation with CSS styling and Lucide React for icons.
* React router for navigation.

## How to run
* Clone the git repository and run ```npm install```.
* Run the app using ```npm run dev``` (the prototype runs locally)
* If docker is installed, use ```docker compose up --build```. 
    * Stop using ```docker compose down```.

## AI assistance: 
* Used ChatGPT on how to implement a 120s countdown for an undo button shown as a line; adjusted the states, timer and CSS then manually checked the result.
* Used ChatGPT on how to search through a set of dummy data for a form; it returned the ```filter``` and ```includes``` method with the html script template which were implemented to the existing work then manually tested by searching and selecting a visitor.

## Development record 
1. Project setup: set up frontent and project structure with Docker setup then tested that the app could run locally.
2. Notifications: created notifications dummy data and refined it for the four outcomes, added the notification pop up and expanded version then refined format and added icons.
3. Navigation: added pages for other features and their navigation and manually tested routes.
4. Live feed: created live feed and actions available and tested buttons functionality (specifically micorphone and ear on/off transition).
5. Identity correction: added people dummy data and search bar for them with undo selection; manually tested form submission and that the submission button was unavailable without a person or during undo. 
6. Add to known visitors: implemented an input bar to name the visitor and used the image from the doorbell; manually tested form submission and that the submission button was unavailable without a name or during undo. 
7. Emergency help: changed alert to a confirmation page in the phone.
8. Improved interface: refined notification pop up layout to include image and added simulation note at the top of the phone.