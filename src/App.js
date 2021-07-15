
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Pokemons from './Pages/ListPokemons';
import Types from './Pages/Types';
import ListPokemons from './Pages/ListPokemons';
import GetPokemonsAPI from './components/PokemonsList';
import SpacingGrid from './Pages/SpacingGrid';

 function App() {



    return (
      <Router>
      <Navbar />
      <Switch>
        <Route path='/types' exact component={Types} />
        <Route path='/pokemons' component={GetPokemonsAPI} />
        <Route path='/spacing' component={SpacingGrid} />
      </Switch>
    </Router>
    );
  }
 

export default App;
