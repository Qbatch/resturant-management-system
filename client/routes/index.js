import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Axios from 'axios';
import { connect } from 'react-redux';
import { getUser } from '../actions/users';
import EmptyLayout from '../layouts/EmptyLayout.jsx';
import AppLayout from '../layouts/AppLayout.jsx';
import Login from '../components/authentication/login.jsx';
import Register from '../components/authentication/register.jsx';
import Home from '../components/Home.jsx';

const AUTHORIZATION = localStorage.getItem('loginToken');
console.log("Toooooooken ::", AUTHORIZATION);
Axios.defaults.headers.common['Authorization'] = `JWT ${AUTHORIZATION}`;

class RenderRoutes extends React.Component {
    
    state = {
      authToken: localStorage.getItem('loginToken'),
      loading: true
    };

    componentDidMount = () => {
      const { authToken } = this.state;
      const { getUser, user } = this.props;
      if (authToken && (!user || !user._id)) {
        getUser();
        this.setState({ loading: false });
      } else {
        this.setState({ loading: false });
      }
    }
  
    renderRoutes = () => {
      const { user } = this.props;
  
      return (
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            
            <EmptyLayoutRoute path="/login" component={Login} user={user} />
            <EmptyLayoutRoute path="/register" component={Register} user={user} />

            <AppLayoutRoute path="/home" component={Home} user={user} />
          
          </Switch>
        </Router>
      );
    }
  
    render() {
      return (
          this.renderRoutes()
      )
    }
};



const EmptyLayoutRoute = ({ component: Component, user, ...rest}) => {
  let showLayout = true;
  if (!user || !user._id) {
    showLayout = false;
  }

  return (
    <Route {...rest} render={matchProps => (
      showLayout
      ? (<Redirect to='/home' />)
      : (
        <EmptyLayout>
          <Component {...matchProps} />
        </EmptyLayout>)
    )} />
  )
};

const AppLayoutRoute = ({ component: Component, user, ...rest}) => {
  let showLayout = true;
  if (!user || !user._id) {
    showLayout = false;
  }

  return (
    <Route {...rest} render={matchProps => (
      showLayout
      ? (<Redirect to='/login' />)
      : (
        <AppLayout>
          <Component {...matchProps} />
        </AppLayout>)
    )} />
  )
};


const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = (dispatch) => ({
  getUser: () => {
    return dispatch(getUser());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RenderRoutes);
