import { useState } from 'react'

import './App.css'

import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Content from './components/Content';


function App() {

  return (
    <div>
      <div className="main">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  )
}

export default App;
