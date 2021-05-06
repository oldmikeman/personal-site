import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

/**Two important things are happening here: 
 * 1. we created a higher-order component, but a Route doesn't render anything to the screen, it tells something else to render
 * 2. we "overrode" the Route component using render props. 
 * 
 * **the prop 'component' is part of Route 
*/

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (auth.isLoading) {
        return <h2>Loading...</h2>
      } else if (!auth.isAuthenticated) {
        return (<Redirect to="/login" />)
      } else {
        return <Component {...props} />
      }
    }}
  />
);

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);