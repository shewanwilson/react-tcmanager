import React from 'react';
import './ProjectBreadcrumb.css';

function ProjectBreadcrumb(){
    
    function restyleGrid(){
        alert("shbba");
        var elem = document.getElementById("hide");
        elem.parentNode.removeChild(elem);
    }
    
    return (
        <div className="project-breadcrumb">
            <div className="test-divs">
                <button onClick={restyleGrid}>Click</button>
            </div>
            <div className="test-divs"></div>
            <div id="hide" className="test-divs"></div>
            
        </div>
    )
}
export default ProjectBreadcrumb
