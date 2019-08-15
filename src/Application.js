import React, {Component} from 'react';

class Application extends Component {
    render(){
        let name = 'Stephen';
        
        return (
            <div>
                <h1>Hello, {name}</h1>
            </div>
        );
    }
}

export default Application;