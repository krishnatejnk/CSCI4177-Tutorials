# Tutorial 1 – Application Frameworks (Individual)
# Tutorial 3 – Front-End Frameworks II (Individual)

Individual deliverable for CSCI 4177/5709 Tutorials.

* *Date Created*: 26 Jan 2026
* *Last Modification Date*: 27 Feb 2026
* *Tutorial 1 Lab URL*: https://tranquil-paprenjak-3a7d30.netlify.app/
* *Tutorial 3 Lab URL*: [Update with your Tutorial 3 Netlify deployment URL after deploying]
* *Individual Tutorials GitLab : https://git.cs.dal.ca/knkumar/csci4177-tutorials
* *Individual Tutorials GitHub : https://github.com/krishnatejnk/CSCI4177-Tutorials


## Tutorial 1 Required Links

### Group Project Repository

* *GitHub : https://github.com/maxhayden/CSCI4177_group6-Project.git
* *GitLab Mirror : https://git.cs.dal.ca/hayden/CSCI4177_group6-Project

### Individual Branches (Group Members)

Team Members & Branches

* Krishna Tej Nanda Kumar: https://github.com/maxhayden/CSCI4177_group6-Project/tree/krishna_tej
* Patric Manoharan: https://github.com/maxhayden/CSCI4177_group6-Project/tree/patric_mano
* Max Hayden: https://github.com/maxhayden/CSCI4177_group6-Project/tree/max_hayden
* Shiyu Huang: https://github.com/maxhayden/CSCI4177_group6-Project/tree/shiyu_huang
* Zijian Wang: https://github.com/maxhayden/CSCI4177_group6-Project/tree/zijian_wang
* Umar Fazeer: https://github.com/maxhayden/CSCI4177_group6-Project/tree/umar_fazeer


## Authors

* Krishna Tej Nanda Kumar - kr657835@dal.ca

## Getting Started

See **Deployment** for notes on deploying the Tutorial 1 app on Netlify.

### Prerequisites

* A modern web browser (e.g. Chrome, Firefox, Edge)
* (Optional) Git, if you want to clone and run locally

### Installing

To run the Tutorial 1 app locally:

1. Clone the repository:
   ```
   git clone https://github.com/krishnatejnk/CSCI4177-Tutorials.git
   cd CSCI4177-Tutorials
   ```
2. Open `tutorial1/index.html` in a browser, or use a simple local server (e.g. `npx serve tutorial1`).

## Deployment

Tutorial 1 is deployed on **Netlify** (publish: `tutorial1`, no build). Tutorial 3 is built with Vite and deployed (publish: `tutorial3/dist`). See `netlify.toml` for build settings. This repository is mirrored from GitHub to FCS GitLab for marking.

### Deploying Tutorial 3

Create a **new Netlify site** linked to this repo:
- **Base directory**: `tutorial3`
- **Build command**: `npm run build`
- **Publish directory**: `tutorial3/dist`


## Built With

* Tutorial 1: [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML), [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
* Tutorial 3: [React](https://react.dev/), [React Router](https://reactrouter.com/), [Vite](https://vitejs.dev/)


## Repository Structure

CSCI4177-Tutorials/
  tutorial1/     – Tutorial 1 app (static HTML)
      index.html
      style.css
  tutorial2/
  tutorial3/     – Tutorial 3 app (React SPA: Login, User list, User detail, search)
      src/components/Login.jsx, UserList.jsx, UserDetail.jsx
      package.json, vite.config.js
  tutorial4/
  tutorial5/
  tutorial6/
  README.txt
  netlify.toml


## Acknowledgments

* Course materials and Tutorial 1 instructions (CSCI 4177/5709).
