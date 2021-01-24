
# Plant Tracker API: A Description

This is the API for the Plant Tracker client.  It uses a MongoDB database hosted by Heroku and Mongoose ORM with Express for routing. Passport is used for authentications.

## Important Links

- [Client Repo] (https://github.com/RadarRadarRadar/Plant-Tracker_client)
- [Client Deployed] (https://radarradarradar.github.io/Plant-Tracker_client/)
- [API Deployed] (https://radiant-brushlands-37403.herokuapp.com/)

## Planning Story

I am regularly forgetting what water or sun or soil a certain plant of mine needs. So I decided to create a DB and API to help me and other keep track. My plan with this API and DB is to track plants needs through various stages of life.

With the first version I want users to be able to store their plant info and see others as well.  As long a user is the owner of a plant they can update or delete it with it's id.

### User Stories

1. As an API user I want to: Sign up
1. As an API user I want to: Sign in
1. As an API user I want to: Sign out
1. As an API user I want to: Change my password
1. As an API user I want to: See all the plants in the DB
1. As an API user I want to: Add a plant to the DB
1. As an API user I want to: Find a specific plant
1. As an API user I want to: Modify a plant I own
1. As an API user I want to: Remove a plant I own

### Technologies Used

- MongoDB
- Mongoose
- Express
- Passport
- Javascript

### Future Features

- I want to create a section for notes and other users to comment on plants.

## Images

#### ERD:
![Plant Tracker ERD](https://media.git.generalassemb.ly/user/32536/files/c3cfc280-500a-11eb-88a5-2d3d59a3705e)
