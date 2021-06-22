// Import React Modules
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

// Import Components
import LoadingScreen from './Components/LoadingScreen/Loading';
import Navbar from './Components/Navbar/Navbar';
import Player from './Components/MusicPlayer/Player';
import Background from './Components/Background/Background';

// Import Pages
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';

const App = () => {
  // Loading Screen
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2870);
  }, [])

  // Main App
  return (
    <>
    {loading === false ? (
      <Router basename='/portfolio'>
        <Navbar/>
        <Player/>
        <Background/>
        <Switch>
          <Route path ='/' exact component={Home}/>
          <Route path ='/projects' component={Projects}/>
          <Route path ='/about' component={About}/>
          <Route path ='/contact' component={Contact}/>
        </Switch>
      </Router>
      ) : (
        <LoadingScreen loading={loading}/>
      )}
    </>
  );
}

export default App;