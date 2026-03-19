Tutorial 6 – REST API with Database

Individual deliverable for CSCI 4177/5709. Node.js Express REST API connected to MongoDB Atlas (NoSQL). Same APIs as T5: create user, read user, read user by ID, update user. Adds DELETE route to remove user by ID. Implements failure responses (404, 400, 500).

* Date Created: 14 Mar 2026
* Last Modification Date: 19 Mar 2026
* Git URL: https://github.com/krishnatejnk/CSCI4177-Tutorials
* GitLab: https://git.cs.dal.ca/knkumar/csci4177-tutorials


Authors

* Krishna Tej Nanda Kumar - kr657835@dal.ca


Getting Started

See Deployment for notes on connecting to MongoDB Atlas and deploying the application.


Prerequisites

* Node.js (v18 or later)
* npm (comes with Node.js)
* MongoDB Atlas account (free tier) - https://www.mongodb.com/cloud/atlas


Installing

1. Clone the repository:
   git clone https://github.com/krishnatejnk/CSCI4177-Tutorials.git
   cd CSCI4177-Tutorials/tutorial6

2. Install dependencies:
   npm install

3. Create a MongoDB Atlas cluster (free tier), database user, and add your IP (or 0.0.0.0/0 for development) in Network Access.

4. Set environment variables:

   Windows (PowerShell):
   $env:MONGODB_URI="mongodb+srv://USERNAME:PASSWORD@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority"

   macOS/Linux:
   export MONGODB_URI="mongodb+srv://USERNAME:PASSWORD@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority"

   For deployment (e.g. Render): Add MONGODB_URI in the service environment variables.

5. Start the server:
   npm start

6. The API will be available at http://localhost:3000


API Endpoints

Base URL: https://tutorial6-rest-api.onrender.com or http://localhost:3000 (local)

1. GET /users
   Returns a list of all users.
   Success (200): { message, success, users }

2. GET /user/:id
   Returns a single user by MongoDB ObjectId.
   Success (200): { success, user }
   Failure (404): { message: "User not found", success: false }

3. POST /add
   Adds a new user. Body: { email, firstName }
   Success (201): { message: "User added", success: true }
   Failure (400): Invalid input - missing email or firstName
   Failure (500): Internal server error

4. PUT /update/:id
   Updates an existing user. Body: { email?, firstName? }
   Success (200): { message: "User updated", success: true }
   Failure (404): User not found
   Failure (400): Invalid input - at least one of email or firstName required
   Failure (500): Internal server error

5. DELETE /delete/:id
   Deletes a user by ID.
   Success (200): { success: true, message: "User deleted" }
   Failure (404): { success: false, message: "User not found" }
   Failure (500): Internal server error


Testing with curl

GET users:
  curl http://localhost:3000/users

GET single user (use actual ObjectId from GET /users response):
  curl http://localhost:3000/user/<id>

POST add user:
  curl -X POST http://localhost:3000/add -H "Content-Type: application/json" -d "{\"email\":\"new@test.ca\",\"firstName\":\"NewUser\"}"

PUT update user:
  curl -X PUT http://localhost:3000/update/<id> -H "Content-Type: application/json" -d "{\"email\":\"updated@abc.ca\",\"firstName\":\"Updated\"}"

DELETE user:
  curl -X DELETE http://localhost:3000/delete/<id>


Database

* Database: tutorial6_db
* Collection: users
* Document: { _id: ObjectId, email: String, firstName: String }
* Hosted on MongoDB Atlas


Deployment

1. Database: Deploy database on MongoDB Atlas (free tier). Note your connection string.

2. Application: Deploy to Render, Railway, Cyclic, or similar:
   - Connect your GitHub repository
   - Root/Base directory: tutorial6
   - Build: npm install
   - Start: npm start
   - Add environment variable: MONGODB_URI = your Atlas connection string
   - Ensure your deployment platform's IP is allowed in Atlas Network Access, or use 0.0.0.0/0 for development

3. Add the deployed application URL to Lab URL above and to your Brightspace README submission.


Built With

* Express.js (https://expressjs.com/) - Node.js web framework
* MongoDB (https://www.mongodb.com/) - NoSQL database
* MongoDB Atlas (https://www.mongodb.com/cloud/atlas) - Cloud-hosted database


Sources Used

If you adapted any external code, list it here using the format from the template.


Artificial Intelligence Tools Used

If you used any AI tools, list them here with prompts and where the code was implemented, per the template.


Acknowledgments

* Course materials and Tutorial 6 instructions (CSCI 4177/5709).
