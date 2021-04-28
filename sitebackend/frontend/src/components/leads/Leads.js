import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import { getLeads, deleteLead } from '../../actions/leads';

export class Leads extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired,
    getLeads: PropTypes.func.isRequired,
    deleteLead: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getLeads();
  }

  render() {
    return (
      <Fragment>
        <h2>Leads</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.leads.map(
              lead => (
                <tr key={lead.id}>
                  <td>{lead.id}</td>
                  <td>{lead.name}</td>
                  <td>{lead.email}</td>
                  <td>{lead.message}</td>
                  <td>
                    <button
                      onClick={this.props.deleteLead.bind(this, lead.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </Fragment>
    )
  }
}

/**mapStateToProps
 * Custom function, but is conventionally called mapStateToProps
 * Maps the state of redux to the props of the Leads component
 * in this case, we want state from 'reducers/index.js', case: GET_LEADS
 * 
 * 'state.leadReducer' refers to the leads reducer.
 * the leads reducer's state is called 'leads'.
 * so we're setting the Leads prop equal to the leads reducer's state.
 * 
 * Hence map STATE to PROPS
 */
const mapStateToProps = state => ({
  leads: state.leads.leads
})

/**CONNECT
 * connect(props, props, ..., props)(reactComponent)
 * links the relevant props and functions we need to reactComponent
*/
export default connect(mapStateToProps, { getLeads, deleteLead })(Leads);
