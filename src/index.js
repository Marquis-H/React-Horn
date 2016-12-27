import React, {Component} from 'react'
import {postRequest} from './utils'

export default class ReactHorn extends Component {
    constructor(props) {
        super(props)
    }

    componentDidUpdate(prevProps, prevState) {
        //接收发送
        const {url, text, callback, send} = this.props;
        if (send) {
            postRequest(url, {"text": text}, (response) => {
                console.log(response);
                callback({code: 0, message: response.ok})
            })
        }
    }

    render() {
        return (
            <div></div>
        )
    }
}