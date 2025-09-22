import './App.css';
import Busqueda from './screens/Busqueda/Busqueda';

import Home from './screens/Home/Home';
import NotFound from './screens/NotFound/NotFound';
import Peliculas from './screens/Peliculas/Peliculas';
import Series from './screens/Series/Series';

import UnaPelicula from './screens/UnaPelicula/UnaPelicula';
import Favoritos from './screens/Favoritos/Favoritos';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={Home} exact={true} />

          <Route path='/peliculas/:tipo' component={Peliculas} exact={true} />
          <Route path='/tv/:tipo' component={Series} exact={true} />


        <Route path="/detalle/:tipo/:id" component={UnaPelicula} exact={true}/>
        <Route path="/busqueda/:tipo/:busqueda" component={Busqueda} exact={true}/>
        <Route path="/favoritos" component={Favoritos} exact={true}/>
        <Route path='' component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;

