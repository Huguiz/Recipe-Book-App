import './App.css'

import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';




function App() {

  return (
    <>
    <Header />
      <div className="main">
        <Sidebar />
        <Content />
      </div>
    <Footer />




    </>
  )
}

export default App;
