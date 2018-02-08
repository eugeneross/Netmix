import React, { Component } from 'react';
import Rating from 'react-rating';
import './styles.scss';


class Tile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }


    render() {
        const { captureStarRating } = this.props;
        return (
            <div className="tile_container">
                <div className="tile">
                    <img className="movieImage" src="https://lh3.googleusercontent.com/kCYMlc_eay50JHD_xBLUFGc-ATKfwHPvk7p8kXYQ4OeqX-nLF1aa-o64lY6ZXcY9CzE=w300" alt="movie-icon" />
                    <div className="movieName">
                        <span>
                            Dragon Ball super
                         </span>
                        <span className="lightText">Genere: Action, Adventure</span>
                        <span className="veryLightText">Release data: Every sunday</span>
                        <span className="veryLightText">Cashts: Goku, gohan, vegita</span>
                    </div>
                    <Rating onChange={value => captureStarRating(value) } />
                </div>
            </div>
        );
    }
}

export default Tile;
