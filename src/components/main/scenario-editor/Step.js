import React, { useState } from 'react';
import { useDrag } from "react-dnd";
import StepText from './StepText.js'
import StepIcons from './StepIcons.js';
import EditStep from './EditStep.js';
import SaveEditStep from './SaveEditStep.js';

import './Step.css'

function Step(props) {

    const [{ isDragging }, stepDragRef] = useDrag(() => ({
        type: "div",
        item: {id: props.stepId},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    const [isHoverActive, setHoverActive] = useState(false);
    const [isEditActive, setEditActive] = useState(false); 

    function onMouseHover(){        
        setHoverActive(true);
    }

    function onMouseLeaveHover(){
        setHoverActive(false);
    }

    function createStepEditInput(){
        setEditActive(true);
        setHoverActive(false);
    }

    return (
        <div key={props.stepId} id={"step-id-" + props.stepId} className="step" ref={stepDragRef} onMouseEnter={onMouseHover} onMouseLeave={onMouseLeaveHover} >
                        
            <StepText isEditActive={isEditActive} stepTitle={props.stepTitle} stepId={props.stepId}/>
            <EditStep isEditActive={isEditActive} stepTitle={props.stepTitle} setEditActive={setEditActive} stepId={props.stepId} updateRawSteps={props.updateRawSteps}/>
            <SaveEditStep isEditActive={isEditActive} stepTitle={props.stepTitle} setEditActive={setEditActive} stepId={props.stepId} />
            <StepIcons isHoverActive={isHoverActive} isEditActive={isEditActive} createStepEditInput={createStepEditInput} stepId={props.stepId} updateRawSteps={props.updateRawSteps} />
                        
        </div>
    )
}

export default Step
