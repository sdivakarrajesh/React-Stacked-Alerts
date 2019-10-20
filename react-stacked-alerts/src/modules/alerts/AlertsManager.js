import React, { Component } from "react";
import BaseAlert from "./BaseAlert";

export default class AlertsManager extends Component {

    constructor(props) {
        super(props);
        this.state = {
            alerts: [],
            count: 0,
        }
        AlertsManager.__singletonRef = this;
        this.removeAlertAtIndex = this.removeAlertAtIndex.bind(this);
        this.modifyAlerts = this.modifyAlerts.bind(this);
    }

    static addAlert(new_alert) {
        AlertsManager.__singletonRef.__addAlert(new_alert)
    }
    __addAlert(new_alert){
        var alerts = [...this.state.alerts]
        alerts.push(new_alert)
        this.setState({
            alerts: alerts,
            count: this.state.count+1
        })
    }
    static getCount(){
        AlertsManager.__singletonRef.__getCount()
    }
    __getCount(){
        return this.state.count
    }
    removeAlertAtIndex(index) {
        var alerts = this.state.alerts
        alerts.splice(index, 1)

        this.setState({
            alerts: alerts
        })
    }
    modifyAlerts(new_alerts) {
        var alerts = [...new_alerts]
        this.setState({
            alerts: alerts
        })
    }

    render() {
        var items = []
        let i = 0
        var alerts = [...this.state.alerts]
        console.log(alerts)
        for (i = 0; i < alerts.length; i++) {
            if(!this.props.persist_dialog){
                console.log(alerts[i])
                items.push(<BaseAlert 
                    removeAlertAtIndex={this.removeAlertAtIndex}
                    index={i}
                    is_persistent={alerts[i].props.is_persistent}
                    key={i}>
                    {alerts[i]}
                </BaseAlert>)
            }
        }
        return (<div className='alerts-container'>{items}</div>)
    }
}

