import React from 'react'

export default class Contact extends React.Component{
  render(){
    return(
      <div className="container-fluid">
        <h3>We can be reached via phone at 385-267-7072 or via email by clicking</h3>
        {/*Trigger the modal with a button*/}
        <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Here</button>

        {/*Modal*/}
        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">

          {/*Modal content*/}
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">E-mail us here</h4>
        </div>
        <div className="modal-body">
          <form className="form-horizontal" method="post" role="form">
    	<div className="form-group">
    		<label htmlFor="email" className="col-sm-2 control-label">E-mail</label>
    		<div className="col-sm-4">
    			<input type="email" className="form-control" id="email" name="email" placeholder="E-mail Address" required autoFocus />
    		</div>
    	</div>

    	<div className="form-group">
    		<label htmlFor="name" className="col-sm-2 control-label">Name</label>
    		<div className="col-sm-4">
    			<input type="text" className="form-control" id="name" name="name" placeholder="Name" required />
    		</div>
    	</div>

    	<div className="form-group">
    		<label htmlFor="name" className="col-sm-2 control-label">Message</label>
    		<div className="col-sm-6">
    			<textarea id="message" name="message" className="form-control" placeholder="Your Message" rows="5" required />
    		</div>
    	</div>

    	<div className="form-group">
    		<div className="col-sm-offset-2 col-sm-2">
    			<button type="submit" className="btn btn-primary">Send Message</button>
    		</div>
    	</div>
    </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>

    </div>
  </div>

</div>
    )
  }
}
