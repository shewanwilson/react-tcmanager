import React from 'react'
import { FaRegSave } from "react-icons/fa";

import './EditStep.css'

function EditStep(props) {

    function onEnterKeyPress(event) {
        if (event.key === 'Enter') {
                   
            const editedStepText = event.target.value;
            
            props.updateRawSteps(currentSteps => {
                currentSteps.forEach(step => {
                    if(step.stepId === props.stepId){                        
                        step.stepText = editedStepText;                        
                    }
                });                
                
                return [...currentSteps];
            })    

            // Call parent function to restate isEditActive
            props.setEditActive(false);
        }
    }

    return (
        <div className={`edit-step-input ${props.isEditActive ? 'edit-active' : ''}`}>            
            <input id={"step-edit-id-" + props.stepId} type="text" defaultValue={props.stepTitle} onKeyDown={onEnterKeyPress} />                      
        </div>
    )
}

export default EditStep
