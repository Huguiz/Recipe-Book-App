import './App.css'

import {useState} from 'react';

// import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

function App() {

    const [toggle, setToggle] = useState(true);

    const menuToggle = () => {
        setToggle(!toggle);
    }

  return (
    <>
    <Header menuToggle={menuToggle}/>
      <div className="main">
        <Sidebar toggle={toggle}/>
        <Content toggle={toggle}/>
      </div>
    <Footer />




    </>
  )
}

export default App;
