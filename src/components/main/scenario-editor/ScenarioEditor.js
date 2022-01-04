import React from 'react';
import ProjectBreadcrumb from './project-breadcrumb/ProjectBreadcrumb';
import Scenario from './Scenario.js';
import DUMMYSCENARIO from './TestData.js'
import './ScenarioEditor.css';

function TestCaseEditor(props) {

  console.log(DUMMYSCENARIO);

  return (
    <div className="scenario-editor">
      <ProjectBreadcrumb />
      <Scenario scenarios={props.scenarios} onScenarioDrop={props.onScenarioDrop} DUMMY_SCENARIO={DUMMYSCENARIO} />
    </div>
  )
}

export default TestCaseEditor
