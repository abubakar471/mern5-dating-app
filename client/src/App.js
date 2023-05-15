import './App.css';
import Header from './components/header/Header';
import DatingCards from './components/datingCards/DatingCards';
import SwipeButtons from './components/swipeButtons/SwipeButtons';

const App = () => {
  return (
    <div className="app">
      <Header />
      <DatingCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
