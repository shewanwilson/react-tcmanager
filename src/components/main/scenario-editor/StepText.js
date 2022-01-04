import React from 'react';
import './StepText.css';

function StepText(props) {
    
    // if(props.isEditActive){
    //     const stepTextId = "step-text-id-" + props.stepId;
    //     console.log("Step Text ID : " + stepTextId);
    //     const stepTitleDiv = document.getElementById(stepTextId);
    //     console.log("Step Text DIV : " + stepTitleDiv);
    //     stepTitleDiv.parentNode.removeChild(stepTitleDiv);
    // }
    
    //className={`step-title ${props.isEditActive ? 'edit-active' : ''}`}

    return (
        <div id={"step-text-id-"+ props.stepId} className={`step-title ${props.isEditActive ? 'edit-active' : ''}`}>{props.stepTitle}</div>
    )
}

export default StepText
