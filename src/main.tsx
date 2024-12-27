import React from "react";
import ReactDOM from "react-dom/client";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  MainMenu  from "./MainMenu"; 
import GamePlay from "./Gameplay"; 
import PathSelection from "./pathSelection";
import Leaderboards from "./Leaderboards";
import NameCreation from "./nameCreation";
import './index.css';

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator>
      <Router>
        <Routes>
          <Route path="/" element={<MainMenu />} /> {/* Route for main menu */}
          <Route path="/namecreation" element={<NameCreation />} /> {/* Route for name creation*/}
          <Route path="/pathselection/:avatarName/:defeatedBossCount" element={<PathSelection/>} /> {/* Route for path selection */}
          <Route path="/gameplay/:avatarName/:pathId/:defeatedBossCount" element={<GamePlay />} /> {/* Route for gameplay */}
          <Route path="/leaderboards"  element={<Leaderboards />} />  {/* Route for leaderboards*/}
          
        </Routes>
      </Router>
    </Authenticator>
  </React.StrictMode>
);
