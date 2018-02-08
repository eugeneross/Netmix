import React, { Component } from 'react';

import Tile from '../../../../components/tiles';
import './styles.scss';


class GridView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }


    render() {
        return (
            <div className="gridview_container">
                <Tile  {...this.props} />
                <Tile  {...this.props} />
                <Tile  {...this.props} />
                <Tile  {...this.props} />
                <Tile  {...this.props} />
                <Tile  {...this.props} />
                <Tile  {...this.props} />
                <Tile  {...this.props} />
            </div>
        );
    }
}

export default GridView;
