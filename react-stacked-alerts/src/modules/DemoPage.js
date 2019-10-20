import React, { Component } from "react";
import AlertsManager from './alerts/AlertsManager'
import {LabelledAlert} from './alerts/alertTemplates'
export default class DemoPage extends React.Component{
    constructor(props){
        super(props)
        this.state={}

        this.addDummyAlert = this.addDummyAlert.bind(this);
    }

    addDummyAlert(){
        AlertsManager.addAlert(<LabelledAlert key={'added favorite'} 
                                label="Demo"
                                alert_content="This is a demo alert"
                                label_color="red"/>)
    }

    render(){
        return(<div className='demo-page'>
            <button className='btn' onClick={this.addDummyAlert}>Show Alert</button>
        </div>)
    }
}