import * as React from 'react';

export class Calendar extends React.Component {
    render() {       
        return (
          <div className="col-10">
            <div className="row">
                <h1 id="title_calendar" className="text-center col">Month Year</h1>
            </div>
            <div className="row ">
                <div className="col border">Sunday</div>
                <div className="col border">Monday</div>
                <div className="col border">Tuesday</div>
                <div className="col border">Wednesday</div>
                <div className="col border">Thursday</div>
                <div className="col border">Friday</div>
                <div className="col border">Saturday</div>
            </div>
            <div id="week">
            </div>
          </div>
        );
    }
}
