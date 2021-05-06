import React, { Component } from 'react';

export class NavTab extends Component {
  render() {
    return (
      <li className="nav-item">
        <a
          className={"nav-link " + (this.props.isActive ? "active" : "")}
          href={this.props.tabHref}
          id={this.props.tabID}
          data-toggle="pill"
          role="tab"
          aria-controls={this.props.tabAriaControl}
          aria-selected={(this.props.isActive ? "true" : "")}
        >
          {this.props.tabTitle}
        </a>
      </li>
    );
  };
}

export default NavTab;
