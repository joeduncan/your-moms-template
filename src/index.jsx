import * as React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let App = () => <div className="your-mom">Your Mom's Template</div>;

let root = document.createElement("div");

window.document.body.appendChild(root);

ReactDOM.render(<App />, root);
