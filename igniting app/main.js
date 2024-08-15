const parent = React.createElement("div", { class: 'parent' }, [
    React.createElement("div", { class: 'child1' }, [
        React.createElement("h1", { id: 'heading1' }, "Hello World from React"),
        React.createElement("h2", { id: 'heading2' }, "Hello World from React"),
    ]),
    React.createElement("div", { class: 'child2' }, [
        React.createElement("h3", { id: 'heading3' }, "hello wrold from react"),
        React.createElement("h4", { id: 'heading4' }, "hello world from react"),
    ])
]);

const container = ReactDOM.createRoot(document.getElementById("container"));

container.render(parent);