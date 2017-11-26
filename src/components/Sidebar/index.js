import React, { Component } from 'react';
import classNames from 'classnames';
import history from '../../core/history';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uiElementsCollapsed: true,
      chartsElementsCollapsed: true,
      multiLevelDropdownCollapsed: true,
      thirdLevelDropdownCollapsed: true,
      samplePagesCollapsed: true,
      showModal: false,
    };
  }

  render() {
    return (
      <div className="navbar-default sidebar-left" role="navigation">
        <div className="sidebar">
            <div className="nav-profile">
            <img alt="profile" className="rounded-circle margin-b-10 circle-border " src="https://verstkaidesign.ru/wp-content/uploads/2017/04/sozdat-avatar-dlya-youtube-sharg.png" width="80"/>
            <p className="name">Клиент</p>
            </div>
          <ul className="nav in" id="side-menu">
            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/'); }} >
                 &nbsp;Новости
              </a>
            </li>

            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/table'); }} >
                 &nbsp;Операции
              </a>
            </li>

            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/calendar'); }} >
                &nbsp;Календарь
              </a>
            </li>

             <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/chat'); }} >
                 &nbsp;Звонки и чаты
              </a>
            </li>

            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/mail'); }} >
                 &nbsp;Почта
              </a>
            </li>
            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/settings'); }} >
                 &nbsp;Настройки
              </a>
            </li>
            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/login'); }} >
                 &nbsp;Выйти
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}


export default Sidebar;
