import './App.css';
import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage';

function App() {
  const [authorized, setAuthorized] = useState(false);  
  return (
    <div className="App">
      <header className="App-header">
        {/* <a href="/login" className="home-link"> */}
          <img src="favicon.ico" alt="fetch logo" className="logo"/>
          <h1>fetch shelters</h1>
        {/* </a> */}
      </header>
      <div className="App-body">
        { authorized ? <SearchPage /> : <LoginPage setAuthorized={setAuthorized} /> }
      </div>
    </div>
  );
}

export default App;
