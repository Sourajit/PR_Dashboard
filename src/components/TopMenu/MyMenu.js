import React, { Component } from 'react';
import { Dropdown, Icon } from 'semantic-ui-react';
import './MyMenu.css'
const trigger = (
  <span className="user-settings">
    <Icon name="user circle" /> User
  </span>
);

const options = [
  {
    key: 'user',
    text: (
      <span>
        Signed in as <strong>User</strong>
      </span>
    ),
    disabled: true
  },
  { key: 'profile', text: 'Your Profile' },
  { key: 'stars', text: 'Your Stars' },
  { key: 'help', text: 'Help' },
  { key: 'settings', text: 'Settings' },
  { key: 'sign-out', text: 'Sign Out' }
];

class MyPage extends Component {
  render() {
    return <Dropdown trigger={trigger} options={options} />;
  }
}

export default MyPage;
