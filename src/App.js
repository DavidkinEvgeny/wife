import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Works from './pages/Works'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/contact' component={Contact} exact />
          <Route path='/works' component={Works} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
