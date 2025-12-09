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

# React Hooks

- (Normal Java Script Utility Functions -> writen by Facebook -> where this all hooks -> inside nodemodule-React all of this come.)

- 1 - useState() - gives you -> superPowerful state variable in react

  - syntex :- const [variable name, setVariable name] = useState (initial value);
  - useState() variable is local powerfull variable in react
  - usestate() variable declare in array and in array -> 1. variable name 2. for chaning this variable value useState() is give one functionfor that as second value of array -> setVariable name
  - with setVariable name you can change vaue of your state variable.

    Limitation of useState() hook

    - local state variable -> super powerful react variable
    - Naver create useState() variable inside if...else... (conditional statement)
    - Naver create useState() variable inside For Loop
    - Naver create useState() variable inside Function

# How we can fetch data from backend

- for that 2 Approches are there

  1. Load and render => Load -> API -> Render
  2. Render first and than fetch later => Load -> Render -> API -> RE-Render

  Note :- we have use here 2 Approch

  - for that we use => useEffect() hook

- 2 - useEffect() - is containe two thing

  1. call-back function => this call-back function is called after whole component is rendered (mendetory)
  2. array of dependency => changes the behaviour of it's render (optional)

  - 1. if no dependency array -> useEffect() is called on every component render
  - 2. if dependency array is empty = [] -> useEffect() is called one initial render(just once)
  - 3. if dependency is their -> useEffect is called -> every time that dependency is updated

  - syntex :- useEffect( () => {} , [ ] )
