import React from 'react';
import './App.css';
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'
import './components/main.css'

function App() {


  return (
    <div className="App">

      <body>

        <h1 className="large-hello">
          Hi, I'm Justin!
        </h1>

        <MainContent />
        <Footer />

      </body>

    </div>
  );
}

export default App;
