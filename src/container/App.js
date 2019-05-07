import React from 'react';
import { connect } from 'react-redux';
import {
    posterListInit,
    posterListFilter,
    posterListRemoveItem
} from '../action';
import { Navbar, Tab, PosterList, Loader } from '../component';

class HomePage extends React.Component {
    state = { activeTab: 'all' };
    componentDidMount() {
        this.props.posterListInit();
    }

    onClickTab = filter => {
        this.setState({ activeTab: filter }, () =>
            this.props.posterListFilter(filter)
        );
    };
    onClickDelete = id =>
        this.props.posterListRemoveItem(id, this.state.activeTab);

    render() {
        const { posterList, loading } = this.props;
        const { activeTab } = this.state;
        return (
            <React.Fragment>
                <Navbar />
                <Tab onClick={this.onClickTab} activeTab={activeTab} />
                {loading ? (
                    <Loader />
                ) : (
                    <PosterList
                        posters={posterList[activeTab]}
                        onClickDelete={this.onClickDelete}
                    />
                )}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    posterList: state.posterList,
    loading: state.loading.visible
});
export default connect(
    mapStateToProps,
    { posterListInit, posterListFilter, posterListRemoveItem }
)(HomePage);
