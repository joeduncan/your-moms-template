import * as React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const App = () => <div className="your-mom">Your Mom's Template</div>;

const container = document.createElement("div");
window.document.body.appendChild(container);

const root = createRoot(container);
root.render(<App />);
