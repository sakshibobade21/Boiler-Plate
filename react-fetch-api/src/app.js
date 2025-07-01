import React from "react";
import ReactDOM from "react-dom/client";
import MemeList from "./Components/MemeList";
import "./style.css"

const App = () => {

  return(
    <div>
      <h1>React Fetch API</h1>
			<MemeList/>
    </div>
  )

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;