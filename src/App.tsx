import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { hot } from "react-hot-loader/root";
import { Calendar } from './Calendar';
import { Appoiments } from './Appoiments';

class App extends React.Component {
    render() {
        return (
          <div className="row">
            <Calendar/>
            <Appoiments/>
          </div>
        );
    }
}

export default hot(App);