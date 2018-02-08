import React, { Component } from 'react';
import { connect } from 'react-redux'; // to connect to redux store from containers redux.js or any other redux store
import renderIf from 'render-if';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui/List';
import { selector } from './userlist.redux';
import Loader from '../../components/loader/loader';
import { getUserList, grantAccess, declineAccess } from './userlist.actions';

import './userlist.style.scss';


const styles = {
    listItem: {
        border: '0.5px solid #666666 !important',
        borderRadius: '2px',
    },
    logoutButton: {
        position: 'absolute',
        top: '20px',
        right: '20px',
    }
};

const Actions = (props) => (
    <div className="actionsContainer">
        <RaisedButton
            label="VERIFY"
            style={{ margin: '10px' }}
            onClick={props.grantAccess} />
        <RaisedButton
            label="DECLINE"
            onClick={props.declineAccess} />
    </div>
);


const Requests = (props) => {
    if (props.user.get('status') === 'active') {
        return null;
    }
    const firstName = props.user.get('firstName');
    const email = props.user.get('email');
    return (
        <div className="col-xs-12">
            <ListItem
                primaryText={firstName}
                secondaryText={email}
                leftAvatar={<Avatar src="http://www.avatars24.de/img/avatars/avatar-5.jpg" />}
                style={styles.listItem}
                rightIconButton={<Actions {...props} user={props.user} />}
            />
            <Divider />
        </div>
    )
};


class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }

    componentWillMount() {
        const token = window.localStorage.getItem('token');
        if (token !== null) {
            if (token.length > 0) {
                this.props.getUserList();
            } else {
                this.props.history.push('/')
            }
        } else {
            this.props.history.push('/admin')
        }
    };

    componentWillReceiveProps(np) {
        if (np.users.size > 0) {
            const list = np.users.toIndexedSeq().toArray();
            this.setState({ users: list });
        }
    }

    grantAccess = (userId, listId) => {
        const usersList = this.state.users;
        if (listId > -1) {
            usersList.splice(listId, 1);
        }
        this.props.grantAccess(userId, usersList);
        debugger;
    };

    declineAccess = (userId, listId) => {
        const usersList = this.state.users;
        if (listId > -1) {
            usersList.splice(listId, 1);
        }
        this.props.declineAccess(userId, usersList);
    };

    logout = () => {
        window.localStorage.clear();
        this.props.history.push('/admin');
    };

    render() {
        const { isLoading } = this.props;
        const { users } = this.state;
        const renderLoader = renderIf(isLoading);
        const renderUserList = renderIf(!isLoading && users.length > 0);
        return (
            <div>
                {renderLoader(<Loader />)}
                <div className="banner">
                    <RaisedButton label="LOGOUT" style={styles.logoutButton} onClick={this.logout} />
                </div>
                {renderUserList(
                    <div className="userlist_container">
                        <h5>USERS</h5>
                        {users.map((item, i) => (
                            <Requests user={item}
                                grantAccess={() => this.grantAccess(item.get('id'), i)}
                                declineAccess={() => this.declineAccess(item.get('id'), i)}
                            />
                        ))}
                    </div>
                )}
            </div>
        )
    }
}

const mapDispatchToProps = {
    getUserList,
    grantAccess,
    declineAccess,
};

export default connect(selector, mapDispatchToProps)(UserList);
