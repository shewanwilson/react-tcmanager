import React, { useState } from 'react'
import { useDrop } from "react-dnd";
import Step from './Step.js';
import './Scenario.css';

function Scenario(props) {

    const [{ isOver }, dropRef] = useDrop(() => ({
        accept: "li",
        drop: (item) => onScenarioDrop(item.id),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));

    let scenarioSteps;

    // rawSteps are steps taken from the json returned by the database;
    const [rawSteps, updateRawSteps] = useState(props.DUMMY_SCENARIO[0].scenario_steps);

    function addStep(event) {
        let newStepId;
        
        if(rawSteps.length === 0){
            newStepId = 1;
        }
        else{
            // Get the id of the last element in the rawSteps array
            let lastStepId = rawSteps.at(-1).stepId;
            newStepId = (lastStepId + 1);
        }        

        const newStep = {
            stepId: newStepId,
            stepText: event.target.value
        }

        if (event.key === 'Enter') {

            updateRawSteps(prevRawSteps => {
                return [...prevRawSteps, newStep];
            })
        }
    }

    if (rawSteps.length != 0) {
        scenarioSteps = [];

        rawSteps.forEach(step => {
            scenarioSteps.push(<Step stepTitle={step.stepText} stepId={step.stepId} updateRawSteps={updateRawSteps} />);
        });
    } else{
        scenarioSteps = <p className="no-steps">There are no steps. Please Add below</p>;
    }

    function onScenarioDrop(scenarioId) {
        // Get scenario id value from scenario dropped by user
        let newScenarioId = scenarioId;
        props.onScenarioDrop(newScenarioId);
    }


    // if( props.scenarios.length === 0 ){
    //     return <p ref={dropRef}>Please add a Scenario from library or add a new scenario below</p>
    // }
    // else{
    //     props.scenarios.map(scenario =>{
    //         scenarioList.push(<li>{scenario.title}</li>);
    //     });
    // }

    return (

        // <ul className="editor-scenario-list" ref={dropRef} >
        //     {scenarioList[0]}
        // </ul>

        <form className="scenario-form">

            <fieldset>

                <div className="scenario-title-section">
                    <label htmlFor="scenario-title">Scenario: </label>
                    <div id="scenario-title"><h3>{props.DUMMY_SCENARIO[0].scenario_title}</h3></div>
                </div>
                <div className="scenario-steps-section">
                    <label htmlFor="scenario-steps">Steps: </label>
                    <div id="scenario-steps">
                        {scenarioSteps}
                    </div>
                </div>


                <input type="text" name="new-step" placeholder="New Step" onKeyDown={addStep} />


            </fieldset>

        </form>

    )
}

export default Scenario
