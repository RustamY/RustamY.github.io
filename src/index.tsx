import { createRoot } from "react-dom/client";

import { App } from './App';

window.initWidget = function (id = "widget-feedback") {
    const container = document.getElementById(id);
    const root = createRoot(container);
    root.render(<App />);
}

window.initWidget();
