import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import AddScreen from './screens/AddScreen';

// Components
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
        <Navbar/>
        {/* SideDrawer */}
        {/* Backdrop */}
        <main>
          <Switch>
            <Route exact path='/' component={HomeScreen} />
            <Route exact path='/product/:id' component={ProductScreen} />
            <Route exact path='/addproduct' component={AddScreen} />
          </Switch>
        </main>
        {/* HomeScreen */}
        {/* AddProduct */}
    </Router>
  );
}

export default App;
