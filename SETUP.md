# Tutorial 1 – Setup Instructions

Follow these steps to complete your individual Tutorial 1 deliverables.

---

## 1. Create your individual tutorials repo (GitHub)

1. Create a **new repository** on GitHub (e.g. `CSCI4177-Tutorials` or `CSCI5709-Tutorials`). Do **not** initialize with a README.
2. Open a terminal in the `CSCI4177-Tutorials` folder and run:

   ```bash
   cd "C:\Users\Krishna\OneDrive\Desktop\MACS\SEM 5\CSCI5709\Project\CSCI4177-Tutorials"
   git init
   git add .
   git commit -m "Tutorial 1: initial setup and T1 app"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_TUTORIALS_REPO.git
   git push -u origin main
   ```

   Replace `YOUR_USERNAME` and `YOUR_TUTORIALS_REPO` with your GitHub username and repo name.

---

## 2. Mirror to GitLab (FCS)

### Step 2a: Create the GitLab project

1. Go to [FCS GitLab](https://git.cs.dal.ca) and sign in with your Dal credentials.
2. Click **New project** → **Create blank project**.
3. **Project name:** `CSCI4177-Tutorials` (or `CSCI5709-Tutorials`).
4. **Project URL:** leave the default (uses your CSID/username).
5. **Visibility:** set to **Private**.
6. **Initialize with README:** leave **unchecked** (you already have code).
7. Click **Create project**.

### Step 2b: Push your GitHub repo to GitLab

**Option A – Push from your machine (recommended):**

1. Copy your new project’s GitLab URL (e.g. `https://git.cs.dal.ca/YOUR_CSID/CSCI4177-Tutorials.git`). Find it on the project page under **Clone** → **HTTPS**.
2. In a terminal, from your `CSCI4177-Tutorials` folder:

   ```powershell
   cd "C:\Users\Krishna\OneDrive\Desktop\MACS\SEM 5\CSCI5709\Project\CSCI4177-Tutorials"
   git remote add gitlab https://git.cs.dal.ca/YOUR_CSID/CSCI4177-Tutorials.git
   git push gitlab main
   ```

   Replace `YOUR_CSID` with your GitLab username (usually your Dal CSID). When prompted, use your **Dal login** and **Dal password** (or GitLab personal access token if you use one).

3. To push future updates to both remotes:
   ```powershell
   git push origin main
   git push gitlab main
   ```

**Option B – GitLab pull mirror:**

1. In your GitLab project: **Settings** → **Repository** → **Mirroring repositories**.
2. **Git repository URL:** `https://github.com/YOUR_USERNAME/CSCI4177-Tutorials.git`
3. **Authentication:** if the repo is public, leave blank; if private, use a GitHub PAT or mirroring credentials.
4. **Mirror direction:** **Pull**.
5. Save. GitLab will pull from GitHub periodically (or trigger a sync). You still need to push to GitHub first; GitLab mirrors from there.

### Step 2c: Add Instructor and TAs as Maintainers

1. In your GitLab project, go to **Manage** → **Members** (or **Project information** → **Members**).
2. Click **Invite members**.
3. Enter each **CSID** (GitLab username) for the Course Instructor and TAs.  
   Get these from the **Tutorial 1** module on Brightspace or the course **#Tutorials** Teams channel.
4. **Role:** choose **Maintainer** for each.
5. Click **Invite**.

Add this **GitLab project URL** to your `README.txt` (Section 3).

---

## 3. Deploy Tutorial 1 on Netlify

1. Go to [Netlify](https://www.netlify.com) and sign in (e.g. with GitHub).
2. **Add new site** → **Import an existing project** → **GitHub**.
3. Select your **tutorials** repository.
4. Build settings:
   - **Build command:** leave empty (or use `""`).
   - **Publish directory:** `tutorial1`  
     (This is also set in `netlify.toml`, so Netlify may detect it automatically.)
5. Deploy. Note your **site URL** (e.g. `https://random-name-123.netlify.app`).

---

## 4. Update README.txt and submit

1. Edit `README.txt` and fill in:
   - **Group GitLab URL** (Section 1).
   - **Each member’s branch URL** (Section 2).
   - **Your individual tutorials GitLab URL** (Section 3).
   - **Your Netlify deployment URL** (Section 4).
2. Ensure `README.txt` is committed and pushed to both GitHub and GitLab.
3. Submit **`T1_LastName_FirstName#.txt`** to the **Tutorial 1 (Individual)** dropbox on Brightspace. You can rename `README.txt` accordingly or save a copy with that name.

---

## 5. Group repo checklist

- [ ] Group project repo is **private** on GitLab.
- [ ] Instructor and TAs added as **Maintainers** on the group GitLab project.
- [ ] Each member has their own **branch**; everyone has successfully pushed at least once.
- [ ] **T1_Group6.pdf** (project idea + frameworks + justifications) submitted to **Tutorial 1 (Group)** on Brightspace by one group member.

---

## Troubleshooting: GitHub push (403 / authentication)

**"Permission denied" or "Invalid username or token"** usually means:

1. **Wrong account** – You're signed in as user A but the remote is `userB/repo`. Fix:
   - Use a repo **you** own: create it under your GitHub account, then  
     `git remote set-url origin https://github.com/YOUR_USERNAME/CSCI4177-Tutorials.git`
   - Or get added as a collaborator on the other user's repo (then use that account's token).

2. **Password auth disabled** – GitHub no longer accepts account passwords for Git. Use one of:

   **Option A: Personal Access Token (PAT)**  
   - GitHub → Settings → Developer settings → [Personal access tokens](https://github.com/settings/tokens) → Generate new token (classic).  
   - Enable `repo` scope, generate, copy the token.  
   - When Git asks for a password, **paste the token** (not your GitHub password).  
   - To cache it (Windows):  
     `git config --global credential.helper manager`

   **Option B: SSH**  
   - [Add an SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) to your GitHub account.  
   - Switch remote to SSH:  
     `git remote set-url origin git@github.com:YOUR_USERNAME/CSCI4177-Tutorials.git`  
   - Then `git push -u origin main` (no password prompt).

   **Option C: GitHub CLI**  
   - Install [GitHub CLI](https://cli.github.com/), run `gh auth login`, then use Git as usual.

---

## Quick reference

| Item | Where |
|------|--------|
| Group GitHub | https://github.com/maxhayden/CSCI4177_group6-Project.git |
| Group GitLab | Add in README |
| Your tutorials GitLab | Add in README |
| Netlify T1 app | Add in README |
| Brightspace individual | T1_LastName_FirstName#.txt → Tutorial 1 (Individual) |
| Brightspace group | T1_Group6.pdf → Tutorial 1 (Group) |
