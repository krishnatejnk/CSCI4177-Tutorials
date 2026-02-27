Tutorial 3 – Front-End Frameworks II

Individual deliverable for CSCI 4177/5709. A React SPA with login, user profile listing, and user detail pages. Implements client-side routing, API integration (login, users list, user detail), and search by First Name or Last Name.

* Date Created: 27 Feb 2026
* Last Modification Date: 27 Feb 2026
* Lab URL: [Update with your Tutorial 3 Netlify deployment URL after deploying]
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
   cd CSCI4177-Tutorials/tutorial3

2. Install dependencies:
   npm install

3. Start the development server:
   npm run dev

4. Open http://localhost:5173 in a browser.

5. Log in with demo credentials:
   - Email: testemail@dal.ca
   - Password: Test@123

6. You should see the user profile listing page. Click a user card to view their profile details. Use the search box to filter users by First Name or Last Name.


Deployment

To deploy Tutorial 3 on Netlify:

1. Create a new Netlify site linked to this repository.
2. Configure build settings:
   - Base directory: tutorial3
   - Build command: npm run build
   - Publish directory: tutorial3/dist
3. Deploy. Add the resulting site URL to the Lab URL field above and to your Brightspace README submission.


Built With

* React (https://react.dev/) - UI framework
* React Router (https://reactrouter.com/) - Client-side routing
* Vite (https://vitejs.dev/) - Build tool and dev server


Sources Used

If you adapted any external code, list it here using the format from the template.


Artificial Intelligence Tools Used

If you used any AI tools, list them here with prompts and where the code was implemented, per the template.


Acknowledgments

* Course materials and Tutorial 3 instructions (CSCI 4177/5709).
