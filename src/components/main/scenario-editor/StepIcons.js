import React from 'react';
import './StepIcons.css';

function StepIcons(props) {

    function deleteStep() {
        props.updateRawSteps(currentSteps => {
            currentSteps.forEach(step => {
                if (step.stepId === props.stepId) {
                    const stepIndexInArray = currentSteps.indexOf(step);
                    currentSteps.splice(stepIndexInArray, 1);
                }
            });

            return [...currentSteps];
        })
    }

    return (
        <div id="step-buttons" className={`step-buttons ${props.isHoverActive ? 'hover-active' : ''} ${props.isEditActive ? 'edit-active' : ''}`}>
            <span id="edit-step" className="step-button" onClick={props.createStepEditInput}>EDIT</span>
            <span id="delete-step" className="step-button" onClick={deleteStep}>DELETE</span>
        </div>
    )
}

export default StepIcons
