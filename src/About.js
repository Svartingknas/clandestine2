import React from 'react'
import NavLink from './NavLink'
import group from './images/group.jpg'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>About Us</h1>
        <div>
        <p className="text col-sm-5">A group of young entrepreneurs have started their own business which requires lots of advertisement. The purpose of my project is to provide a way to advertise their business through social media and the internet. Clan:Destine promises to bring entertainment with their innovative music.</p>
        <img src={group} alt="group" width="460" height="345" />
        </div>
          <NavLink to="/about/band/Contact" className="btn btn-info" role="button">Contact us</NavLink>

        {this.props.children}
      </div>
    )
  }
})
