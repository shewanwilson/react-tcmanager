import React from 'react';
import Sidebar from './sidebar/Sidebar';
import ScenarioEditor from './scenario-editor/ScenarioEditor';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import './Main.css'
const libraryScenarios = [
    {
        id: 1,
        title: "Test Scenario 1"    
    },
    {
        id: 2,
        title: "Test Scenario 2"    
    },
    {
        id: 3,
        title: "Test Scenario 3"    
    },
    {
        id: 4,
        title: "Test Scenario 4"    
    }
]

let editorScenarios = [];

function addTestScenarioFromLibrary(caseId){
    alert("case id : " + caseId);
    
    libraryScenarios.forEach(scenario => {
        if(scenario.id === caseId){
            console.log(scenario);
            editorScenarios.push(scenario);
        }
    });
}

function Main() {
    return (
        <div className="main">
            <DndProvider backend={HTML5Backend}>
                <Sidebar libraryItems={libraryScenarios}/>
                <ScenarioEditor onScenarioDrop={addTestScenarioFromLibrary} scenarios={editorScenarios}/>
            </DndProvider>
        </div>
    )
}

export default Main
