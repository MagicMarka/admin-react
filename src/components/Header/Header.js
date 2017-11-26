
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  ProgressBar,
} from 'react-bootstrap';
import Navbar, {Brand} from 'react-bootstrap/lib/Navbar';
import history from '../../core/history';
import $ from "jquery";
import Sidebar from '../Sidebar';

const logo = require('./logo.png');

function Header() {
  return (
    <div id="wrapper" className="content">
      <Navbar fluid={true}  style={ {margin: 0} }>
              <div className="page-heading">
                <h2>Операции</h2>
                <a href="#" className="btn btn-primary btn-rounded">Валюта: UAH <i className="fa fa-ellipsis-v" aria-hidden="true"></i></a>
                <button className="btn btn-primary btn-rounded">Новая операция + </button>
                <form>
                    <input className="form-control search-form" placeholder="Поиск" type="text"/><button type="submit" className="search-btn"><i className="fa fa-search" aria-hidden="true"></i></button>
                </form>
                <div className="input-group custom-search-form search-form">
                  <span className="input-group-btn" >
                      <input type="text" className="form-control" placeholder="Поиск"  />
                        <button className="btn btn-default" type="button"><i className="fa fa-search" /></button>
                  </span>
                </div>
                </div>
                <Sidebar />
      </Navbar>
    </div>
  );
}


export default Header;
