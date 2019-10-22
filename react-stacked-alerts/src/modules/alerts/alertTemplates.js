import React, { Component } from "react";


const LabelledAlert = (props) => {

    let labelStyle = { backgroundColor: props.label_color ? props.label_color:'green'}

    return <div className='labelled-alert'>
        <div className='labelled-alert-label' style={labelStyle}>{props.label}</div>
        <div className='labelled-alert-content'>{props.alert_content}</div>
    </div>
}

const ShadedAlert = (props) => {

    let alertStyle = { 
        backgroundColor: props.label_color ? props.label_color : 'green',
        borderLeft: props.border_right_color ? `3px solid ${props.border_right_color}`: '3px solid darkgreen'
    }
    let labelStyle = {
        color: props.border_right_color ? props.border_right_color : 'darkgreen'
    }
    

    return <div className='labelled-alert' style={alertStyle}>
        <div className='shaded-alert-label' style={labelStyle}>{props.label}</div>
        <div className='shaded-alert-content'>{props.alert_content}</div>
    </div>
}



export {
    LabelledAlert,
    ShadedAlert,
}
