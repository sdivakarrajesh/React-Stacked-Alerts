import React, { Component } from "react";


const LabelledAlert = (props) => {

    let labelStyle = { backgroundColor: props.label_color ? props.label_color:'green'}

    return <div className='labelled-alert'>
        <div className='labelled-alert-label' style={labelStyle}>{props.label}</div>
        <div className='labelled-alert-content'>{props.alert_content}</div>
    </div>
}



export {
    LabelledAlert,
}
