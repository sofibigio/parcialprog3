import './App.css';

import Home from './Screens/Home/Home';
import NotFound from './Screens/NotFound/NotFound';
import Peliculas from './Screens/Peliculas/Peliculas';
import UnaPelicula from './Screens/UnaPelicula/UnaPelicula';
import UnaSerie from './Screens/UnaSerie/UnaSerie';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={Home} exact={true} />

          <Route path='/peliculas/:tipo' component={Peliculas} exact={true} />

        <Route path="/pelicula/:id" component={UnaPelicula} exact={true}/>
        <Route path="/serie/:id" component={UnaSerie} exact={true}/>
        <Route path='' component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;

