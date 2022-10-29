import React from "react";
import './App.css';
import Game from "./components/Game";

function App() {
    // TODO: Add ability to undo a recent move
    return (
        <main className="center small-margin-top">
            <h2>Let&apos;s play tic-tac-toe!</h2>
            <Game/>
        </main>
    );
}

export default App;
