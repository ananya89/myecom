import React from 'react';
import {Login} from './components/Login';

class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
        this.loginHandler = this.loginHandler.bind(this);
    }
    loginHandler() {
        this.setState({isLoggedIn:true});
    }
    render() {
       return (
       <div> My App
           {!this.state.isLoggedIn? <Login onLogin={this.loginHandler}/>
           :
           <span>Show home page</span>
           }

       </div>)
    }
}

export default App;