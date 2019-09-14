import React from 'react';
import DashBoard from './package/dashboard/index';
import {BrowserRouter as Router} from 'react-router-dom'

import './App.css'
const App: React.FC = () => {
  return (
    <Router>
      <DashBoard>
      </DashBoard>
    </Router>
    
  );
}

export default App;
