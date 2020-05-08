import * as React from 'react';

export class Appoiments extends React.Component {
    render() {       
        return (
          <div className="col-2">
            <h2>List of appointments</h2>
            <div id="appointmentList"></div>
          </div>
        );
    }
}