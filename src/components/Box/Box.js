import React from 'react';
import { Link } from 'react-router-dom';

import { Tabs, Tab } from 'material-ui/Tabs';
import Textbox from '../textbox';
import Button from '../button/simpleButton';
import './style.scss';

const styles = {
    inkBarStyle: {
        background: '#212121'
    },
    tabsBackground: {
        background: '#ffffff',
        color: '#212121',
    },
    buttonStyle: {
        color: '#212121',
        fontFamily: 'Open Sans',
    }
}

const Box = (props) => (
    <div className="col-xs-12 box_boxContainer">
        <div className="col-xs-6 box_sideImage">
            <div className="box_backNavigation">
                <span>
                    <Link to="/">
                        <Button label="BACK" buttonStyle="box_backButton" />
                    </Link>
                </span>
            </div>
            <div className="box_bigTextContainer">
                <span>
                    <div className="box_divContainer">
                        NETMIX
                   <p>Stream till your heart’s content.</p>
                    </div>
                </span>
            </div>
            <div className="box_bottomText">
                <Textbox
                    bigText="Star Wars: The Last Jedi"
                    smallText="Sci-Fi / Action"
                />
            </div>
        </div>
        <div className="col-xs-6 box_inputContainer">
            <span className="spanVertical">
                <Tabs
                    tabItemContainerStyle={styles.tabsBackground}
                    onChange={props.onTabChange}
                    value={props.tabValue}
                    inkBarStyle={styles.inkBarStyle}
                >
                    <Tab buttonStyle={styles.buttonStyle} label="SIGN UP" value={0} />
                    <Tab buttonStyle={styles.buttonStyle} label="LOG IN" value={1} />
                </Tabs>
                {props.children}
            </span>
        </div>
    </div>
);

export default Box;
