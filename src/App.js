import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './containers/Header/header';
import Sidebar from './containers/Sidebar/sidebar';
import UserPage from './containers/UserPage/userPage'
import Messenger from "./containers/Messenger/messenger"
import News from "./containers/News/news"
import users from '@/data/user.json'


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
              <Route path="/" element={<UserPage user={users[0]}/>} />
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