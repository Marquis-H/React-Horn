import React, {Component} from 'react'
import {postRequest} from './utils'
import ReactInterval from 'react-interval'

export default class ReactHorn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            enabled: true
        }
    }

    componentDidUpdate(prevProps, prevState) {
        //接收发送
        const {url, text, callback, send} = this.props;
        const {enabled} = this.state;
        if (send && enabled) {
            postRequest(url, {"text": text}, (response) => {
                callback({code: 0, message: 'success'})
            });
            //设定定时器 6s
            this.setState({
                enabled: !enabled
            })
        }
        if (send && !prevState.enabled) {
            callback({code: 429, message: 'TOO MANY REQUESTS'})
        }
    }

    render() {
        const {enabled} = this.state;
        return (
            <div>
                <ReactInterval timeout={20000} enabled={!enabled}
                               callback={() => this.setState({enabled: !enabled})}/>
            </div>
        )
    }
}