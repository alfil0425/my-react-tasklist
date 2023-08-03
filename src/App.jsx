import React from "react";
import "./App.css";
import Tasklist from "./components/Tasklist";

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="tareas-lista-principal">
        <h1>My Task</h1>
        <Tasklist />
      </div>
    </div>
  );
}

export default App;
