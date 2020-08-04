import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Image, Menu, Form, Input, Icon } from "semantic-ui-react";
import logo from "../../assets/images/logo.png";
import "./HeaderNav.scss";

class HeaderNav extends Component {
  render() {
    return (
      <Menu borderless className="top-menu" fixed="top">
        <Menu.Item header className="logo">
          <Link to="/" className="logo-link">
            <Icon className="header-icon" name="list ul" size="large" />
            <Image className="right" src={logo} size="tiny" />
          </Link>
        </Menu.Item>
        <Menu.Menu className="nav-container">
          <Menu.Item className="search-input">
            <Form>
              <Form.Field>
                <Input placeholder="Search" size="small" action="Go" />
              </Form.Field>
            </Form>
          </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item>
              <Icon className="header-icon" name="video camera" size="large" />
            </Menu.Item>
            <Menu.Item>
              <Icon className="header-icon" name="grid layout" size="large" />
            </Menu.Item>
            <Menu.Item>
              <Icon className="header-icon" name="alarm" size="large" />
            </Menu.Item>
            <Menu.Item name="avatar">
              <Image src="http://via.placeholder.com/80x80" avatar />
            </Menu.Item>
          </Menu.Menu>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default HeaderNav;
