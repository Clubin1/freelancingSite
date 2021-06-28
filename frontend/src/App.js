import { Switch, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import NotFound from './pages/NotFound.js'

// Componenets
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' exact component={Home} />
        <Route component={NotFound}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
