import React from "react";
import { createRoot } from "react-dom/client";

import App from "./src/App.tsx";
import "./index.css"; // css가 js로 import 된다. => webpack에서 번들링 할 때 .css 확장자를 인식할 수 있다.

const root = createRoot(document.getElementById("app"));

root.render(<App />);
