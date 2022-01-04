let DUMMYSCENARIO = [
    {
        "scenario_id": 1,
        "scenario_title": "As a user I can login to the app successfully",
        scenario_steps: [
            {
                stepId: 1,
                stepText: "GIVEN I have navigated to the login page"
            },
            {
                stepId: 2,
                stepText: "WHEN I enter a valid username"
            },
            {
                stepId: 3,
                stepText: "AND I enter a valid password"
            },
            {
                stepId: 4,
                stepText: "WHEN I click on the submit button"
            },
            {
                stepId: 5,
                stepText: "THEN I am logged in successfully"
            }

        ]
    }
]

export default DUMMYSCENARIO;