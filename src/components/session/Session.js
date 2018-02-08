import React from 'react';


export default function Session(Component) {
  class Child extends React.Component {

    constructor(props) {
      super(props);
      this.state = {/* inital state */};
    }

    

    componentWillReceiveProps(nextProps) {
      
    }


    render() {
            // here you can pass down whatever you want 'inherited' by the child
      return <Component {...this.props} {...this.state} />;
    }

    }

  return connect(sessionSelector, {
    isSessionValid,
    logoutUser,
    logoutCurrentUserForAdmin,
  })(withRouter(Child));
}
