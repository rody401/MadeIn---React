import './App.css';
import {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import AddScreen from './screens/AddScreen';

// Components
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';

function App() {

  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
        <Navbar click={() => setSideToggle(true)}/>
        <SideDrawer show={sideToggle}/>
        <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
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
