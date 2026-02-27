Tutorial 4 – Back-End Frameworks I

Individual deliverable for CSCI 4177/5709. Express.js REST API with CRUD operations for user management. Implements GET (list users, get single user), POST (add user), and PUT (update user) endpoints with appropriate failure responses (404, 400, 500).

* Date Created: 27 Feb 2026
* Last Modification Date: 27 Feb 2026
* Lab URL: [Update with your deployment link after deploying - e.g., Render, Railway, or Cyclic]
* Git URL: https://github.com/krishnatejnk/CSCI4177-Tutorials
* GitLab: https://git.cs.dal.ca/knkumar/csci4177-tutorials


Authors

* Krishna Tej Nanda Kumar - kr657835@dal.ca


Getting Started

See Deployment for notes on deploying the project on a live system.


Prerequisites

To run this tutorial locally, install the following:

* Node.js (v18 or later)
* npm (comes with Node.js)
* Git (optional, for cloning)


Installing

A step-by-step guide to get the development environment running:

1. Clone the repository:
   git clone https://github.com/krishnatejnk/CSCI4177-Tutorials.git
   cd CSCI4177-Tutorials/tutorial4

2. Install dependencies:
   npm install

3. Start the server:
   npm start

4. The API will be available at http://localhost:3000


API Endpoints

Base URL: <your_application_link> or http://localhost:3000 (local)

1. GET /users
   Returns a list of all users.
   Success (200): { message, success, users }

2. GET /user/:id
   Returns a single user by ID.
   Success (200): { success, user }
   Failure (404): { message: "User not found", success: false }

3. POST /add
   Adds a new user. Body: { email, firstName }
   Success (201): { message: "User added", success: true }
   Failure (400): Invalid input - missing email or firstName

4. PUT /update/:id
   Updates an existing user. Body: { email?, firstName? }
   Success (200): { message: "User updated", success: true }
   Failure (404): User not found
   Failure (400): Invalid input - at least one field required


Testing with curl

GET users:
  curl http://localhost:3000/users

GET single user:
  curl http://localhost:3000/user/5abf6783

POST add user:
  curl -X POST http://localhost:3000/add -H "Content-Type: application/json" -d "{\"email\":\"new@test.ca\",\"firstName\":\"NewUser\"}"

PUT update user:
  curl -X PUT http://localhost:3000/update/5abf6783 -H "Content-Type: application/json" -d "{\"email\":\"updated@abc.ca\",\"firstName\":\"Updated\"}"


Deployment

To deploy Tutorial 4 on Render (recommended for Node.js APIs):

1. Create a free account at https://render.com
2. New > Web Service
3. Connect your GitHub repository (CSCI4177-Tutorials)
4. Configure:
   - Root Directory: tutorial4
   - Build command: npm install
   - Start command: npm start
5. Deploy. Add the resulting URL (e.g., https://tutorial4-xxxx.onrender.com) to the Lab URL field above and to your Brightspace README submission.

Alternative platforms: Railway, Cyclic, or Heroku.


Built With

* Express.js (https://expressjs.com/) - Node.js web framework


Sources Used

If you adapted any external code, list it here using the format from the template.


Artificial Intelligence Tools Used

If you used any AI tools, list them here with prompts and where the code was implemented, per the template.


Acknowledgments

* Course materials and Tutorial 4 instructions (CSCI 4177/5709).
