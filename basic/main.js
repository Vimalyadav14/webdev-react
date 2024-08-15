

const parent = React.createElement("div", { id: 'parent' }, [
    React.createElement("div", { id: 'child' }, [
        React.createElement("h1", {}, "This is heading1."),
        React.createElement("h2", {}, "This is heading2."),
        React.createElement("h3", {}, "This is heading3."),
    ]),
    React.createElement("div", { id: 'child1' }, [
        React.createElement("h1", {}, "This is heading1."),
        React.createElement("h2", {}, "This is heading2."),
        React.createElement("h3", {}, "This is heading3."),
    ])
]);










//const heading = React.createElement("h1", { id: 'heading', xyz: 'abc' }, "Hello World form React!");

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);