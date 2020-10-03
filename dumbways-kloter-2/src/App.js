import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
// import {Provider} from 'react-redux';
import NewsPost from './containers/pages/NewsPost';
import NewsUser from './containers/pages/NewsUser';
import ShowPost from './containers/pages/ShowPost';
import DetailPost from './containers/pages/DetailPost';
import UpdatePost from './containers/pages/UpdatePost';

// import './App.css';

function App() {
  return (
    // <NewsPost/>
    // <NewsUser/>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/user">NEW USER</Link>
            </li>
            <li>
              <Link to="/post">NEW POST</Link>
            </li>
          </ul>
        </div>
        <Route path="/" exact component={ShowPost} />
        <Route path="/user" component={NewsUser} />
        <Route path="/post" component={NewsPost} />
        <Route path="/detail/:id" component={DetailPost} />
        <Route path="/update/:id" component={UpdatePost} />
        <Route path="/post/delete/:id" />
      </Router>
  );
}

export default App;
