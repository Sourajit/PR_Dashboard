import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon, Dropdown } from 'semantic-ui-react';
import TopSearch from './TopSearch';
import MyMenu from './MyMenu';
import Notification from '../Notification/Notification';
import './TopMenu.css';

class TopMenu extends Component {
  state = { activeItem: 'inbox' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    let iconStyle = {
      margin: '0 10px 0 0'
    };

    return (
      <Menu pointing secondary className="top-menu">
        <Menu.Menu postion="left" className="menu-logo">
          <Menu.Item>
            <Link to="reports">PR Dashboard</Link>
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu className="center menu">
          <Menu.Item
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          >
            <Icon name="home" size="large" style={iconStyle} />
            <span>Home</span>
          </Menu.Item>

          {/* <Menu.Item
            name="browser"
            link={false}
            active={activeItem === 'browser'}
            onClick={this.handleItemClick}
          > */}
            <div className="item">
            <Icon name="line chart" size="large" style={iconStyle} />
            <span>Reports</span>
            <Dropdown>
              <Dropdown.Menu>
                <Dropdown.Header>Pull Requests</Dropdown.Header>
                <Dropdown.Divider />
                <Dropdown.Item>
                  <Link to="/configureReports:1" className="top-submenu-link">
                  <Icon name="pie chart" size="large" style={iconStyle} />
                    Pie Chart Report
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/configureReports:2" className="top-submenu-link">
                  <Icon name="chart bar outline" size="large" style={iconStyle} />
                    Resolution Time Report
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </div>
          {/* </Menu.Item> */}

          {/* <Menu.Item
            name="portfolio"
            active={activeItem === 'portfolio'}
            onClick={this.handleItemClick}
          >
            <Icon name="cubes" size="large" style={iconStyle} />
            <span>Portfolio</span>
            <Dropdown>
              <Dropdown.Menu>
                <Dropdown.Header>Categories</Dropdown.Header>
                <Dropdown.Item>Home Goods</Dropdown.Item>
                <Dropdown.Item>Bedroom</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Order</Dropdown.Header>
                <Dropdown.Item>Status</Dropdown.Item>
                <Dropdown.Item>Cancellations</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item> */}
        </Menu.Menu>

        <Menu.Menu position="right">
          <Menu.Item>
            <TopSearch />
          </Menu.Item>
          <Menu.Item name="notification" onClick={this.handleItemClick}>
            <Notification icon="alarm outline" numOfNew={3} />
          </Menu.Item>
          <Menu.Item name="message" onClick={this.handleItemClick}>
            <Icon name="comments outline" size="large" style={iconStyle} />
          </Menu.Item>
          <Menu.Item name="setting" onClick={this.handleItemClick}>
            <MyMenu />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default TopMenu;
