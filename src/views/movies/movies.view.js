import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import renderIf from 'render-if';

import GridView from './components/GridView';
import AddMovie from './components/AddMovie';
import Loader from '../../components/loader'
import Header from '../../components/header';

import { selector } from './movies.redux';
import { getMovies, setStarRating } from './movies.actions';

import  "./movies.styles.scss";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    componentWillMount(){
        this.props.getMovies();
    }

    logout = () => {
        debugger;
        window.localStorage.clear();
        this.props.history.push('/login');
    };

    captureStarRating = (value) => {
        debugger;
        const payload = {
            rating: value,
        }
        this.props.setStarRating(payload);
    }

    render() {
        const { isLoading } = this.props;
        const renderLoader = renderIf(isLoading);
        console.log(this.props);
        return (
            <div className="col-xs-12 movies_container">
                {renderLoader(<Loader />)}
                <Header onClick={this.logout} />
                <AddMovie />
                <GridView captureStarRating={() =>this.captureStarRating()} />
            </div>
        )
    }
}

const mapDispatchToProps = {
    getMovies,
    setStarRating,
}

export default connect(selector, mapDispatchToProps)(User);
