import React from 'react';
import './SaveEditStep.css';

function SaveEditStep(props) {
    return (
        
        <div className={`save-animation ${props.isEditActive ? 'edit-active' : ''}`}>SAVE ANIMATION</div>            
        
    )
}

export default SaveEditStep
