import {createRoot} from  "react-dom/client";
import { App } from "./src/App";

const rootDiv = document.getElementById("root");

const root = createRoot(rootDiv);

root.render(<App />);