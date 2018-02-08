import React from 'react';
import Navigation from '../../../../components/navigation';
import Textbox from '../../../../components/textbox';
import Button from '../../../../components/button/simpleButton';

import './LatestMovie.scss';

const LatestMovie = (props) => {
    const imgUrl = "https://s3.ap-south-1.amazonaws.com/www.thecodewolves.com/images/Star-Wars-The-Last-Jedi-Movie-Review.jpg";
    const divStyle = {
        backgroundImage: 'url(' + imgUrl + ')',
        backgroundSize: 'cover',
    }
    return (
        <div style={divStyle} className="col-xs-12 latestMovies_container">
            <div className="overlay_shadow" />
            <div className="absolute_div">
            <Navigation />
            <div className="latestMovies_overlay">
                <span>
                    <div className="latestMovies_textBoContainer">
                        <p className="latestMovies_newleyReleased" >NEWLY RELEASED</p>
                        <div className="latestMovies_textAndPlayButton">
                            <Textbox
                                containerStyle="latestMovies_textBoContainerStyle"
                                bigText="Star Wars: The Last Jedi"
                                smallText="Sci-Fi / Action"
                                bigTextStyle="latestMovies_bigText"
                                smallTextStyle="latestMovies_smallText"
                            />
                            <img onClick={() => props.openVideoPlayer("https://www.youtube.com/embed/Q0CbN8sfihY?autoplay=1")} src="http://www.thecodewolves.com/images/play-icon@2x.png" />
                        </div>
                        <Button label="IMBD 9.2/10" buttonStyle="latestMovies_imdbButton" />
                    </div>
                </span>
            </div>
            </div>
        </div>
    );
}

export default LatestMovie;