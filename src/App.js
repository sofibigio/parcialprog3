import './App.css';
import Busqueda from './Screens/Busqueda/Busqueda';

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

        <Route path="/detalle/:tipo/:id" component={UnaPelicula} exact={true}/>
        <Route path="/busqueda/:tipo/:busqueda" component={Busqueda} exact={true}/>
        <Route path='' component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;

