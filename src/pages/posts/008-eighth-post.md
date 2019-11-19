---
title: 'Display your Resume/CV using Github Pages'
date: 2019-11-19 07:45:00
author: 'Edmond Ma'
image: '../../images/008-resume-ghpages.jpg'
tags:
  - code
  - github
  - git
  - html
  - resume
  - career
  - pdf
---

<br>

#Hosting your Resume/CV on GitHub

<br>

To start off, we want to have GitHub host a website that will display our beloved resume to the world. We want to achieve something similar to https://edjunma.github.io/EJM-Resume/.

#**Requirements**

*GitHub account and if you don't have one you can visit here to begin - https://github.com/.
*Have your Resume/CV ready in PDF format preferably.

##1. Create a public repository

Start by creating a new repository on GitHub, you can also follow this link https://github.com/new. You can name the repository however you'd like but I would recommend naming the repo after its objective, i.e "example-resume".

##2. Upload the Resume/CV PDF file

After creating the repo, you will see a new page for your repo. Locate "Upload Files" and you'll be taken to a window where you can drag and drop your pdf files. After that you can add a description or name for the commit and press "Commit changes".

##3. Get the PDF link address

After the file is finished uploading, click the PDF file in your repo and you will be brought to the PDF page. There you can locate the "Download" button, right-click the button, and locate the "Copy Link Address" copying the HTML link to the PDF.

##4. Create an HTML file for the PDF

Create a simple HTML boilerplate and replace "YOUR COPIED LINK HERE" with the link address you just copied. Look at the screenshots below for more information.

##5. Setup GitHub Pages

Now head on over to the settings of this repository, scroll down until you see the GitHub Pages settings and active the site using the master branch. Once you see something similar to this...

You now have hosted your Resume/CV for the world to see! Good luck 🤓!
