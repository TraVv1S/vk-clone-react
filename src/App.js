import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import MyPage from "./pages/my-page";
import Messenger from "./pages/messenger"
import News from "./pages/news"


import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <div className="content__wrapper wrapper">
            
            <Sidebar />

            <Routes>
              <Route path="/" element={<MyPage />} />
              <Route path="/im" element={<Messenger />} />
              <Route path="/news" element={<News />} />
              
            </Routes>

          </div>
        </div>
        
      </div>
    </Router>
  );
}

export default App;