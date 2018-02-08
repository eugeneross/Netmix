import React from 'react';
import renderIf from 'render-if';

import Button from '../../../../../../components/button/simpleButton'

import './NavBar.scss';

const NavBar = (props) => {
    const renderSortOptions = renderIf(props.showSortOptions);
    return (
        <div className="col-xs-12 navbar_container">
            <div className="col-xs-2 remove_padding">
                <p className="navbar_sortOption">{props.filterLabel}</p>
            </div>
            <div className="col-xs-10 navbar_sortContainer">
                {renderSortOptions(
                    <span>
                        <Button label="POPULAR" onClick={() => props.applyFilters('POPULAR')} buttonStyle="sort_options" />
                        <Button label="NAME" onClick={() => props.applyFilters('NAME')} buttonStyle="sort_options" />
                        <Button label="DATE" onClick={() => props.applyFilters('DATE')} buttonStyle="sort_options" />
                        <Button label="RATING" onClick={() => props.applyFilters('RATING')} buttonStyle="sort_options" />
                    </span>
                )}
                <img onClick={() => props.handleSort()} src="http://www.thecodewolves.com/images/sortIcon.png" />
                <span className="navbar_sortOption">SORT</span>
            </div>
        </div>
    )
}


export default NavBar;