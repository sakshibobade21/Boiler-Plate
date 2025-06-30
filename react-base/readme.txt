npm init -y
npm install react react-dom
npm install --save-dev parcel

scripts:
"start": "parcel index.html",
"build": "parcel build index.html",
no main field in package.json

index.html:
<div id="root"></div>
<script type="module" src="./src/app.js"></script>  //type=module is imp

app.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./app.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);