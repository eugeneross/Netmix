import React from 'react';
import Textbox from '../textbox';
import Button from '../button/simpleButton';

import './Tile.scss';

const MovieTile = (props) => {
    const imgUrl = props.item.get('posterImage')
    const divStyle = {
        backgroundImage: 'url(' + imgUrl + ')',
        backgroundSize: 'cover',
    }
    return (
        <div className="col-xs-6 col-md-4 tileContainer">
            <div className="tile_movieTile" style={divStyle} onClick={() => props.openVideoPlayer(props.item.get('trailerLink'))} >
                <div className="tile_overlay" />
                <span>
                    <img src="http://www.thecodewolves.com/images/play-icon@2x.png" />
                </span>
            </div>
            <Textbox
                bigText={props.item.get('name')}
                bigTextStyle="tile_bigText"
                smallTextStyle="tile_smallText"
                smallText={`Released - ${props.item.get('releaseDate')}`}
            />
            <Button label={`IMDB ${props.item.get('rating')}/10`} buttonStyle="tile_buttonStyle" />
        </div>
    )
}


export default MovieTile;
