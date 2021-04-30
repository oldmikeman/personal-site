import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withAlert } from 'react-alert';
import PropTypes from 'prop-types';


/**DATA FLOW
 * Using connect() we link together redux state, react-alerts and Alerts
 *
 * Using mapStateToProps(), we add 'error' to Alerts' props from redux state
 * -> Now, error contains 'err.response.data' and 'err.response.status'
 * 
 * 'error.msg' now has fields, 'name' and 'email' from the original 'err'
 * thrown in the console from our db
*/
export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;

    // Check for form errors, throw error alert if found
    if (error !== prevProps.error) {
      if (error.msg.name) {
        alert.error(`Name: ${error.msg.name.join()}`);
      }
      if (error.msg.email) {
        alert.error(`Email: ${error.msg.email.join()}`);
      }
      if (error.msg.message) {
        alert.error(`Message: ${error.msg.message.join()}`);
      }
    }

    // Check for new messages, throw success alert if found
    if (message !== prevProps.message) {
      if (message.deleteLead) {
        alert.success(message.deleteLead);
      }
      if (message.addLead) {
        alert.success(message.addLead);
      }
    }
  }

  render() {
    return (
      <Fragment />
    )
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));