import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class App extends React.Component{
    render(){
        return(
            <h1 className="h">Hello World</h1>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))