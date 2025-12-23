export const questions = [
    // ==========================================
    // EXAM SET A - Version 1.7
    // ==========================================
    {
        id: 1,
        chapter: 1,
        kLevel: 'K1',
        lo: 'FL-1.1.1',
        text: "Which of the following statements describe a valid test objective?",
        options: [
            { id: 'a', text: "To prove that there are no unfixed defects in the system under test" },
            { id: 'b', text: "To prove that there will be no failures after the implementation of the system into production" },
            { id: 'c', text: "To reduce the risk level of the test object and to build confidence in the quality level" },
            { id: 'd', text: "To verify that there are no untested combinations of inputs" }
        ],
        correctAnswer: 'c',
        explanation: "Testing finds defects and failures which reduces the level of risk and at the same time gives more confidence in the quality level of the test object. It is impossible to prove the absence of defects (Principle 1)."
    },
    {
        id: 2,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.2.1',
        text: "Which of the following options shows an example of test activities that contribute to success?",
        options: [
            { id: 'a', text: "Having testers involved during various software development lifecycle (SDLC) activities will help to detect defects in work products" },
            { id: 'b', text: "Testers try not to disturb the developers while coding, so that the developers write better code" },
            { id: 'c', text: "Testers collaborating with end users help to improve the quality of defect reports during component integration and system testing" },
            { id: 'd', text: "Certified testers will design much better test cases than non-certified testers" }
        ],
        correctAnswer: 'a',
        explanation: "Tester involvement from the beginning of the SDLC increases understanding of design decisions and allows early defect detection."
    },
    {
        id: 3,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.3.1',
        text: "You have been assigned as a tester to a team producing a new system incrementally. You have noticed that no changes have been made to the existing regression test cases for several iterations and no new regression defects were identified. Your manager is happy, but you are not. Which testing principle explains your skepticism?",
        options: [
            { id: 'a', text: "Tests wear out" },
            { id: 'b', text: "Absence-of-defects fallacy" },
            { id: 'c', text: "Defects cluster together" },
            { id: 'd', text: "Exhaustive testing is impossible" }
        ],
        correctAnswer: 'a',
        explanation: "This principle means that if the same tests are repeated over and over again, eventually these tests no longer find any new defects."
    },
    {
        id: 4,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.4.1',
        text: "You work in a team that develops a mobile application for food ordering. In the current iteration the team decided to implement the payment functionality. Which of the following activities is a part of test analysis?",
        options: [
            { id: 'a', text: "Estimating that testing the integration with the payment service will take 8 person-days" },
            { id: 'b', text: "Deciding that the team should test if it is possible to properly share payment between many users" },
            { id: 'c', text: "Using boundary value analysis (BVA) to derive the test data for the test cases that check the correct payment processing for the minimum allowed amount to be paid" },
            { id: 'd', text: "Analyzing the discrepancy between the actual result and expected result after executing a test case that checks the process of payment with a credit card, and reporting a defect" }
        ],
        correctAnswer: 'b',
        explanation: "This is an example of defining test conditions which is a part of test analysis."
    },
    {
        id: 5,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.4.2',
        text: "Which of the following factors have a SIGNIFICANT influence on the test approach?\n\ni. The SDLC\nii. The number of defects detected in previous projects\niii. The identified product risks\niv. New regulatory requirements forcing formal white-box testing\nv. The test environment setup",
        options: [
            { id: 'a', text: "i, ii have significant influence" },
            { id: 'b', text: "i, iii, iv have significant influence" },
            { id: 'c', text: "ii, iv, v have significant influence" },
            { id: 'd', text: "iii, v have significant influence" }
        ],
        correctAnswer: 'b',
        explanation: "The SDLC (i), product risks (iii), and regulatory requirements (iv) have significant influence on the test approach."
    },
    {
        id: 6,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.4.5',
        text: "Which TWO of the following tasks belong MAINLY to a testing role?",
        type: 'multiple',
        options: [
            { id: 'a', text: "Configure test environments" },
            { id: 'b', text: "Maintain the product backlog" },
            { id: 'c', text: "Design solutions to new requirements" },
            { id: 'd', text: "Create the test plan" },
            { id: 'e', text: "Analyze the test basis" }
        ],
        correctAnswer: ['a', 'e'],
        explanation: "Configuring environments and analyzing the test basis are technical tasks done by testers."
    },
    {
        id: 7,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.5.1',
        text: "Which of the following skills (i-v) are the MOST important skills of a tester?\n\ni. Having domain knowledge\nii. Creating a product vision\niii. Being a good team player\niv. Planning and organizing the work of the team\nv. Critical thinking",
        options: [
            { id: 'a', text: "ii and iv are important" },
            { id: 'b', text: "i, iii and v are important" },
            { id: 'c', text: "i, ii and v are important" },
            { id: 'd', text: "iii and iv are important" }
        ],
        correctAnswer: 'b',
        explanation: "Domain knowledge (i), teamwork (iii), and critical thinking (v) are key tester skills."
    },
    {
        id: 8,
        chapter: 1,
        kLevel: 'K1',
        lo: 'FL-1.5.2',
        text: "How is the whole team approach present in the interactions between testers and business representatives?",
        options: [
            { id: 'a', text: "Business representatives decide on test automation approaches" },
            { id: 'b', text: "Testers help business representatives to define a test strategy" },
            { id: 'c', text: "Business representatives are not part of the whole team approach" },
            { id: 'd', text: "Testers help business representatives to create suitable acceptance tests" }
        ],
        correctAnswer: 'd',
        explanation: "Testers work closely with business representatives to support and collaborate on creating suitable acceptance tests."
    },
    {
        id: 9,
        chapter: 2,
        kLevel: 'K1',
        lo: 'FL-2.1.2',
        text: "Consider the following rule: \"for every SDLC activity there is a corresponding test activity\". In which SDLC models does this rule hold?",
        options: [
            { id: 'a', text: "Only in sequential development models" },
            { id: 'b', text: "Only in iterative development models" },
            { id: 'c', text: "Only in iterative and incremental development models" },
            { id: 'd', text: "In sequential, incremental, and iterative development models" }
        ],
        correctAnswer: 'd',
        explanation: "This rule holds for all SDLC models."
    },
    {
        id: 10,
        chapter: 2,
        kLevel: 'K1',
        lo: 'FL-2.1.3',
        text: "Which of the following statements BEST describes the acceptance test-driven development (ATDD) approach?",
        options: [
            { id: 'a', text: "In ATDD, acceptance criteria are typically created based on the given/when/then format" },
            { id: 'b', text: "In ATDD, test cases are mainly created at component testing and are code-oriented" },
            { id: 'c', text: "In ATDD, tests are created, based on acceptance criteria to drive the development of the related software" },
            { id: 'd', text: "In ATDD, tests are based on the desired behavior of the software, which makes it easier for team members to understand them" }
        ],
        correctAnswer: 'c',
        explanation: "In ATDD, tests are written from acceptance criteria as part of the design process to drive development."
    },
    {
        id: 11,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.1.5',
        text: "Which of the following is NOT an example of the shift-left approach?",
        options: [
            { id: 'a', text: "Reviewing the user requirements before they are formally accepted by the stakeholders" },
            { id: 'b', text: "Writing a component test before the corresponding code is written" },
            { id: 'c', text: "Executing a performance efficiency test for a component during component testing" },
            { id: 'd', text: "Writing a test script before setting up the configuration management process" }
        ],
        correctAnswer: 'd',
        explanation: "Test scripts must be subject to configuration management; creating them before the process is set up is not part of shift-left."
    },
    {
        id: 12,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.1.6',
        text: "Which of the arguments below would you use to convince your manager to organize retrospectives at the end of each release cycle?",
        options: [
            { id: 'a', text: "Retrospectives are very popular these days and clients would appreciate it if we added them to our processes" },
            { id: 'b', text: "Organizing retrospectives will save the organization money because without them end user representatives do not provide immediate feedback about the product" },
            { id: 'c', text: "Process weaknesses identified during the retrospective can be analyzed and serve as a to do list for the organization's continuous process improvement program" },
            { id: 'd', text: "Retrospectives embrace five values including courage and respect, which are crucial to maintain continuous improvement in the organization" }
        ],
        correctAnswer: 'c',
        explanation: "Regular retrospectives with follow-up activities are critical for continuous improvement of development and testing."
    },
    {
        id: 13,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.2.1',
        text: "Which types of failures (1-4) fit which test levels (A-D) BEST?\n\n1. Failures in system behavior as it deviates from the user's business needs\n2. Failures in communication between components\n3. Failures in logic in the code\n4. Failures in not correctly implemented business rules\n\nA. Component testing\nB. Component integration testing\nC. System testing\nD. Acceptance testing",
        tableHtml: `<div class="overflow-x-auto my-4 p-2 rounded border border-slate-300 bg-white text-black">
          <table class="w-full text-sm text-black">
            <tr class="font-bold border-b bg-gray-50"><td class="p-2 border-r border-gray-200">Failure Type</td><td class="p-2">Test Level</td></tr>
            <tr><td class="p-2 border-r border-gray-200">1. Deviation from business needs</td><td class="p-2">D. Acceptance testing</td></tr>
            <tr><td class="p-2 border-r border-gray-200">2. Communication between components</td><td class="p-2">B. Component integration testing</td></tr>
            <tr><td class="p-2 border-r border-gray-200">3. Logic in the code</td><td class="p-2">A. Component testing</td></tr>
            <tr><td class="p-2 border-r border-gray-200">4. Business rules implementation</td><td class="p-2">C. System testing</td></tr>
          </table>
        </div>`,
        options: [
            { id: 'a', text: "1D, 2B, 3A, 4C" },
            { id: 'b', text: "1D, 2B, 3C, 4A" },
            { id: 'c', text: "1B, 2A, 3D, 4C" },
            { id: 'd', text: "1C, 2B, 3A, 4D" }
        ],
        correctAnswer: 'a',
        explanation: "1-D (Acceptance), 2-B (Component Integration), 3-A (Component), 4-C (System)."
    },
    {
        id: 14,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.2.3',
        text: "You are testing a user story with three acceptance criteria: AC1, AC2 and AC3. AC1 is covered by test case TC1, AC2 by TC2, and AC3 by TC3. The test execution history had three test runs on three consecutive versions of the software as follows:",
        tableHtml: `<div class="overflow-x-auto my-4 p-2 rounded border border-slate-300 bg-white text-black">
          <table class="min-w-full text-center text-sm">
            <tr class="font-bold border-b border-gray-300 bg-gray-100">
              <th class="p-2"></th>
              <th class="p-2 border-l border-gray-300">Execution 1</th>
              <th class="p-2 border-l border-gray-300">Execution 2</th>
              <th class="p-2 border-l border-gray-300">Execution 3</th>
            </tr>
            <tr class="border-b border-gray-200">
              <td class="p-2 font-bold">TC1</td>
              <td class="p-2 border-l border-gray-300">(1) Failed</td>
              <td class="p-2 border-l border-gray-300">(4) Passed</td>
              <td class="p-2 border-l border-gray-300">(7) Passed</td>
            </tr>
            <tr class="border-b border-gray-200">
              <td class="p-2 font-bold">TC2</td>
              <td class="p-2 border-l border-gray-300">(2) Passed</td>
              <td class="p-2 border-l border-gray-300">(5) Failed</td>
              <td class="p-2 border-l border-gray-300">(8) Passed</td>
            </tr>
            <tr>
              <td class="p-2 font-bold">TC3</td>
              <td class="p-2 border-l border-gray-300">(3) Failed</td>
              <td class="p-2 border-l border-gray-300">(6) Failed</td>
              <td class="p-2 border-l border-gray-300">(9) Passed</td>
            </tr>
          </table>
        </div>\nTests are repeated once you are informed that all defects found in the test run are corrected and a new version of the software is available. Which of the above tests are executed as regression tests?`,
        options: [
            { id: 'a', text: "Only 4, 7, 8, 9" },
            { id: 'b', text: "Only 5, 7" },
            { id: 'c', text: "Only 4, 6, 8, 9" },
            { id: 'd', text: "Only 5, 6" }
        ],
        correctAnswer: 'b',
        explanation: "TC2 passed in Execution 1, so (5) is a regression test. TC1 passed in Execution 2, so (7) is a regression test."
    },
    {
        id: 15,
        chapter: 3,
        kLevel: 'K2',
        lo: 'FL-3.1.2',
        text: "Which of the following is NOT a benefit of static testing?",
        options: [
            { id: 'a', text: "Having less expensive defect management due to the ease of detecting defects later in the SDLC" },
            { id: 'b', text: "Fixing defects found during static testing is generally much less expensive than fixing defects found during dynamic testing" },
            { id: 'c', text: "Finding coding defects that might not have been found by only performing dynamic testing" },
            { id: 'd', text: "Detecting gaps and inconsistencies in requirements" }
        ],
        correctAnswer: 'a',
        explanation: "Finding and fixing defects later in the SDLC is more costly; static testing aims for early detection."
    },
    {
        id: 16,
        chapter: 3,
        kLevel: 'K1',
        lo: 'FL-3.2.1',
        text: "Which of the following is a benefit of early and frequent feedback?",
        options: [
            { id: 'a', text: "It improves the test process for future projects" },
            { id: 'b', text: "It forces customers to prioritize their requirements based on agreed risks" },
            { id: 'c', text: "It provides a measure for the quality of changes" },
            { id: 'd', text: "It helps avoid requirements misunderstandings" }
        ],
        correctAnswer: 'd',
        explanation: "Early and frequent feedback can prevent misunderstandings about requirements."
    },
    {
        id: 17,
        chapter: 3,
        kLevel: 'K2',
        lo: 'FL-3.2.4',
        text: "The reviews being used in your organization have the following attributes:\n\n- There is the role of a scribe\n- The main purpose is to evaluate quality\n- The meeting is led by the author of the work product\n- There is individual preparation\n- A review report is produced\n\nWhich of the following review types is MOST likely being used?",
        options: [
            { id: 'a', text: "Informal review" },
            { id: 'b', text: "Walkthrough" },
            { id: 'c', text: "Technical review" },
            { id: 'd', text: "Inspection" }
        ],
        correctAnswer: 'b',
        explanation: "Evaluating quality and having the author lead the meeting are key objectives of a walkthrough."
    },
    {
        id: 18,
        chapter: 3,
        kLevel: 'K1',
        lo: 'FL-3.2.5',
        text: "Which of these statements is NOT a factor that contributes to successful reviews?",
        options: [
            { id: 'a', text: "Participants should dedicate adequate time for the review" },
            { id: 'b', text: "Splitting large work products into small parts to make the required effort less intense" },
            { id: 'c', text: "Participants should avoid behaviors that might indicate boredom, exasperation, or hostility to other participants" },
            { id: 'd', text: "Failures found should be acknowledged, appreciated, and handled objectively" }
        ],
        correctAnswer: 'd',
        explanation: "During reviews one can find defects, not failures."
    },
    {
        id: 19,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.1.1',
        text: "Which of the following is a characteristic of experience-based test techniques?",
        options: [
            { id: 'a', text: "Test cases are created based on detailed design information" },
            { id: 'b', text: "Items tested within the interface code section are used to measure coverage" },
            { id: 'c', text: "The test techniques heavily rely on the tester's knowledge of the software and the business domain" },
            { id: 'd', text: "The test cases are used to identify deviations from the requirements" }
        ],
        correctAnswer: 'c',
        explanation: "Experience-based techniques use the tester's knowledge of the software, environment, and likely defects."
    },
    {
        id: 20,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.1',
        text: "You are testing a simplified apartment search form which has only two search criteria:\n\n- floor (with three possible options: ground floor; first floor; second or higher floor)\n- garden type (with three possible options: no garden; small garden; large garden)\n\nEach of the apartment on the ground floor has a garden, apartments on higher floors don't. The form has a built-in validation mechanism that will not allow you to use the search criteria which violate this rule. Each test has two input values: floor and garden type. You want to apply equivalence partitioning (EP) to cover each floor and each garden type in your tests. What is the minimal number of test cases to achieve 100% EP coverage for valid partitions?",
        options: [
            { id: 'a', text: "3" },
            { id: 'b', text: "4" },
            { id: 'c', text: "5" },
            { id: 'd', text: "6" }
        ],
        correctAnswer: 'b',
        explanation: "We need 4 tests: TC1 (ground, small), TC2 (ground, large), TC3 (first floor, no garden), TC4 (higher floor, no garden)."
    },
    {
        id: 21,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.2',
        text: "You are testing a system that calculates the final course grade for a given student. The final grade is assigned based on the final result, according to the following rules:\n\n- 0-50 points: failed\n- 51-60 points: fair\n- 61-70 points: satisfactory\n- 71-80 points: good\n- 81-90 points: very good\n- 91-100 points: excellent\n\nYou have prepared the following set of test cases:",
        tableHtml: `<div class="overflow-x-auto my-4 p-2 rounded border border-slate-300 bg-white text-black">
          <table class="min-w-full text-center text-sm">
            <tr class="font-bold border-b border-gray-300 bg-gray-100">
              <th class="p-2"></th>
              <th class="p-2 border-l border-gray-300">Final result</th>
              <th class="p-2 border-l border-gray-300">Final grade</th>
            </tr>
            <tr class="border-b border-gray-200"><td class="p-2 font-bold">TC1</td><td class="p-2 border-l border-gray-300">91</td><td class="p-2 border-l border-gray-300">excellent</td></tr>
            <tr class="border-b border-gray-200"><td class="p-2 font-bold">TC2</td><td class="p-2 border-l border-gray-300">50</td><td class="p-2 border-l border-gray-300">failed</td></tr>
            <tr class="border-b border-gray-200"><td class="p-2 font-bold">TC3</td><td class="p-2 border-l border-gray-300">81</td><td class="p-2 border-l border-gray-300">very good</td></tr>
            <tr class="border-b border-gray-200"><td class="p-2 font-bold">TC4</td><td class="p-2 border-l border-gray-300">60</td><td class="p-2 border-l border-gray-300">fair</td></tr>
            <tr class="border-b border-gray-200"><td class="p-2 font-bold">TC5</td><td class="p-2 border-l border-gray-300">70</td><td class="p-2 border-l border-gray-300">satisfactory</td></tr>
            <tr><td class="p-2 font-bold">TC6</td><td class="p-2 border-l border-gray-300">80</td><td class="p-2 border-l border-gray-300">good</td></tr>
          </table>
        </div>\nWhat is the 2-value boundary value analysis (BVA) coverage for the final result that is achieved with the existing test cases?`,
        options: [
            { id: 'a', text: "50%" },
            { id: 'b', text: "60%" },
            { id: 'c', text: "33.3%" },
            { id: 'd', text: "100%" }
        ],
        correctAnswer: 'a',
        explanation: "There are 12 boundary points (0, 50, 51, 60, 61, 70, 71, 80, 81, 90, 91, 100). The 6 test cases cover 6 points (50%)."
    },
    {
        id: 22,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.3',
        text: "Decision table describing bike rental features:",
        tableHtml: `<div class="overflow-x-auto my-4 p-2 rounded border border-slate-300 bg-white text-black">
          <table class="min-w-full text-xs text-center border-collapse">
            <tr class="font-bold border-b border-gray-300 bg-gray-100">
              <th class="p-1 border-r">Conditions</th><th class="p-1">R1</th><th class="p-1">R2</th><th class="p-1">R3</th><th class="p-1">R4</th><th class="p-1">R5</th><th class="p-1">R6</th><th class="p-1">R7</th><th class="p-1">R8</th>
            </tr>
            <tr class="border-b"><td class="p-1 font-bold border-r">Being a member</td><td>T</td><td>T</td><td>T</td><td>T</td><td>F</td><td>F</td><td>F</td><td>F</td></tr>
            <tr class="border-b"><td class="p-1 font-bold border-r">Missed deadline</td><td>T</td><td>F</td><td>T</td><td>F</td><td>T</td><td>F</td><td>F</td><td>T</td></tr>
            <tr class="border-b"><td class="p-1 font-bold border-r">15th rental</td><td>F</td><td>F</td><td>T</td><td>T</td><td>F</td><td>F</td><td>T</td><td>T</td></tr>
            <tr class="bg-blue-50 font-bold italic"><td class="p-1 border-r text-blue-800">Actions</td><td colspan="8"></td></tr>
            <tr class="border-b"><td class="p-1 font-bold border-r">20% discount</td><td></td><td>X</td><td></td><td>X</td><td></td><td></td><td></td><td></td></tr>
            <tr><td class="p-1 font-bold border-r">Gift T-Shirt</td><td></td><td></td><td>X</td><td>X</td><td></td><td></td><td></td><td>X</td></tr>
          </table>
        </div>\nBased ONLY on the feature description (Members get discount, missed deadlines cancel it, gift after 15th rental for members), which rule is impossible?`,
        options: [
            { id: 'a', text: "R4" },
            { id: 'b', text: "R2" },
            { id: 'c', text: "R6" },
            { id: 'd', text: "R8" }
        ],
        correctAnswer: 'd',
        explanation: "Rule R8 is incorrect because only members can receive a gift T-shirt, but here the user is not a member (F)."
    },
    {
        id: 23,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.4',
        text: "You test a system modeled by the state transition diagram (States: INIT, DEBUG MODE, IN OPERATION, ON HOLD, OFF). What is the MINIMAL number of test cases to achieve valid transitions coverage?",
        diagramImage: "/images/q23-state-diagram.png",
        options: [
            { id: 'a', text: "4" },
            { id: 'b', text: "2" },
            { id: 'c', text: "7" },
            { id: 'd', text: "3" }
        ],
        correctAnswer: 'd',
        explanation: "We need at least three test cases to cover all valid transitions (e.g., test/done, run/error/done, run/pause/resume/done)."
    },
    {
        id: 24,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.3.1',
        text: "Your test suite achieved 100% statement coverage. What is the consequence of this fact?",
        options: [
            { id: 'a', text: "Each instruction in the code that contains a defect has been executed at least once" },
            { id: 'b', text: "Any test suite containing more test cases than your test suite will also achieve 100% statement coverage" },
            { id: 'c', text: "Each path in the code has been executed at least once" },
            { id: 'd', text: "Every combination of input values has been tested at least once" }
        ],
        correctAnswer: 'a',
        explanation: "100% statement coverage means every statement, including defective ones, must have been executed at least once."
    },
    {
        id: 25,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.3.3',
        text: "Which of the following is NOT true for white-box testing?",
        options: [
            { id: 'a', text: "During white-box testing the entire software implementation is considered" },
            { id: 'b', text: "White-box coverage metrics can help identify additional tests to increase code coverage" },
            { id: 'c', text: "White-box test techniques can be used in static testing" },
            { id: 'd', text: "White-box testing can help identify gaps in requirements implementation" }
        ],
        correctAnswer: 'd',
        explanation: "White-box techniques cannot identify missing implementation because they are based on the structure, not requirements."
    },
    {
        id: 26,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.4.1',
        text: "Which of the following BEST describes the concept behind error guessing?",
        options: [
            { id: 'a', text: "Error guessing involves using your knowledge and experience of defects found in the past and typical errors made by developers" },
            { id: 'b', text: "Error guessing involves using your personal experience of development and the errors you made as a developer" },
            { id: 'c', text: "Error guessing requires you to imagine that you are the user of the test object and to guess errors the user could make interacting with it" },
            { id: 'd', text: "Error guessing requires you to rapidly duplicate the development task to identify the sort of errors a developer might make" }
        ],
        correctAnswer: 'a',
        explanation: "The tester tries to guess developer errors and object defects based on past experience."
    },
    {
        id: 27,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.4.2',
        text: "In your project there has been a delay in the release of a brand-new application and test execution started late, but you have very detailed domain knowledge and good analytical skills. The full list of requirements has not yet been shared with the team, but management is asking for some test results to be presented. Which test technique fits BEST in this situation?",
        options: [
            { id: 'a', text: "Checklist-based testing" },
            { id: 'b', text: "Error guessing" },
            { id: 'c', text: "Exploratory testing" },
            { id: 'd', text: "Branch testing" }
        ],
        correctAnswer: 'c',
        explanation: "Exploratory testing is most useful with few known specifications and pressing timelines."
    },
    {
        id: 28,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.5.2',
        text: "Which of the following BEST describes the way acceptance criteria can be documented?",
        options: [
            { id: 'a', text: "Performing retrospectives to determine the actual needs of the stakeholders regarding a given user story" },
            { id: 'b', text: "Using the given/when/then format to describe an example test condition related to a given user story" },
            { id: 'c', text: "Using verbal communication to reduce the risk of misunderstanding the acceptance criteria by others" },
            { id: 'd', text: "Documenting risks related to a given user story in a test plan to facilitate the risk-based testing of a given user story" }
        ],
        correctAnswer: 'b',
        explanation: "Given/When/Then is the standard way to document acceptance criteria."
    },
    {
        id: 29,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.5.3',
        text: "Consider the following user story:\nAs an Editor\nI want to review content before it is published\nso that I can ensure the grammar is correct\n\nand its acceptance criteria:\n• The user can log in to the content management system with \"Editor\" role\n• The editor can view existing content pages\n• The editor can edit the page content\n• The editor can add markup comments\n• The editor can save changes\n• The editor can reassign to the \"content owner\" role to make updates\n\nWhich of the following is the BEST example of an ATDD test for this user story?",
        options: [
            { id: 'a', text: "Test if the editor can save the document after edit the page content" },
            { id: 'b', text: "Test if the content owner can log in and make updates to the content" },
            { id: 'c', text: "Test if the editor can schedule the edited content for publication" },
            { id: 'd', text: "Test if the editor can reassign to another editor to make updates" }
        ],
        correctAnswer: 'a',
        explanation: "a) Is correct. This test covers two acceptance criteria: one about editing the document and one about saving changes."
    },
    {
        id: 30,
        chapter: 5,
        kLevel: 'K1',
        lo: 'FL-5.1.2',
        text: "How do testers add value to iteration and release planning?",
        options: [
            { id: 'a', text: "Testers determine the priority of the user stories to be developed" },
            { id: 'b', text: "Testers focus only on the functional aspects of the system to be tested" },
            { id: 'c', text: "Testers participate in the detailed risk identification and risk assessment of user stories" },
            { id: 'd', text: "Testers guarantee the release of high-quality software through early test design during the release planning" }
        ],
        correctAnswer: 'c',
        explanation: "According to the syllabus, this is one of the ways testers add value to iteration and release planning."
    },
    {
        id: 31,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.1.3',
        text: "Which TWO of the following options are the exit criteria for testing a system?",
        type: 'multiple',
        options: [
            { id: 'a', text: "Test environment readiness" },
            { id: 'b', text: "The ability to log in to the test object by the tester" },
            { id: 'c', text: "Estimated defect density is reached" },
            { id: 'd', text: "Requirements are translated into given/when/then format" },
            { id: 'e', text: "Regression tests are automated" }
        ],
        correctAnswer: ['c', 'e'],
        explanation: "Estimated defect density (c) and automation of regression tests (e) are measures of diligence/completion for exit criteria."
    },
    {
        id: 32,
        chapter: 5,
        kLevel: 'K3',
        lo: 'FL-5.1.4',
        text: "Your team uses the three-point estimation technique to estimate the test effort for a new high-risk feature. The following estimates were made:\n• Most optimistic estimation: 2 person-hours\n• Most likely estimation: 11 person-hours\n• Most pessimistic estimation: 14 person-hours\n\nWhat is the final estimate?",
        options: [
            { id: 'a', text: "9 person-hours" },
            { id: 'b', text: "14 person-hours" },
            { id: 'c', text: "11 person-hours" },
            { id: 'd', text: "10 person-hours" }
        ],
        correctAnswer: 'd',
        explanation: "d) Is correct. In the three-point estimation technique: E = (optimistic + 4 * most likely + pessimistic) / 6. In this case: E = (2 + (4 * 11) + 14) / 6 = 10."
    },
    {
        id: 33,
        chapter: 5,
        kLevel: 'K3',
        lo: 'FL-5.1.5',
        text: "You are testing a mobile application that allows users to find a nearby restaurant based on the type of food they want to eat. Consider the following list of test cases, priorities (i.e., a smaller number means a higher priority), and dependencies:",
        tableHtml: `<div class="overflow-x-auto my-4 p-2 rounded border border-slate-300 bg-white text-black">
          <table class="min-w-full text-center text-sm">
            <tr class="font-bold border-b border-gray-300 bg-gray-100">
              <th class="p-2 border-r">TC No</th><th class="p-2 border-r">Test condition covered</th><th class="p-2 border-r">Priority</th><th class="p-2">Logical dependency</th>
            </tr>
            <tr class="border-b"><td>TC 001</td><td>Select type of food</td><td>3</td><td>none</td></tr>
            <tr class="border-b"><td>TC 002</td><td>Select restaurant</td><td>2</td><td>TC 001</td></tr>
            <tr class="border-b"><td>TC 003</td><td>Get direction</td><td>1</td><td>TC 002</td></tr>
            <tr class="border-b"><td>TC 004</td><td>Call restaurant</td><td>2</td><td>TC 002</td></tr>
            <tr><td>TC 005</td><td>Make reservation</td><td>3</td><td>TC 002</td></tr>
          </table>
        </div>\nWhich of the following test cases should be executed as the third one?`,
        options: [
            { id: 'a', text: "TC 003" },
            { id: 'b', text: "TC 005" },
            { id: 'c', text: "TC 002" },
            { id: 'd', text: "TC 001" }
        ],
        correctAnswer: 'a',
        explanation: "TC 001 (1st) then TC 002 (2nd) for dependencies. After that, TC 003 has the highest priority (1)."
    },
    {
        id: 34,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.1.7',
        text: "Consider the following test categories (1-4) and agile testing quadrants (A-D):\n\n1. Usability testing\n2. Component testing\n3. Functional testing\n4. Reliability testing\n\nA. Agile testing quadrant Q1: technology facing, supporting the development team\nB. Agile testing quadrant Q2: business facing, supporting the development team\nC. Agile testing quadrant Q3: business facing, critique the product\nD. Agile testing quadrant Q4: technology facing, critique the product\n\nHow do the following test categories map onto the agile testing quadrants?",
        options: [
            { id: 'a', text: "1C, 2A, 3B, 4D" },
            { id: 'b', text: "1D, 2A, 3C, 4B" },
            { id: 'c', text: "1C, 2B, 3D, 4A" },
            { id: 'd', text: "1D, 2B, 3C, 4A" }
        ],
        correctAnswer: 'a',
        explanation: "a) Is correct. Usability testing is in Q3 (1-C). Component testing is in Q1 (2-A). Functional testing is in Q2 (3-B). Reliability testing is in Q4 (4-D)."
    },
    {
        id: 35,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.2.4',
        text: "During a risk analysis the following risk was identified and assessed:\n• Risk: Response time is too long to generate a report\n• Risk likelihood: medium; risk impact: high\n• Response to risk:\n   - An independent test team performs performance efficiency testing during system testing\n   - A selected sample of end users performs alpha testing and beta testing before the release\n\nWhat measure is proposed to be taken in response to this analyzed risk?",
        options: [
            { id: 'a', text: "Risk acceptance" },
            { id: 'b', text: "Contingency plan" },
            { id: 'c', text: "Risk mitigation" },
            { id: 'd', text: "Risk transfer" }
        ],
        correctAnswer: 'c',
        explanation: "c) Is correct. The proposed actions are related to testing, which is a form of risk mitigation."
    },
    {
        id: 36,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.3.3',
        text: "Which work product can be used by an agile team to show the amount of work that has been completed and total work remaining for a given iteration?",
        options: [
            { id: 'a', text: "Acceptance criteria" },
            { id: 'b', text: "Defect report" },
            { id: 'c', text: "Test completion report" },
            { id: 'd', text: "Burndown chart" }
        ],
        correctAnswer: 'd',
        explanation: "Burndown charts are updated daily and continuously show work progress."
    },
    {
        id: 37,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.4.1',
        text: "You need to update one of the automated test scripts to be in line with a new requirement. Which process indicates that you create a new version of the test script in the test repository?",
        options: [
            { id: 'a', text: "Traceability management" },
            { id: 'b', text: "Maintenance testing" },
            { id: 'c', text: "Configuration management" },
            { id: 'd', text: "Requirements engineering" }
        ],
        correctAnswer: 'c',
        explanation: "c) Is correct. To support testing, configuration management may involve the version control of all test items."
    },
    {
        id: 38,
        chapter: 5,
        kLevel: 'K3',
        lo: 'FL-5.5.1',
        text: "You received the following defect report from the developers stating that the anomaly described in this test report is not reproducible.\n\nWhat critical information is MISSING from this test report that would have been useful for the developers?",
        tableHtml: `<div class="border border-slate-300 p-4 rounded bg-white text-black text-sm font-mono text-left shadow-sm">
      <div class="border-b border-slate-200 pb-2 mb-2 font-bold text-lg">Application hangs up</div>
      <div class="text-xs text-gray-600 mb-2">2022-May-03 – John Doe – Rejected</div>
      <p class="mb-2">The application hangs up after entering "Test input: $ä" in the Name field on the new user creation screen.</p>
      <p class="mb-2">Tried to log off, log in with test_admin01 account, same issue. Tried with other test admin accounts, same issue.</p>
      <p class="mb-2">No error message received; log (see attached) contains fatal error notification.</p>
      <p class="mb-2">Based on the test case TC-1305, the application should accept the provided input and create the user.</p>
      <p class="font-semibold text-red-600">Please fix with high priority, this feature is related to REQ-0012, which is a critical new business requirement.</p>
    </div>`,
        options: [
            { id: 'a', text: "Expected result and actual result" },
            { id: 'b', text: "References and defect status" },
            { id: 'c', text: "Test environment and test item" },
            { id: 'd', text: "Priority and severity" }
        ],
        correctAnswer: 'c',
        explanation: "c) Is correct. We do not know in which test environment the anomaly was detected, and we also do not know which application (and its version) is affected."
    },
    {
        id: 39,
        chapter: 6,
        kLevel: 'K2',
        lo: 'FL-6.1.1',
        text: "Which test activity does a data preparation tool support?",
        options: [
            { id: 'a', text: "Test monitoring and test control" },
            { id: 'b', text: "Test analysis" },
            { id: 'c', text: "Test design and test implementation" },
            { id: 'd', text: "Test completion" }
        ],
        correctAnswer: 'c',
        explanation: "Test design and implementation include creating or acquiring testware like test data."
    },
    {
        id: 40,
        chapter: 6,
        kLevel: 'K1',
        lo: 'FL-6.2.1',
        text: "Which item correctly identifies a potential risk of performing test automation?",
        options: [
            { id: 'a', text: "It may introduce unknown regressions in production" },
            { id: 'b', text: "Sufficient efforts to maintain testware may not be properly allocated" },
            { id: 'c', text: "Testing tools and associated testware may not be sufficiently relied upon" },
            { id: 'd', text: "It may reduce the time allocated for manual testing" }
        ],
        correctAnswer: 'b',
        explanation: "Wrong allocation of effort to maintain testware is a primary risk."
    },

    // ==========================================
    // EXAM SET B - Version 1.7
    // ==========================================
    {
        id: 41,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.2.1',
        text: "Which of the following is an example of why testing is necessary?",
        options: [
            { id: 'a', text: "Dynamic testing increases quality by causing test objects to fail in ways that could never be achieved by the users" },
            { id: 'b', text: "Static testing is used by developers to identify failures in their code earlier than can be achieved through dynamic testing" },
            { id: 'c', text: "Static analysis provides evidence to customers that the elements of the system that provide no outputs are fit for release" },
            { id: 'd', text: "Reviews increase the quality of requirements specifications and lead to fewer changes being needed in derived work products" }
        ],
        correctAnswer: 'd',
        explanation: "Is correct. Reviews are a form of static testing that can be applied from the very start of the software development lifecycle and are used to find defects that can be removed before subsequent development activities waste effort on faulty requirements."
    },
    {
        id: 42,
        chapter: 1,
        kLevel: 'K1',
        lo: 'FL-1.2.2',
        text: "Which of the following statements about quality assurance (QA) and/or quality control (QC) is correct?",
        options: [
            { id: 'a', text: "QA is performed as part of testing" },
            { id: 'b', text: "Testing is performed as part of QC" },
            { id: 'c', text: "Testing is another term for QC" },
            { id: 'd', text: "Testing is performed as part of QA" }
        ],
        correctAnswer: 'b',
        explanation: "Is correct. QC aims to achieve appropriate levels of quality by focusing on identifying and correcting product defects. Testing is a significant part of QC and helps to uncover these defects."
    },
    {
        id: 43,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.3.1',
        text: "One of the 'principles of testing' states that exhaustive testing is impossible. Which of the following is an example of addressing this principle in practice?",
        options: [
            { id: 'a', text: "Creating test cases that cover every possible specified output" },
            { id: 'b', text: "Documenting all possible test input variations and prioritizing these based on importance" },
            { id: 'c', text: "Starting testing as early as possible with reviews and other static testing approaches" },
            { id: 'd', text: "Using equivalence partitioning and boundary value analysis to generate test cases" }
        ],
        correctAnswer: 'd',
        explanation: "Is correct. The use of equivalence partitioning and boundary value analysis to generate test cases is one way to address the principle as these test techniques provide a systematic way to derive a finite subset of all possible test cases."
    },
    {
        id: 44,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.4.1',
        text: "Which test activity involves working with test data requirements, test conditions, test environment requirements and test cases?",
        options: [
            { id: 'a', text: "Test design" },
            { id: 'b', text: "Test execution" },
            { id: 'c', text: "Test analysis" },
            { id: 'd', text: "Test implementation" }
        ],
        correctAnswer: 'a',
        explanation: "Is correct. Test design involves using test conditions to create test cases and other necessary testware, such as test data requirements and test charters for exploratory testing."
    },
    {
        id: 45,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.4.2',
        text: "Which of the following is MOST likely to impact how testing is performed for a given test object?",
        options: [
            { id: 'a', text: "The average level of experience of the organization's marketing team" },
            { id: 'b', text: "The knowledge of users that a new system is being developed for them" },
            { id: 'c', text: "The number of years' experience of the members of the test team" },
            { id: 'd', text: "The end user's organizational structure for a commercial music streaming application" }
        ],
        correctAnswer: 'c',
        explanation: "Is correct. The number of years' experience of the members of the performance efficiency testing team will help to determine the capabilities and knowledge that the team members will apply when they are testing."
    },
    {
        id: 46,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.4.4',
        text: "Which of the following statements is a CORRECT example of the value of traceability?",
        options: [
            { id: 'a', text: "Traceability between the mitigated risks and test cases that passed provides a means of determining the level of residual risk" },
            { id: 'b', text: "Traceability between user requirements and test results provides a means of measuring project progress against business goals" },
            { id: 'c', text: "Traceability between testers and test cases that failed provides a means of determining the skill level of the testers" },
            { id: 'd', text: "Traceability between the identified risks and written test conditions provides a means of determining which risks are worth testing" }
        ],
        correctAnswer: 'b',
        explanation: "Is correct. Traceability between user requirements and test results provides an indication of which user requirements have been tested and so provides a means of measuring project progress against business goals."
    },
    {
        id: 47,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.5.1',
        text: "Which of the following is MOST likely to be an example of a tester using a generic skill when testing?",
        options: [
            { id: 'a', text: "The tester's deep knowledge of a variety of computer games meant that they got on well with one of the developers who was also into gaming" },
            { id: 'b', text: "The tester was a former pilot and was better able to understand the acceptance criteria for the helicopter control system" },
            { id: 'c', text: "The tester previously worked as a programmer and used their skills in this area to better communicate with the business analysts" },
            { id: 'd', text: "The tester was very careful not to make mistakes when they methodically generated test cases prior to starting their exploratory testing session" }
        ],
        correctAnswer: 'b',
        explanation: "Is correct. Domain knowledge that can be used to understand and communicate with end-users and business representatives is one of the generic skills required by testers."
    },
    {
        id: 48,
        chapter: 1,
        kLevel: 'K1',
        lo: 'FL-1.5.2',
        text: "Which of the following is an advantage of the whole-team approach?",
        options: [
            { id: 'a', text: "It allows team members to take on any role at any time" },
            { id: 'b', text: "It only needs a single team to support the complete development project" },
            { id: 'c', text: "It embeds business representatives alongside developers in the same team" },
            { id: 'd', text: "It generates a team synergy that benefits the entire project" }
        ],
        correctAnswer: 'd',
        explanation: "Is correct. By leveraging the diverse skill sets of each team member most effectively, the whole-team approach fosters superior team dynamics, promotes robust communication and collaboration, and generates a team synergy that benefits the entire project."
    },
    {
        id: 49,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.1.1',
        text: "Which of the following statements about the chosen software development lifecycle is CORRECT?",
        options: [
            { id: 'a', text: "If agile software development is used, automation of system tests replaces the need for regression testing" },
            { id: 'b', text: "If a sequential development model is used, then the dynamic testing is typically restricted to later in the lifecycle" },
            { id: 'c', text: "If an iterative development model is used, then component testing is typically performed manually by developers" },
            { id: 'd', text: "If an incremental development model is used, then static testing is done in early increments and dynamic testing in later increments" }
        ],
        correctAnswer: 'b',
        explanation: "Is correct. If a sequential development model is used, then early in the lifecycle no code is available for execution, so static testing is performed. Later, when code is available, dynamic testing is possible."
    },
    {
        id: 50,
        chapter: 2,
        kLevel: 'K1',
        lo: 'FL-2.1.2',
        text: "Which of the following is a good testing practice that applies to all software development lifecycles?",
        options: [
            { id: 'a', text: "Testers should review work products as part of the next development phase" },
            { id: 'b', text: "Testers should review work products as soon as drafts are available" },
            { id: 'c', text: "Testers should review work products before test analysis and test design begin" },
            { id: 'd', text: "Testers should review work products immediately after they are published" }
        ],
        correctAnswer: 'b',
        explanation: "Is correct. Testers should review work products as soon as drafts are available to enable early testing as part of a shift-left approach."
    },
    {
        id: 51,
        chapter: 2,
        kLevel: 'K1',
        lo: 'FL-2.1.3',
        text: "Which of the following is an example of a test-first approach to development?",
        options: [
            { id: 'a', text: "Test-Driven Development" },
            { id: 'b', text: "Coverage-Driven Development" },
            { id: 'c', text: "Quality-Driven Development" },
            { id: 'd', text: "Feature-Driven Development" }
        ],
        correctAnswer: 'a',
        explanation: "Is correct. Test-Driven Development (TDD) is a well-known example of a test-first approach to development."
    },
    {
        id: 52,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.1.4',
        text: "Which of the following statements about DevOps is CORRECT?",
        options: [
            { id: 'a', text: "To speed up releases, continuous integration is used to encourage developers to submit code quickly without the need to complete component testing" },
            { id: 'b', text: "To be able to update and release systems on a more frequent basis, many automated regression tests are required to reduce the risk of regression" },
            { id: 'c', text: "To treat both developers and operations equally, the testers will allocate more effort to release testing by operations using a shift-right approach" },
            { id: 'd', text: "To create increased synergy between testers, developers and operations, the testing must become fully automated with no manual testing" }
        ],
        correctAnswer: 'b',
        explanation: "Is correct. DevOps enhances testing by providing automated regression testing that minimizes regression risk, promoting frequent and reliable releases."
    },
    {
        id: 53,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.2.1',
        text: "Which of the following is MOST likely to be performed as part of system testing?",
        options: [
            { id: 'a', text: "Security testing of a credit management system by an independent test team" },
            { id: 'b', text: "Testing the interface of a currency exchange system with an external banking system" },
            { id: 'c', text: "Beta testing of a remote learning system by courseware developers" },
            { id: 'd', text: "Testing interactions between the user interface and database of a human resources system" }
        ],
        correctAnswer: 'a',
        explanation: "Is correct. System testing examines the behavior and capabilities of the complete system and covers non-functional testing, such as security testing, often by an independent team."
    },
    {
        id: 54,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.2.3',
        text: "Which of the following statements is CORRECT?",
        options: [
            { id: 'a', text: "Regression tests increase in number as the project progresses, whereas the number of confirmation tests decreases as the project progresses" },
            { id: 'b', text: "Regression tests are created and run when the test object is fixed, whereas confirmation tests are run whenever the test object is enhanced" },
            { id: 'c', text: "Regression testing is concerned with checking that the operational environment remains unchanged, whereas confirmation testing is concerned with testing changes to the test object" },
            { id: 'd', text: "Regression testing is concerned with adverse effects in unchanged code, whereas confirmation testing is concerned with testing changed code" }
        ],
        correctAnswer: 'd',
        explanation: "Is correct. Regression testing ensures that changes do not have negative effects on unchanged software. Confirmation testing verifies that a defect has been fixed in the changed code."
    },
    {
        id: 55,
        chapter: 3,
        kLevel: 'K2',
        lo: 'FL-3.1.3',
        text: "Which of the following is an example of a defect that can be found by static testing but <b>NOT</b> by dynamic testing?",
        options: [
            { id: 'a', text: "Lack of usability provided through the user interface" },
            { id: 'b', text: "Code with no path that reaches it" },
            { id: 'c', text: "Poor response times for most of the expected users" },
            { id: 'd', text: "Required features that are not implemented in the code" }
        ],
        correctAnswer: 'b',
        explanation: "Is correct. A code review (static) can detect code that cannot be reached by any path, while dynamic tests can only exercise reachable code."
    },
    {
        id: 56,
        chapter: 3,
        kLevel: 'K1',
        lo: 'FL-3.2.1',
        text: "Which of the following is a benefit of early and frequent stakeholder feedback?",
        options: [
            { id: 'a', text: "Managers are aware of which developers are less productive" },
            { id: 'b', text: "It allows project managers to prioritize their stakeholder interactions" },
            { id: 'c', text: "It facilitates early communication of potential quality issues" },
            { id: 'd', text: "End users better understand why the delivery of the work product is delayed" }
        ],
        correctAnswer: 'c',
        explanation: "Is correct. Obtaining feedback from stakeholders early and often facilitates early communication of potential quality issues and prevents misunderstandings."
    },
    {
        id: 57,
        chapter: 3,
        kLevel: 'K2',
        lo: 'FL-3.2.2',
        text: "Given the following task descriptions:\n1. The quality characteristics to be evaluated and the exit criteria are selected\n2. Everyone has access to the work product\n3. Anomalies are identified in the work product\n4. Anomalies are discussed\n\nAnd the following review activities:\nA. Individual review\nB. Review initiation\nC. Planning\nD. Communication and analysis\n\nWhich of the following BEST matches the task descriptions and activities?",
        options: [
            { id: 'a', text: "1B, 2C, 3D, 4A" },
            { id: 'b', text: "1B, 2D, 3C, 4A" },
            { id: 'c', text: "1C, 2A, 3B, 4D" },
            { id: 'd', text: "1C, 2B, 3A, 4D" }
        ],
        correctAnswer: 'd',
        explanation: "Is correct. 1-Planning (C), 2-Review initiation (B), 3-Individual review (A), 4-Communication and analysis (D)."
    },
    {
        id: 58,
        chapter: 3,
        kLevel: 'K1',
        lo: 'FL-3.2.3',
        text: "Given the following roles in reviews:\n1. Scribe\n2. Review leader\n3. Facilitator\n4. Manager\n\nAnd the following responsibilities in reviews:\nA. Ensures the effective running of review meetings and setting up a safe environment\nB. Records review information, such as decisions and new anomalies found\nC. Decides what is to be reviewed and provides resources (staff/time)\nD. Takes overall responsibility for the review (organizing when/where)\n\nWhich of the following BEST matches the roles and responsibilities?",
        options: [
            { id: 'a', text: "1A, 2B, 3D, 4C" },
            { id: 'b', text: "1A, 2C, 3B, 4D" },
            { id: 'c', text: "1B, 2D, 3A, 4C" },
            { id: 'd', text: "1B, 2D, 3C, 4A" }
        ],
        correctAnswer: 'c',
        explanation: "Is correct. 1-Scribe (B), 2-Review leader (D), 3-Facilitator (A), 4-Manager (C)."
    },
    {
        id: 59,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.1.1',
        text: "Which of the following statements BEST describes the difference between decision table testing and branch testing?",
        options: [
            { id: 'a', text: "In decision table testing, the test cases are derived from the decision statements in the code. In branch testing, the test cases are derived from knowledge of the control flow." },
            { id: 'b', text: "In decision table testing, the test cases are derived from the specification. In branch testing the test cases are based on anticipation of potential defects." },
            { id: 'c', text: "In decision table testing, the test cases are derived from knowledge of the control flow. In branch testing, test cases are derived from the specification." },
            { id: 'd', text: "In decision table testing, the test cases are independent of how the software is implemented. In branch testing, test cases can be created only after the design or implementation." }
        ],
        correctAnswer: 'd',
        explanation: "Is correct. Decision table testing is a black-box technique (independent of implementation). Branch testing is a white-box technique (dependent on design and code)."
    },
    {
        id: 60,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.1',
        text: "Customers of the TestWash car wash chain have cards with a record of the number of washes they have bought so far. The initial value is 0. After entering the car wash, the system increases the number on the card by one. For every tenth wash the system gives a 10% discount, and for every twentieth wash, the system gives a further 40% discount (i.e., a 50% discount in total). Which of the following sets of input data (numbers of the current wash) achieves the highest equivalence partition coverage?",
        options: [
            { id: 'a', text: "19, 20, 30" },
            { id: 'b', text: "11, 12, 20" },
            { id: 'c', text: "1, 10, 50" },
            { id: 'd', text: "10, 29, 30, 31" }
        ],
        correctAnswer: 'a',
        explanation: "Is correct. 19 covers 'no discount', 20 covers '50% discount', and 30 covers '10% discount'. These three cover all valid equivalence partitions."
    },
    {
        id: 61,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.2',
        text: "You are testing a form that verifies the correctness of the length of the password. The password length is correct if it has between 6 and 12 characters inclusive. At first, the form is empty (length=0). Your set of test cases achieves 100% 2-value boundary value coverage. The team decided to move to 100% 3-value boundary value coverage. Which additional password lengths should be tested?",
        options: [
            { id: 'a', text: "4, 5, 13, 14" },
            { id: 'b', text: "7, 11" },
            { id: 'c', text: "1, 5, 13" },
            { id: 'd', text: "1, 4, 7, 11, 14" }
        ],
        correctAnswer: 'd',
        explanation: "Is correct. 3-value BVA for partitions {0-5}, {6-12}, {13+} requires values {0,1,4,5,6,7,11,12,13,14}. Since 2-value already covers {0,5,6,12,13}, we need {1,4,7,11,14}."
    },
    {
        id: 62,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.3',
        text: "The following decision table contains the rules for determining the risk of atherosclerosis:",
        tableHtml: `<div class="overflow-x-auto my-4 p-2 rounded border border-slate-300 bg-white text-black">
          <table class="min-w-full text-xs text-center border-collapse">
            <tr class="font-bold border-b border-gray-300 bg-gray-100">
              <th class="p-1 border-r text-left">Conditions</th><th>Rule 1</th><th>Rule 2</th><th>Rule 3</th><th>Rule 4</th><th>Rule 5</th>
            </tr>
            <tr class="border-b"><td class="p-1 border-r text-left font-bold">Cholesterol (mg/dl)</td><td>≤ 124</td><td>≤ 124</td><td>125-200</td><td>125-200</td><td>≥ 201</td></tr>
            <tr class="border-b"><td class="p-1 border-r text-left font-bold">Blood pressure (mmHg)</td><td>≤ 140</td><td>> 140</td><td>≤ 140</td><td>> 140</td><td>-</td></tr>
            <tr class="bg-blue-50 font-bold italic"><td class="p-1 border-r text-left text-blue-800">Risk Level</td><td colspan="5"></td></tr>
            <tr><td class="p-1 border-r text-left font-bold">Action</td><td>very low</td><td>low</td><td>medium</td><td>high</td><td>very high</td></tr>
          </table>
        </div>\nTest cases: TC1(125, 141), TC2(200, 201), TC3(124, 201), TC4(109, 200), TC5(201, 140). What is the coverage achieved?`,
        options: [
            { id: 'a', text: "40%" },
            { id: 'b', text: "60%" },
            { id: 'c', text: "80%" },
            { id: 'd', text: "100%" }
        ],
        correctAnswer: 'b',
        explanation: "Is correct. TC1 and TC2 cover Rule 4. TC3 and TC4 cover Rule 2. TC5 covers Rule 5. Total 3 out of 5 rules covered = 60%."
    },
    {
        id: 63,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.4',
        text: "A storage system can store up to three elements and is modeled by the following state transition diagram. Which sequence of events achieves the highest level of valid transitions coverage?",
        diagramImage: "/images/q63-state-diagram-set-b.png",
        options: [
            { id: 'a', text: "Add, Remove, Add, Add, Add" },
            { id: 'b', text: "Add, Add, Add, Add, Remove, Remove" },
            { id: 'c', text: "Add, Add, Add, Remove, Remove" },
            { id: 'd', text: "Add, Add, Add, Remove, Add" }
        ],
        correctAnswer: 'c',
        explanation: "Is correct. Test c) covers all 5 valid transitions (100% coverage). Test a) and d) cover 4. Test b) is infeasible after the third 'Add'."
    },
    {
        id: 64,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.3.1',
        text: "You run two test cases, T1 and T2, on the same code. T1 achieved 40% statement coverage and T2 achieved 65%. Which sentence must be necessarily true?",
        options: [
            { id: 'a', text: "The test suite composed of tests T1 and T2 achieves 105% statement coverage" },
            { id: 'b', text: "There exists at least one statement that must have been executed by both T1 and T2" },
            { id: 'c', text: "At least 5% of the statements in the code that was tested are non-executable" },
            { id: 'd', text: "The test suite composed of tests T1 and T2 achieves full branch coverage" }
        ],
        correctAnswer: 'b',
        explanation: "Is correct. If the statements were disjoint, total coverage would be 105%, which is impossible. Thus, at least 5% must have been executed by both."
    },
    {
        id: 65,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.3.2',
        text: "Let the branch coverage metric be defined as BCov = (X/Y)*100%.\n What do X and Y represent?",
        options: [
            { id: 'a', text: "X = number of decision outcomes exercised; Y = total number of decision outcomes" },
            { id: 'b', text: "X = number of conditional branches exercised; Y = total number of branches" },
            { id: 'c', text: "X = number of branches exercised; Y = total number of branches" },
            { id: 'd', text: "X = number of conditional branches exercised; Y = total number of decision outcomes" }
        ],
        correctAnswer: 'c',
        explanation: "Is correct. Branch coverage is the number of branches exercised divided by the total number of branches (conditional and unconditional)."
    },
    {
        id: 66,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.4.2',
        text: "Which TWO of the following statements provide the BEST rationale for using exploratory testing?",
        type: 'multiple',
        options: [
            { id: 'a', text: "Testers have not been allocated enough time for test design and test execution" },
            { id: 'b', text: "The existing test strategy requires that testers use formal, black-box test techniques" },
            { id: 'c', text: "The specification is written in a formal language that can be processed by a tool" },
            { id: 'd', text: "Testers are the members of an agile team and have good programming skills" },
            { id: 'e', text: "Testers are experienced in the business domain and have good analytical skills" }
        ],
        correctAnswer: ['a', 'e'],
        explanation: "Is correct. Exploratory testing is useful under time pressure (a) and is more effective with experienced/analytical testers (e)."
    },
    {
        id: 67,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.4.3',
        text: "Which of the following BEST fits as an element of the checklist used in checklist-based testing?",
        options: [
            { id: 'a', text: "\"The developer made an error when implementing the code\"" },
            { id: 'b', text: "\"The achieved statement coverage exceeds 85%\"" },
            { id: 'c', text: "\"The program works correctly regarding functional and non-functional requirements\"" },
            { id: 'd', text: "\"The error messages are written in language that the user can understand\"" }
        ],
        correctAnswer: 'd',
        explanation: "Is correct. This is an example of a specific test condition that can be verified by a human."
    },
    {
        id: 68,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.5.2',
        text: "Consider the following acceptance criteria for a user story written from the perspective of an online store owner.\n\nGiven that the user is logged in and on the homepage,\nWhen the user clicks on the \"Add Item\" button,\nThen the \"Create Item\" form should appear,\nAnd the user should be able to input a name and price for the new item.\n\nIn what format is this acceptance criteria written?",
        options: [
            { id: 'a', text: "Rule-oriented" },
            { id: 'b', text: "Scenario-oriented" },
            { id: 'c', text: "Product-oriented" },
            { id: 'd', text: "Process-oriented" }
        ],
        correctAnswer: 'b',
        explanation: "b) Is correct. This is a Given/When/Then format, which is scenario-oriented. The rule-oriented format includes formats like bullet point verification lists or tabulated forms of input-output mappings. There are no \"product-oriented\" or \"process-oriented\" formats of acceptance criteria."
    },
    {
        id: 69,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.5.3',
        text: "Your team analyzes the following user story in order to define the acceptance criteria:\n\nAs a registered customer, I want to be able to view my previous orders on the company's website, so that I can keep track of my purchases.\n\nWhich of the following test cases will <b>NOT</b> be relevant for this user story?",
        options: [
            { id: 'a', text: "Input: the customer logs into their account on the website and clicks the \"see order history\" button\nExpected result: the system shows a list of all the customer's previous orders, including the date, order number, and total cost" },
            { id: 'b', text: "Input: the customer clicks on an order from the order list\nExpected result: the system displays the individual items purchased, along with their prices and quantities" },
            { id: 'c', text: "Input: the customer clicks \"Sort ascending\" button on the order history screen\nExpected result: the system shows the order history sorted by order number in ascending order" },
            { id: 'd', text: "Input: an unregistered customer registers as a new customer with a valid e-mail address that does not already exist in the customer database\nExpected result: the system accepts the registration and creates the account" }
        ],
        correctAnswer: 'd',
        explanation: "d) Is correct. The test case is related to the registration process, which is not discussed in the user story. The user story is about viewing previous orders. Options a), b), and c) are not correct because they are related to viewing previous orders in the order history."
    },
    {
        id: 70,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.1.3',
        text: "Your team follows the process that uses the DevOps delivery pipeline. The first three steps of this process are:\n(1) Code development\n(2) Submit code into a version control system and merge it into the \"test\" branch\n(3) Perform component testing for the submitted code\n\nWhich of the following is BEST suited to be the entry criterion for step (2) of this pipeline?",
        options: [
            { id: 'a', text: "Static analysis returns no high severity warnings for the submitted code" },
            { id: 'b', text: "System version control reports no conflicts when merging code into the \"test\" branch" },
            { id: 'c', text: "Component tests are compiled and ready to be executed" },
            { id: 'd', text: "Statement coverage is at least 80%" }
        ],
        correctAnswer: 'a',
        explanation: "a) Is correct. This is something that can (and should) be checked before the code is submitted to version control . b) Is not correct because merge conflict reporting can only be done after the code is submitted and merged . c) Is not correct as this fits better as the entry criterion for step (3) . d) Is not correct as this fits better as the exit criterion for step (3)."
    },
    {
        id: 71,
        chapter: 5,
        kLevel: 'K3',
        lo: 'FL-5.1.4',
        text: "You want to estimate the test effort for the new project using estimation based on ratios. You calculate the test-to-development effort ratio using averaged data for both development effort and test effort from four historical projects similar to the new one.\n\nThe table shows this historical data.\n\nThe estimated development effort for the new project is $800,000. What is your estimate of the test effort in this project?",
        tableHtml: `<div class="overflow-x-auto my-4 p-2 rounded border border-slate-300 bg-white text-black">
          <table class="min-w-full text-center text-sm border-collapse">
            <tr class="font-bold bg-gray-50 border-b">
              <th class="p-2 border-r">Project</th>
              <th class="p-2 border-r">Development effort ($)</th>
              <th class="p-2">Test effort ($)</th>
            </tr>
            <tr class="border-b">
              <td class="p-2 border-r">P1</td>
              <td class="p-2 border-r">800,000</td>
              <td class="p-2">40,000</td>
            </tr>
            <tr class="border-b">
              <td class="p-2 border-r">P2</td>
              <td class="p-2 border-r">1,200,000</td>
              <td class="p-2">130,000</td>
            </tr>
            <tr class="border-b">
              <td class="p-2 border-r">P3</td>
              <td class="p-2 border-r">600,000</td>
              <td class="p-2">70,000</td>
            </tr>
            <tr>
              <td class="p-2 border-r">P4</td>
              <td class="p-2 border-r">1,000,000</td>
              <td class="p-2">120,000</td>
            </tr>
          </table>
        </div>`,
        options: [
            { id: 'a', text: "$40,000" },
            { id: 'b', text: "$80,000" },
            { id: 'c', text: "$81,250" },
            { id: 'd', text: "$82,500" }
        ],
        correctAnswer: 'b',
        explanation: "b) Is correct. The average development effort is $900,000 and the average test effort is $90,000 (calculated from the four projects). The average test-to-development effort ratio is 1:10 ($90,000: $900,000), which means that historically, on average, the test effort is 10% of the development effort. So if the development effort is estimated to be $800,000, the estimated test effort is: 10% * $800,000 = $80,000."
    },
    {
        id: 72,
        chapter: 5,
        kLevel: 'K3',
        lo: 'FL-5.1.5',
        text: "You are testing a web application that allows users to SEARCH for products, VIEW product details, ADD products to a shopping cart, and place an ORDER. You have prepared the following seven test cases, all of which you want to execute. The tests should be executed in the best order, based on test priority.",
        tableHtml: `<div class="overflow-x-auto my-4 p-2 rounded border border-slate-300 bg-white text-black">
          <table class="min-w-full text-center text-sm border-collapse">
            <tr class="font-bold bg-gray-50 border-b">
              <th class="p-2 border-r">Test</th>
              <th class="p-2">Priority (1 = higher priority)</th>
            </tr>
            <tr class="border-b"><td class="p-2 border-r text-left">TC1: SEARCH for product A</td><td>4</td></tr>
            <tr class="border-b"><td class="p-2 border-r text-left">TC2: SEARCH for product B</td><td>4</td></tr>
            <tr class="border-b"><td class="p-2 border-r text-left">TC3: VIEW product A details</td><td>3</td></tr>
            <tr class="border-b"><td class="p-2 border-r text-left">TC4: VIEW product B details</td><td>2</td></tr>
            <tr class="border-b"><td class="p-2 border-r text-left">TC5: ADD product A to a shopping cart</td><td>3</td></tr>
            <tr class="border-b"><td class="p-2 border-r text-left">TC6: ADD product B to a shopping cart</td><td>1</td></tr>
            <tr><td class="p-2 border-r text-left">TC7: place an ORDER</td><td>5</td></tr>
          </table>
        </div>\nYou also identified the following logical dependencies between test cases:\n• SEARCH functionality must be tested before VIEW functionality can be tested.\n• VIEW functionality must be tested before ADD functionality.\n• ADD functionality must be tested before ORDER functionality.\n\nWhich test case should be executed as the fourth one?`,
        options: [
            { id: 'a', text: "TC3" },
            { id: 'b', text: "TC1" },
            { id: 'c', text: "TC7" },
            { id: 'd', text: "TC2" }
        ],
        correctAnswer: 'b',
        explanation: "b) Is correct. Logical dependencies require SEARCH → VIEW → ADD. Product B has higher priority tasks (TC6 prio 1, TC4 prio 2) than Product A. First three tests: TC2 (Search B), TC4 (View B), TC6 (Add B). The fourth test must be the start of the next flow (Search A), which is TC1."
    },
    {
        id: 73,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.1.7',
        text: "According to the testing quadrants model, which of the following falls into quadrant Q1 (\"technology facing\" and \"support the team\")?",
        options: [
            { id: 'a', text: "Usability testing" },
            { id: 'b', text: "Functional testing" },
            { id: 'c', text: "User acceptance testing" },
            { id: 'd', text: "Component integration testing" }
        ],
        correctAnswer: 'd',
        explanation: "d) Is correct. Component integration testing is technology facing testing that supports the team (guides the development) (Q1). Usability and User acceptance are Q3. Functional testing is Q2."
    },
    {
        id: 74,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.2.4',
        text: "Given the following risks:\n1. Ineffective loop implementation causes long system responses\n2. Consumers change their preferences\n3. Flooding of the server room\n4. Patients above a certain age receive inaccurate reports\n\nAnd the following mitigation activities:\nA. Risk acceptance\nB. Testing for performance efficiency\nC. Using boundary value analysis as the test technique\nD. Risk transfer\n\nWhich of the following BEST matches the risks with the mitigation activities?",
        options: [
            { id: 'a', text: "1C, 2D, 3A, 4B" },
            { id: 'b', text: "1B, 2D, 3A, 4C" },
            { id: 'c', text: "1B, 2A, 3D, 4C" },
            { id: 'd', text: "1C, 2A, 3D, 4B" }
        ],
        correctAnswer: 'c',
        explanation: "c) Is correct. 1 matches B (long response = performance). 2 matches A (preference changes are out of control, so accepted). 3 matches D (flooding = insurance/transfer). 4 matches C (age boundary = BVA)."
    },
    {
        id: 75,
        chapter: 5,
        kLevel: 'K1',
        lo: 'FL-5.3.1',
        text: "Which of the following is a product quality metric?",
        options: [
            { id: 'a', text: "Mean time to failure" },
            { id: 'b', text: "Number of defects found" },
            { id: 'c', text: "Requirements coverage" },
            { id: 'd', text: "Defect detection percentage" }
        ],
        correctAnswer: 'a',
        explanation: "a) Is correct. Product quality metrics measure quality characteristics. Mean time to failure measures maturity, so it is a product quality metric. Options b, c, and d are either defect or coverage metrics."
    },
    {
        id: 76,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.3.3',
        text: "You are a member of a test team located in North America, developing a product for a client located in Europe. The team is agile and follows the DevOps approach and uses a continuous integration/continuous delivery pipeline. Which of the following is the LEAST effective way to communicate test progress to the customer?",
        options: [
            { id: 'a', text: "Face-to-face" },
            { id: 'b', text: "Dashboards" },
            { id: 'c', text: "Email" },
            { id: 'd', text: "Video conferencing" }
        ],
        correctAnswer: 'a',
        explanation: "a) Is correct. The client is in a different location and time zone, so it may be difficult to communicate face-to-face. Dashboards, email, and video conferencing are more practical in this context."
    },
    {
        id: 77,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.4.1',
        text: "Which of the following BEST describes an example of how configuration management (CM) supports testing?",
        options: [
            { id: 'a', text: "Having the version number of the environment, the CM tool can retrieve the version numbers of libraries, stubs and drivers used in that environment" },
            { id: 'b', text: "Having a record of the values of the inputs, the CM tool can execute the test cases for these configurations and calculate the coverage" },
            { id: 'c', text: "Having data about the date of purchase of a software license, the CM tool automatically generates information about the fact that the product license is coming to an end" },
            { id: 'd', text: "Having the version number of the test case, the CM tool can automatically generate test data for this test case" }
        ],
        correctAnswer: 'a',
        explanation: "a) Is correct. For a complex configuration item (e.g., a test environment), configuration management (CM) records the items it consists of, their relationships, and versions."
    },
    {
        id: 78,
        chapter: 5,
        kLevel: 'K3',
        lo: 'FL-5.5.1',
        text: "You are testing a sort function that gets a set of numbers as input and returns the same set of numbers sorted in ascending order. The log from the test execution looks as follows:",
        tableHtml: `<div class="border border-slate-300 p-4 rounded bg-white text-black text-xs font-mono shadow-sm my-4">
          <p class="mb-1 font-bold">Environment configuration: sort function build 2.002.2182, test case set: TCS-3</p>
          <p class="mb-1">12:43:21.003 Execution of TC1. Input: 3. Output: 3. Result: passed</p>
          <p class="mb-1">12:43:21.003 Execution of TC2. Input: 3 11 6 5. Output: 3 5 6 11. Result: passed</p>
          <p class="mb-1">12:43:21.004 Execution of TC3. Input: 8 7 3 7 1. Output: 1 3 7 8. Result: failed</p>
          <p class="mb-1">12:43:21.005 Execution of TC4. Input: -2 -2 -2 -3 -3. Output: -3 -2. Result: failed</p>
          <p class="mb-1">12:43:21.005 Execution of TC5. Input: 0 -2 0 3 4 4. Output: -2 0 3 4. Result: failed</p>
        </div>\nWhich of the following provides the BEST description of the failure that can be used in a defect report? `,
        options: [
            { id: 'a', text: "The system fails to sort several sets of numbers. Reference: TC3, TC4, TC5." },
            { id: 'b', text: "The system seems to disregard duplicates while sorting. Reference: TC3, TC4, TC5." },
            { id: 'c', text: "The system fails to sort negative numbers. Reference: TC4, TC5." },
            { id: 'd', text: "TC3, TC4 and TC5 have defects (duplicate input data) and should be corrected." }
        ],
        correctAnswer: 'b',
        explanation: "b) Is correct. From the test results it seems that the system ignores duplicates and sorts the list disregarding the repetitions (e.g. in TC4 output, -3 -2 instead of -3 -3 -2 -2 -2), which helps developers find the defect."
    },
    {
        id: 79,
        chapter: 6,
        kLevel: 'K2',
        lo: 'FL-6.1.1',
        text: "Given the following descriptions:\n1. Support workflow tracking\n2. Facilitate communication\n3. Virtual machines\n4. Support reviews\n\nAnd the following test tool categories:\nA. Static testing tools\nB. Tools supporting scalability and deployment standardization\nC. DevOps tools\nD. Collaboration tools\n\nWhich of the following BEST matches the descriptions and categories?",
        options: [
            { id: 'a', text: "1A, 2B, 3C, 4D" },
            { id: 'b', text: "1B, 2D, 3C, 4A" },
            { id: 'c', text: "1C, 2D, 3B, 4A" },
            { id: 'd', text: "1D, 2C, 3A, 4B" }
        ],
        correctAnswer: 'c',
        explanation: "c) Is correct. According to the syllabus :\n• C. DevOps tools - support the DevOps delivery pipeline, workflow tracking, automated build process(es), continuous integration/continuous delivery (CI/CD) (1) \n• D. Collaboration tools - facilitate communication (2) \n• B. Tools supporting scalability and deployment standardization - For example, virtual machines, containerization tools (3) \n• A. Static testing tools - support the tester in performing reviews and static analysis (4) \n\nThe correct match is: 1C, 2D, 3B, 4A."
    },
    {
        id: 80,
        chapter: 6,
        kLevel: 'K1',
        lo: 'FL-6.2.1',
        text: "Which of the following is MOST likely to be a benefit of test automation?",
        options: [
            { id: 'a', text: "It provides coverage measures that are too complicated for humans to derive" },
            { id: 'b', text: "It shares responsibility for the testing with the tool vendor" },
            { id: 'c', text: "It removes the need for critical thinking when analyzing test results" },
            { id: 'd', text: "It generates test cases from an analysis of the program code" }
        ],
        correctAnswer: 'a',
        explanation: "a) Is correct. Automation tools can calculate technical metrics like white-box coverage that would be too complex or time-consuming for humans to calculate manually."
    },

    // ==========================================
    // EXAM SET C - Version 1.6
    // ==========================================
    {
        id: 81,
        chapter: 1,
        kLevel: 'K1',
        lo: 'FL-1.1.1',
        text: "Which of the following is a typical test objective? ",
        options: [
            { id: 'a', text: "Validating that documented requirements are met " },
            { id: 'b', text: "Causing failures and identifying defects " },
            { id: 'c', text: "Initiating errors and identifying root causes " },
            { id: 'd', text: "Verifying the test object meets user expectations " }
        ],
        correctAnswer: 'b',
        explanation: "b) Is correct. Causing failures and identifying defects is probably the most common objective of dynamic testing. "
    },
    {
        id: 82,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.1.2',
        text: "Which of the following statements BEST describes the difference between testing and debugging? ",
        options: [
            { id: 'a', text: "Testing causes failures while debugging fixes failures " },
            { id: 'b', text: "Testing is a negative activity while debugging is a positive activity " },
            { id: 'c', text: "Testing determines that defects exist while debugging removes defects " },
            { id: 'd', text: "Testing finds the cause of defects while debugging fixes the cause of defects " }
        ],
        correctAnswer: 'c',
        explanation: "c) Is correct. Testing determines that defects exist either directly through observation in reviews or indirectly by causing failures in dynamic testing. Debugging is a separate activity concerned with locating and fixing defects. "
    },
    {
        id: 83,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.3.1',
        text: "The 'absence-of-defects fallacy' is one of the principles of testing. Which of the following is an example of addressing this principle in practice? ",
        options: [
            { id: 'a', text: "Explaining that it is not possible for testing to show the absence of defects " },
            { id: 'b', text: "Supporting the end users to perform acceptance testing " },
            { id: 'c', text: "Ensuring that no implementation defects remain in the delivered system " },
            { id: 'd', text: "Modifying tests that cause no failures to ensure few defects remain " }
        ],
        correctAnswer: 'b',
        explanation: "b) Is correct. To address the absence-of-defects fallacy, it is necessary to validate that the system meets users' needs and expectations. Supporting acceptance testing helps achieve this. "
    },
    {
        id: 84,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.4.1',
        text: "Which of the following test activities are MOST likely to involve the application of boundary value analysis and equivalence partitioning? ",
        type: 'multiple',
        options: [
            { id: 'a', text: "Test implementation " },
            { id: 'b', text: "Test design " },
            { id: 'c', text: "Test execution " },
            { id: 'd', text: "Test monitoring " },
            { id: 'e', text: "Test analysis " }
        ],
        correctAnswer: ['b', 'e'],
        explanation: "b) and e) are correct. Test techniques like BVA and EP are often used during test analysis to identify test conditions and during test design to create test cases. "
    },
    {
        id: 85,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.4.3',
        text: "Given the following testware:\n1. Coverage items\n2. Change requests\n3. Test execution schedule\n4. Prioritized test conditions\n\nAnd the following test activities:\nA. Test analysis\nB. Test design\nC. Test implementation\nD. Test completion\n\nWhich of the following BEST shows the testware produced by the activities? ",
        options: [
            { id: 'a', text: "1B, 2D, 3C, 4A " },
            { id: 'b', text: "1B, 2D, 3A, 4C " },
            { id: 'c', text: "1D, 2C, 3A, 4B " },
            { id: 'd', text: "1D, 2C, 3B, 4A " }
        ],
        correctAnswer: 'a',
        explanation: "a) Is correct. 1-B (Design produces coverage items), 2-D (Completion produces change requests), 3-C (Implementation produces schedule), 4-A (Analysis produces prioritized conditions). "
    },
    {
        id: 86,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.4.5',
        text: "Which of the following statements about the different testing roles is MOST likely to be CORRECT? ",
        options: [
            { id: 'a', text: "In Agile software development, the test management role is the primary responsibility of the team, while the testing role is primarily the responsibility of a single individual from outside the team " },
            { id: 'b', text: "The testing role is primarily responsible for test monitoring and test control, while the test management role is primarily responsible for test planning and test completion " },
            { id: 'c', text: "In Agile software development, test management activities that span multiple teams are handled by a test manager outside the team, while some test management tasks are handled by the team itself " },
            { id: 'd', text: "The test management role is primarily responsible for test analysis and test design, while the testing role is primarily responsible for test implementation and test execution " }
        ],
        correctAnswer: 'c',
        explanation: "c) Is correct. In Agile, teams often handle their own management, but organization-wide activities spanning teams may be handled by an external test manager. "
    },
    {
        id: 87,
        chapter: 1,
        kLevel: 'K1',
        lo: 'FL-1.5.2',
        text: "Which of the following is an advantage of the whole-team approach? ",
        options: [
            { id: 'a', text: "Teams with no testers " },
            { id: 'b', text: "Improved team dynamics " },
            { id: 'c', text: "Specialist team members " },
            { id: 'd', text: "Larger team sizes " }
        ],
        correctAnswer: 'b',
        explanation: "b) Is correct. The whole-team approach fosters superior team dynamics, communication, and collaboration. "
    },
    {
        id: 88,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.5.3',
        text: "Which of the following statements about the independence of testing is CORRECT? ",
        options: [
            { id: 'a', text: "Independent testers will find defects due to their different technical perspective from developers, but their independence may lead to an adversarial relationship with the developers " },
            { id: 'b', text: "Developers' familiarity with their own code means they only find a few defects in it, however their shared software background with testers means these defects would also be found by the testers " },
            { id: 'c', text: "Independent testing requires testers who are outside the developer's team and ideally from outside the organization, however these testers find it difficult to understand the application domain " },
            { id: 'd', text: "Testers from outside the developer's team are more independent than testers from within the team, but the testers from within the team are more likely to be blamed for delays in product release " }
        ],
        correctAnswer: 'a',
        explanation: "a) Is correct. Independent testers are more likely to identify different failure types but may become isolated or face communication issues. "
    },
    {
        id: 89,
        chapter: 2,
        kLevel: 'K1',
        lo: 'FL-2.1.2',
        text: "Which of the following is a good testing practice that applies to all software development lifecycles? ",
        options: [
            { id: 'a', text: "For each test level, there is a corresponding development level " },
            { id: 'b', text: "For each test objective, there is a corresponding development objective " },
            { id: 'c', text: "For every test activity, there is a corresponding user activity " },
            { id: 'd', text: "For every development activity, there is a corresponding test activity " }
        ],
        correctAnswer: 'd',
        explanation: "d) Is correct. Quality control applies to all development activities, meaning every software development activity has a corresponding test activity. "
    },
    {
        id: 90,
        chapter: 2,
        kLevel: 'K1',
        lo: 'FL-2.1.3',
        text: "Which of the following is an example of a test-first approach to development? ",
        options: [
            { id: 'a', text: "Component Test-Driven Development " },
            { id: 'b', text: "Integration Test-Driven Development " },
            { id: 'c', text: "System Test-Driven Development " },
            { id: 'd', text: "Acceptance Test-Driven Development " }
        ],
        correctAnswer: 'd',
        explanation: "d) Is correct. Acceptance Test-Driven Development (ATDD) is a well-known example of a test-first approach. "
    },
    {
        id: 91,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.1.5',
        text: "Which of the following provides the BEST description of shift-left? ",
        options: [
            { id: 'a', text: "When agreed by the developers, manual activities on the left-hand side of the test process are automated to support the principle of 'early testing saves time and money' " },
            { id: 'b', text: "Where cost-effective, test activities are moved earlier in the software development lifecycle (SDLC) to reduce the total cost of quality by reducing the number of defects found later in the SDLC " },
            { id: 'c', text: "When they have spare time available, testers are required to automate tests for regression testing, starting with component tests and component integration tests " },
            { id: 'd', text: "When available, testers are trained to perform tasks early in the SDLC to allow more test activities to be automated later in the SDLC " }
        ],
        correctAnswer: 'b',
        explanation: "b) Is correct. Shift-left emphasizes starting testing earlier in the SDLC to achieve higher overall savings. "
    },
    {
        id: 92,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.1.6',
        text: "Which of the following is LEAST likely to occur as a result of a retrospective? ",
        options: [
            { id: 'a', text: "The quality of future test objects improves by identifying improvements in development practices " },
            { id: 'b', text: "Test efficiency improves by speeding up the configuration of test environments through automation " },
            { id: 'c', text: "End users' understanding of the development and test processes is improved " },
            { id: 'd', text: "Automated test scripts are enhanced through feedback from developers " }
        ],
        correctAnswer: 'c',
        explanation: "c) Is correct. End users are rarely invited to retrospectives, so it is very unlikely they would learn more about the processes through them. "
    },
    {
        id: 93,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.2.1',
        text: "Which of the following test levels is MOST likely being performed if the testing is focused on validation and is not being performed by testers? ",
        options: [
            { id: 'a', text: "Component testing " },
            { id: 'b', text: "Component integration testing " },
            { id: 'c', text: "System integration testing " },
            { id: 'd', text: "Acceptance testing " }
        ],
        correctAnswer: 'd',
        explanation: "d) Is correct. Acceptance testing focuses on validation against business needs and is ideally carried out by end users. "
    },
    {
        id: 94,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.2.3',
        text: "The navigation system software has been updated due to it suggesting routes that break traffic laws, such as driving the wrong way down one-way streets. Which of the following BEST describes the testing that will be performed? ",
        options: [
            { id: 'a', text: "Only confirmation testing " },
            { id: 'b', text: "Confirmation testing then regression testing " },
            { id: 'c', text: "Only regression testing " },
            { id: 'd', text: "Regression testing then confirmation testing " }
        ],
        correctAnswer: 'b',
        explanation: "b) Is correct. Confirmation testing checks the fix, and regression testing ensures no new defects were introduced in unchanged areas. "
    },
    {
        id: 95,
        chapter: 3,
        kLevel: 'K2',
        lo: 'FL-3.1.3',
        text: "Given the following example defects:\ni. Two different parts of the design specification disagree due to the complexity of the design\nii. A response time is too long and so makes users lose patience\niii. A path in the code cannot be reached during execution\niv. A variable is declared but never subsequently used in the program\nv. The amount of memory needed by the program to generate a report is too high\n\nWhich of the following BEST identifies example defects that could be found by static testing (rather than dynamic testing)? ",
        options: [
            { id: 'a', text: "ii, v " },
            { id: 'b', text: "iii, v " },
            { id: 'c', text: "i, ii, iv " },
            { id: 'd', text: "i, iii, iv " }
        ],
        correctAnswer: 'd',
        explanation: "d) Is correct. Specification inconsistencies (i), unreachable code (iii), and unused variables (iv) are easily found via static testing. Response time (ii) and memory usage (v) require dynamic testing. "
    },
    {
        id: 96,
        chapter: 3,
        kLevel: 'K1',
        lo: 'FL-3.2.1',
        text: "Which of the following is a benefit of early and frequent stakeholder feedback? ",
        options: [
            { id: 'a', text: "Changes to requirements are understood and implemented earlier " },
            { id: 'b', text: "It ensures business stakeholders understand user requirements " },
            { id: 'c', text: "It allows product owners to change their requirements as often as they want " },
            { id: 'd', text: "End users are told which requirements will not be implemented prior to release " }
        ],
        correctAnswer: 'a',
        explanation: "a) Is correct. Obtaining feedback early facilitates early communication of quality issues and prevents requirements misunderstandings. "
    },
    {
        id: 97,
        chapter: 3,
        kLevel: 'K2',
        lo: 'FL-3.2.4',
        text: "Given the following review types:\n1. Technical review\n2. Informal review\n3. Inspection\n4. Walkthrough\n\nAnd the following descriptions:\nA. Includes objectives such as gaining consensus, generating new ideas, and motivating authors to improve\nB. Includes objectives such as educating reviewers, gaining consensus, generating new ideas and detecting potential defects\nC. The main objective is detecting potential defects and it requires metrics collection to support process improvement\nD. The main objective is detecting potential defects and it generates no formal documented output\n\nWhich of the following BEST matches the review types and the descriptions? ",
        options: [
            { id: 'a', text: "1A, 2B, 3C, 4D " },
            { id: 'b', text: "1A, 2D, 3C, 4B " },
            { id: 'c', text: "1B, 2C, 3D, 4A " },
            { id: 'd', text: "1C, 2D, 3A, 4B " }
        ],
        correctAnswer: 'b',
        explanation: "b) Is correct. 1-A (Technical Review), 2-D (Informal), 3-C (Inspection), 4-B (Walkthrough). "
    },
    {
        id: 98,
        chapter: 3,
        kLevel: 'K1',
        lo: 'FL-3.2.5',
        text: "Which of the following is a factor that contributes to a successful review? ",
        options: [
            { id: 'a', text: "Ensure management participate as reviewers " },
            { id: 'b', text: "Split large work products into smaller parts " },
            { id: 'c', text: "Set reviewer evaluation as an objective " },
            { id: 'd', text: "Plan to cover one document per review " }
        ],
        correctAnswer: 'b',
        explanation: "b) Is correct. Splitting large work products prevents reviewers from losing focus. "
    },
    {
        id: 99,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.1.1',
        text: "What is the MAIN difference between black-box test techniques and experience-based test techniques? ",
        options: [
            { id: 'a', text: "The test object " },
            { id: 'b', text: "The test level at which the test technique is used " },
            { id: 'c', text: "The test basis " },
            { id: 'd', text: "The software development lifecycle (SDLC) in which the test technique can be used " }
        ],
        correctAnswer: 'c',
        explanation: "c) Is correct. Black-box techniques are based on specifications (test basis), while experience-based techniques use the tester's knowledge. "
    },
    {
        id: 100,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.1',
        text: "You are testing a PIN validator, which accepts valid PINs and rejects invalid PINs. A PIN is a sequence of digits. A PIN is valid if it consists of four digits, which are not all the same digit. You have identified the following valid equivalence partitions:\n\nVariable: PIN code length\n- The partition \"length correct\" - four-digit PINS\n- The partition \"length incorrect\" - PINs with length other than 4\n\nVariable: Number of different digits\n- PINs with at least two different digits - The partition \"number of different digits correct\"\n- PINs with all digits being the same - The partition \"number of different digits incorrect\"\n\nWhich of the following is the BEST set of input test data to cover the identified equivalence partitions?",
        options: [
            { id: 'a', text: "12, 1111, 1234, 12345" },
            { id: 'b', text: "1, 123, 1111, 1234" },
            { id: 'c', text: "11, 12, 1111, 12345" },
            { id: 'd', text: "123, 1222, 12345" }
        ],
        correctAnswer: 'a',
        explanation: "a) Is correct. According to the rationale:\n• Value \"12\" covers \"length incorrect, too few digits\"\n• Value \"1111\" covers \"length correct\" and \"number of different digits incorrect\"\n• Value \"1234\" covers \"length correct\" and \"number of different digits correct\"\n• Value \"12345\" covers \"length incorrect, too many digits\""
    },
    {
        id: 101,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.2',
        text: "A developer was asked to implement the following business rule:\n\nINPUT: value (integer number)\nIF (value ≤ 100 OR value ≥ 200) THEN write \"value incorrect\"\nELSE write \"value OK\"\n\nYou design the test cases using 2-value boundary value analysis. Which of the following sets of test inputs achieves the greatest coverage?",
        options: [
            { id: 'a', text: "100, 150, 200, 201" },
            { id: 'b', text: "99, 100, 200, 201" },
            { id: 'c', text: "98, 99, 100, 101" },
            { id: 'd', text: "101, 150, 199, 200" }
        ],
        correctAnswer: 'd',
        explanation: "d) Is correct. The equivalence partitions are: {..., 99, 100}, {101, 102, ..., 198, 199}, {200, 201, ...}. Boundary values are 100, 101, 199 and 200. Option d contains three of these (101, 199, 200), achieving 75% coverage. "
    },
    {
        id: 102,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.3',
        text: "You are working on a project to develop a system to analyze driving test results. You have been asked to design test cases based on the following decision table.",
        tableHtml: `<div class="overflow-x-auto my-4 p-2 rounded border border-slate-300 bg-white text-black">
    <table class="w-full text-sm border-collapse">
        <thead>
            <tr class="bg-gray-100 border-b">
                <th class="p-2 border-r text-left">Conditions/Actions</th>
                <th class="p-2 border-r text-center">R1</th>
                <th class="p-2 border-r text-center">R2</th>
                <th class="p-2 text-center">R3</th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b">
                <td class="p-2 border-r">C1: First attempt at the exam?</td>
                <td class="p-2 border-r text-center"></td>
                <td class="p-2 border-r text-center"></td>
                <td class="p-2 text-center">F</td>
            </tr>
            <tr class="border-b">
                <td class="p-2 border-r">C2: Theoretical exam passed?</td>
                <td class="p-2 border-r text-center">T</td>
                <td class="p-2 border-r text-center">F</td>
                <td class="p-2 text-center"></td>
            </tr>
            <tr class="border-b">
                <td class="p-2 border-r">C3: Practical exam passed?</td>
                <td class="p-2 border-r text-center">T</td>
                <td class="p-2 border-r text-center"></td>
                <td class="p-2 text-center">F</td>
            </tr>
            <tr class="border-b bg-blue-50">
                <td class="p-2 border-r font-semibold">Issue a driving license?</td>
                <td class="p-2 border-r text-center">X</td>
                <td class="p-2 border-r text-center"></td>
                <td class="p-2 text-center"></td>
            </tr>
            <tr class="border-b bg-blue-50">
                <td class="p-2 border-r font-semibold">Request additional driving lessons?</td>
                <td class="p-2 border-r text-center"></td>
                <td class="p-2 border-r text-center"></td>
                <td class="p-2 text-center">X</td>
            </tr>
            <tr class="bg-blue-50">
                <td class="p-2 border-r font-semibold">Request to take the exam again?</td>
                <td class="p-2 border-r text-center"></td>
                <td class="p-2 border-r text-center">X</td>
                <td class="p-2 text-center"></td>
            </tr>
        </tbody>
    </table>
    </div>\n\nWhat test data will show that there are contradictory rules in the decision table?`,
        options: [
            { id: 'a', text: "C1=T, C2=T, C3=F" },
            { id: 'b', text: "C1=T, C2=F, C3=T" },
            { id: 'c', text: "C1=T, C2=T, C3=T and C1=F, C2=T, C3=T" },
            { id: 'd', text: "C1=F, C2=F, C3=F" }
        ],
        correctAnswer: 'd',
        explanation: "d) Is correct. The combination (F, F, F) matches both R2 (Theoretical exam passed? F) and R3 (Practical exam passed? F and First attempt? F). Since R2 and R3 have different actions, this shows a contradiction. "
    },
    {
        id: 103,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.4',
        text: "You are designing test cases based on the following state transition diagram:",
        diagramImage: "/images/q103-state-diagram-set-c.png",
        options: [
            { id: 'a', text: "3" },
            { id: 'b', text: "2" },
            { id: 'c', text: "5" },
            { id: 'd', text: "6" }
        ],
        correctAnswer: 'a',
        explanation: "a) Is correct. Three test cases are required for 100% valid transitions coverage: \nTC1: START → REQUESTING → CONFIRMED → END\nTC2: START → REQUESTING → WAITING LIST → CONFIRMED → END\nTC3: START → REQUESTING → WAITING LIST → END "
    },
    {
        id: 104,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.3.2',
        text: "You want to apply branch testing to the code represented by the following control flow graph.",
        diagramImage: "/images/q104-diagram-set-c.png",
        options: [
            { id: 'a', text: "2" },
            { id: 'b', text: "4" },
            { id: 'c', text: "8" },
            { id: 'd', text: "7" }
        ],
        correctAnswer: 'c',
        explanation: "c) Is correct. In branch testing, the coverage items are branches represented by the edges of a control flow graph. There are 8 edges in the graph. "
    },
    {
        id: 105,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.3.3',
        text: "How can white-box testing be useful in support of black-box testing?",
        options: [
            { id: 'a', text: "White-box coverage measures can help testers evaluate black-box tests in terms of the code coverage achieved by these black-box tests" },
            { id: 'b', text: "White-box coverage analysis can help testers identify unreachable fragments of the source code" },
            { id: 'c', text: "Branch testing subsumes black-box test techniques, so achieving full branch coverage guarantees achieving full coverage of any black-box technique" },
            { id: 'd', text: "White-box test techniques can provide coverage items for black-box techniques" }
        ],
        correctAnswer: 'a',
        explanation: "a) Is correct. White-box coverage measures provide an objective measurement of coverage and allow additional tests to be generated to increase this coverage. "
    },
    {
        id: 106,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.4.1',
        text: "Consider the following list:\n\n- Correct input not accepted\n- Incorrect input accepted\n- Wrong output format\n- Division by zero\n\nWhat test technique is MOST PROBABLY used by the tester who uses this list when performing testing?",
        options: [
            { id: 'a', text: "Exploratory testing" },
            { id: 'b', text: "Fault attack" },
            { id: 'c', text: "Checklist-based testing" },
            { id: 'd', text: "Boundary value analysis" }
        ],
        correctAnswer: 'b',
        explanation: "b) Is correct. This is a list of possible failures. Fault attacks are a methodical implementation of error guessing and require the tester to use a list of possible errors, defects, and failures. "
    },
    {
        id: 107,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.4.3',
        text: "Which of the following BEST describes how using checklist-based testing can result in increased coverage?",
        options: [
            { id: 'a', text: "Checklist items can be defined at a sufficiently low level of detail, so the tester can implement and execute detailed test cases based on these items" },
            { id: 'b', text: "Checklists can be automated, so each time an automated test execution covers the checklist items, it results in additional coverage" },
            { id: 'c', text: "Each checklist item should be tested separately and independently, so the elements cover different areas of the software" },
            { id: 'd', text: "Two testers designing and executing tests based on the same high-level checklist items will typically perform the testing in slightly different ways" }
        ],
        correctAnswer: 'd',
        explanation: "d) Is correct. High-level checklist items lead to variability in actual testing, as different testers will use different data and steps, resulting in potentially greater coverage. "
    },
    {
        id: 108,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.5.2',
        text: "Which of the following provides the BEST example of a scenario-oriented acceptance criterion?",
        options: [
            { id: 'a', text: "The application must allow users to delete their account and all associated data upon request" },
            { id: 'b', text: "When a customer adds an item to their cart and proceeds to checkout, they should be prompted to log in or create an account if they haven't already done so" },
            { id: 'c', text: "IF (contain(product(23). Name, cart.products())) THEN return FALSE" },
            { id: 'd', text: "The website must comply with the ICT Accessibility 508 Standards and ensure that all content is accessible to users with disabilities" }
        ],
        correctAnswer: 'b',
        explanation: "b) Is correct. This describes an example scenario (When... should be prompted...) that must be realized by the system. "
    },
    {
        id: 109,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.5.3',
        text: "You are using acceptance test-driven development and designing test cases based on the following user story:\n\nAs a Regular or Special user, I want to be able to use my electronic floor card, to access specific floors.\n\nAcceptance Criteria:\nAC1: Regular users have access to floors 1 to 3\nAC2: Floor 4 is only accessible to Special users\nAC3: Special users have all the access rights of Regular users\n\nWhich test case is the MOST reasonable one to test AC3?",
        options: [
            { id: 'a', text: "Check that a Regular user can access floors 1 and 3" },
            { id: 'b', text: "Check that a Regular user cannot access floor 4" },
            { id: 'c', text: "Check that a Special user can access floor 5" },
            { id: 'd', text: "Check that a Special user can access floors 1, 2 and 3" }
        ],
        correctAnswer: 'd',
        explanation: "d) Is correct. To check that Special users have Regular user rights (AC3), we must test if a Special user can access the floors assigned to a Regular user. "
    },
    {
        id: 110,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.1.1',
        text: "Which of the following is <b>NOT</b> a purpose of a test plan?",
        options: [
            { id: 'a', text: "To define test data and expected results for component tests and component integration tests" },
            { id: 'b', text: "To define as exit criteria from the component test level that \"100% statement coverage and 100% branch coverage must be achieved\"" },
            { id: 'c', text: "To describe what fields the test progress report shall contain and what should be the form of this report" },
            { id: 'd', text: "To explain why system integration testing will be excluded from testing, although the test strategy requires this test level" }
        ],
        correctAnswer: 'a',
        explanation: "a) Is correct. Test data and expected results are part of test cases, not the test plan. "
    },
    {
        id: 111,
        chapter: 5,
        kLevel: 'K3',
        lo: 'FL-5.1.4',
        text: "At the beginning of each iteration, the team estimates the amount of work (in person-days) they will need to complete during the iteration.\n\nLet E(n) be the estimated amount of work for iteration n, and let A(n) be the actual amount of work done in iteration n.\n\nFrom the third iteration, the team uses the following estimation model based on extrapolation:\n\nE(n) = (3*A(n-1) + A(n-2)) / 4\n\nThe graph shows the estimated and actual amount of work for the first four iterations.",
        diagramImage: "/images/q111-graph-set-c.png",
        options: [
            { id: 'a', text: "10.5 person-days" },
            { id: 'b', text: "8.25 person-days" },
            { id: 'c', text: "6.5 person-days" },
            { id: 'd', text: "9.4 person-days" }
        ],
        correctAnswer: 'c',
        explanation: "c) Is correct. From the graph: A(4)=6 and A(3)=8. Using the formula: E(5) = (3*6 + 8) / 4 = 26 / 4 = 6.5 person-days. "
    },
    {
        id: 112,
        chapter: 5,
        kLevel: 'K3',
        lo: 'FL-5.1.5',
        text: "You are preparing a test execution schedule for executing seven test cases TC 1 to TC 7. The following figure includes the priorities of these test cases (1 = highest priority, 3 = lowest priority). The figure also shows the dependencies between test cases using arrows. For instance, the arrow from TC 4 to TC 5 means that TC 5 can only be executed if TC 4 was previously executed.",
        diagramImage: "/images/q112-figure-set-c.png",
        options: [
            { id: 'a', text: "TC 3" },
            { id: 'b', text: "TC 5" },
            { id: 'c', text: "TC 6" },
            { id: 'd', text: "TC 2" }
        ],
        correctAnswer: 'a',
        explanation: "a) Is correct. Based on priorities and dependencies, the first five cases are: TC 4 → TC 7 → TC 1 → TC 2 → TC 5. TC 3 follows as it has priority 2, which is higher than TC 6 (priority 3). "
    },
    {
        id: 113,
        chapter: 5,
        kLevel: 'K1',
        lo: 'FL-5.1.6',
        text: "What does the test pyramid model show?",
        options: [
            { id: 'a', text: "That tests may have different priorities" },
            { id: 'b', text: "That tests may have different granularity" },
            { id: 'c', text: "That tests may require different coverage criteria" },
            { id: 'd', text: "That tests may depend on other tests" }
        ],
        correctAnswer: 'b',
        explanation: "b) Is correct. The test pyramid model shows that different tests have different levels of granularity. "
    },
    {
        id: 114,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.1.7',
        text: "What is the relationship between the testing quadrants, test levels and test types?",
        options: [
            { id: 'a', text: "Testing quadrants represent particular combinations of test levels and test types, defining their location in the software development lifecycle" },
            { id: 'b', text: "Testing quadrants describe the degree of granularity of individual test types performed at each test level" },
            { id: 'c', text: "Testing quadrants assign the test types that can be performed to the test levels" },
            { id: 'd', text: "Testing quadrants group test levels and test types by several criteria such as targeting specific stakeholders" }
        ],
        correctAnswer: 'd',
        explanation: "d) Is correct. Testing quadrants group test levels and types by criteria such as business facing vs technology facing and supporting the team vs critiquing the product. "
    },
    {
        id: 115,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.2.3',
        text: "Which of the following is an example of how product risk analysis may influence the thoroughness and scope of testing?",
        options: [
            { id: 'a', text: "Continuous risk monitoring allows us to identify an emerging risk as soon as possible" },
            { id: 'b', text: "Risk identification allows us to implement risk mitigation activities and reduce the risk level" },
            { id: 'c', text: "The assessed risk level helps us to select the rigor of testing" },
            { id: 'd', text: "Risk analysis allows us to derive coverage items" }
        ],
        correctAnswer: 'c',
        explanation: "c) Is correct. This is an example of how risk analysis influences the thoroughness of testing. "
    },
    {
        id: 116,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.3.2',
        text: "Which of the following activities in the test process makes the MOST use of test progress reports?",
        options: [
            { id: 'a', text: "Test design" },
            { id: 'b', text: "Test completion" },
            { id: 'c', text: "Test analysis" },
            { id: 'd', text: "Test planning" }
        ],
        correctAnswer: 'b',
        explanation: "b) Is correct. A test completion report uses information from test progress reports. "
    },
    {
        id: 117,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.4.1',
        text: "Which of the following is <b>NOT</b> an example of how configuration management supports testing?",
        options: [
            { id: 'a', text: "All commits to the repository are uniquely identified and version controlled" },
            { id: 'b', text: "All changes in the test environment elements are tracked" },
            { id: 'c', text: "All requirement specifications are referenced unambiguously in test plans" },
            { id: 'd', text: "All identified defects have an assigned status" }
        ],
        correctAnswer: 'd',
        explanation: "d) Is correct. Assigning status to defects is ensured by defect management, not configuration management. "
    },
    {
        id: 118,
        chapter: 5,
        kLevel: 'K3',
        lo: 'FL-5.5.1',
        text: "Consider the following defect report for a web-based shopping application:",
        tableHtml: `<div class="border border-slate-300 p-4 rounded bg-white text-black font-mono text-sm shadow-sm">
        <strong>Application:</strong> WebShop v0.99<br>
        <strong>Defect:</strong> Login button not working<br><br>
        <strong>Steps to Reproduce:</strong><br>
        1. Launch the website<br>
        2. Click on the login button<br><br>
        <strong>Expected result:</strong> The user should be redirected to the login page.<br>
        <strong>Actual result:</strong> The login button does not respond when clicked.<br><br>
        <strong>Severity:</strong> High<br>
        <strong>Priority:</strong> Urgent
    </div>\n\nWhat is the MOST important information that is missing from this defect report?`,
        options: [
            { id: 'a', text: "Name of the tester and date" },
            { id: 'b', text: "Test environment elements and their version numbers" },
            { id: 'c', text: "Identification of the test object" },
            { id: 'd', text: "Impact on the interests of stakeholders" }
        ],
        correctAnswer: 'b',
        explanation: "b) Is correct. Missing browser and device information is critical as such a defect can be specific to certain environments. "
    },
    {
        id: 119,
        chapter: 6,
        kLevel: 'K2',
        lo: 'FL-6.1.1',
        text: "Tools from which of the following categories help with the organization of test cases, detected defects and configuration management?",
        options: [
            { id: 'a', text: "Test execution and coverage tools" },
            { id: 'b', text: "Test design and implementation tools" },
            { id: 'c', text: "Defect management tools" },
            { id: 'd', text: "Test management tools" }
        ],
        correctAnswer: 'd',
        explanation: "d) Is correct. Test management tools facilitate the management of the SDLC, requirements, tests, defects, and configuration. "
    },
    {
        id: 120,
        chapter: 6,
        kLevel: 'K1',
        lo: 'FL-6.2.1',
        text: "Which of the following is MOST likely to be a benefit of test automation?",
        options: [
            { id: 'a', text: "The capability of generating test cases without access to the test basis" },
            { id: 'b', text: "The achievement of increased coverage through more objective assessment" },
            { id: 'c', text: "The increase in test execution times available with higher processing power" },
            { id: 'd', text: "The prevention of human errors through greater consistency and repeatability" }
        ],
        correctAnswer: 'd',
        explanation: "d) Is correct. Test automation prevents human errors by ensuring tests are executed consistently and in the same order. "
    },

    // ==========================================
    // EXAM SET D - Version 1.5
    // ==========================================
    {
        id: 121,
        chapter: 1,
        kLevel: 'K1',
        lo: 'FL-1.1.1',
        text: "Which of the following is a typical test objective?",
        options: [
            { id: 'a', text: "Finding and fixing defects in the test object" },
            { id: 'b', text: "Maintaining effective communications with developers" },
            { id: 'c', text: "Validating that legal requirements have been met" },
            { id: 'd', text: "Building confidence in the quality of the test object" }
        ],
        correctAnswer: 'd',
        explanation: "d) Is correct. Building confidence in the quality of the test object is achieved by executing tests that passed."
    },
    {
        id: 122,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.2.3',
        text: "A designer documents a design for a user interface that does not suitably address disabled users because the designer is tired. The programmer implements the user interface in line with the design but as they are working under severe time pressure, they do not include suitable exception handling in their program code for bonus calculations. When the operational system is used, complaints are made by some disabled users about the interface and the company is subsequently fined by the relevant regulatory authority. No one notices that bonus calculations are sometimes incorrect.\n\nWhich of the following statements is CORRECT?",
        options: [
            { id: 'a', text: "The miscalculation of bonuses is a defect that occasionally occurs" },
            { id: 'b', text: "The fine received for failing to address some disabled users is a failure" },
            { id: 'c', text: "The programmer working under severe time pressure is a root cause" },
            { id: 'd', text: "The design of the user interface includes a designer error" }
        ],
        correctAnswer: 'c',
        explanation: "c) Is correct. The error is made by the programmer and this mistake is caused by them working under severe time pressure, which is the root cause of the subsequent defect."
    },
    {
        id: 123,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.3.1',
        text: "Test conditions are being used by testers to generate test cases and execute tests. Even though the test conditions remain the same, the test cases are varied each time.\n\nWhich of the following 'principles of testing' is being addressed through the variation of test cases?",
        options: [
            { id: 'a', text: "Tests wear out" },
            { id: 'b', text: "Absence-of-defects fallacy" },
            { id: 'c', text: "Early testing saves time and money" },
            { id: 'd', text: "Defects cluster together" }
        ],
        correctAnswer: 'a',
        explanation: "a) Is correct. The 'tests wear out' principle is concerned with the idea that repeating identical tests on unaltered code is unlikely to uncover novel defects and therefore, modifying tests may be essential."
    },
    {
        id: 124,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.4.1',
        text: "Given the following test tasks:\n1. Derive test cases from test conditions\n2. Identify reusable testware\n3. Organize test cases into test procedures\n4. Evaluate the test basis and the test object\n\nAnd the following test activities:\nA. Test analysis\nB. Test design\nC. Test implementation\nD. Test completion\n\nWhich of the following BEST matches the tasks with the activities?",
        options: [
            { id: 'a', text: "1B, 2A, 3D, 4C" },
            { id: 'b', text: "1B, 2D, 3C, 4A" },
            { id: 'c', text: "1C, 2A, 3B, 4D" },
            { id: 'd', text: "1C, 2D, 3A, 4B" }
        ],
        correctAnswer: 'b',
        explanation: "b) Is correct. The CORRECT match is: 1B, 2D, 3C, 4A."
    },
    {
        id: 125,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.4.3',
        text: "Given the following testware:\ni. Test completion report\nii. Data held in a database used for test inputs and expected results\niii. The list of elements needed to build the test environment\niv. Documented sequences of test cases in execution order\nv. Test cases\n\nWhich of the following BEST shows the testware produced as a result of performing test implementation?",
        options: [
            { id: 'a', text: "ii, iv" },
            { id: 'b', text: "iii, v" },
            { id: 'c', text: "i, ii, v" },
            { id: 'd', text: "i, iii, iv" }
        ],
        correctAnswer: 'a',
        explanation: "a) Is correct. Items ii (test data) and iv (test procedures) in the list are produced as a result of test implementation."
    },
    {
        id: 126,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.4.5',
        text: "Which of the following is MOST likely to describe a task performed by someone in a test management role?",
        options: [
            { id: 'a', text: "Evaluate the test basis and the test object" },
            { id: 'b', text: "Define test environment requirements" },
            { id: 'c', text: "Assess testability of the test object" },
            { id: 'd', text: "Create the test completion report" }
        ],
        correctAnswer: 'd',
        explanation: "d) Is correct. The test management role primarily involves activities related to test planning, test monitoring and test control, and test completion. Thus, creating the test completion report is likely to be a task performed by the test management role."
    },
    {
        id: 127,
        chapter: 1,
        kLevel: 'K1',
        lo: 'FL-1.5.2',
        text: "Which of the following is an advantage of the whole team approach?",
        options: [
            { id: 'a', text: "Improved communication between team members" },
            { id: 'b', text: "Decreased individual accountability for quality" },
            { id: 'c', text: "Faster deployment of deliverables to the end users" },
            { id: 'd', text: "Reduced collaboration with external business users" }
        ],
        correctAnswer: 'a',
        explanation: "a) Is correct. The whole team approach promotes robust communication and collaboration between the team members."
    },
    {
        id: 128,
        chapter: 1,
        kLevel: 'K2',
        lo: 'FL-1.5.3',
        text: "Given the following benefits and drawbacks of the independence of testing:\ni. The testers work in a different location from the developers\nii. Testers question the assumptions programmers make while writing code\niii. A confrontational dynamic has been established between testers and developers\niv. Developers have convinced themselves that testers are mostly accountable for quality\nv. Testers have different biases than those held by the developers\n\nWhich are MOST likely to be considered benefits?",
        options: [
            { id: 'a', text: "i, iv" },
            { id: 'b', text: "ii, v" },
            { id: 'c', text: "i, iii, iv" },
            { id: 'd', text: "ii, iii, v" }
        ],
        correctAnswer: 'b',
        explanation: "b) Is correct. The list entries showing benefits are ii and v."
    },
    {
        id: 129,
        chapter: 2,
        kLevel: 'K1',
        lo: 'FL-2.1.2',
        text: "Which of the following is a good testing practice that applies to all software development lifecycles?",
        options: [
            { id: 'a', text: "Each test level has specific and distinct test objectives" },
            { id: 'b', text: "Test implementation and execution for a given test level should start during the corresponding development phase" },
            { id: 'c', text: "Testers should start test design as soon as drafts of the relevant work products become available" },
            { id: 'd', text: "Every dynamic testing activity has a corresponding static testing activity" }
        ],
        correctAnswer: 'a',
        explanation: "a) Is correct. Each test level has specific and distinct test objectives as a different form of test object is tested at each test level and overlapping test objectives would lead to unnecessary duplication."
    },
    {
        id: 130,
        chapter: 2,
        kLevel: 'K1',
        lo: 'FL-2.1.3',
        text: "Which of the following is an example of a test-first approach to development?",
        options: [
            { id: 'a', text: "Behavior-Driven Development" },
            { id: 'b', text: "Test Level Driven Development" },
            { id: 'c', text: "Function-Driven Development" },
            { id: 'd', text: "Performance-Driven Development" }
        ],
        correctAnswer: 'a',
        explanation: "a) Is correct. Behavior-Driven Development (BDD) is a well-known example of a test-first approach to development."
    },
    {
        id: 131,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.1.4',
        text: "Which of the following is MOST likely to be a challenge encountered when implementing DevOps?",
        options: [
            { id: 'a', text: "Making sure that non-functional quality characteristics are not overlooked" },
            { id: 'b', text: "Managing continuously changing test environments" },
            { id: 'c', text: "The need for more manual testers with suitable experience" },
            { id: 'd', text: "Setting up the test automation as part of the delivery pipeline" }
        ],
        correctAnswer: 'd',
        explanation: "d) Is correct. DevOps implementation can pose several risks and challenges, including the need to define and set up the delivery pipeline, introduce and maintain CI/CD tools, and establish and maintain test automation."
    },
    {
        id: 132,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.1.6',
        text: "Which of the following BEST describes retrospectives?",
        options: [
            { id: 'a', text: "Retrospectives allow team members to identify other team members who did not fully contribute to achieving quality as required by the whole team approach" },
            { id: 'b', text: "Retrospectives give testers an opportunity to identify activities that were successful so that these are retained when potential improvements are made in the future" },
            { id: 'c', text: "Retrospectives are where agile team members are allowed to voice their concerns about management and customers in a blameless environment" },
            { id: 'd', text: "Retrospectives give agile team members a forum where they focus on discussing the plan and technical decisions for the next iteration" }
        ],
        correctAnswer: 'b',
        explanation: "b) Is correct. During the retrospective, the group discusses what aspects of the project were successful and should be retained, as well as areas that could be improved, and how to do so."
    },
    {
        id: 133,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.2.2',
        text: "Which of the following tests is MOST likely to be performed as part of functional testing?",
        options: [
            { id: 'a', text: "The test checks that the sort function puts the elements of the list or array in ascending order" },
            { id: 'b', text: "The test checks whether the sort function completes sorting within one second of starting" },
            { id: 'c', text: "The test checks how easily the sort function can be changed from sorting ascending to sorting descending" },
            { id: 'd', text: "The test checks that the sort function still functions correctly when moved from a 32-bit to a 64-bit architecture" }
        ],
        correctAnswer: 'a',
        explanation: "a) Is correct. Checking that the sort function puts the elements of the list or array in ascending order is evaluating the functional correctness of the sort function."
    },
    {
        id: 134,
        chapter: 2,
        kLevel: 'K2',
        lo: 'FL-2.3.1',
        text: "Which of the following is MOST likely to be a trigger that leads to maintenance testing of a currency exchange system?",
        options: [
            { id: 'a', text: "The developers reported that changing the currency exchange system was difficult and the testers decided to check if this was true" },
            { id: 'b', text: "The refund option of the currency exchange system was removed as it did not always repay the correct amount to customers" },
            { id: 'c', text: "The agile team has started developing a user story that adds a new customer loyalty feature to the currency exchange system" },
            { id: 'd', text: "The language support option of the currency exchange system was used to enable both English and local language currency transactions" }
        ],
        correctAnswer: 'b',
        explanation: "b) Is correct. A system modification (such as a fix or enhancement) is an example of a trigger for maintenance testing. The removal of the refund option was a fix that would lead to maintenance testing."
    },
    {
        id: 135,
        chapter: 3,
        kLevel: 'K1',
        lo: 'FL-3.1.1',
        text: "Which of the following <b>CANNOT</b> be examined by static testing?",
        options: [
            { id: 'a', text: "Contract" },
            { id: 'b', text: "Test plan" },
            { id: 'c', text: "Encrypted code" },
            { id: 'd', text: "Test charter" }
        ],
        correctAnswer: 'c',
        explanation: "c) Is correct. Static testing is not suitable for work products that are too complex for human interpretation and should not be analyzed by tools; encrypted code is too complex for humans and if properly encrypted will not be analyzable by most tools."
    },
    {
        id: 136,
        chapter: 3,
        kLevel: 'K2',
        lo: 'FL-3.1.2',
        text: "Which of the following statements about the value of static testing is CORRECT?",
        options: [
            { id: 'a', text: "The defect types found by static testing are different from the defect types that can be found by dynamic testing" },
            { id: 'b', text: "Dynamic testing can detect the defect types that can be found by static testing plus some additional defect types" },
            { id: 'c', text: "Dynamic testing can identify some of the defects that can be found by static testing but not all of them" },
            { id: 'd', text: "Static testing can identify the defect types that can be found by dynamic testing as well as some extra defect types" }
        ],
        correctAnswer: 'c',
        explanation: "c) Is correct. Some defect types can be found by both static and dynamic testing, but static testing can find some (like unreachable code) that dynamic testing cannot, and dynamic testing can find some (like performance issues) that static testing cannot."
    },
    {
        id: 137,
        chapter: 3,
        kLevel: 'K2',
        lo: 'FL-3.2.2',
        text: "Given the following descriptions of review activities:\n1. Detected anomalies are deliberated upon, and determinations are reached regarding their status, ownership, and any further steps needed\n2. Defects are recorded, and any needed updates are addressed prior to the acceptance of the work product\n3. Reviewers employ techniques to come up with suggestions and questions about the work product and to spot anomalies\n4. The objective of the review and its schedule are established to ensure a focused and efficient review\n5. Participants are provided with access to the item being reviewed\n\nWhich of the following is the CORRECT sequence in the review process of the activities that correspond to the descriptions?",
        options: [
            { id: 'a', text: "4-3-5-2-1" },
            { id: 'b', text: "4-5-3-1-2" },
            { id: 'c', text: "5-4-1-3-2" },
            { id: 'd', text: "5-4-3-2-1" }
        ],
        correctAnswer: 'b',
        explanation: "b) Is correct. The logical order is: Planning (4), Review initiation (5), Individual review (3), Communication and analysis (1), Fixing and reporting (2)."
    },
    {
        id: 138,
        chapter: 3,
        kLevel: 'K1',
        lo: 'FL-3.2.3',
        text: "Which participant in the review process is responsible for ensuring that the review meetings run effectively and that everyone at the meetings can voice their opinions freely?",
        options: [
            { id: 'a', text: "Manager" },
            { id: 'b', text: "Moderator" },
            { id: 'c', text: "Chairperson" },
            { id: 'd', text: "Review Leader" }
        ],
        correctAnswer: 'b',
        explanation: "b) Is correct. The moderator (or facilitator) is responsible for ensuring that the review meetings run effectively, including creating a safe environment where everyone can voice their opinions freely."
    },
    {
        id: 139,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.1.1',
        text: "You perform system testing of an e-commerce web application and are provided with the following requirement:\n\nREQ 05-017. If the total cost of purchases exceeds $100, the customer gets a 5% discount on subsequent purchases. Otherwise, the customer does not receive a discount.\n\nWhich test techniques will be MOST helpful in designing test cases based on this requirement?",
        options: [
            { id: 'a', text: "White-box test techniques" },
            { id: 'b', text: "Black-box test techniques" },
            { id: 'c', text: "Experience-based test techniques" },
            { id: 'd', text: "Risk-based test techniques" }
        ],
        correctAnswer: 'b',
        explanation: "b) Is correct. The requirement specifies desired behavior, so black-box test techniques like Boundary Value Analysis are most suitable."
    },
    {
        id: 140,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.1',
        text: "The system for selling cinema tickets calculates the discount type based on the client's birth year (BY) and on the current year (CY) as follows:\n\nLet D be the difference between CY and BY, that is, D = CY - BY\n• If D < 0 then print the error message \"birth year cannot be greater than current year\"\n• If 0 ≤ D < 18 then apply the student discount\n• If 18 ≤ D < 65 then apply no discount\n• If D ≥ 65 then apply the pensioner discount\n\nYour test suite already contains two test cases:\n- BY = 1990, CY = 2020, expected result: no discount\n- BY = 2030, CY = 2029, expected result: print the error message\n\nWhich of the following test data sets should be added to achieve full valid equivalence partitioning coverage for the discount type?",
        type: 'multiple',
        options: [
            { id: 'a', text: "BY = 2001, CY = 2065" },
            { id: 'b', text: "BY = 1900, CY = 1965" },
            { id: 'c', text: "BY = 1965, CY = 1900" },
            { id: 'd', text: "BY = 2011, CY = 2029" },
            { id: 'e', text: "BY = 2000, CY = 2000" }
        ],
        correctAnswer: ['b', 'e'],
        explanation: "b and e are correct. There are two uncovered partitions: student discount (0 ≤ D < 18) and pensioner discount (D ≥ 65). Set b (D=65) covers pensioner discount. Set e (D=0) covers student discount."
    },
    {
        id: 141,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.2',
        text: "You are testing a temperature control system for a horticultural cold storage facility. The system receives the temperature (in full degrees Celsius) as the input. If the temperature is between 0 and 2 degrees inclusive, the system displays the message \"temperature OK\". For lower temperatures, the system displays the message \"temperature too low\" and for higher temperatures it displays the message \"temperature too high\".\n\nUsing two-value boundary value analysis, which of the following sets of test inputs provides the highest level of boundary value coverage?",
        options: [
            { id: 'a', text: "-1, 3" },
            { id: 'b', text: "0, 2" },
            { id: 'c', text: "-1, 0, 2, 3" },
            { id: 'd', text: "-2, 0, 2, 4" }
        ],
        correctAnswer: 'c',
        explanation: "c) Is correct. Boundary values for 0 and 2 (inclusive range) are -1, 0 and 2, 3."
    },
    {
        id: 142,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.3',
        text: "You are designing test cases based on the following decision table.",
        tableHtml: `
        <div class="overflow-x-auto my-4 p-2 rounded border border-slate-300 bg-white text-black">
          <table class="min-w-full text-center text-sm border-collapse">
            <thead>
              <tr class="font-bold bg-gray-50 border-b">
                <th class="p-2 border-r text-left">Conditions/Actions</th>
                <th class="p-2 border-r">R1</th>
                <th class="p-2 border-r">R2</th>
                <th class="p-2 border-r">R3</th>
                <th class="p-2 border-r">R4</th>
                <th class="p-2 border-r">R5</th>
                <th class="p-2 border-r">R6</th>
                <th class="p-2">R7</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b">
                <td class="p-2 border-r text-left">C1: Age</td>
                <td class="p-2 border-r">0-18</td>
                <td class="p-2 border-r">19-65</td>
                <td class="p-2 border-r">19-65</td>
                <td class="p-2 border-r">>65</td>
                <td class="p-2 border-r">0-18</td>
                <td class="p-2 border-r">19-65</td>
                <td class="p-2 border-r">>65</td>
              </tr>
              <tr class="border-b">
                <td class="p-2 border-r text-left">C2: Experience</td>
                <td class="p-2 border-r"></td>
                <td class="p-2 border-r">0-4</td>
                <td class="p-2 border-r">>4</td>
                <td class="p-2 border-r"></td>
                <td class="p-2 border-r"></td>
                <td class="p-2 border-r"></td>
                <td class="p-2 border-r"></td>
              </tr>
              <tr class="border-b">
                <td class="p-2 border-r text-left">C3: Registered?</td>
                <td class="p-2 border-r">NO</td>
                <td class="p-2 border-r">NO</td>
                <td class="p-2 border-r">NO</td>
                <td class="p-2 border-r">NO</td>
                <td class="p-2 border-r">YES</td>
                <td class="p-2 border-r">YES</td>
                <td class="p-2 border-r">YES</td>
              </tr>
              <tr class="bg-blue-50 font-semibold">
                <td class="p-2 border-r text-left">Category</td>
                <td class="p-2 border-r">A</td>
                <td class="p-2 border-r">A</td>
                <td class="p-2 border-r">B</td>
                <td class="p-2 border-r">B</td>
                <td class="p-2 border-r">B</td>
                <td class="p-2 border-r">D</td>
                <td class="p-2 border-r">C</td>
              </tr>
            </tbody>
          </table>
        </div>`,
        text: "So far you have designed the following test cases:\nTC1: 19-year-old, unregistered man with no experience; expected result: category A\nTC2: 65-year-old, unregistered woman with 5 years of experience; expected result: category B\nTC3: 66-year-old, registered man with no experience; expected result: category C\nTC4: 65-year-old, registered woman with 4 years of experience; expected result: category D\n\nWhich of the following test cases, when added to the existing set of test cases, will increase the decision table coverage?",
        options: [
            { id: 'a', text: "66-year-old, unregistered man with no experience; expected result: category B" },
            { id: 'b', text: "55-year-old, unregistered woman with 2 years of experience; expected result: category A" },
            { id: 'c', text: "19-year-old, registered woman with 5 years of experience; expected result: category D" },
            { id: 'd', text: "No additional test case can increase the already achieved decision table coverage" }
        ],
        correctAnswer: 'a',
        explanation: "a) Is correct. These conditions match rule R4, which is not yet covered."
    },
    {
        id: 143,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.2.4',
        text: "You are applying state transition testing to the hotel room reservation system modeled by the following state transition table, with 4 states and 5 different events:",
        tableHtml: `
        <div class="overflow-x-auto my-4 p-2 rounded border border-slate-300 bg-white text-black text-sm">
          <table class="min-w-full text-center border-collapse">
            <thead>
              <tr class="font-bold border-b">
                <th class="p-2 border-r text-left">State</th>
                <th colspan="5" class="p-2">Events</th>
              </tr>
              <tr class="font-bold border-b bg-gray-50">
                <th class="p-2 border-r"></th>
                <th class="p-2 border-r">Available</th>
                <th class="p-2 border-r">NotAvailable</th>
                <th class="p-2 border-r">ChangeRoom</th>
                <th class="p-2 border-r">Cancel</th>
                <th class="p-2">Pay</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b">
                <td class="p-2 border-r font-semibold text-left">S1: Requesting</td>
                <td class="p-2 border-r">S2</td>
                <td class="p-2 border-r">S3</td>
                <td class="p-2 border-r"></td>
                <td class="p-2 border-r"></td>
                <td class="p-2"></td>
              </tr>
              <tr class="border-b">
                <td class="p-2 border-r font-semibold text-left">S2: Confirmed</td>
                <td class="p-2 border-r"></td>
                <td class="p-2 border-r"></td>
                <td class="p-2 border-r">S1</td>
                <td class="p-2 border-r">S4</td>
                <td class="p-2">S4</td>
              </tr>
              <tr class="border-b">
                <td class="p-2 border-r font-semibold text-left">S3: Waiting list</td>
                <td class="p-2 border-r">S2</td>
                <td class="p-2 border-r"></td>
                <td class="p-2 border-r"></td>
                <td class="p-2 border-r">S4</td>
                <td class="p-2"></td>
              </tr>
              <tr class="border-b">
                <td class="p-2 border-r font-semibold text-left">S4: End</td>
                <td class="p-2 border-r"></td>
                <td class="p-2 border-r"></td>
                <td class="p-2 border-r"></td>
                <td class="p-2 border-r"></td>
                <td class="p-2"></td>
              </tr>
            </tbody>
          </table>
        </div>`,
        text: "Assuming all test cases start in the 'Requesting' state, which of the following test cases, represented as sequences of events, achieves the highest valid transitions coverage?",
        options: [
            { id: 'a', text: "NotAvailable, Available, ChangeRoom, NotAvailable, Cancel" },
            { id: 'b', text: "Available, ChangeRoom, NotAvailable, Available, Pay" },
            { id: 'c', text: "Available, ChangeRoom, Available, ChangeRoom, NotAvailable" },
            { id: 'd', text: "NotAvailable, Cancel, Pay, ChangeRoom, Available" }
        ],
        correctAnswer: 'b',
        explanation: "b) Is correct. This sequence covers 5 different transitions, which is the highest coverage among the options."
    },
    {
        id: 144,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.3.1',
        text: "Your test suite S for a program P achieves 100% statement coverage. It consists of three test cases, each of which achieves 50% statement coverage.\n\nWhich of the following statements is CORRECT?",
        options: [
            { id: 'a', text: "Executing S will cause all possible failures in P" },
            { id: 'b', text: "S achieves 100% branch coverage for P" },
            { id: 'c', text: "Every executable statement in P containing a defect has been run at least once during the execution of S" },
            { id: 'd', text: "After removing one test case from S, the remaining two test cases will still achieve 100% statement coverage" }
        ],
        correctAnswer: 'c',
        explanation: "c) Is correct. 100% statement coverage means that each executable statement was executed at least once."
    },
    {
        id: 145,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.3.3',
        text: "Why does white-box testing facilitate defect detection even when the software specification is vague, outdated or incomplete?",
        options: [
            { id: 'a', text: "Test cases are designed based on the structure of the test object rather than the specification" },
            { id: 'b', text: "For each white-box test technique the coverage can be well-defined and easily measured" },
            { id: 'c', text: "White-box test techniques are very well designed to detect omissions in the requirements" },
            { id: 'd', text: "White-box test techniques can be used in both static testing and dynamic testing" }
        ],
        correctAnswer: 'a',
        explanation: "a) Is correct. Entire software implementation is taken into account during testing, which facilitates defect detection even with poor specifications."
    },
    {
        id: 146,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.4.1',
        text: "Which of the following is <b>NOT</b> anticipated by the tester while applying error guessing?",
        options: [
            { id: 'a', text: "The developer misunderstood the formula in the user story for calculating the interest" },
            { id: 'b', text: "The developer wrote \"FA = A*(1+iR^N)\" instead of \"FA = A*(1+IR)^N\" in the source code" },
            { id: 'c', text: "The developer missed the seminar on new compound interest rate legislation" },
            { id: 'd', text: "The accuracy of the interest calculated by the system is not precise enough" }
        ],
        correctAnswer: 'c',
        explanation: "c) Is correct. This is a potential root cause, which is difficult for the tester to anticipate through error guessing."
    },
    {
        id: 147,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.4.2',
        text: "Which of the following is true about exploratory testing?",
        options: [
            { id: 'a', text: "Test cases are designed before the exploratory testing session starts" },
            { id: 'b', text: "The tester can perform test execution, but cannot perform test design" },
            { id: 'c', text: "Exploratory testing results are good predictors of the number of remaining defects" },
            { id: 'd', text: "During exploratory testing the tester may use black-box test techniques" }
        ],
        correctAnswer: 'd',
        explanation: "d) Is correct. During exploratory testing, the testers can use any test techniques that they find useful."
    },
    {
        id: 148,
        chapter: 4,
        kLevel: 'K2',
        lo: 'FL-4.5.1',
        text: "Which collaborative user story writing practice enables the team to achieve a collective understanding of what needs to be delivered?",
        options: [
            { id: 'a', text: "Planning poker, so that a team can achieve consensus on the effort needed to implement a user story" },
            { id: 'b', text: "Reviews, so that a team can detect inconsistencies and contradictions in a user story" },
            { id: 'c', text: "Iteration planning, so that user stories with the highest business value for a customer can be prioritized for implementation" },
            { id: 'd', text: "Conversation, so that team members can understand how the software will be used" }
        ],
        correctAnswer: 'd',
        explanation: "d) Is correct. Conversation explains how the software will be used and allows the team to obtain a shared vision."
    },
    {
        id: 149,
        chapter: 4,
        kLevel: 'K3',
        lo: 'FL-4.5.3',
        text: "You have just started designing test cases for the following user story.\n\nAs a customer, I want to be able to filter search results by price range, so that I can find products within my budget more easily.\n\nAcceptance criteria:\n1. The filter should work for all versions of the application from version 3.0 upwards\n2. The filter should allow the customer to set a price range with a minimum and a maximum price\n3. The search results should update dynamically as the customer adjusts the price range filter\n\nIn all test cases the precondition is as follows: there are only two products available, products A and B. Product A costs $100 and product B costs $110.\n\nWhich of the following is the BEST example of a test case for this user story?",
        options: [
            { id: 'a', text: "Enter webpage and set filter to show prices between $90 and $100. Expected result: results show product A only. Set maximum price to $110. Expected result: results now include both products A and B" },
            { id: 'b', text: "Enter webpage. Expected result: the default minimum and maximum prices are $100 and $110 respectively. Add product C to stock, with price $120. Refresh the client's webpage. Expected result: the default maximum price changes to $120" },
            { id: 'c', text: "Enter webpage and set filter to show prices between $90 and $115. Expected result: results show both products A and B. Change currency from USD to EUR. Expected result: the filter range changes correctly to EUR values, according to the current exchange rate" },
            { id: 'd', text: "Enter webpage with three different browsers: Edge, Chrome and Opera. In each browser set filter between $90 and $110. Expected result: results include both products A and B and the results layout is the same in all three browsers" }
        ],
        correctAnswer: 'a',
        explanation: "a) Is correct. This test case is related to acceptance criteria 2 and 3."
    },
    {
        id: 150,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.1.3',
        text: "Which of the following BEST define EXIT criteria in a testing project?",
        type: 'multiple',
        options: [
            { id: 'a', text: "Budget is approved" },
            { id: 'b', text: "Budget runs out" },
            { id: 'c', text: "Test basis is available" },
            { id: 'd', text: "Test cases achieved at least 80% statement coverage" },
            { id: 'e', text: "All test analysts are ISTQB certified at the Foundation Level" }
        ],
        correctAnswer: ['b', 'd'],
        explanation: "b and d are correct. Running out of budget and achieving coverage targets are valid exit criteria."
    },
    {
        id: 151,
        chapter: 5,
        kLevel: 'K3',
        lo: 'FL-5.1.4',
        text: "The team wants to estimate the time needed for one tester to execute four test cases for a software component. The team has gathered the following measures of the effort used to execute a single test case:\nBest-case scenario: 1 hour\nWorst-case scenario: 8 hours\nMost likely scenario: 3 hours\n\nGiven that the three-point estimation technique is being used, what is the final estimate of the time needed to execute all four test cases?",
        options: [
            { id: 'a', text: "14 hours" },
            { id: 'b', text: "3.5 hours" },
            { id: 'c', text: "16 hours" },
            { id: 'd', text: "12 hours" }
        ],
        correctAnswer: 'a',
        explanation: "a) Is correct. E = (1h + 4*3h + 8h) / 6 = 3.5 hours for one case. 3.5h * 4 = 14 hours."
    },
    {
        id: 152,
        chapter: 5,
        kLevel: 'K3',
        lo: 'FL-5.1.5',
        text: "The table shows the traceability matrix from test cases to requirements. \"X\" means that a given test case covers the corresponding requirement.",
        tableHtml: `
        <div class="overflow-x-auto my-4 p-2 rounded border border-slate-300 bg-white text-black text-sm">
          <table class="min-w-full text-center border-collapse">
            <thead>
              <tr class="font-bold border-b bg-gray-50">
                <th class="p-2 border-r"></th>
                <th class="p-2 border-r">Req1</th>
                <th class="p-2 border-r">Req2</th>
                <th class="p-2 border-r">Req3</th>
                <th class="p-2 border-r">Req4</th>
                <th class="p-2 border-r">Req5</th>
                <th class="p-2 border-r">Req6</th>
                <th class="p-2">Req7</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b">
                <td class="p-2 border-r font-semibold">TC1</td>
                <td class="p-2 border-r">X</td>
                <td class="p-2 border-r"></td>
                <td class="p-2 border-r">X</td>
                <td class="p-2 border-r">X</td>
                <td class="p-2 border-r"></td>
                <td class="p-2 border-r"></td>
                <td class="p-2">X</td>
              </tr>
              <tr class="border-b">
                <td class="p-2 border-r font-semibold">TC2</td>
                <td class="p-2 border-r">X</td>
                <td class="p-2 border-r"></td>
                <td class="p-2 border-r"></td>
                <td class="p-2 border-r"></td>
                <td class="p-2 border-r">X</td>
                <td class="p-2 border-r"></td>
                <td class="p-2">X</td>
              </tr>
              <tr class="border-b">
                <td class="p-2 border-r font-semibold">TC3</td>
                <td class="p-2 border-r"></td>
                <td class="p-2 border-r"></td>
                <td class="p-2 border-r"></td>
                <td class="p-2 border-r"></td>
                <td class="p-2 border-r">X</td>
                <td class="p-2 border-r">X</td>
                <td class="p-2"></td>
              </tr>
              <tr>
                <td class="p-2 border-r font-semibold">TC4</td>
                <td class="p-2 border-r"></td>
                <td class="p-2 border-r">X</td>
                <td class="p-2 border-r"></td>
                <td class="p-2 border-r"></td>
                <td class="p-2 border-r"></td>
                <td class="p-2 border-r"></td>
                <td class="p-2"></td>
              </tr>
            </tbody>
          </table>
        </div>`,
        text: "You want to prioritize the test cases following the additional coverage prioritization technique. You execute all four test cases.\n\nWhich test case should be executed as the LAST one?",
        options: [
            { id: 'a', text: "TC1" },
            { id: 'b', text: "TC2" },
            { id: 'c', text: "TC3" },
            { id: 'd', text: "TC4" }
        ],
        correctAnswer: 'b',
        explanation: "b) Is correct. Order is TC1, TC3, TC4, then TC2."
    },
    {
        id: 153,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.1.7',
        text: "How can the testing quadrants be beneficial for testing?",
        options: [
            { id: 'a', text: "They help in test planning by dividing the test process into four phases, corresponding to the four basic test levels: component, integration, system, and acceptance testing" },
            { id: 'b', text: "They help in assessing the high-level coverage (e.g., requirements coverage) based on low-level coverage (e.g., code coverage)" },
            { id: 'c', text: "They help non-technical stakeholders to understand the different test types and that some test types are more relevant to certain test levels than others" },
            { id: 'd', text: "They help agile teams to develop a communication strategy based on classifying people according to four basic psychological types, and on modelling the relations between them" }
        ],
        correctAnswer: 'c',
        explanation: "c) Is correct. Testing quadrants allow stakeholders to understand relationships between test types, activities, and focused viewpoints."
    },
    {
        id: 154,
        chapter: 5,
        kLevel: 'K1',
        lo: 'FL-5.2.1',
        text: "For a given risk, its risk level is $1,000 and its risk likelihood is estimated as 50%.\n\nWhat is the risk impact?",
        options: [
            { id: 'a', text: "$500" },
            { id: 'b', text: "$2,000" },
            { id: 'c', text: "$50,000" },
            { id: 'd', text: "$200" }
        ],
        correctAnswer: 'b',
        explanation: "b) Is correct. Impact = Risk level / Likelihood = $1,000 / 0.5 = $2,000."
    },
    {
        id: 155,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.2.2',
        text: "Which of the following are product risks?",
        type: 'multiple',
        options: [
            { id: 'a', text: "Scope creep" },
            { id: 'b', text: "Poor architecture" },
            { id: 'c', text: "Cost-cutting" },
            { id: 'd', text: "Poor tool support" },
            { id: 'e', text: "Too long response time" }
        ],
        correctAnswer: ['b', 'e'],
        explanation: "b and e are correct. Poor architecture and long response times are characteristics of the product."
    },
    {
        id: 156,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.3.2',
        text: "Which of the following is <b>NOT</b> a valid purpose for a test report?",
        options: [
            { id: 'a', text: "Tracking test progress and identifying areas that require further attention" },
            { id: 'b', text: "Providing information on the tests executed, their results, and defects found" },
            { id: 'c', text: "Providing information about each defect, such as the steps to reproduce it" },
            { id: 'd', text: "Providing information on testing planned for the next period" }
        ],
        correctAnswer: 'c',
        explanation: "c) Is correct. Providing info about defect steps is for a defect report, not a test report."
    },
    {
        id: 157,
        chapter: 5,
        kLevel: 'K2',
        lo: 'FL-5.4.1',
        text: "The user reported a software failure. An engineer from the support team asked the user for the software version number where the failure was observed. Based on the version number, the team reassembled all the files that made up the release. This later allowed a developer to perform analysis, find the defect, and fix it.\n\nWhich of the following enabled the above activity to be performed by the team?",
        options: [
            { id: 'a', text: "Risk management" },
            { id: 'b', text: "Test monitoring and control" },
            { id: 'c', text: "Whole team approach" },
            { id: 'd', text: "Configuration management" }
        ],
        correctAnswer: 'd',
        explanation: "d) Is correct. Configuration management provides a discipline for identifying, controlling, and tracking work products."
    },
    {
        id: 158,
        chapter: 5,
        kLevel: 'K3',
        lo: 'FL-5.5.1',
        text: "Consider the following defect report for a Book Lending System.\nDefect ID: 001\nSeverity: High\nTitle: Unable to Return a Book\nPriority:\nEnvironment: Windows 10, Google Chrome\nDescription: When attempting to return a book using the Book Return feature, the system does not register the return and the book remains checked out to the user.\nSteps to Reproduce:\n1. Login to the Book Lending System as a user who has checked out a book.\n2. Click on the \"Book Return\" button for the book that has been checked out.\n3. System does not register the return and the book remains checked out.\nExpected Result: The book should be returned and no longer appear as checked out to the user.\nActual Result: The book remains checked out to the user and is not registered as returned in the system.\nAttachments: [empty list]\n\nWhich of the following is MOST likely to help the developer reproduce the failure quickly?",
        options: [
            { id: 'a', text: "Adding information about which users and which books the failure affects to the \"Description\" section" },
            { id: 'b', text: "Filling in the missing value for the \"Priority\" field" },
            { id: 'c', text: "Adding memory dumps and database snapshots taken after each step described in the \"Steps to Reproduce\" section to the \"Attachments\" section." },
            { id: 'd', text: "Repeating the same test case for different environments and writing defect reports for each of them separately" }
        ],
        correctAnswer: 'a',
        explanation: "a) Is correct. Adding specific input data allows the developer to reproduce the failure faster."
    },
    {
        id: 159,
        chapter: 6,
        kLevel: 'K2',
        lo: 'FL-6.1.1',
        text: "Given the following test tool categories:\ni. Collaboration tools\nii. DevOps tools\niii. Management tools\niv. Non-functional testing tools\nv. Test design and implementation tools\n\nTools from which of the categories are MOST likely to facilitate test execution?",
        options: [
            { id: 'a', text: "i, v" },
            { id: 'b', text: "ii, iv" },
            { id: 'c', text: "i, iii, v" },
            { id: 'd', text: "ii, iii, iv" }
        ],
        correctAnswer: 'b',
        explanation: "b) Is correct. DevOps tools (CI/CD) and Non-functional testing tools facilitate test execution."
    },
    {
        id: 160,
        chapter: 6,
        kLevel: 'K1',
        lo: 'FL-6.2.1',
        text: "Which of the following is MOST likely to be a risk of test automation?",
        options: [
            { id: 'a', text: "The detection of additional high-severity defects" },
            { id: 'b', text: "Providing measures that are too complicated for humans to derive" },
            { id: 'c', text: "Incompatibility with the development platform" },
            { id: 'd', text: "Substantially reduced test execution times" }
        ],
        correctAnswer: 'c',
        explanation: "c) Is correct. If test automation is incompatible with the platform, it will not be able to integrate correctly."
    }
];
