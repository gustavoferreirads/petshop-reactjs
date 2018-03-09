import React from 'react';
import Navigation from './common/Navigation';
import TopHeader from './common/TopHeader';

class Main extends React.Component {
    render() {
        return (
            <div className="content-body">
                <Navigation location={this.props.location}/>
                <div className="page-wrapper">
                    <TopHeader />
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Main