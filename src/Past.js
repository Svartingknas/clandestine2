import React from 'react'
import past1 from './images/past1.jpg'
import rsz_past3 from './images/rsz_past3.jpg'


export default React.createClass({
render() {
  return (
    <div className="container-fluid col-sm-7">
      <br />
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
        </ol>

        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <img src={past1} alt="past1" width="460" height="345" />
          </div>

          <div className="item">
            <img src={rsz_past3} alt="rsz_past3" width="460" height="345" />
          </div>

        </div>

        <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  )}
})
