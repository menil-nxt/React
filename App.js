import React from "react"; // "react is basically referse to react we have into node_module"
import ReactDOM from "react-dom/client";

/*    ReactElement end of the day -> (Object).  ==> and this react Object is becomes (HTML) that broswer understand.



    create nested element in React like :- div inside another div.

        <div id="perent">
            <div id="child">
                <h1>I'am H1 tage in nested div!</h1>
                <h2>I'am H2 tage in nested div!</h2>
            </div>
            <div id="child2">
                <h1>I'am H1 tage in nested div!</h1>
                <h2>I'am H2 tage in nested div!</h2>
            </div>
        </div>
      

const perent = React.createElement(
    "div",{id: "perent"},
    [React.createElement("div", {id: "child"},
    [React.createElement("h1",{},"I'am H1 tage in nested div! 🚀"), React.createElement("h2",{},"I'am H2 tage in nested div!"),React.createElement("h3",{},"I'am H3 tage in nested div!")]
    ),React.createElement("div", {id: "child2"},
    [React.createElement("h1",{},"I'am H1 tage in nested div!"), React.createElement("h2",{},"I'am H2 tage in nested div!"),React.createElement("h3",{},"I'am H3 tage in nested div!")]
    )]
);



// const heading = React.createElement("h1", {id: "heading"}, "hello world from React!"); // comes this line into first link it's main react core part or main react code that created by meta developer.
      // here create h1 Element with React (React.createElement("tagName" , {"mising object"} , "message what you put inside h1 tag"))
    
console.log(perent); // return object.

const root = ReactDOM.createRoot(document.getElementById("root"));
      // create first of all root for React.(ReactDOM.createRoot(document.getElementByID("Id name"))) => this line works from second link that is ReactDOM link.

root.render(perent);
      // render work is take this heading object create h1 tag which does browser understand and put it inside root element.
      // rendering our heading (h1 tag) inside root

*/

// START LEARING REACT FROM HERE!!!!!!!!!!!!!!

// React Element
// older way to write React => you can also create react app with this older way of writing
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "this is react element 🦁"
); // React.createElement => object => HTMLElement(render)
console.log(heading);

// JSX => JSX is new way to writing React. => but this react and jsx both are diffrent .
// JSX => mearging html or js in one way .

// how to create JSX element
const jsxHeading = <h1 id="root">Menil</h1>;
const jsxLink = <a href="">hello menil</a>;
// JSX is not javascript inside HTML.  // both are differnt.  // JSX is a deiffrent independent syntax.
console.log(jsxHeading);

// how we create React COMPONENT
// TWO type of React Component
// 1 => React Class component => old => use js classes
// 2 => React Functional component => new => use use js function

const Title = () => (
  <h1>
    {"Hello JSX == > "}
    Title Componenet --- Menil from React component without return but work is
    same
  </h1>
); // with out return

const HeadingComponent2 = () => {
  return <h1>Menil from React component with return but work is same. </h1>;
};

//if you have maltiline than wrap inside ( ) (round breacket)

// Component Composition.
const HeadingComponent3 = () => (
  <div className="Container">
    {Title()}
    <Title />
    <Title></Title>
    <h1 className="root">
      Heading Cmpotonent inside title component --- Menil with multiple line
      than wrap inside ( ) breacket
    </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root")); // for displaying to browser we do ReactDOM.cerateRoot ()

root.render(<HeadingComponent3 />); // render for component <function name/>
