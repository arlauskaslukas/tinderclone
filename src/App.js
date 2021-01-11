import TinderCard from 'react-tinder-card';
import './App.css';
import Header from "./Header.js";
import TinderCards from "./TinderCards";
import SwipeButtons from './SwipeButtons';
import { Container } from '@material-ui/core';

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header/>
      {/* tindercards */}
      <Container>
      <TinderCards/>
      {/* swipebuttons */}
      <SwipeButtons/>
      </Container>
    </div>
  );
}

export default App;
