# Tutorial 5: Creating Database Instances (MongoDB Atlas)

Individual deliverable for CSCI 4177/5709. Provisioning a NoSQL database on MongoDB Atlas, connecting to it, designing a schema, and executing insertion, retrieval, and modification queries.

* Date Created: 13 Mar 2026
* Last Modification Date: 13 Mar 2026
* Git URL: https://github.com/krishnatejnk/CSCI4177-Tutorials
* GitLab: https://git.cs.dal.ca/knkumar/csci4177-tutorials



## Authors

* Krishna Tej Nanda Kumar (kr657835@dal.ca) - Individual contributor



## Getting Started

See Deployment for notes on connecting to the MongoDB Atlas instance and running queries.

### Prerequisites

To run this tutorial locally or connect via MongoDB Compass, install the following:

* Node.js (v18 or later) - For running the Node.js script
* npm (comes with Node.js) - Dependency management
* MongoDB Compass (optional) - For connecting via GUI
* MongoDB Atlas account (free tier) - https://www.mongodb.com/cloud/atlas



### Installing

A step-by-step series of examples to get the development environment running:

1. Clone the repository:
```
git clone https://github.com/krishnatejnk/CSCI4177-Tutorials.git
cd CSCI4177-Tutorials/tutorial5
```

2. Install dependencies:
```
npm install
```

3. Create a MongoDB Atlas cluster (Free tier), database user, and add your IP to Network Access. Copy your connection string from Atlas (Connect > Drivers or Compass).

4. Set the connection string environment variable:

   Windows (PowerShell):
```
$env:MONGODB_URI="mongodb+srv://USERNAME:PASSWORD@cluster0.xxxxx.mongodb.net/"
```

   Windows (CMD):
```
set MONGODB_URI=mongodb+srv://USERNAME:PASSWORD@cluster0.xxxxx.mongodb.net/
```

   macOS/Linux:
```
export MONGODB_URI="mongodb+srv://USERNAME:PASSWORD@cluster0.xxxxx.mongodb.net/"
```

5. Run the queries script:
```
node index.js
```

6. Alternatively, use MongoDB Compass: paste the connection string, connect, create database tutorial5_db and collection books, then run the queries from QUERIES.md in the MongoSH tab.



## Database Schema

* Database: tutorial5_db
* Collection: books

Document structure:
{
  _id: ObjectId,
  title: String,
  author: String,
  genre: String,
  year: Number,
  inStock: Boolean
}



## Queries Implemented

1. INSERT - insertMany() to insert 12 records (10-15 required)
2. RETRIEVE - find({}) to get all records
3. MODIFY - updateOne() to modify one record
4. RETRIEVE - findOne() to get the modified record



## Deployment

MongoDB Atlas hosts the database. No application deployment is required. Connection is established via connection string from a local machine (Node.js or MongoDB Compass). Ensure your IP is added in Atlas Network Access for secure connection.



## Built With

* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Cloud-hosted NoSQL database
* [Node.js mongodb driver](https://mongodb.github.io/node-mongodb-native/) - Official MongoDB driver for Node.js
* [MongoDB Compass](https://www.mongodb.com/products/compass) - GUI for MongoDB (optional)



## Sources Used

If in completing this lab you used any interpretation of someone else's code, list it here per the template format.



## Artificial Intelligence Tools Used

If in completing this lab you used any AI tools, list the tools, prompts, and modifications per the template format.



## Acknowledgments

* CSCI 4177/5709 course materials and Tutorial 5 instructions
* [MongoDB Documentation](https://www.mongodb.com/docs/)
