import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import './Header.css';

class Header extends Component {
  
  render() {
    return (
      <div className="header-container">
        <h2 className="top-header">{this.props.title}</h2>
        <div className="sub-header">
          <h5>
            <Icon name="chart bar outline" />
            {this.props.desc} 
            {/* &emsp; / &emsp;
            <Icon name="calendar outline" />
            {menu} */}
          </h5>
        </div>
      </div>
    );
  }
}

export default Header;
