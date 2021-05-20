import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './styles/main.css'
import HomeScreen from './pages/HomeScreen'
import MovieSearch from './pages/MovieSearch'
import MovieScreen from './pages/MovieScreen'

import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/movies' component={MovieSearch} exact />
          <Route path='/movies/search/:keyword' component={MovieSearch} exact />
          <Route path='/movies/:id' component={MovieScreen} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
