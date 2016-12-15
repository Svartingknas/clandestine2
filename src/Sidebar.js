import React from 'react'
import { IndexLink } from 'react-router'
import NavLink from './NavLink'

export default class Sidebar extends React.Component {
  render (){
    return (
        <div className="row content">
          <div className="col-sm-2 sidenav">
              <h2 className='text'>Info</h2>
                <ul className="nav nav-pills nav-stacked">
                  <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                    <li><NavLink to="/About">About Us</NavLink></li>
                    <li><NavLink to="/Events">Events</NavLink></li>
                  <li><a href="https://www.residentadvisor.net/profile/clandestineSLC" target="_blank">Tickets</a></li>
                  <li><a href="https://www.facebook.com/clandestineSLC/" target="_blank">Facebook</a></li>
                  <li><a href="https://soundcloud.com/clan_destine" target="_blank">Soundcloud</a></li>
              </ul>
            </div>
          </div>
    );
  }
}
