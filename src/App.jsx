import './App.css'

import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Content from './components/Content';


function App() {

  return (
    <div>
      <Header></Header>
      <div className="main">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  )
}

export default App;
