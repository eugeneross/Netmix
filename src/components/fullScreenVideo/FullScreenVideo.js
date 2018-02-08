import React, { Component } from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';

import './FullScreenVideo.scss';

class FullScreenVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="videoContainer">
        <iframe
        src={this.props.videoUrl}
        width="100%" height="100%" frameBorder="0" allowFullScreen
      />
        <button onClick={() => this.props.closeVideoPlayer()} className="closeButton" >X</button>
      </div>
    );
  }
}

export default FullScreenVideo;

