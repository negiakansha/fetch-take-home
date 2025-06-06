import './App.css';
import ImgContainer from './components/ImgContainer';
import LoginForm from './components/LoginForm';

const images = [
    '/images/dog1.jpg',
    '/images/dog2.jpg',
    '/images/dog3.jpg',
    '/images/dog4.jpg',
    '/images/dog5.jpg',
    '/images/dog6.jpg',
    '/images/dog7.jpg',
    '/images/dog8.jpg',
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>fetch shelters</h1>
      </header>
      <div className="App-body">
        <LoginForm />
        <ImgContainer images={images}/>
      </div>
    </div>
  );
}

export default App;
