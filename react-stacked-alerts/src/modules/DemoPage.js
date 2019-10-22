import React, { Component } from "react";
import AlertsManager from './alerts/AlertsManager'
import {LabelledAlert, ShadedAlert} from './alerts/alertTemplates'
export default class DemoPage extends React.Component{
    constructor(props){
        super(props)
        this.state={}

        this.addDummyAlert = this.addDummyAlert.bind(this);
    }

    addDummyAlert(type){
        switch(type){
            case 'labelled': 
                AlertsManager.addAlert(<LabelledAlert key={'added favorite'}
                    label="Demo"
                    alert_content="This is a demo alert"
                    label_color="red" />)
            break;
            case 'shaded':
                AlertsManager.addAlert(<ShadedAlert key={'added favorite'}
                    label="Demo"
                    alert_content="This is a demo alert"
                    label_color="#EB8F87"
                    border_right_color='#D92B1A'
                     />)
                    break
        }

    }

    render(){
        return(<div className='demo-page'>
            <button className='btn' onClick={() => { this.addDummyAlert('labelled')}}>Show Labelled Alert</button>
            <br/>
            <button className='btn' onClick={() => { this.addDummyAlert('shaded')}}>Show Shaded Alert</button>
        </div>)
    }
}