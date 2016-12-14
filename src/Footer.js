import React from 'react';
import { Link } from 'react-router'
import footer from './index.css'


export default class Footer extends React.Component {
  render () {
    return(
      <div>

        <footer>
          <Link className="glyphicon glyphicon-home" to="/"></Link>
          <Link className="glyphicon glyphicon-envelope" to="/about/band/Contact"></Link>

          <div><div className="fb-like" data-href="https://clandestineslc.com/" data-layout="button" data-action="recommend" data-size="small" data-show-faces="false" data-share="true"></div></div>
        </footer>
          <hr />
      </div>
    );
  }
}
