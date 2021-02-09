# T3A1 - Workbook (Justin Ellis)

## City Climb Componaion App
### Dianne, Jeremy and Justin.

<br />

## Table of Content
---

| #   | Content                                                                      |
| --- | ---------------------------------------------------------------------------- |
| 1   | [App Links](#App-links)                                               |
| 2   | [App Description](#App-Description:)                                          |
| 3   | [Purpose](#Purpose)            |
| 4   | [Functionality and Features](#Functionality-&-features)                              |
| 5   | [Target Audience](#Target-audience)                              |
| 6   | [Tech Stack](#Tech-stack)                                      |
| 7   | [Testing](#Testing)                      |
| 8   | [Source Control](#Source-control)                        |
| 9   | [Documentation and Planning](#Documentation-and-Planning)                                             |
| 10  | [Sitemap](#Sitemap)      |
| 11  | [Data flow diagram](#Data-flow-diagram)  |
| 12  | [Application Architecture Diagram](#Application-architecture-diagram)|
| 13  | [User Stories](#User-stories)  |
| 14  | [Wireframes](#Wireframes)|
| 15  | [Project Management; Trello boards and delegation](#Project-Management)|

<br />

## App-links:

[Front-end Github](https://github.com/deannanicdao/CityClimb_frontend.git)

[Back-end Github](https://github.com/deannanicdao/CityClimb_backend.git)

[Heroku Deployment](https://city-climb.herokuapp.com/staff_login)

<br />

## App Description:
City Climb companion app is a mobile, tablet and desktop web application available to the public.

It allows City Climb staff to upload new and existing climbs with its gym location, colour (difficulty rating), an image and a how to video.

The public will then be able to search for climbs based on gym location and colour (difficulty). Then they can watch the how to video of those climbs if they wish.

As climbs in the physical gyms are added, updated and removed City Climb staff will be able to perform the relevant CRUD operations on the database of climbs.

<br />

## Purpose:
The purpose of the website is to help the general public find climbs near them at the colour (difficulty) rating that suits them. Then if they need help tackling a climb they can watch how a professional handles the climb. By reducing the friction of climbers taking on new climbs we aim to increase the value of City Climb gyms to new and experienced climbers. 

<br />

## Functionality / features:

### **MoSCoW Prioritisation** - [Reference](https://www.agilebusiness.org/page/ProjectFramework_10_MoSCoWPrioritisation)

<br />

#### **Must Have** - <i> Required for MVP. If these aren't implemented in the current delivery time frame the project will be considered a failure. </i>

**General Public**

• Search climbs based on gym location and colour grade(difficulty). <br />
• Each climb has a title and image to distinguish it. <br />
• Display youtube videos of professionals completing each individual climb. <br />
• Each climb has and specific URL that can be converted into a QR code which is then printed and displayed in City Climb gyms. <br />

**Setters (Staff Users)**

• Staff User login allowing for CRUD operations on data base of climbs. <br />
• Password recovery for Staff User accounts. <br />

<br />

#### **Should Have** - <i> Features that are important but not absolutely required for the current delivery time frame. </i>
In this product version there is added functionality so that climbers can create accounts and logged in climbers can add videos of completing the climb to the climb page. Requires the ability for users to upload videos, viewers to be be able to report inappropriate videos and owners to delete videos.  

**Signed Up Users** 

• City Climb gym members can create a climber user account. <br />
• Climber user accounts can upload videos of themselves completing the climb to web page of that climb. <br />
• Climber user accounts can CRUD the videos they upload. <br />
• Climber users can view the climbing videos of other climbers. <br />
• Climbers can report videos as unrelated or inappropriate. <br />
• Password recovery for Climber User accounts. <br />

**Setters (Staff Users)**

• Staff are notified when videos are uploaded and can delete them if inappropriate or unrelated.

<br />

#### **Could Have** - <i> Desirable but not necessary and unlikely to make it in the current delivery time frame. </i>

This product version introduces a social media aspect with user profiles. 

**Signed Up Users** <br />
• Climber User Accounts have publicly viewable profiles with personal picture, details and all uploaded videos listed. <br />
• Climber User Accounts can perform CRUD on their accounts. <br />
• Favourite individual videos then view a list of all your favourites. <br />
• Climber Users can comment on videos <br />
• Climber Users can perform CRUD on their comments. <br />
• Climber Users can share their videos on other social media platforms. <br />
• Climber Users can search for other climber users based on their profile details

**Setters (Staff Users)**
• Staff Users can delete Climber User accounts.

<br />

#### **Won't have this time** - Outside of the scope for this product iteration

<br />

## Target audience:
The target audience for this web application is primarily City Climb staff (setters) who wish to better communicate with the general public the climbs available. 

The secondary target audiences are city climb patrons and new visitors who wish to find out what climbs are available based on gym location and difficulty. Additionally those climbers who want help on completing climbs whilst in the gym or at home.

<br />

## Tech stack:
### Frontend
- HTML / CSS /JS
- React 
- React-Hook-Form
- react-confirm-alert
- Tailwind: Used for quickly styling elements using inline classes.
- Reactstrap: Implements basic UI elements including cards and navbar.
- cloudinary: Allows for the uploading and web hosting of images for individual climbs.
- DataURI: DataURI is used to get an image's file extension and it's data in buffer form and parse as a base64 data URI string to pass to cloudinary.
- dotenv: dotenv is used to add environment variables so they can be accessed in the app with process.env
- multer: The multer package is used to handle multiform data. Used in our app as middleware to set storage to memory which turns the image file into buffer format. 
- Redux: is a state management library. It is useful when an app has many states in several places of the app and is frequently updated over time; as future prototypes of the app has many social media features (with likes and comments), CityClimb incorporated redux. 
- redux-thunk: middleware is used to write action creators, which return a function rather than an action. It was utilised to conditionally render an action for authentication by checking whether the user's admin role was `true` on the backend and checking the state for `isAdmin` vs `isAuthenticated` and JSON web token (default: null). 
- uuid: Generates unique ID's for the alerts.
- axios: An alternative to FETCH, wwas used because FETCH was not working.

### Backend
- NodeJS
- Express
- Mongoose
- MongoDB
- cloudinary: Allows for the uploading and web hosting of images for individual climbs.
- DataURI
- dotenv 
- multer
- jsonwebtoken: JWT authentication was used to manually integrate integration and returns a JWT in the payload when a user successfully logs in.
- Bcrypt: Provides an added layer to the security by hashing and encrypting the passwords.

### Deployment
- Heroku

### QR Codes
- QREncoder <br />

Example QR Code. 

Loads to the page of the climb: **Gushing Mountain**

![Gushing Mountain](docs/images/qr_code.png)

<br />

## Testing:

- chai and chai-http

### Video Tests
https://streamable.com/z87ufh
https://streamable.com/4lf82v
https://streamable.com/lbv2q4

<br />

## Source Control:

- Git

- GitHub

Dianne created two repositories on Github for the front end and the back end. These were designated as the Origins. Both Jeremy and Justin forked off Deannes main repositories and had our own seperate Github repository. Each team member also had a local git repository which they would make commits to before pushing to their git hub repo. Once major tasks were completed team members would make branch checkouts and then pull request to the origin repo. When large amounts of data from different repos were being merged we would do it together to ensure every one was on the same page and resolve any conflicts that arose together.

<br />

## Documentation and Planning:

- Trello
- Figma
- Lucid Chart
- diagrams.net
- Discord
- Zoom

Scrum development methodology was used. This was achieved through setting up, running and reviewing weekly sprints. These were planed on each Monday morning at 9am, then we has daily stand ups at 9am and finally the sprint reviews on Fridays at 11am. Monday-Wednesday we would do these meetings at Coder Academy Brisbane then on Thursdays and Fridays we met at QUT Gardens Point Library.

Our primary method of communication when we were not in person was Discord and any video conferencing was done on Zoom. 

Wire frames were created in Lucid Chart and technical diagrams in diagrams.net. This documentation was absolutely pivotal in clarifying the direction of the development process. Through creating the documents and reviewing the documents we discovered that there was some confusion between members about the functionality of the application. This was then able to be resolved in a SCRUM meeting by refereeing to the documents.

<br />

## Sitemap:

![City Climb Sitemap](docs/images/cityclimb_sitemap.png)

<br />

## Data Flow Diagram:
This is the full data flow diagram for City Climb. It has been broken into 3 sub sections below for easier interpretation. 

![Data Flow Diagram for full system](docs/images/dfd/data_flow_diagram_full.png)

The sub section below shows the flow of data for a Setter, which is a staff member able to create climbing route, to register, login or reset their password. 

![Data Flow Diagram for setters' login and registration](docs/images/dfd/setter_users.png)

The Climb CRUD sub section shows the processes for creating a climb, which includes embedding a YouTube video and uploading an image to Cloudinary, as well as updating/removing a climb via accessing the Climb Database. Climb details include gym location, setter, date created, removal date and colour grade (difficulty). 

![Data Flow Diagram for full ](docs/images/dfd/climb_crud.png)

The Climb Page Access sub section shows the different ways that a user can access the page for a climb. They can search based on gym and grade, and have the results returned to them. They can look up the recently created climbs and the climbs that have close removal dates. Using the links provided via these two processes or the QR code attached to the physical climb they can view the climb.    

![Data Flow Diagram for full ](docs/images/dfd/climb_page_access.png)

<br />

## Application Architecture Diagram:

https://drive.google.com/file/d/1i5_JVymkVy4wzlZkbI7t7X08LYeYXjLX/view?usp=sharing

![Application Architecture Diagram vA](docs/images/AAD_vA.png)
</br>
![Application Architecture Diagram vB](docs/images/AAD_vB.png)

<br />

## User Stories:

Format: As a < user type >, I want to < action > so that I can < reason why >.

### **MoSCoW Prioritisation** - [Reference](https://www.agilebusiness.org/page/ProjectFramework_10_MoSCoWPrioritisation)

<br />

### **Must Have** - Required for MVP. If these aren't implemented in the current delivery time frame the project will be considered a failure. 

**Videos**

As a climber I want to scan a QR code of a climb that directs me to a page containing a beta video of that climb.

**Setters (City Climb Staff)**

As a new setter I want to be able to create an account so that I can use the features available only to setters.

As a setter I want to be able to recover my account because forgot my password.

**Search**

As a climber I want to filter out climbs based on location and colour grade so that I can see what routes are available for my ability.

**Setting**

As the owner I want to place QR codes at the bottom of each climb so that climbers can scan the code and go to the page for that climb to view/upload videos.

As the owner I want to generate a new climb to the repository when they are set so that users can see the updated gym configuration.

As the owner I want to remove climbs from the current gym configuration so that users do not come into the gym thinking that a climbing route will be there after it has been taken down.

As a climber I want to see what climbs are currently set in each gym so that I can see what routes have been set.

<br />

### **Should Have** - Features that are important but not absolutely required for the current delivery time frame
In this product version there is added functionality so that climbers can create accounts and logged in climbers can add videos of completing the climb to the climb page. Requires the ability for users to upload videos, viewers to be be able to report inappropriate videos and owners to delete videos.  

**Videos**

As a climber I want to watch videos of other people completing the climb so that I can see how it is done.

As a climber I want to upload a video of myself completing a climb so that I can share it with other members.

As a viewer I want to have the option to report videos that are not appropriate.

As the owner I want to delete videos that are not appropriate.

**Users**

As a new user I want to be able to create an account so that I can use the features available only to registered users.

As a user I want to be able to recover my account because forgot my password.

As a user I want to be able to delete my account because I am no longer interested in climbing.

<br />

### **Could Have** - Desirable but not necessary and unlikely to make it in the current delivery time frame
This product version introduces a social media aspect with user profiles. 

**Videos**

As a viewer I want to add videos to a list of favourites so that I can easily access them later.

As a viewer I want to comment on a video so that I can leave a message saying "Wow! that was amazing!!! :D ". 

As a viewer I want to be able to view the profile of the climber in the video so that I can look at their other videos.

**Users**

As a climber I want to create a profile with my details so that other users can find me and watch my videos.

As a climber I want to edit my profile so that when someone takes a cool picture of me I can make it my display picture.

As a climber I want to be able to share my videos to social media platforms because I want people on other platforms to see them.

As a climber I want to displays my previous uploads on my profile so that myself and others can view my previous climbs.

As a climber I want to be able to delete my previous videos because I no longer want other people to see them.

**Search**
As a viewer I want to search for my friend's profile so that I can see their climbing videos.

<br />

## Wireframes:
https://www.figma.com/file/YTGSXEEElfWwFTQDyXeltM/City-Climb?node-id=0%3A1

PDF versions of the wireframes are available in the [images folder](docs/images). 

<br />

## Project Management:
### Trello boards and delegation

T3A2 - Documentation
https://trello.com/b/FWcGcdmH/t3a2-documentation

T3A2 - Application
https://trello.com/b/W0KPXWSG/t3a2-app

PNG screen shots of the Trello Boards are available in the [images folder](docs/images/trello_boards). 

Note the date and time for each in the top right hand corner on the macOS menu bar.

<br />


### Delegation
No one in the group had experience developing a MERN application prior to this assignment. Therefore we spend the first week devoted to researching and experimenting with MERN small scale MERN CRUD applications. During this research phase we made sure every one had some time to familiarise with the front end and the back end.

Once we commenced application development we split tasks as follows;
Justin: Front-end
Jeremy:  Back-end
Dianne: Back-end and Front-end

Through out this process how ever we touched in on a daily basis through SCRUM meetings to familiarise ourselves with what each other person was doing. We also shared our learning and code from the initial research and experiments. As the application developed if some one had completed a task they could then look at the tasks that where in the “on board” section of Trello, assign the task to themselves and then notify the group.


<br />
