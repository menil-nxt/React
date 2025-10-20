# React

Here you can see my react code and learn from it. let's start !!

# Parcel

- Dev Build
- local server build and also host that local server for us.
- HMR - Hot Module Replecement.
- parcel uses File Watching Algorithm -> and this File Watching Algorithm is ( Written in C++ ).
- Parcel is giving you (faste development expriance because is also doing Caching)
- Caching throw -> Faster Builds.
- Image Optimization
- if We create Productation Build so parccel do Minification of our file also.
- Bundling our file.
- Compressing our file.
- Consistent Hashing
- Code Splliting
- Differential Bundling - Support Older Browsers.
- Diagnostic - beautiful understandeble Error.
- Good Error handling Message - good sagession for handle any Error.
- HTTPs.
- Tree Shaking - Remove unuse code.
- Different devlopment and production Bundles.

# planing for our App

App Componenets
Header - logo - nav items

    body
    - search
    - Restorant Container
    - Restorant Card
       - img, rating, name of restaurant, cuisine , delevary time.

    footer
    - copyright
    - links
    - Address
    - contact

# two types of Export / Import

- 1 default Export / Import

  - export default Component;
  - import Component from file_path

- 2 named Export / Import

  both in one component file

  - export const Component => CDN_URL = " "
  - export const Component => LOGO_URL =" "
  - import {Component} from "file_path"; => Component put it inside { }(breacket)
