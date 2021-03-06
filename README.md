<div align="center">
  <img alt="Logo" src="src/assets/codeway.jpg" width="40%" />
</div>
<h1 align="center">
  <a href='https://resume.codeway.io/'>resume.codeway.io</a>
</h1>

[![Build Status](https://img.shields.io/circleci/project/all-contributors/all-contributors/master.svg)](https://circleci.com/gh/all-contributors/workflows/all-contributors/tree/master)
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)
[![Netlify Status](https://api.netlify.com/api/v1/badges/cb5f0fce-d626-4e62-b2a0-aa0f7fd57e59/deploy-status)](https://app.netlify.com/sites/allcontributors-org/deploys)
[![Pull Reminders](https://pullreminders.com/badge.svg)](https://pullreminders.com?ref=badge)
<p align="center">Resume to go alongside my <a href='https://codeway.io'>personal website</a>.</p>

<h2 align="center">
  <img src="src/assets/resume.jpg" alt="example" width="70%" />
  <br>
</h2>

## ⭐ Features
- Single page app to display the resume
- Pdf version obtainable by printing
- Easily updatable 

## Getting started

### Requirements
To try the website on your own machine you will need both [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/).

### Setup

In a terminal :
```bash

# Clone the repository
$ git clone https://github.com/codeway-0841/my-resume.git
$ cd resume

# Install the dependencies
$ npm install

# Launch the development server
$ npm start
```

From there the website should be accessible through http://localhost:3000/.

### Edition

Should one want to modify the data and colors of the website : 
- colors are in `src/app.scss`
- data for the different sections are stored in separate objects in `src/data.js`

