import './App.css';

import Home from './screens/Home/Home';
import NotFound from './screens/NotFound/NotFound';
import Peliculas from './screens/Peliculas/Peliculas';
import UnaPelicula from './screens/UnaPelicula/UnaPelicula';
import UnaSerie from './screens/UnaSerie/UnaSerie';

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

