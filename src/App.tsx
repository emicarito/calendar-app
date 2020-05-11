import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { hot } from "react-hot-loader/root";
interface Props {
    name: string
}

class App extends React.Component<Props> {
    render() {
        const { name } = this.props;
        return <div className="container">
            <div className="row">
                <div className="col">
                    Hello {name}    <button className="btn btn-primary">Click Me!</button>
                </div>

            </div>

        </div>;
    }
}

export default hot(App);