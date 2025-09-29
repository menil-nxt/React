//  ReactElement end of the day -> (Object).  ==> and this react Object is becomes (HTML) that broswer understand.


/*
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
      
*/
const perent = React.createElement(
    "div",{id: "perent"},
    [React.createElement("div", {id: "child"},
    [React.createElement("h1",{},"I'am H1 tage in nested div!"), React.createElement("h2",{},"I'am H2 tage in nested div!"),React.createElement("h3",{},"I'am H3 tage in nested div!")]
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




