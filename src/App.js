import './App.css';
import HomePage from './containers/HomePage';
import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <HomePage />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
