import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/site.module.css';

class Index extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col margintopbottom">
                            <h2>Home</h2>
                            <h6 className="margintopbottom20">
                                Silicon Valley Code Camp is a community event where
                                developers learn from fellow developers.
                            </h6>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

Index.propTypes = {};
Index.defaultProps = {};

export default Index;
