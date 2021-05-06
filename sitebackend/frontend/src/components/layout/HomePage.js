import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import NavTab from '../common/NavTab';

/** TODO
 * [] Make NavTabContent component as Render Prop
 * [] Implement NavTabContent in Homepage
 * [] Convert state to State Hook
*/

class Homepage extends Component {

  state = {
    tabs: [
      { tabID: "pills-about-me-tab", tabHref: "#pills-about-me", tabTitle: "About Me", isActive: true, tabAriaControl: "pills-about-me" },
      { tabID: "pills-my-work-tab", tabHref: "#pills-my-work", tabTitle: "My Work", isActive: false, tabAriaControl: "pills-my-work" },
      { tabID: "pills-contact-tab", tabHref: "#pills-contact", tabTitle: "Contact Me", isActive: false, tabAriaControl: "pills-contact" }
    ]
  };

  handleClick(i) {
    // e.preventDefault();
    const tabs = this.state.tabs.slice();
    for (let j in tabs) {
      (j === i) ? (tabs[j].isActive = true) : (tabs[j].isActive = false);
    }
    this.setState({ tabs: tabs });
  }

  render() {
    const { tab } = this.state;
    return (
      <Fragment>
        <div className="container">
          <h1>Welcome to my personal page!</h1>
          <h3>This webapp was designed using React, Redux and Django!</h3>
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            {this.state.tabs.map((tab, i) =>
              <NavTab
                tabID={tab.tabID}
                tabHref={tab.tabHref}
                tabTitle={tab.tabTitle}
                isActive={tab.isActive}
                tabAriaControl={tab.tabAriaControl}
                key={tab.tabTitle}
                onClick={() => this.handleClick(i)}
              />
            )}
          </ul>
          <div className="tab-content" id="pills-tabContent">
            {/* CONVERT ME TO RENDER PROPS!!!! */}
            <div className="tab-pane fade show active" id="pills-about-me" role="tabpanel" aria-labelledby="pills-about-me-tab">About me</div>
            <div className="tab-pane fade" id="pills-my-work" role="tabpanel" aria-labelledby="pills-my-work-tab">My work</div>
            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">Contact me</div>
          </div>
        </div>
      </Fragment>
    );
  }
}

/*

*/

export default Homepage;