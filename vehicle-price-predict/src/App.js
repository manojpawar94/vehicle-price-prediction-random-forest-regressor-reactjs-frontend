import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";
import { Appbar } from './components/Navbar'
import { PricePrediction } from './components/PricePrediction'
import Container from 'react-bootstrap/Container'
import { About } from './components/About';

function App() {
  return (
    <>
      <Appbar />
      <Container style={{ marginTop: '8px' }}>
        <Switch>
          <Route exact path="/">
            <PricePrediction />
          </Route>
          <Route path="/home">
            <PricePrediction />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default App;
