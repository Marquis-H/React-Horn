import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactHorn from '../src/index';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSend: false
        };
        this.handleCallback = this.handleCallback.bind(this);
    }

    handleButton() {
        this.setState({
            isSend: true
        })
    }

    handleCallback(status) {
        //status.code\status.message
        //success: status.code == 0
        //error: status.code == 1
        alert(status.message);
        this.setState({
            isSend: false
        })
    }

    render() {
        const {isSend} = this.state;
        return (
            <div className="App">
                <div className="App-header">

                    <h2>ReactHorn Example</h2>
                </div>
                <ReactHorn
                    url="https://integram.org/xxxxxxx" //Horn Url
                    text="测试Horn"
                    callback={this.handleCallback}
                    send={isSend}/>
                <p className="App-Example">
                </p>
                <button onClick={()=>this.handleButton()}>发送</button>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);