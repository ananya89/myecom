import * as React from 'react';

export class Login extends React.Component <{onLogin: () => void },{}> {

    constructor(props) {
        super(props);
        // this.props = props;
        this.state = {isLoggedIn: false};
        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler() {
        console.log('form submitted');
        fetch('/api/login/1')
        .then( response => {
            if (!response.ok) { throw response }
            return response.json()  //we only get here if there is no error
        })
        .then( json => {
            console.log('Server returned', json);
        })
        .catch( err => {
            console.error(err);
        })
        this.props.onLogin();
    }

    render() {
        return (<div> Login

        First Name <input type='text' />
        <br/>
        Last Name <input type='text' />

        User Name <input />
        Password <input type="password" />

        <button onClick={this.submitHandler}>Create User</button>
        </div>);
    }
}