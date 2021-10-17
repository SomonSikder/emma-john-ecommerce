import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute></PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
