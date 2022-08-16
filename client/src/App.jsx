import { Route } from 'react-router-dom'
//----------------------------------------------------------------------------------------
import PrivateRoute from './helper/PrivateRoute';
import NavBar from './components/NavBar';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
//----------------------------------------------------------------------------------------

function App() {

  return (
    <div>
      <NavBar />

      <Route path='/' component={Login} exact />
      <PrivateRoute path='/dashboard' component={Dashboard} />
    </div>
  );
}

export default App; 
