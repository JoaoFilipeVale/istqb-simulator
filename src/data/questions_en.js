export const questions = [
    {
        id: 1,
        chapter: 1,
        kLevel: 'K1',
        lo: 'FL-1.1.1',
        text: "Which of the following statements describes a valid test objective?",
        options: [
            { id: 'a', text: "To prove that there are no unfixed defects in the system under test" },
            { id: 'b', text: "To prove that no failures will occur after the implementation of the system in production" },
            { id: 'c', text: "To reduce the risk level of the test object and build confidence in the quality level" },
            { id: 'd', text: "To verify that there are no untested combinations of inputs" }
        ],
        correctAnswer: 'c',
        explanation: "Testing finds defects and failures that reduce the level of risk and at the same time build confidence in the quality level of the test object. It is impossible to prove the total absence of defects (Principle 1)."
    },
    {
        id: 2,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.2.1',
        text: "Which of the following options shows an example of test activities that contribute to success?",
        options: [
            { id: 'a', text: "Testers' involvement during the various software development lifecycle (SDLC) activities will help detect defects in work products" },
            { id: 'b', text: "Testers try not to disturb developers while they are coding, so they can write better code" },
            { id: 'c', text: "Testers collaborate with end-users to help improve the quality of defect reports during component integration and system testing" },
            { id: 'd', text: "Certified testers will design much better test cases than non-certified testers" }
        ],
        correctAnswer: 'a',
        explanation: "Early involvement (Shift-Left) helps prevent the introduction of defects in requirements and design."
    },
    {
        id: 3,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.3.1',
        text: "You have been assigned the role of a tester in a team that is producing a new system incrementally. You noticed that no changes were made to the existing regression test cases after several iterations and no new defects were identified. which principle explains your skepticism?",
        options: [
            { id: 'a', text: "Tests wear out (Pesticide Paradox)" },
            { id: 'b', text: "The fallacy of absence of defects" },
            { id: 'c', text: "Defects cluster together" },
            { id: 'd', text: "Exhaustive testing is impossible" }
        ],
        correctAnswer: 'a',
        explanation: "If the same tests are repeated over and over again, eventually they stop finding new defects."
    },
    {
        id: 4,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.4.1',
        text: "You are working in a team developing a mobile food ordering application. In the current iteration, the team decided to implement the payment functionality. Which of the following activities belongs to test analysis?",
        options: [
            { id: 'a', text: "Calculating the estimate that testing the integration with the payment service will take about 8 person-days" },
            { id: 'b', text: "Deciding if the team should perform tests to verify if it is possible to share the payment among multiple users" },
            { id: 'c', text: "Using boundary value analysis (BVA) to derive test case data" },
            { id: 'd', text: "Analyzing the discrepancy between the actual and expected result after execution" }
        ],
        correctAnswer: 'b',
        explanation: "Test analysis identifies test conditions ('what' to test) based on the test basis."
    },
    {
        id: 5,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.4.2',
        text: "Which of the following factors have a SIGNIFICANT influence on the test process?\ni. The SDLC\nii. The number of defects detected in previous projects\niii. The identified product risks\niv. The application of new regulatory requirements\nv. The number of certified testers",
        options: [
            { id: 'a', text: "i, ii have significant influence; iii, iv, v have no influence" },
            { id: 'b', text: "i, iii, iv have significant influence; ii, v have no influence" },
            { id: 'c', text: "ii, iv, v have significant influence; i, iii have no influence" },
            { id: 'd', text: "iii, v have significant influence; i, ii, iv have no influence" }
        ],
        correctAnswer: 'b',
        explanation: "The test process is influenced by the development model, risks, and legal/regulatory obligations."
    },
    {
        id: 6,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.4.5',
        text: "Which of the following TWO tasks belong MAINLY to a testing role?",
        type: "multiple",
        options: [
            { id: 'a', text: "Configuring test environments" },
            { id: 'b', text: "Maintaining the product backlog" },
            { id: 'c', text: "Designing solutions for new requirements" },
            { id: 'd', text: "Creating the test plan" },
            { id: 'e', text: "Analyzing the test basis" }
        ],
        correctAnswer: ['a', 'e'],
        explanation: "Configuring environments and analyzing the test basis are responsibilities of the tester. The plan belongs to the manager."
    },
    {
        id: 7,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.5.1',
        text: "Which of the following skills are MOST important for a tester?\ni. Having domain knowledge\nii. Creating a product vision\niii. Being a good team player\niv. Planning the team's work\nv. Critical thinking",
        options: [
            { id: 'a', text: "ii, iv are important" },
            { id: 'b', text: "i, iii, v are important" },
            { id: 'c', text: "i, ii, v are important" },
            { id: 'd', text: "iii, iv are important" }
        ],
        correctAnswer: 'b',
        explanation: "Business knowledge, collaboration, and analytical thinking are fundamental to a tester's success."
    },
    {
        id: 8,
        chapter: 1,
        kLevel: 'K1',
        lo: 'FL-1.5.2',
        text: "How is the Whole Team Approach present in interactions between testers and business representatives?",
        options: [
            { id: 'a', text: "Business representatives decide approaches to test automation" },
            { id: 'b', text: "Testers help business representatives define a test strategy" },
            { id: 'c', text: "Business representatives do not belong to the Whole Team Approach" },
            { id: 'd', text: "Testers help business representatives create appropriate acceptance tests" }
        ],
        correctAnswer: 'd',
        explanation: "Collaboration between testers and business ensures acceptance tests reflect real needs."
    },
    {
        id: 9,
        chapter: 2,
        kLevel: 'K1',
        lo: 'FL-2.1.2',
        text: "Consider the following rule: 'for every SDLC activity there is a corresponding test activity.' In which SDLC models does this rule apply?",
        options: [
            { id: 'a', text: "Only in SDLCs with sequential development models" },
            { id: 'b', text: "Only in SDLCs with iterative development models" },
            { id: 'c', text: "Only in SDLCs with incremental development models" },
            { id: 'd', text: "In SDLCs with sequential, incremental, and iterative development models" }
        ],
        correctAnswer: 'd',
        explanation: "Regardless of the model, every development activity should have a corresponding validation."
    },
    {
        id: 10,
        chapter: 2,
        kLevel: 'K1',
        lo: 'FL-2.1.3',
        text: "Which of the following statements BEST describes the Acceptance Test-Driven Development (ATDD) approach?",
        options: [
            { id: 'a', text: "Acceptance criteria are usually created based on the 'Given/When/Then' format" },
            { id: 'b', text: "Test cases are mainly created in component testing" },
            { id: 'c', text: "Tests are created based on acceptance criteria to drive development" },
            { id: 'd', text: "Tests are based on behavior, which simplifies understanding" }
        ],
        correctAnswer: 'c',
        explanation: "In ATDD, tests are designed collaboratively before code to guide development."
    },
    {
        id: 11,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.1.5',
        text: "Which of the following answers does NOT correspond to a Shift-Left approach?",
        options: [
            { id: 'a', text: "Reviewing user requirements before they are formally accepted" },
            { id: 'b', text: "Drafting a component test before writing the corresponding code" },
            { id: 'c', text: "Performing a performance efficiency test during component testing" },
            { id: 'd', text: "Drafting a test script before defining the configuration management process" }
        ],
        correctAnswer: 'd',
        explanation: "Creating scripts before organizing configuration management is a bad practice, not Shift-Left."
    },
    {
        id: 12,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.1.6',
        text: "Argument to convince the manager to organize retrospectives at the end of each release cycle:",
        options: [
            { id: 'a', text: "Currently, retrospectives are very popular" },
            { id: 'b', text: "Organizing retrospectives will save money immediately" },
            { id: 'c', text: "Identified shortcomings can be used as a task list for continuous improvement" },
            { id: 'd', text: "Retrospectives cover five crucial values like courage and respect" }
        ],
        correctAnswer: 'c',
        explanation: "Retrospectives allow learning from mistakes and improving processes for the next cycle."
    },
    {
        id: 13,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.2.1',
        text: "Mapping Test Levels vs Failures:\n1. System behavior | 2. Communication between components | 3. Module logic | 4. Incorrect business rules\nA. Components | B. Integration | C. System | D. Acceptance",
        options: [
            { id: 'a', text: "1D, 2B, 3A, 4C" },
            { id: 'b', text: "1D, 2B, 3C, 4A" },
            { id: 'c', text: "1B, 2A, 3D, 4C" },
            { id: 'd', text: "1C, 2B, 3A, 4D" }
        ],
        correctAnswer: 'a',
        explanation: "A-3 (Components focus on internal logic), B-2 (Integration on interfaces), C-4 (System on rules), D-1 (Acceptance on behavior)."
    },
    {
        id: 14,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.2.3',
        text: "History: TC1 failed in v1, passed in v2. TC2 passed in v1, failed in v2. TC3 failed in v1 and v2. In v3, all passed. Which tests in Execution 3 were REGRESSION tests?",
        options: [
            { id: 'a', text: "Only 4, 7, 8 and 9" },
            { id: 'b', text: "Only 5 and 7" },
            { id: 'c', text: "Only 4, 6, 8 and 9" },
            { id: 'd', text: "Only 5 and 6" }
        ],
        correctAnswer: 'b',
        explanation: "Regression are tests of features that already passed previously and are repeated after changes. In this context, if it assumes TC2 passed before, it's a regression candidate relative to v1 functionalities. (Note: This question logic relies on identifying what was previously working vs what is a re-test of a fix)."
    },
    {
        id: 15,
        chapter: 3,
        kLevel: 'K2',
        lo: 'FL-3.1.2',
        text: "Which of the following statements is NOT an advantage of static testing?",
        options: [
            { id: 'a', text: "Having less expensive defect management due to later detection in the SDLC" },
            { id: 'b', text: "Fixing defects found is less expensive than in dynamic testing" },
            { id: 'c', text: "Finding defects in the code that may not be found dynamically alone" },
            { id: 'd', text: "Detecting gaps and inconsistencies in requirements" }
        ],
        correctAnswer: 'a',
        explanation: "Late detection is MORE expensive. Static testing aims for early detection."
    },
    {
        id: 16,
        chapter: 3,
        kLevel: 'K1',
        lo: 'FL-3.2.1',
        text: "Which of the following statements is an advantage of early and frequent feedback?",
        options: [
            { id: 'a', text: "Improves the testing process for future projects" },
            { id: 'b', text: "Forces customers to establish priorities" },
            { id: 'c', text: "It is the only way to measure quality" },
            { id: 'd', text: "Helps avoid misunderstandings about requirements" }
        ],
        correctAnswer: 'd',
        explanation: "Constant feedback aligns stakeholders and the team, avoiding misinterpretations."
    },
    {
        id: 17,
        chapter: 3,
        kLevel: 'K2',
        lo: 'FL-3.2.4',
        text: "Review with scribe role, quality assessment, meeting led by the author, individual preparation. What type of review is this?",
        options: [
            { id: 'a', text: "Informal review" },
            { id: 'b', text: "Walkthrough" },
            { id: 'c', text: "Technical review" },
            { id: 'd', text: "Inspection" }
        ],
        correctAnswer: 'b',
        explanation: "The meeting led by the author is the trademark of the Walkthrough."
    },
    {
        id: 18,
        chapter: 3,
        kLevel: 'K1',
        lo: 'FL-3.2.5',
        text: "Which of the following statements is NOT a factor contributing to the success of reviews?",
        options: [
            { id: 'a', text: "Participants should dedicate sufficient time" },
            { id: 'b', text: "Break large work products into small parts" },
            { id: 'c', text: "Avoid behaviors that may indicate hostility" },
            { id: 'd', text: "Found failures must be managed objectively" }
        ],
        correctAnswer: 'd',
        explanation: "In reviews, we detect 'defects'. Failures occur only in dynamic execution."
    },
    {
        id: 19,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.1.1',
        text: "Which of the following statements is a characteristic of experience-based test techniques?",
        options: [
            { id: 'a', text: "Test cases created based on detailed design" },
            { id: 'b', text: "Using the interface to measure coverage" },
            { id: 'c', text: "Dependence on the tester's software knowledge and domain" },
            { id: 'd', text: "Use to identify deviations from requirements" }
        ],
        correctAnswer: 'c',
        explanation: "They are based on 'feeling', intuition, and experience accumulated by the tester."
    },
    {
        id: 20,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.1',
        text: "Scenario: Apartments (Floor: Ground, 1st, 2nd, Top) and Garden (None, Small, Large). Rule: Only Ground has garden. What is the minimum number of tests for 100% valid EP coverage?",
        options: [
            { id: 'a', text: "3" },
            { id: 'b', text: "4" },
            { id: 'c', text: "5" },
            { id: 'd', text: "6" }
        ],
        correctAnswer: 'b',
        explanation: "We need 4 tests: Ground+Small, Ground+Large, 1st+None, and one for 2nd or Top + None."
    },
    {
        id: 21,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.2',
        text: "Grades: 0-50, 51-60, 61-70, 71-80, 81-90, 91-100. Values tested: 91, 50, 81, 60, 70, 80. BVA coverage (2 values) achieved?",
        options: [
            { id: 'a', text: "50%" },
            { id: 'b', text: "60%" },
            { id: 'c', text: "33.3%" },
            { id: 'd', text: "100%" }
        ],
        correctAnswer: 'a',
        explanation: "There are 12 boundaries and only 6 were tested, so coverage is 50%."
    },
    {
        id: 22,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.3',
        text: "Decision Table: 'Members receive gift after 15 rentals'. Which rule indicates a failure in the table if it shows a Non-member receiving a gift?",
        options: [
            { id: 'a', text: "R4" },
            { id: 'b', text: "R2" },
            { id: 'c', text: "R6" },
            { id: 'd', text: "R8" }
        ],
        correctAnswer: 'd',
        explanation: "If the gift is only for members, a non-member should never receive it in the table."
    },
    {
        id: 23,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.4',
        text: "State Transition: System with Execution, Error, and Pause flows. What is the MINIMUM number of tests to cover all valid transitions?",
        options: [
            { id: 'a', text: "4" },
            { id: 'b', text: "2" },
            { id: 'c', text: "7" },
            { id: 'd', text: "3" }
        ],
        correctAnswer: 'd',
        explanation: "Three paths cover all main states and transitions of this scenario."
    },
    {
        id: 24,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.3.1',
        text: "Your test suite obtains 100% statement coverage. What is the consequence of this fact?",
        options: [
            { id: 'a', text: "Every defective statement was evaluated at least once" },
            { id: 'b', text: "Any larger suite would also obtain 100%" },
            { id: 'c', text: "Every path in the code was executed" },
            { id: 'd', text: "Every input combination was tested" }
        ],
        correctAnswer: 'a',
        explanation: "Statement coverage guarantees we passed through every existing line of code."
    },
    {
        id: 25,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.3.3',
        text: "Which of the following statements is NOT true for white-box testing?",
        options: [
            { id: 'a', text: "The entire software implementation is considered" },
            { id: 'b', text: "Metrics help identify additional tests" },
            { id: 'c', text: "Techniques can be used in static tests" },
            { id: 'd', text: "Can help identify gaps in requirement implementation" }
        ],
        correctAnswer: 'd',
        explanation: "Structural testing doesn't see what's missing regarding requirements, only what is there."
    },
    {
        id: 26,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.4.1',
        text: "Which statement best describes Error Guessing?",
        options: [
            { id: 'a', text: "Using knowledge of past defects and typical errors" },
            { id: 'b', text: "Using personal development experience" },
            { id: 'c', text: "Imagining you are the end user" },
            { id: 'd', text: "Duplicating tasks to identify errors" }
        ],
        correctAnswer: 'a',
        explanation: "It relies on the history of common problems detected previously in similar systems."
    },
    {
        id: 27,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.4.2',
        text: "Urgent release, incomplete requirements, experienced tester. What is the best technique?",
        options: [
            { id: 'a', text: "Checklist-based" },
            { id: 'b', text: "Error guessing" },
            { id: 'c', text: "Exploratory testing" },
            { id: 'd', text: "Branch testing" }
        ],
        correctAnswer: 'c',
        explanation: "Exploratory testing allows learning and testing simultaneously in high-pressure scenarios."
    },
    {
        id: 28,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.5.2',
        text: "Which statement BEST describes how to document acceptance criteria?",
        options: [
            { id: 'a', text: "Perform retrospectives" },
            { id: 'b', text: "Use the 'Given/When/Then' format" },
            { id: 'c', text: "Use verbal communication" },
            { id: 'd', text: "Document risks in the test plan" }
        ],
        correctAnswer: 'b',
        explanation: "Gherkin (Given/When/Then) is the standard language for readable acceptance criteria."
    },
    {
        id: 29,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.5.3',
        text: "User Story: Editor reviews content. Criteria: Save, Edit, Reassign. What is the best ATDD test?",
        options: [
            { id: 'a', text: "Verify if the editor can save after editing" },
            { id: 'b', text: "Verify if the owner can log in" },
            { id: 'c', text: "Verify if the editor can schedule publication" },
            { id: 'd', text: "Verify if the editor can reassign to another editor" }
        ],
        correctAnswer: 'a',
        explanation: "The test directly validates the functional criteria defined in the User Story."
    },
    {
        id: 30,
        chapter: 5,
        kLevel: 'K1',
        lo: 'FL-5.1.2',
        text: "How do testers add value to iteration planning?",
        options: [
            { id: 'a', text: "Determine the priority of user stories" },
            { id: 'b', text: "Focus only on the functional" },
            { id: 'c', text: "Participate in identifying and evaluating risks of user stories" },
            { id: 'd', text: "Ensure release through early design" }
        ],
        correctAnswer: 'c',
        explanation: "The tester's contribution to risk analysis is vital for defining the testing effort."
    },
    {
        id: 31,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.1.3',
        text: "Which of the following TWO options are exit criteria?",
        type: "multiple",
        options: [
            { id: 'a', text: "Test environment readiness" },
            { id: 'b', text: "Ability to log in" },
            { id: 'c', text: "Defect density estimate reached" },
            { id: 'd', text: "Requirements in Given/When/Then" },
            { id: 'e', text: "Automated regression tests completed" }
        ],
        correctAnswer: ['c', 'e'],
        explanation: "Bug status and automation completion define if we are ready to stop (Exit)."
    },
    {
        id: 32,
        chapter: 5,
        kLevel: 'K3',
        lo: 'FL-5.1.4',
        text: "3-point estimate: Optimistic=2, Probable=11, Pessimistic=14. What is the final estimate?",
        options: [
            { id: 'a', text: "9" },
            { id: 'b', text: "14" },
            { id: 'c', text: "11" },
            { id: 'd', text: "10" }
        ],
        correctAnswer: 'd',
        explanation: "Formula is (O + 4M + P) / 6. (2 + 44 + 14) / 6 = 10."
    },
    {
        id: 33,
        chapter: 5,
        kLevel: 'K3',
        lo: 'FL-5.1.5',
        text: "Dependencies: 001 -> 002. 003, 004, 005 depend on 002. Priorities: 3(1), 4(2), 5(3). Which runs 3rd?",
        options: [
            { id: 'a', text: "TC 003" },
            { id: 'b', text: "TC 005" },
            { id: 'c', text: "TC 002" },
            { id: 'd', text: "TC 001" }
        ],
        correctAnswer: 'a',
        explanation: "Logical order: 001 -> 002. The next one is the highest priority (003)."
    },
    {
        id: 34,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.1.7',
        text: "Agile Quadrants: Map Component, Functional, Usability, Reliability.",
        options: [
            { id: 'a', text: "1C (Q3), 2A (Q1), 3B (Q2), 4D (Q4)" },
            { id: 'b', text: "1D, 2A, 3C, 4B" },
            { id: 'c', text: "1C, 2B, 3D, 4A" },
            { id: 'd', text: "1D, 2B, 3C, 4A" }
        ],
        correctAnswer: 'a',
        explanation: "Q1=Component, Q2=Functional, Q3=Usability, Q4=Reliability."
    },
    {
        id: 35,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.2.4',
        text: "Risk: Slow response. Measure: Independent team performs performance testing. This is:",
        options: [
            { id: 'a', text: "Risk acceptance" },
            { id: 'b', text: "Contingency plan" },
            { id: 'c', text: "Risk mitigation" },
            { id: 'd', text: "Risk transfer" }
        ],
        correctAnswer: 'c',
        explanation: "Mitigation reduces the probability of critical failures in production."
    },
    {
        id: 36,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.3.3',
        text: "Agile work product that shows completed vs remaining work:",
        options: [
            { id: 'a', text: "Acceptance criteria" },
            { id: 'b', text: "Defect report" },
            { id: 'c', text: "Completion report" },
            { id: 'd', text: "Burndown chart" }
        ],
        correctAnswer: 'd',
        explanation: "The Burndown chart is the visual indicator of sprint progress."
    },
    {
        id: 37,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.4.1',
        text: "Process that indicates the test script version in the repository:",
        options: [
            { id: 'a', text: "Traceability management" },
            { id: 'b', text: "Maintenance testing" },
            { id: 'c', text: "Configuration management" },
            { id: 'd', text: "Requirements engineering" }
        ],
        correctAnswer: 'c',
        explanation: "Configuration management ensures version control of all artifacts."
    },
    {
        id: 38,
        chapter: 5,
        kLevel: 'K3',
        lo: 'FL-5.5.1',
        text: "Defect report: Missing technical info for reproduction. What is missing?",
        options: [
            { id: 'a', text: "Expected and observed result" },
            { id: 'b', text: "References and state" },
            { id: 'c', text: "Test environment and test item" },
            { id: 'd', text: "Priority and severity" }
        ],
        correctAnswer: 'c',
        explanation: "Without knowing the software version and OS/Browser, the dev cannot isolate the error."
    },
    {
        id: 39,
        chapter: 6,
        kLevel: 'K2',
        lo: 'FL-6.1.1',
        text: "Data preparation tool supports which activity?",
        options: [
            { id: 'a', text: "Monitoring and control" },
            { id: 'b', text: "Test analysis" },
            { id: 'c', text: "Design and implementation" },
            { id: 'd', text: "Test completion" }
        ],
        correctAnswer: 'c',
        explanation: "Test implementation is the phase of creating/obtaining testware (data, scripts)."
    },
    {
        id: 40,
        chapter: 6,
        kLevel: 'K1',
        lo: 'FL-6.2.1',
        text: "What is a potential risk of introducing a new automation tool?",
        options: [
            { id: 'a', text: "The tool finding too many bugs" },
            { id: 'b', text: "Underestimating the effort needed to maintain test scripts" },
            { id: 'c', text: "Developers learning to test" },
            { id: 'd', text: "Software becoming too fast" }
        ],
        correctAnswer: 'b',
        explanation: "Many automation projects fail because maintenance is ignored or underestimated."
    },
    {
        id: 41,
        chapter: 1,
        kLevel: 'K1',
        lo: 'FL-1.1.1',
        text: "Which of the following options best describes a test objective?",
        options: [
            { id: 'a', text: "Increasing project costs by detecting failures" },
            { id: 'b', text: "Providing information to stakeholders about the quality level" },
            { id: 'c', text: "Preventing the project from changing requirements" },
            { id: 'd', text: "Ensuring the development team works overtime" }
        ],
        correctAnswer: 'b',
        explanation: "Testing provides essential feedback to stakeholders about product quality and associated risks."
    },
    {
        id: 42,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.1.2',
        text: "What is the correct relationship between errors, defects, and failures?",
        options: [
            { id: 'a', text: "A defect causes an error, which in turn causes a failure" },
            { id: 'b', text: "A human error introduces a defect, which may cause a failure during execution" },
            { id: 'c', text: "A failure always causes an error in the code" },
            { id: 'd', text: "There is no relationship between these terms" }
        ],
        correctAnswer: 'b',
        explanation: "The official causal chain is: Error (human action) -> Defect (in code/doc) -> Failure (visible behavior)."
    },
    {
        id: 43,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.3.1',
        text: "The 'Defect Clustering' test principle suggests that:",
        options: [
            { id: 'a', text: "Defects are evenly distributed throughout the system" },
            { id: 'b', text: "A small number of modules usually contain the majority of defects found" },
            { id: 'c', text: "Exhaustive testing is the only way to find all defects" },
            { id: 'd', text: "Defects disappear if the code is ignored" }
        ],
        correctAnswer: 'b',
        explanation: "This principle is based on the Pareto rule: most problems are concentrated in specific, complex areas of the code."
    },
    {
        id: 44,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.4.1',
        text: "During which test process activity are exit criteria verified?",
        options: [
            { id: 'a', text: "Test analysis" },
            { id: 'b', text: "Test monitoring and control" },
            { id: 'c', text: "Test execution" },
            { id: 'd', text: "Test completion" }
        ],
        correctAnswer: 'b',
        explanation: "Monitoring compares progress with exit criteria defined in planning to decide if optimal testing can stop."
    },
    {
        id: 45,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.4.3',
        text: "What is the importance of traceability between requirements and test cases?",
        options: [
            { id: 'a', text: "It allows knowing which tests must be re-executed if a requirement changes" },
            { id: 'b', text: "Ensures the customer pays the invoice on time" },
            { id: 'c', text: "Replaces the need for a project manager" },
            { id: 'd', text: "Makes automated tests faster" }
        ],
        correctAnswer: 'a',
        explanation: "Traceability is crucial for impact analysis and ensuring full requirement coverage."
    },
    {
        id: 46,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.5.1',
        text: "Which of the following attitudes best describes a tester's mindset?",
        options: [
            { id: 'a', text: "Blind confidence that the code is correct" },
            { id: 'b', text: "Intellectual curiosity, professional pessimism, and attention to detail" },
            { id: 'c', text: "Desire to prove the programmer cannot work" },
            { id: 'd', text: "Focusing only on the beauty of the graphical interface" }
        ],
        correctAnswer: 'b',
        explanation: "The tester must question the system and look for failures methodically and professionally."
    },
    {
        id: 47,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.5.2',
        text: "What is the main risk of having testers and developers working in isolation (total independence)?",
        options: [
            { id: 'a', text: "Testers get too much work" },
            { id: 'b', text: "Loss of communication and delayed feedback on quality" },
            { id: 'c', text: "Code becomes impossible to read" },
            { id: 'd', text: "The client gives up on the project" }
        ],
        correctAnswer: 'b',
        explanation: "Although independence helps find errors, excessive isolation harms the agility and collaboration needed."
    },
    {
        id: 48,
        chapter: 2,
        kLevel: 'K1',
        lo: 'FL-2.1.1',
        text: "In a sequential development model, when should acceptance testing be planned?",
        options: [
            { id: 'a', text: "Only after system testing ends" },
            { id: 'b', text: "During the requirements analysis phase" },
            { id: 'c', text: "At the end of the project, before delivery" },
            { id: 'd', text: "When hardware is delivered" }
        ],
        correctAnswer: 'b',
        explanation: "In the V-Model, acceptance tests are planned in parallel with defining business requirements."
    },
    {
        id: 49,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.1.2',
        text: "What is the role of a tester in an Agile team (Whole Team Approach)?",
        options: [
            { id: 'a', text: "Test only what the programmer asks" },
            { id: 'b', text: "Collaborate with everyone to ensure quality from the start of the User Story" },
            { id: 'c', text: "Write production code while the dev rests" },
            { id: 'd', text: "Be solely responsible for all bugs found" }
        ],
        correctAnswer: 'b',
        explanation: "In Agile, quality is everyone's responsibility; the tester brings critical perspective to all tasks."
    },
    {
        id: 50,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.1.3',
        text: "Test-Driven Development (TDD) mainly focuses on:",
        options: [
            { id: 'a', text: "End-user acceptance tests" },
            { id: 'b', text: "Unit tests written before production code" },
            { id: 'c', text: "Load performance tests" },
            { id: 'd', text: "Exploratory manual tests" }
        ],
        correctAnswer: 'b',
        explanation: "TDD is a development practice where unit tests guide code implementation."
    },
    {
        id: 51,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.2.1',
        text: "The integration test level focuses on detecting defects in:",
        options: [
            { id: 'a', text: "Isolated software modules" },
            { id: 'b', text: "Interfaces and interactions between components or systems" },
            { id: 'c', text: "Undocumented business requirements" },
            { id: 'd', text: "Spelling errors in the manual" }
        ],
        correctAnswer: 'b',
        explanation: "Integration serves to validate if the parts communicate correctly with each other."
    },
    {
        id: 52,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.2.1',
        text: "What is the main difference between Beta and Alpha acceptance tests?",
        options: [
            { id: 'a', text: "Alpha is done by the client; Beta by the developer" },
            { id: 'b', text: "Alpha occurs at the developer's site; Beta occurs at the client's own environment" },
            { id: 'c', text: "There is no difference, they are synonyms" },
            { id: 'd', text: "Alpha is automatic; Beta is manual" }
        ],
        correctAnswer: 'b',
        explanation: "Alpha tests are controlled by the developer; Beta tests are field tests done by real users."
    },
    {
        id: 53,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.3.1',
        text: "Impact analysis is performed to:",
        options: [
            { id: 'a', text: "Measure server performance under load" },
            { id: 'b', text: "Assess the consequences of a change in software and select regression tests" },
            { id: 'c', text: "Decide which tester should be promoted" },
            { id: 'd', text: "Calculate the team's bonus at the end of the year" }
        ],
        correctAnswer: 'b',
        explanation: "Helps identify what may have 'broken' inadvertently after a fix or improvement."
    },
    {
        id: 54,
        chapter: 3,
        kLevel: 'K2',
        lo: 'FL-3.1.2',
        text: "What is a significant advantage of static testing?",
        options: [
            { id: 'a', text: "Allows finding memory leaks during execution" },
            { id: 'b', text: "Reduces correction cost by finding defects before code execution" },
            { id: 'c', text: "Completely replaces the need for dynamic tests" },
            { id: 'd', text: "Are more fun for testers" }
        ],
        correctAnswer: 'b',
        explanation: "Early detection of defects in design documents or code saves time and money."
    },
    {
        id: 55,
        chapter: 3,
        kLevel: 'K1',
        lo: 'FL-3.2.1',
        text: "In a formal review process, what is the activity where participants individually analyze the document?",
        options: [
            { id: 'a', text: "Review initiation" },
            { id: 'b', text: "Individual preparation" },
            { id: 'c', text: "Review meeting" },
            { id: 'd', text: "Follow-up" }
        ],
        correctAnswer: 'b',
        explanation: "Each reviewer must study the material alone before the group discussion."
    },
    {
        id: 56,
        chapter: 3,
        kLevel: 'K2',
        lo: 'FL-3.2.2',
        text: "What is the role of the 'Scribe' (or Recorder) in a review meeting?",
        options: [
            { id: 'a', text: "Correct the errors found" },
            { id: 'b', text: "Record all defects and points discussed" },
            { id: 'c', text: "Lead the meeting and control time" },
            { id: 'd', text: "Approve the final version of the document" }
        ],
        correctAnswer: 'b',
        explanation: "The scribe documents findings so the author can process them later."
    },
    {
        id: 57,
        chapter: 3,
        kLevel: 'K2',
        lo: 'FL-3.2.4',
        text: "An Inspection is characterized by:",
        options: [
            { id: 'a', text: "Being led by the author and without prior preparation" },
            { id: 'b', text: "Formal process with defined roles, metrics, and checklists" },
            { id: 'c', text: "Being just an informal conversation about code" },
            { id: 'd', text: "Occurs only after product launch" }
        ],
        correctAnswer: 'b',
        explanation: "Inspection is the most rigorous and structured type of review defined by ISTQB."
    },
    {
        id: 58,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.1.1',
        text: "White-box test techniques are based on:",
        options: [
            { id: 'a', text: "Requirements specifications and use cases" },
            { id: 'b', text: "Analysis of the internal code structure and control flow" },
            { id: 'c', text: "Guessing where bugs might be" },
            { id: 'd', text: "Opinions from external users" }
        ],
        correctAnswer: 'b',
        explanation: "White-box focuses on the actual architecture and implementation of the software."
    },
    {
        id: 59,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.1',
        text: "You intend to test a field that accepts values from '1' to '12'. What are the values for valid and invalid Equivalence Partitioning coverage?",
        options: [
            { id: 'a', text: "6" },
            { id: 'b', text: "0, 6, 13" },
            { id: 'c', text: "1, 12" },
            { id: 'd', text: "0, 1, 12, 13" }
        ],
        correctAnswer: 'b',
        explanation: "Covers the lower invalid partition (0), the valid one (6), and the upper invalid one (13)."
    },
    {
        id: 60,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.2',
        text: "Boundary Value Analysis (BVA) of 2 values for the interval [10, 20]:",
        options: [
            { id: 'a', text: "10, 20" },
            { id: 'b', text: "9, 10, 20, 21" },
            { id: 'c', text: "10, 11, 19, 20" },
            { id: 'd', text: "0, 10, 20, 100" }
        ],
        correctAnswer: 'b',
        explanation: "We test the boundary and the value immediately outside it for both sides."
    },
    {
        id: 61,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.3',
        text: "If a Decision Table has 3 independent conditions, each with 2 possible values, how many columns will the full table have?",
        options: [
            { id: 'a', text: "3" },
            { id: 'b', text: "6" },
            { id: 'c', text: "8" },
            { id: 'd', text: "9" }
        ],
        correctAnswer: 'c',
        explanation: "Calculation: 2 raised to 3 (2 x 2 x 2) = 8."
    },
    {
        id: 62,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.4',
        text: "In State Transition testing, what is a typical test scenario?",
        options: [
            { id: 'a', text: "A sequence of events leading the system from an initial state to a final one" },
            { id: 'b', text: "Testing all buttons on a web page randomly" },
            { id: 'c', text: "Verifying if the database has 1 million records" },
            { id: 'd', text: "Reviewing source code looking for unused variables" }
        ],
        correctAnswer: 'a',
        explanation: "Focuses on the dynamic behavior flow of the test object."
    },
    {
        id: 63,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.2.5',
        text: "Use Case testing is particularly useful for finding defects in:",
        options: [
            { id: 'a', text: "Internal logic of mathematical algorithms" },
            { id: 'b', text: "Transaction flows and interactions between components" },
            { id: 'c', text: "Network and hardware configuration" },
            { id: 'd', text: "SQL code syntax" }
        ],
        correctAnswer: 'b',
        explanation: "Helps validate if business requirements and user scenarios are satisfied."
    },
    {
        id: 64,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.3.1',
        text: "To obtain 100% statement coverage in code: IF (A > B) THEN X = 0, how many test cases are required?",
        options: [
            { id: 'a', text: "1 (where A > B)" },
            { id: 'b', text: "2 (where A > B and A <= B)" },
            { id: 'c', text: "0" },
            { id: 'd', text: "4" }
        ],
        correctAnswer: 'a',
        explanation: "Just entering the IF is enough to execute the 'X = 0' statement. For statement coverage, verifying the False scenario is not mandatory if there is no ELSE."
    },
    {
        id: 65,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.3.2',
        text: "To obtain 100% branch (decision) coverage in code: IF (A > B) THEN X = 0, how many test cases are required?",
        options: [
            { id: 'a', text: "1" },
            { id: 'b', text: "2 (one True and one False)" },
            { id: 'c', text: "3" },
            { id: 'd', text: "Depends on the value of X" }
        ],
        correctAnswer: 'b',
        explanation: "Branch coverage requires testing both results of the decision (True and False)."
    },
    {
        id: 66,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.4.1',
        text: "Which of the following statements about Error Guessing is TRUE?",
        options: [
            { id: 'a', text: "It should be the only technique used in the project" },
            { id: 'b', text: "Complements other formal techniques using the tester's experience" },
            { id: 'c', text: "Can only be done by programmers" },
            { id: 'd', text: "Based only on formal requirements" }
        ],
        correctAnswer: 'b',
        explanation: "It is an experience-based technique that helps find errors that formal techniques might ignore."
    },
    {
        id: 67,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.4.2',
        text: "In exploratory testing, test execution and design occur:",
        options: [
            { id: 'a', text: "In different months" },
            { id: 'b', text: "Simultaneously, allowing continuous learning" },
            { id: 'c', text: "Only after approval of the detailed test plan" },
            { id: 'd', text: "Only by automated tools" }
        ],
        correctAnswer: 'b',
        explanation: "The tester designs, executes, and learns about the system at the same time."
    },
    {
        id: 68,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.4.3',
        text: "Checklist-based testing uses:",
        options: [
            { id: 'a', text: "A list of points to verify based on past experiences or standards" },
            { id: 'b', text: "Source code line by line" },
            { id: 'c', text: "Only spur-of-the-moment intuition" },
            { id: 'd', text: "Complex mathematical models" }
        ],
        correctAnswer: 'a',
        explanation: "Checklists guide the tester to ensure critical points are not forgotten."
    },
    {
        id: 69,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.1.1',
        text: "A Test Plan must include information about:",
        options: [
            { id: 'a', text: "Only the source code" },
            { id: 'b', text: "Scope, resources, schedule, and risks of test activities" },
            { id: 'c', text: "Individual salary of each employee" },
            { id: 'd', text: "Office shopping list" }
        ],
        correctAnswer: 'b',
        explanation: "The test plan is the central document managing test activities."
    },
    {
        id: 70,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.1.3',
        text: "Which of the following options is an example of an Exit Criterion?",
        options: [
            { id: 'a', text: "Test environment availability" },
            { id: 'b', text: "Reaching planned requirement coverage" },
            { id: 'c', text: "Delivery of user manual" },
            { id: 'd', text: "Hiring a new tester" }
        ],
        correctAnswer: 'b',
        explanation: "Exit criteria define when we have tested enough to consider the phase complete."
    },
    {
        id: 71,
        chapter: 5,
        kLevel: 'K3',
        lo: 'FL-5.1.4',
        text: "Three-point estimate: Optimistic = 4 days, Most Likely = 7 days, Pessimistic = 16 days. What is the estimated value?",
        options: [
            { id: 'a', text: "7 days" },
            { id: 'b', text: "8 days" },
            { id: 'c', text: "9 days" },
            { id: 'd', text: "10 days" }
        ],
        correctAnswer: 'b',
        explanation: "Formula: (4 + (4*7) + 16) / 6 = 48 / 6 = 8."
    },
    {
        id: 72,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.1.5',
        text: "When prioritizing risk-based test cases, which should be executed first?",
        options: [
            { id: 'a', text: "The easiest to automate" },
            { id: 'b', text: "Those covering areas of highest risk to the business" },
            { id: 'c', text: "Those written by the most senior tester" },
            { id: 'd', text: "Order is not important" }
        ],
        correctAnswer: 'b',
        explanation: "We want to detect the most severe failures as early as possible."
    },
    {
        id: 73,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.2.1',
        text: "Which of these is an example of Product Risk?",
        options: [
            { id: 'a', text: "Lack of qualified personnel in the team" },
            { id: 'b', text: "Software might fail under high load conditions" },
            { id: 'c', text: "Hardware supplier might delay delivery" },
            { id: 'd', text: "Project budget might be cut" }
        ],
        correctAnswer: 'b',
        explanation: "Product risks refer to the quality and behavior of the software itself."
    },
    {
        id: 74,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.2.1',
        text: "Which of these is an example of Project Risk?",
        options: [
            { id: 'a', text: "Software calculates taxes incorrectly" },
            { id: 'b', text: "Delays in test environment delivery" },
            { id: 'c', text: "Confusing user interface" },
            { id: 'd', text: "Security vulnerability in the system" }
        ],
        correctAnswer: 'b',
        explanation: "Project risks affect the ability to manage and execute the work."
    },
    {
        id: 75,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.2.4',
        text: "Risk mitigation implies:",
        options: [
            { id: 'a', text: "Ignoring the risk until it happens" },
            { id: 'b', text: "Taking preventive actions to reduce the probability or impact of the risk" },
            { id: 'c', text: "Shifting blame to another team" },
            { id: 'd', text: "Asking the client for more money" }
        ],
        correctAnswer: 'b',
        explanation: "It is a proactive risk management strategy."
    },
    {
        id: 76,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.5.1',
        text: "What must be mandatorily included in a defect report to help the developer?",
        options: [
            { id: 'a', text: "Only the discovery date" },
            { id: 'b', text: "Clear steps to reproduce the failure and tests environment" },
            { id: 'c', text: "Project manager's name" },
            { id: 'd', text: "A critique of the developer's writing style" }
        ],
        correctAnswer: 'b',
        explanation: "Precise technical information is vital for quick anomaly resolution."
    },
    {
        id: 77,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.4.1',
        text: "What is the goal of Configuration Management in testing?",
        options: [
            { id: 'a', text: "Configuring testers' desks" },
            { id: 'b', text: "Ensuring integrity and traceability of all test items (code, docs, tools)" },
            { id: 'c', text: "Accelerating network speed" },
            { id: 'd', text: "Replacing the defect control process" }
        ],
        correctAnswer: 'b',
        explanation: "Ensures we know exactly what we are testing and in which version."
    },
    {
        id: 78,
        chapter: 6,
        kLevel: 'K2',
        lo: 'FL-6.2.1',
        text: "What is a potential risk of introducing a new automation tool?",
        options: [
            { id: 'a', text: "The tool finding too many bugs" },
            { id: 'b', text: "Underestimating the effort needed to maintain test scripts" },
            { id: 'c', text: "Developers learning to test" },
            { id: 'd', text: "Software becoming too fast" }
        ],
        correctAnswer: 'b',
        explanation: "Many automation projects fail because maintenance is ignored or underestimated."
    },
    {
        id: 79,
        chapter: 6,
        kLevel: 'K1',
        lo: 'FL-6.1.1',
        text: "Which of these tools is used to measure the percentage of code exercised by tests?",
        options: [
            { id: 'a', text: "Defect management tool" },
            { id: 'b', text: "Code Coverage tool" },
            { id: 'c', text: "Load testing tool" },
            { id: 'd', text: "Test case design tool" }
        ],
        correctAnswer: 'b',
        explanation: "These tools analyze execution to report which lines or branches were tested."
    },
    {
        id: 80,
        chapter: 6,
        kLevel: 'K1',
        lo: 'FL-6.1.1',
        text: "Tools that support automated test execution are generally called:",
        options: [
            { id: 'a', text: "Test Management Tools" },
            { id: 'b', text: "Test Execution Tools (or Frameworks)" },
            { id: 'c', text: "Debuggers" },
            { id: 'd', text: "Compilers" }
        ],
        correctAnswer: 'b',
        explanation: "They are tools (like Selenium or Cypress) that execute actions on software without human intervention."
    },
    {
        id: 81,
        chapter: 1,
        kLevel: 'K1',
        lo: 'FL-1.1.1',
        text: "Which of the following options describes a test objective related to evaluating work products?",
        options: [
            { id: 'a', text: "Verify if code was written according to style standards" },
            { id: 'b', text: "Evaluate requirements and user stories to identify inconsistencies" },
            { id: 'c', text: "Ensure project finishes within budget" },
            { id: 'd', text: "Replace the need for system tests" }
        ],
        correctAnswer: 'b',
        explanation: "One test objective is evaluating work products (like requirements and design) to prevent defect introduction."
    },
    {
        id: 82,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.2.1',
        text: "How does static testing contribute to software quality?",
        options: [
            { id: 'a', text: "By executing code to find security flaws" },
            { id: 'b', text: "By identifying defects in documents before they turn into code" },
            { id: 'c', text: "By measuring database response time" },
            { id: 'd', text: "By testing the application in production environment" }
        ],
        correctAnswer: 'b',
        explanation: "Static testing allows finding defects in requirements and design, reducing later rework cost."
    },
    {
        id: 83,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.3.1',
        text: "The 'Exhaustive testing is impossible' principle states that:",
        options: [
            { id: 'a', text: "It is not worth testing complex systems" },
            { id: 'b', text: "Testing all combinations of inputs and conditions is unfeasible, except for trivial cases" },
            { id: 'c', text: "Testers should be replaced by artificial intelligence" },
            { id: 'd', text: "Only the happy path should be tested" }
        ],
        correctAnswer: 'b',
        explanation: "Due to infinite paths and data, testing effort must focus on risk management and priorities."
    },
    {
        id: 84,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.4.1',
        text: "During the test analysis activity, what is the tester identifying?",
        options: [
            { id: 'a', text: "Detailed execution steps" },
            { id: 'b', text: "Test conditions based on test basis" },
            { id: 'c', text: "Total budget for tools" },
            { id: 'd', text: "Number of programmers needed" }
        ],
        correctAnswer: 'b',
        explanation: "Test analysis focuses on identifying 'what' must be tested by analyzing requirements and design."
    },
    {
        id: 85,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.4.2',
        text: "Which of the following factors influences the test process in terms of governance?",
        options: [
            { id: 'a', text: "Brand of computers used" },
            { id: 'b', text: "Regulatory requirements and industry standards" },
            { id: 'c', text: "Number of holidays in current month" },
            { id: 'd', text: "Server geographic location" }
        ],
        correctAnswer: 'b',
        explanation: "External factors like laws and regulatory standards define rigor and mandatory artifacts in the test process."
    },
    {
        id: 86,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.4.5',
        text: "In an Agile project, who is typically responsible for deciding test priority based on business value?",
        options: [
            { id: 'a', text: "Independent Tester" },
            { id: 'b', text: "Product Owner in collaboration with the team" },
            { id: 'c', text: "Infrastructure Manager" },
            { id: 'd', text: "HR Department" }
        ],
        correctAnswer: 'b',
        explanation: "PO defines what is most valuable for business, which guides test activity prioritization."
    },
    {
        id: 87,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.5.1',
        text: "The 'Critical Thinking' skill in a tester involves:",
        options: [
            { id: 'a', text: "Accepting all specifications without questioning" },
            { id: 'b', text: "Analyzing information objectively to identify logical flaws and risks" },
            { id: 'c', text: "Criticizing teammates in public" },
            { id: 'd', text: "Memorizing the entire ISTQB manual" }
        ],
        correctAnswer: 'b',
        explanation: "Critical thinking allows the tester to go beyond the obvious and find unforeseen error scenarios."
    },
    {
        id: 88,
        chapter: 1,
        kLevel: 'K1',
        lo: 'FL-1.5.2',
        text: "What does the concept of 'Test Independence' mean?",
        options: [
            { id: 'a', text: "Tester works alone without talking to anyone" },
            { id: 'b', text: "Separation of responsibilities between who develops and who tests to avoid bias" },
            { id: 'c', text: "Tester decides their own salary" },
            { id: 'd', text: "Tests are done only by robots" }
        ],
        correctAnswer: 'b',
        explanation: "Independence guarantees an unbiased view, being more effective in defect detection."
    },
    {
        id: 89,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.1.1',
        text: "In the V-Model, which test level typically validates business requirements?",
        options: [
            { id: 'a', text: "Component testing" },
            { id: 'b', text: "Integration testing" },
            { id: 'c', text: "System testing" },
            { id: 'd', text: "Acceptance testing" }
        ],
        correctAnswer: 'd',
        explanation: "Acceptance testing is the final level validating if the system meets business needs."
    },
    {
        id: 90,
        chapter: 2,
        kLevel: 'K1',
        lo: 'FL-2.1.2',
        text: "What is a characteristic of iterative development models?",
        options: [
            { id: 'a', text: "Software is delivered only once at project end" },
            { id: 'b', text: "Project is divided into short cycles, each resulting in a functional increment" },
            { id: 'c', text: "Regression tests are not necessary" },
            { id: 'd', text: "Requirements can never change" }
        ],
        correctAnswer: 'b',
        explanation: "Models like Scrum allow frequent deliveries and continuous feedback through iterations."
    },
    {
        id: 91,
        chapter: 2,
        kLevel: 'K1',
        lo: 'FL-2.1.3',
        text: "In Test-First approach, the test is created:",
        options: [
            { id: 'a', text: "After code is ready for production" },
            { id: 'b', text: "Before production code is written" },
            { id: 'c', text: "Only if defects remain" },
            { id: 'd', text: "By client after release" }
        ],
        correctAnswer: 'b',
        explanation: "Approaches like TDD require creating the test before functionality to guide design."
    },
    {
        id: 92,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.1.4',
        text: "Which layer of the Test Pyramid should be automated with highest priority due to low cost and fast execution?",
        options: [
            { id: 'a', text: "User Interface (UI) Tests" },
            { id: 'b', text: "Unit / Component Tests" },
            { id: 'c', text: "Manual Acceptance Tests" },
            { id: 'd', text: "System Integration Tests" }
        ],
        correctAnswer: 'b',
        explanation: "Unit tests form the pyramid base and should be the most numerous and automated."
    },
    {
        id: 93,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.2.1',
        text: "System testing focuses on:",
        options: [
            { id: 'a', text: "Interfaces between isolated modules" },
            { id: 'b', text: "The behavior of the whole system and integrated system" },
            { id: 'c', text: "Database optimization only" },
            { id: 'd', text: "Testing individual functions without context" }
        ],
        correctAnswer: 'b',
        explanation: "System testing evaluates the product as a whole against specified requirements."
    },
    {
        id: 94,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.3.1',
        text: "What is the main objective of maintenance testing?",
        options: [
            { id: 'a', text: "Learning how the system works" },
            { id: 'b', text: "Verifying changes and ensuring the system continues to work after fixes or improvements" },
            { id: 'c', text: "Replacing missing documentation" },
            { id: 'd', text: "Training new users" }
        ],
        correctAnswer: 'b',
        explanation: "Maintenance focuses on preserving quality after modifications to operational software."
    },
    {
        id: 95,
        chapter: 3,
        kLevel: 'K2',
        lo: 'FL-3.1.1',
        text: "What is the fundamental difference between static and dynamic testing?",
        options: [
            { id: 'a', text: "Static is manual and dynamic is automatic" },
            { id: 'b', text: "Static analyzes code without execution; dynamic requires software execution" },
            { id: 'c', text: "Static is done by clients and dynamic by testers" },
            { id: 'd', text: "There is no difference between them" }
        ],
        correctAnswer: 'b',
        explanation: "Static testing focuses on defects in documentation/code; dynamic focuses on failures during use."
    },
    {
        id: 96,
        chapter: 3,
        kLevel: 'K2',
        lo: 'FL-3.1.2',
        text: "An advantage of performing static tests early in the lifecycle is:",
        options: [
            { id: 'a', text: "Allowing programmers not to write unit tests" },
            { id: 'b', text: "Identifying gaps in requirements that would be too expensive to fix later" },
            { id: 'c', text: "Increasing project complexity" },
            { id: 'd', text: "Eliminating the need for a test environment" }
        ],
        correctAnswer: 'b',
        explanation: "Preventing errors before coding is the cheapest way to ensure quality."
    },
    {
        id: 97,
        chapter: 3,
        kLevel: 'K1',
        lo: 'FL-3.2.2',
        text: "Who typically leads a Walkthrough meeting?",
        options: [
            { id: 'a', text: "The Moderator" },
            { id: 'b', text: "The Author of the work product" },
            { id: 'c', text: "The Quality Manager" },
            { id: 'd', text: "The End Client" }
        ],
        correctAnswer: 'b',
        explanation: "In a Walkthrough, the author guides participants through the document to explain logic."
    },
    {
        id: 98,
        chapter: 3,
        kLevel: 'K2',
        lo: 'FL-3.2.4',
        text: "Which type of review focuses mainly on achieving consensus and making technical decisions?",
        options: [
            { id: 'a', text: "Informal review" },
            { id: 'b', text: "Inspection" },
            { id: 'c', text: "Technical Review" },
            { id: 'd', text: "Walkthrough" }
        ],
        correctAnswer: 'c',
        explanation: "Technical review gathers experts to evaluate the technical feasibility and compliance of the solution."
    },
    {
        id: 99,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.1.1',
        text: "Black-box test techniques are based on:",
        options: [
            { id: 'a', text: "Source code analysis" },
            { id: 'b', text: "Requirements specification analysis" },
            { id: 'c', text: "Knowledge of security vulnerabilities" },
            { id: 'd', text: "Cyclomatic complexity formulas" }
        ],
        correctAnswer: 'b',
        explanation: "Black-box focuses on visible functional behavior of the system without looking at internal structure."
    },
    {
        id: 100,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.1',
        text: "An input field accepts values from 1 to 10. We intend to cover 100% Equivalence Partitioning (EP). What are the minimum necessary values?",
        options: [
            { id: 'a', text: "5" },
            { id: 'b', text: "0, 5, 11" },
            { id: 'c', text: "1, 10" },
            { id: 'd', text: "0, 1, 10, 11" }
        ],
        correctAnswer: 'b',
        explanation: "3 values are needed: one invalid below (0), one valid (5), and one invalid above (11)."
    },
    {
        id: 101,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.2',
        text: "Boundary Value Analysis (BVA) of 2 values for the price range [10.00€ - 50.00€]:",
        options: [
            { id: 'a', text: "10.00, 50.00" },
            { id: 'b', text: "9.99, 10.00, 50.00, 50.01" },
            { id: 'c', text: "10.00, 11.00, 49.00, 50.00" },
            { id: 'd', text: "0, 10.00, 50.00, 100.00" }
        ],
        correctAnswer: 'b',
        explanation: "We test the exact value on the limit and the first value immediately outside that limit."
    },
    {
        id: 102,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.3',
        text: "A Decision Table has 3 binary conditions (Yes/No). What is the total number of possible rules without simplification?",
        options: [
            { id: 'a', text: "3" },
            { id: 'b', text: "6" },
            { id: 'c', text: "8" },
            { id: 'd', text: "9" }
        ],
        correctAnswer: 'c',
        explanation: "Calculation: 2^3 = 8 rules (columns)."
    },
    {
        id: 103,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.4',
        text: "In state transition testing, a test case represents:",
        options: [
            { id: 'a', text: "An isolated line of code" },
            { id: 'b', text: "A sequence of events that causes state changes in the system" },
            { id: 'c', text: "A complex mathematical calculation" },
            { id: 'd', text: "A list of spelling errors" }
        ],
        correctAnswer: 'b',
        explanation: "Focuses on behavior flow and constraints of movement between states."
    },
    {
        id: 104,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.1',
        text: "Consider a system that assigns discounts: 0% for <100€, 5% for [100€-500€], 10% for >500€. How many minimum test cases for 100% valid EP coverage?",
        options: [
            { id: 'a', text: "1" },
            { id: 'b', text: "2" },
            { id: 'c', text: "3" },
            { id: 'd', text: "5" }
        ],
        correctAnswer: 'c',
        explanation: "There are 3 valid partitions defined, so 3 representative tests are needed."
    },
    {
        id: 105,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.3.1',
        text: "What does statement coverage measure?",
        options: [
            { id: 'a', text: "The number of programmers working" },
            { id: 'b', text: "The percentage of executable instructions in the code that were run by tests" },
            { id: 'c', text: "The number of bugs per line of code" },
            { id: 'd', text: "CPU execution speed" }
        ],
        correctAnswer: 'b',
        explanation: "It is a white-box metric indicating how exhaustively the code was exercised."
    },
    {
        id: 106,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.3.2',
        text: "For a code block: IF (A > 10) { print 'X' }. How many tests for 100% branch coverage?",
        options: [
            { id: 'a', text: "1" },
            { id: 'b', text: "2" },
            { id: 'c', text: "3" },
            { id: 'd', text: "Depends on the value of A" }
        ],
        correctAnswer: 'b',
        explanation: "Even without the ELSE, there are two branches: one where the condition is true and another where it is false (and the system ignores the block)."
    },
    {
        id: 107,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.4.1',
        text: "Error Guessing should be performed:",
        options: [
            { id: 'a', text: "Only by interns for learning" },
            { id: 'b', text: "To complement formal techniques, based on the history of typical failures" },
            { id: 'c', text: "As a total substitute for test design" },
            { id: 'd', text: "Only when source code is not available" }
        ],
        correctAnswer: 'b',
        explanation: "It is a powerful technique that uses human experience to find 'hidden' bugs."
    },
    {
        id: 108,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.4.2',
        text: "What is the main characteristic of exploratory testing?",
        options: [
            { id: 'a', text: "Use of predefined and rigid scripts" },
            { id: 'b', text: "Design and execution of tests occur simultaneously" },
            { id: 'c', text: "Total lack of objectives or logs" },
            { id: 'd', text: "Automatic execution by AI tools" }
        ],
        correctAnswer: 'b',
        explanation: "The tester learns from the system while testing it, adapting scenarios in real time."
    },
    {
        id: 109,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.4.3',
        text: "When using checklist-based tests, the tester:",
        options: [
            { id: 'a', text: "Has no freedom to test outside the list" },
            { id: 'b', text: "Uses the list as a guide to ensure critical areas are not forgotten" },
            { id: 'c', text: "Must memorize the list and throw it away" },
            { id: 'd', text: "Uses the list only to report time spent" }
        ],
        correctAnswer: 'b',
        explanation: "Checklists help maintain consistency and coverage of recurrent topics."
    },
    {
        id: 110,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.5.3',
        text: "In ATDD, tests are used to:",
        options: [
            { id: 'a', text: "Criticize the programmer's work" },
            { id: 'b', text: "Specify intended behavior and validate if the code meets it" },
            { id: 'c', text: "Generate automatic technical documentation" },
            { id: 'd', text: "Replace the Product Owner" }
        ],
        correctAnswer: 'b',
        explanation: "ATDD uses acceptance tests as a guide for correct feature development."
    },
    {
        id: 111,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.1.1',
        text: "The Test Plan should be reviewed and updated:",
        options: [
            { id: 'a', text: "Only at the beginning of the project" },
            { id: 'b', text: "Continuously, to reflect changes in scope, risks, and progress" },
            { id: 'c', text: "Every day after lunch" },
            { id: 'd', text: "Only if the client complains" }
        ],
        correctAnswer: 'b',
        explanation: "Planning is dynamic and must follow the actual evolution of the project."
    },
    {
        id: 112,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.1.3',
        text: "Which of the following options is a typical exit criterion?",
        options: [
            { id: 'a', text: "The team being tired" },
            { id: 'b', text: "Reaching planned code coverage without open critical defects" },
            { id: 'c', text: "The start of the design phase" },
            { id: 'd', text: "Hiring new programmers" }
        ],
        correctAnswer: 'b',
        explanation: "Exit criteria define the level of quality and coverage needed to stop testing."
    },
    {
        id: 113,
        chapter: 5,
        kLevel: 'K3',
        lo: 'FL-5.1.4',
        text: "Ratio-based estimation: If testing historically takes 40% of development time, and development takes 20 days, how much time should be estimated for testing?",
        options: [
            { id: 'a', text: "4 days" },
            { id: 'b', text: "8 days" },
            { id: 'c', text: "12 days" },
            { id: 'd', text: "20 days" }
        ],
        correctAnswer: 'b',
        explanation: "Calculation: 20 x 0.40 = 8 days."
    },
    {
        id: 114,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.1.5',
        text: "When prioritizing test cases, the MOST important factor should be:",
        options: [
            { id: 'a', text: "Alphabetical order of test names" },
            { id: 'b', text: "The risk level associated with the functionality" },
            { id: 'c', text: "Who wrote the test" },
            { id: 'd', text: "The number of lines of test code" }
        ],
        correctAnswer: 'b',
        explanation: "Focusing first on higher risk areas maximizes the value of testing under time constraints."
    },
    {
        id: 115,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.2.1',
        text: "Which of these is an example of project risk?",
        options: [
            { id: 'a', text: "The system fails to process payments" },
            { id: 'b', text: "Lack of proper training for the test team" },
            { id: 'c', text: "Security vulnerability in code" },
            { id: 'd', text: "Slow response time" }
        ],
        correctAnswer: 'b',
        explanation: "Project risks affect execution and management (resources, deadlines), not the software itself."
    },
    {
        id: 116,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.2.2',
        text: "The risk level is determined by the combination of:",
        options: [
            { id: 'a', text: "Cost and Deadline" },
            { id: 'b', text: "Probability of occurrence and Impact (Harm)" },
            { id: 'c', text: "Number of testers and programmers" },
            { id: 'd', text: "Overtime and bonuses" }
        ],
        correctAnswer: 'b',
        explanation: "This matrix allows prioritizing risks that can cause greater harm and are more likely to happen."
    },
    {
        id: 117,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.3.3',
        text: "In a Burndown chart, the ideal line represents:",
        options: [
            { id: 'a', text: "The increase in the number of bugs" },
            { id: 'b', text: "The uniform progress of remaining work over time" },
            { id: 'c', text: "Maximum server speed" },
            { id: 'd', text: "The spent budget" }
        ],
        correctAnswer: 'b',
        explanation: "Helps the team visualize if they will be able to complete the sprint commitment on time."
    },
    {
        id: 118,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.4.1',
        text: "Configuration Management ensures that:",
        options: [
            { id: 'a', text: "Computers are plugged in" },
            { id: 'b', text: "All test items are identified, controlled, and traceable" },
            { id: 'c', text: "Coffee doesn't run out in the meeting room" },
            { id: 'd', text: "The client pays invoices on time" }
        ],
        correctAnswer: 'b',
        explanation: "Ensures we are testing the correct software version with the correct version of data and tools."
    },
    {
        id: 119,
        chapter: 5,
        kLevel: 'K3',
        lo: 'FL-5.5.1',
        text: "A defect report should be written to:",
        options: [
            { id: 'a', text: "Be funny and entertain programmers" },
            { id: 'b', text: "Be objective, factual, and allow the programmer to reproduce the failure" },
            { id: 'c', text: "Hide the real cause of the problem" },
            { id: 'd', text: "Be as long as possible" }
        ],
        correctAnswer: 'b',
        explanation: "Technical clarity is fundamental so the defect can be fixed without wasting time in additional communication."
    },
    {
        id: 120,
        chapter: 6,
        kLevel: 'K2',
        lo: 'FL-6.1.1',
        text: "What is the function of a test management tool?",
        options: [
            { id: 'a', text: "Write source code automatically" },
            { id: 'b', text: "Store and manage test cases, plans, and execution reports" },
            { id: 'c', text: "Replace the Test Manager" },
            { id: 'd', text: "Validate CSS syntax" }
        ],
        correctAnswer: 'b',
        explanation: "Centralizes all testware and metrics, facilitating process governance."
    },
    {
        id: 121,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.2.1',
        text: "What is the main difference between a tester's perspective and a developer's perspective?",
        options: [
            { id: 'a', text: "The developer focuses on building; the tester focuses on verifying and validating if what was built is correct" },
            { id: 'b', text: "The tester must know how to program better than the developer" },
            { id: 'c', text: "There is no difference, both have the same view on code" },
            { id: 'd', text: "The developer focuses on quality; the tester focuses on the deadline" }
        ],
        correctAnswer: 'a',
        explanation: "Mindsets are complementary: one is constructive (Dev) and the other is verifying/critical (Test)."
    },
    {
        id: 122,
        chapter: 1,
        kLevel: 'K1',
        lo: 'FL-1.4.4',
        text: "Which of these activities occurs during the closure of a test level?",
        options: [
            { id: 'a', text: "Execution of first smoke tests" },
            { id: 'b', text: "Delivery of test summary report to stakeholders" },
            { id: 'c', text: "Creation of new user requirements" },
            { id: 'd', text: "Coding bug fixes" }
        ],
        correctAnswer: 'b',
        explanation: "Test closure involves finalizing reports, archiving testware, and evaluating final results."
    },
    {
        id: 123,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.1.4',
        text: "In the context of DevOps, 'Continuous Monitoring' allows testers to:",
        options: [
            { id: 'a', text: "Stop doing manual tests" },
            { id: 'b', text: "Obtain real feedback on system behavior in production" },
            { id: 'c', text: "Control developers' working hours" },
            { id: 'd', text: "Replace requirements analysis" }
        ],
        correctAnswer: 'b',
        explanation: "DevOps extends quality visibility to the actual operation of software in production."
    },
    {
        id: 124,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.2.1',
        text: "System Integration Testing (SIT) focuses on:",
        options: [
            { id: 'a', text: "Interfaces between modules of a single program" },
            { id: 'b', text: "Interactions between different systems or external microservices" },
            { id: 'c', text: "Color of buttons in the graphical interface" },
            { id: 'd', text: "Testing only server hardware" }
        ],
        correctAnswer: 'b',
        explanation: "SIT validates communication between the system under test and other systems in the company ecosystem."
    },
    {
        id: 125,
        chapter: 3,
        kLevel: 'K2',
        lo: 'FL-3.2.1',
        text: "How do reviews help in defect prevention?",
        options: [
            { id: 'a', text: "By forcing programmers to work faster" },
            { id: 'b', text: "By finding ambiguities and omissions in requirements before implementation" },
            { id: 'c', text: "By removing the need for dynamic tests" },
            { id: 'd', text: "By automating test case writing" }
        ],
        correctAnswer: 'b',
        explanation: "Finding an error in the requirement prevents that error from being coded, saving the entire correction cycle."
    },
    {
        id: 126,
        chapter: 3,
        kLevel: 'K2',
        lo: 'FL-3.2.2',
        text: "What is the responsibility of the 'Moderator' in a formal review (Inspection)?",
        options: [
            { id: 'a', text: "Correct found defects" },
            { id: 'b', text: "Manage the review process, lead meetings, and mediate conflicts" },
            { id: 'c', text: "Decide alone if the document is approved" },
            { id: 'd', text: "Write the bug report alone" }
        ],
        correctAnswer: 'b',
        explanation: "The moderator (or facilitator) is the referee and manager of the review process."
    },
    {
        id: 127,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.1',
        text: "An insurance system defines premiums based on age: [18-25], [26-60], [61-99]. How many minimum test cases for 100% valid Equivalence Partitioning coverage?",
        options: [
            { id: 'a', text: "1" },
            { id: 'b', text: "2" },
            { id: 'c', text: "3" },
            { id: 'd', text: "6" }
        ],
        correctAnswer: 'c',
        explanation: "There are 3 valid equivalence classes defined, so we need 3 tests."
    },
    {
        id: 128,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.2',
        text: "For the '25 years' boundary in the interval [18-25], what are the test values using 2-value BVA?",
        options: [
            { id: 'a', text: "25, 26" },
            { id: 'b', text: "24, 25" },
            { id: 'c', text: "25, 27" },
            { id: 'd', text: "18, 25" }
        ],
        correctAnswer: 'a',
        explanation: "We test the exact boundary (valid) and the first value outside the interval (invalid)."
    },
    {
        id: 129,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.3',
        text: "In a Decision Table, what happens if two different rules result in the same action?",
        options: [
            { id: 'a', text: "Must be deleted" },
            { id: 'b', text: "Can potentially be simplified/collapsed if they share common conditions" },
            { id: 'c', text: "It is a serious design error" },
            { id: 'd', text: "The system will always fail" }
        ],
        correctAnswer: 'b',
        explanation: "Table simplification reduces the number of test cases while maintaining the same logical coverage."
    },
    {
        id: 130,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.3.1',
        text: "Code: `IF (Status == 'VIP') THEN Discount = 0.20`. How many tests for 100% statement coverage?",
        options: [
            { id: 'a', text: "1 (Status = 'VIP')" },
            { id: 'b', text: "2 (VIP and Non-VIP)" },
            { id: 'c', text: "0" },
            { id: 'd', text: "Depends on Discount" }
        ],
        correctAnswer: 'a',
        explanation: "Just entering the condition is enough to execute the discount assignment instruction."
    },
    {
        id: 131,
        chapter: 5,
        kLevel: 'K3',
        lo: 'FL-5.1.4',
        text: "Ratio-based estimation: If testing 1 User Story takes 4 hours, how much time do we estimate for 10 User Stories?",
        options: [
            { id: 'a', text: "4 hours" },
            { id: 'b', text: "40 hours" },
            { id: 'c', text: "14 hours" },
            { id: 'd', text: "Depends on internet speed" }
        ],
        correctAnswer: 'b',
        explanation: "The linear ratio is applied to the predicted backlog volume."
    },
    {
        id: 132,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.1.3',
        text: "Which of these is a typical entry criterion for system testing?",
        options: [
            { id: 'a', text: "The client accepted the product" },
            { id: 'b', text: "Integration testing was successfully completed and the environment is available" },
            { id: 'c', text: "All production bugs were fixed" },
            { id: 'd', text: "Budget was exhausted" }
        ],
        correctAnswer: 'b',
        explanation: "Entry criteria ensure minimum conditions to start the test phase effectively."
    },
    {
        id: 133,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.2.1',
        text: "The 'lack of team experience with a new technology' is a:",
        options: [
            { id: 'a', text: "Product risk" },
            { id: 'b', text: "Project risk" },
            { id: 'c', text: "Software bug" },
            { id: 'd', text: "External business risk" }
        ],
        correctAnswer: 'b',
        explanation: "Human resource and technical skill problems affect project management."
    },
    {
        id: 134,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.2.2',
        text: "In a risk-based approach, areas with higher probability and higher impact should be:",
        options: [
            { id: 'a', text: "Tested last" },
            { id: 'b', text: "Tested first and more rigorously" },
            { id: 'c', text: "Ignored to save time" },
            { id: 'd', text: "Tested only by interns" }
        ],
        correctAnswer: 'b',
        explanation: "Testing prioritizes where potential harm to the business is greatest."
    },
    {
        id: 135,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.3.1',
        text: "What is the most common test metric to measure execution progress?",
        options: [
            { id: 'a', text: "Number of lines of code written per day" },
            { id: 'b', text: "Percentage of executed test cases (Pass / Fail / Pending)" },
            { id: 'c', text: "Number of coffees consumed by the team" },
            { id: 'd', text: "CPU speed during testing" }
        ],
        correctAnswer: 'b',
        explanation: "Provides immediate visibility on how much is left to complete the test plan."
    },
    {
        id: 136,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.5.1',
        text: "If a developer cannot reproduce a defect, what should the tester do?",
        options: [
            { id: 'a', text: "Yell at the developer" },
            { id: 'b', text: "Provide additional information, such as logs, screenshots, and exact input data" },
            { id: 'c', text: "Delete the defect from the system" },
            { id: 'd', text: "Ignore and move to the next test" }
        ],
        correctAnswer: 'b',
        explanation: "Technical collaboration through evidence is key to resolving complex defects."
    },
    {
        id: 137,
        chapter: 6,
        kLevel: 'K1',
        lo: 'FL-6.1.1',
        text: "Tools that support dynamic testing through recording and replaying actions are called:",
        options: [
            { id: 'a', text: "Static analysis tools" },
            { id: 'b', text: "Test execution tools (Capture/Playback)" },
            { id: 'c', text: "Requirement management tools" },
            { id: 'd', text: "Text editors" }
        ],
        correctAnswer: 'b',
        explanation: "Allow automating repetitive interactions with the user interface."
    },
    {
        id: 138,
        chapter: 6,
        kLevel: 'K2',
        lo: 'FL-6.2.1',
        text: "A risk of automation is 'false sense of security'. This means:",
        options: [
            { id: 'a', text: "Automated tests never fail" },
            { id: 'b', text: "Thinking software is bug-free just because automated tests passed" },
            { id: 'c', text: "The automation tool is a virus" },
            { id: 'd', text: "Manual testers will lose their jobs" }
        ],
        correctAnswer: 'b',
        explanation: "Automation tests only what it was programmed to test; new bugs may exist in non-automated areas."
    },
    {
        id: 139,
        chapter: 1,
        kLevel: 'K1',
        lo: 'FL-1.1.2',
        text: "A defect (bug) in software is:",
        options: [
            { id: 'a', text: "A visible failure to the user" },
            { id: 'b', text: "An imperfection or error in code or documentation" },
            { id: 'c', text: "An error made by a robot" },
            { id: 'd', text: "The same as a system failure" }
        ],
        correctAnswer: 'b',
        explanation: "The defect is 'latent' in the work product. It only becomes a failure if executed and causes incorrect behavior."
    },
    {
        id: 140,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.1.3',
        text: "In ATDD, the benefit of collaboration among the 'Three Amigos' (Business, Dev, QA) is:",
        options: [
            { id: 'a', text: "Reduce the number of meetings" },
            { id: 'b', text: "Ensure a common and shared vision of what should be built" },
            { id: 'c', text: "Decide who pays for lunch" },
            { id: 'd', text: "Replace the need for regression tests" }
        ],
        correctAnswer: 'b',
        explanation: "Aligns everyone's expectations before coding begins."
    },
    {
        id: 141,
        chapter: 3,
        kLevel: 'K2',
        lo: 'FL-3.2.4',
        text: "What is the main characteristic of an Informal Review?",
        options: [
            { id: 'a', text: "Mandatory use of entry and exit criteria" },
            { id: 'b', text: "Absence of a documented formal process (e.g., Buddy Check)" },
            { id: 'c', text: "Led only by top managers" },
            { id: 'd', text: "Occurs only once a year" }
        ],
        correctAnswer: 'b',
        explanation: "It is fast and cheap, excellent for continuous feedback without bureaucracy."
    },
    {
        id: 142,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.1.1',
        text: "The main characteristic of specification-based techniques is:",
        options: [
            { id: 'a', text: "Analyzing source code to create tests" },
            { id: 'b', text: "Using requirement documentation to derive test cases" },
            { id: 'c', text: "Testing without looking at requirements" },
            { id: 'd', text: "Relying only on what the programmer says" }
        ],
        correctAnswer: 'b',
        explanation: "Also called black-box, they focus on compliance with what was requested."
    },
    {
        id: 143,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.1.1',
        text: "Who should approve the Test Plan?",
        options: [
            { id: 'a', text: "Only the junior tester" },
            { id: 'b', text: "Relevant stakeholders (e.g., Project Manager, Client)" },
            { id: 'c', text: "The cleaning staff" },
            { id: 'd', text: "No one, the plan is secret" }
        ],
        correctAnswer: 'b',
        explanation: "The plan must have the commitment of interested parties to ensure resources and deadlines."
    },
    {
        id: 144,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.3',
        text: "Simplified Decision Table: If a condition does not affect the final action in any case, it should be:",
        options: [
            { id: 'a', text: "Marked as 'N/A' or '-' (Don't Care) and potentially removed" },
            { id: 'b', text: "Written in red" },
            { id: 'c', text: "Tested exhaustively" },
            { id: 'd', text: "Reported as a bug" }
        ],
        correctAnswer: 'a',
        explanation: "Simplifying the table helps focus on test scenarios that really matter."
    },
    {
        id: 145,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.2.1',
        text: "What is the objective of regression testing?",
        options: [
            { id: 'a', text: "To prove software is 100% bug-free" },
            { id: 'b', text: "To verify that changes have not negatively affected unchanged areas of the system" },
            { id: 'c', text: "To increase system speed" },
            { id: 'd', text: "To replace acceptance testing" }
        ],
        correctAnswer: 'b',
        explanation: "Ensures system stability after maintenance or new features."
    },
    {
        id: 146,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.2.1',
        text: "What is the relationship between Testing and Quality?",
        options: [
            { id: 'a', text: "Testing creates quality" },
            { id: 'b', text: "Testing measures quality and provides information for improvement" },
            { id: 'c', text: "Testing has no relationship with quality" },
            { id: 'd', text: "Quality depends only on the software price" }
        ],
        correctAnswer: 'b',
        explanation: "Testing does not 'inject' quality but exposes the lack of it so it can be corrected."
    },
    {
        id: 147,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.2.4',
        text: "The 'Risk Transfer' strategy involves:",
        options: [
            { id: 'a', text: "Ignoring the risk" },
            { id: 'b', text: "Buying insurance or passing responsibility to a third party" },
            { id: 'c', text: "Asking the tester to solve the technical problem" },
            { id: 'd', text: "Increasing manual tests" }
        ],
        correctAnswer: 'b',
        explanation: "Often used for financial or infrastructure risks (e.g., cloud providers)."
    },
    {
        id: 148,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.5.2',
        text: "In BDD, writing criteria in Gherkin format helps to:",
        options: [
            { id: 'a', text: "Hide system logic" },
            { id: 'b', text: "Facilitate automation and communication between technical and non-technical stakeholders" },
            { id: 'c', text: "Remove the need for programmers" },
            { id: 'd', text: "Make code slower" }
        ],
        correctAnswer: 'b',
        explanation: "Structured natural language bridges business and technology."
    },
    {
        id: 149,
        chapter: 6,
        kLevel: 'K1',
        lo: 'FL-6.1.1',
        text: "Which tool is used to inject faults into the system and see how it reacts?",
        options: [
            { id: 'a', text: "Fault Injection tool" },
            { id: 'b', text: "Excel" },
            { id: 'c', text: "Compiler" },
            { id: 'd', text: "Defect management tool" }
        ],
        correctAnswer: 'a',
        explanation: "Often used in robustness and security testing."
    },
    {
        id: 150,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.3.3',
        text: "The test summary report should focus on:",
        options: [
            { id: 'a', text: "Criticizing by name the programmers who failed" },
            { id: 'b', text: "Evaluating the test object against exit criteria and defined objectives" },
            { id: 'c', text: "Listing the cost of electricity spent" },
            { id: 'd', text: "Replacing the need for a final meeting" }
        ],
        correctAnswer: 'b',
        explanation: "Provides the basis for the 'Go / No-Go' decision."
    },
    {
        id: 151,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.4.2',
        text: "The Test Charter should contain:",
        options: [
            { id: 'a', text: "Only the system password" },
            { id: 'b', text: "The scope, objectives, and areas to explore in the session" },
            { id: 'c', text: "The complete source code" },
            { id: 'd', text: "The CEO's signature" }
        ],
        correctAnswer: 'b',
        explanation: "Gives focus to exploration without being rigid like a step-by-step script."
    },
    {
        id: 152,
        chapter: 1,
        kLevel: 'K1',
        lo: 'FL-1.3.1',
        text: "The 'Defects cluster together' principle is based on:",
        options: [
            { id: 'a', text: "Murphy's Law" },
            { id: 'b', text: "Pareto Principle (80/20)" },
            { id: 'c', text: "Theory of Relativity" },
            { id: 'd', text: "Law of Least Effort" }
        ],
        correctAnswer: 'b',
        explanation: "The majority of defects are concentrated in a few critical or complex areas."
    },
    {
        id: 153,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.1.5',
        text: "What is a way to apply Shift-Left in Agile?",
        options: [
            { id: 'a', text: "Do not test until the last sprint" },
            { id: 'b', text: "Involve testers in backlog refinement and acceptance criteria" },
            { id: 'c', text: "Remove testers from the team" },
            { id: 'd', text: "Test only the database" }
        ],
        correctAnswer: 'b',
        explanation: "Allows detecting logic failures before code is written."
    },
    {
        id: 154,
        chapter: 3,
        kLevel: 'K2',
        lo: 'FL-3.2.5',
        text: "A critical success factor for reviews is:",
        options: [
            { id: 'a', text: "Ensuring the meeting lasts all day" },
            { id: 'b', text: "Defining clear objectives and choosing the right people for roles" },
            { id: 'c', text: "Not reading the document before the meeting" },
            { id: 'd', text: "Only the manager speaks" }
        ],
        correctAnswer: 'b',
        explanation: "Review effectiveness depends on preparation and technical competence of reviewers."
    },
    {
        id: 155,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.1.1',
        text: "Which technique is most suitable for finding defects in rarely used logic paths?",
        options: [
            { id: 'a', text: "Equivalence Partitioning" },
            { id: 'b', text: "White-box techniques (structural)" },
            { id: 'c', text: "Guessing based on common use" },
            { id: 'd', text: "Alpha acceptance test" }
        ],
        correctAnswer: 'b',
        explanation: "Structural focus allows exercising 'corners' of the code that normal use reaches."
    },
    {
        id: 156,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.1.7',
        text: "Test Quadrant Q4 (Technology/Product) focuses on:",
        options: [
            { id: 'a', text: "Basic features" },
            { id: 'b', text: "Non-functional tests like performance, security, and robustness" },
            { id: 'c', text: "Unit tests" },
            { id: 'd', text: "Paper prototypes" }
        ],
        correctAnswer: 'b',
        explanation: "Evaluates high-level technical properties that protect the product."
    },
    {
        id: 157,
        chapter: 6,
        kLevel: 'K2',
        lo: 'FL-6.2.1',
        text: "What is the objective of a tool pilot project?",
        options: [
            { id: 'a', text: "Replace all other tests for a month" },
            { id: 'b', text: "Learn about tool strengths/weaknesses and define usage patterns" },
            { id: 'c', text: "Fire testers who don't like the tool" },
            { id: 'd', text: "Write the tool manual" }
        ],
        correctAnswer: 'b',
        explanation: "Verifies if the tool actually adapts to the organization's context."
    },
    {
        id: 158,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.2.4',
        text: "An 'Invalid' state transition occurs when:",
        options: [
            { id: 'a', text: "The system freezes" },
            { id: 'b', text: "An event happens in a state where that transition is not allowed" },
            { id: 'c', text: "The programmer doesn't like the code" },
            { id: 'd', text: "The test passes on the first try" }
        ],
        correctAnswer: 'b',
        explanation: "Testing invalid transitions is crucial for system robustness."
    },
    {
        id: 159,
        chapter: 1,
        kLevel: 'K1',
        lo: 'FL-1.4.3',
        text: "A test oracle is used to:",
        options: [
            { id: 'a', text: "Predict the future of the project" },
            { id: 'b', text: "Provide the basis for comparison with the actual result of execution" },
            { id: 'c', text: "Automate the database" },
            { id: 'd', text: "Control the budget" }
        ],
        correctAnswer: 'b',
        explanation: "It can be a legacy system, a manual, or an expert's knowledge."
    },
    {
        id: 160,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.1.3',
        text: "Exit criteria serve to decide:",
        options: [
            { id: 'a', text: "When to start testing" },
            { id: 'b', text: "When to stop testing because objectives were met" },
            { id: 'c', text: "Who should be fired" },
            { id: 'd', text: "Where to save files" }
        ],
        correctAnswer: 'b',
        explanation: "They provide an objective basis for knowing if the testing effort was sufficient."
    }
];
