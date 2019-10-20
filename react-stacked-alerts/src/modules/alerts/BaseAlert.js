import React, { Component } from "react";


export default class BaseAlert extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            isDismissing: false
        }

        this.autodismissTimer = null
        this.isDismissingTimer = null

    }

    componentDidMount() {
        if ((this.props.is_persistent === false || this.props.is_persistent === undefined)){
            this.autodismissTimer = setInterval(() => {
                this.setState({
                    isDismissing: true
                })
                this.isDismissingTimer = setInterval(() => { this.props.removeAlertAtIndex(this.props.index) }, 1000);
            }, 3000);
        }
 
    }

    componentWillUnmount() {

        clearInterval(this.autodismissTimer)
        clearInterval(this.isDismissingTimer)
    }


    render() {
        return (<div className={this.state.isDismissing ? 'alert-dialog-dismissing' : 'alert-dialog'}>
            <div className="alert-content">{this.props.children}</div>
        </div>)
    }
}
