import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import ColumnS from './components/column-s/column-s';
// import ColumnM from './components/column-m/column-m';
import AccountInfo from './components/account-info/account-info';
import Photos from './components/photos/photos'
import NewPost from './components/new-post/new-post';
import Feed from './components/feed/feed';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="content__wrapper wrapper">
          <Sidebar />
          <ColumnS />

          <div className="column-m">
            <AccountInfo />
            <Photos />
            <NewPost />
            <Feed />
          </div>

        </div>
      </div>
      
    </div>
  );
}

export default App;