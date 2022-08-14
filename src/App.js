import "./App.css";
import { useState } from "react";

function App() {
  const [isShown, setIsShown] = useState(0);

  function showHandler() {
    setIsShown = 1;
  }

  function hideHandler() {
    setIsShown = 0;
  }

  return (
    <div className="App">
      <header className="App-header">
        {isShown && <div>Someting to Show....</div>}
        <p onClick={showHandler}>Testing Project</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </header>
    </div>
  );
}

export default App;
