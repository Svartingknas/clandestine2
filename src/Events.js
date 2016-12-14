import React from 'react'
import NavLink from './NavLink'
import rsz_11computer from './images/rsz_11computer.jpg'

export default React.createClass({
  render() {
    return (
    <div>
      <h2>Events</h2>
        <ul>
          <li><NavLink to="/events/band/Past">Past Events</NavLink></li>
        </ul>
        {this.props.children}
        <div>
          <h4>No upcoming events, check back for more!</h4>
        <img src={rsz_11computer} alt="equipment"/>
        </div>
    </div>
  )}
})
