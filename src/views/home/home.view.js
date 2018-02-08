import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import renderIf from 'render-if';

import Loader from '../../components/loader';
import Navigation from '../../components/navigation'
import LatestMovie from './components/LatestMovies';
import Movies from './components/Movies';
import VideoPlayer from '../../components/fullScreenVideo';
import { selector } from './home.redux';
import { getMovies, setStarRating } from './home.actions';

import './home.style.scss';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultFilter: 'POPULAR',
            showVideoPlayer: false,
            videoUrl: '',
        }
    }
    componentWillMount() {
        this.props.getMovies(this.state.defaultFilter);
    }

    openVideoPlayer = (url) => this.setState({ showVideoPlayer: true, videoUrl: url });
    closeVideoPlayer = (url) => this.setState({ showVideoPlayer: false, videoUrl: '' });


    applyFilters = (filter) => this.setState({ defaultFilter: filter }, () => { this.props.getMovies(filter); })

    render() {
        const { movieList, bannerMovie, isLoading } = this.props;
        const { defaultFilter, showVideoPlayer, videoUrl } = this.state;
        const renderLoader = renderIf(isLoading);
        const renderVideoPlayer = renderIf(showVideoPlayer);
        const renderOtherItems = renderIf(!showVideoPlayer);
        return (
            <div className="col-xs-12 home_page">

                {renderVideoPlayer(
                    <VideoPlayer
                        videoUrl={videoUrl}
                        closeVideoPlayer={this.closeVideoPlayer}
                    />)}
                {renderLoader(<Loader />)}
                {renderOtherItems(
                    <div>
                        <LatestMovie
                            movie={bannerMovie}
                            openVideoPlayer={this.openVideoPlayer}
                        />
                        <Movies
                            {...this.props}
                            filterLabel={defaultFilter}
                            applyFilters={this.applyFilters}
                            openVideoPlayer={this.openVideoPlayer}
                        />
                    </div>)}
            </div>
        )
    }
}

const mapDispatchToProps = {
    getMovies,
    setStarRating,
};

export default connect(selector, mapDispatchToProps)(Home);
