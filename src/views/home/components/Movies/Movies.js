import React, { Component } from 'react';
import renderIf from 'render-if';

import Navbar from './components/MovieNavBar';
import MovieTile from '../../../../components/movieTile';

import './Movies.scss';



class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSortOptions: false,
        }
    }
    handleSort = () => {
        console.log('here i am');
        this.setState({ showSortOptions: !this.state.showSortOptions });
    }

    

    render() {
        const { showSortOptions } = this.state;
        const { movieList, applyFilters, filterLabel, openVideoPlayer } = this.props;
        debugger;
        console.log('movie list', this.props.movieList);
        // const renderMovies = renderIf(movieList !== undefined);
        return (
            <div className="col-xs-12 movies_container">
                <div className="col-xs-12 movies_overlay">
                    <Navbar filterLabel={filterLabel} handleSort={this.handleSort} showSortOptions={showSortOptions} applyFilters={applyFilters} />
                    <div className="col-xs-12 movies_tilesContainer">
                        {movieList.map((item => (
                            <MovieTile item={item} openVideoPlayer={openVideoPlayer} />
                        )))}
                    </div>
                    {/* {renderMovies(
                        <div className="col-xs-12 movies_tilesContainer">
                            {movieList.map((item => (
                                <MovieTile item={item} />
                            )))}
                        </div>
                    )} */}
                </div>
            </div>
        )
    }
}


export default Movies;