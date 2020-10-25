# EECS Club Website
[Here](https://reverent-jang-69754c.netlify.app/)

Built, deployed, and hosted using Netlify: 
[![Netlify Status](https://api.netlify.com/api/v1/badges/4f62ab3d-1fc4-4787-a637-d92026cb6a79/deploy-status)](https://app.netlify.com/sites/reverent-jang-69754c/deploys)

Uses Gatsby, Bootstrap, styled-components, and a bit more.

## Installation
To develop on this repository, simply clone:
```sh
cd ~
git clone https://github.com/ianjazz246/eecs-club-website.git
```
...then install the npm packages.
```sh
cd website
yarn
```
## Starting a development server
To start a hot-reloading local server for development, just use the `develop` script.
```sh
yarn develop
# ...
# Server should run at https://localhost:8000
```

## About images
`src/images/` are for images that are processed by image-sharp. They are resized and optimized by image-sharp.

`static/img/uploads/` are for images that are uploaded by Netlify CMS.

`static/` has images for favicons and stuff

`static/img/` is for everything else.

Maybe all images could be in /src/images and the images needed unmodified could be copied to public?