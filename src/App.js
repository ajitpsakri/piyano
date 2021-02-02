import React from "react";
import "./App.css";
import "./Components/Whitebutton";
import Whitebutton from "./Components/Whitebutton";
function App() {
  return (
    <div className="App">
      <h1>Click on a random button to make piano work</h1>
      <div className="links">
        <a href={"https://github.com/ajitpsakri/piyano"}>
          Source-Code(I'm a newbie so it does have a lot of if-else ladder.)
        </a>
      </div>
      <Whitebutton class="pyanos" />
    </div>
  );
}

export default App;
