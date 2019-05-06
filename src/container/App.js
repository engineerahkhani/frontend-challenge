import React from 'react';
import { connect } from 'react-redux';
import { posterListInit } from '../action';
import car from '../images/car.jpg';

class HomePage extends React.Component {
    state = { activeTab: 1 };
    componentDidMount() {
        this.props.posterListInit();
    }
    callback = activeTab => this.setState({ activeTab });

    render() {
        return <div className="poster" />;
    }
}

const mapStateToProps = state => ({});
export default connect(
    mapStateToProps,
    { posterListInit }
)(HomePage);
