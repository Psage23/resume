import React from 'react';
import Intro from './Components/Intro';
import Projects from './Components/Projects';
import Footer from './Components/footer';

import './App.css';

function App() {
  return (
    <div class="app">
      <Intro />
      <Projects />
      <Footer />
    </div>
  )
}

export default App;
