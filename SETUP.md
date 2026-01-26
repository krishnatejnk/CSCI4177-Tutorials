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

1. Create a **new project** on [FCS GitLab](https://git.cs.dal.ca) (e.g. `CSCI4177-Tutorials`).
2. Set the project to **Private**.
3. Either:
   - **Option A:** Add the GitLab repo as a second remote and push:
     ```bash
     git remote add gitlab https://git.cs.dal.ca/YOUR_CSID/CSCI4177-Tutorials.git
     git push gitlab main
     ```
   - **Option B:** Use GitLab’s **Mirroring** (Settings → Repository → Mirroring) to pull from your GitHub repo.
4. Add the **Course Instructor** and **TAs** as **Maintainers** (Project → Members). Get their CSIDs from Brightspace (Tutorial 1 module) or Teams #Tutorials.

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

## Quick reference

| Item | Where |
|------|--------|
| Group GitHub | https://github.com/maxhayden/CSCI4177_group6-Project.git |
| Group GitLab | Add in README |
| Your tutorials GitLab | Add in README |
| Netlify T1 app | Add in README |
| Brightspace individual | T1_LastName_FirstName#.txt → Tutorial 1 (Individual) |
| Brightspace group | T1_Group6.pdf → Tutorial 1 (Group) |
