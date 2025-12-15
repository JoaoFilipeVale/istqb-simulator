export const questions = [
    {
        "id": 1,
        "chapter": 1,
        "text": "Which of the following statements describes a valid test objective?",
        "options": [
            {
                "id": "a",
                "text": "To prove that there are no unfixed defects in the system under test"
            },
            {
                "id": "b",
                "text": "To prove that no failures will occur after the implementation of the system in production"
            },
            {
                "id": "c",
                "text": "To reduce the risk level of the test object and build confidence in the quality level"
            },
            {
                "id": "d",
                "text": "To verify that there are no untested combinations of inputs"
            }
        ],
        "correctAnswer": "c",
        "explanation": "Testing finds defects and failures that reduce the level of risk and at the same time build confidence in the quality level of the test object. It is impossible to prove the total absence of defects (Principle 1)."
    },
    {
        "id": 2,
        "chapter": 1,
        "text": "Which of the following options shows an example of test activities that contribute to success?",
        "options": [
            {
                "id": "a",
                "text": "Involving testers during the various software development lifecycle (SDLC) activities will help detect defects in work products"
            },
            {
                "id": "b",
                "text": "Testers try not to disturb developers while they are coding, so they can write better code"
            },
            {
                "id": "c",
                "text": "Testers collaborate with end users to help improve the quality of defect reports during component integration testing and system testing"
            },
            {
                "id": "d",
                "text": "Certified testers will design much better test cases than non-certified testers"
            }
        ],
        "correctAnswer": "a",
        "explanation": "Early involvement of testers (Shift-Left) increases understanding of design decisions and enables early defect detection."
    },
    {
        "id": 3,
        "chapter": 1,
        "text": "You have been assigned the role of tester in a team that is producing a new system iteratively. However, you noticed that no changes were made to the existing regression test cases after several iterations and no new defects resulting from regression testing were identified. Your manager is happy with the situation, but you are not. Which of the following testing principles explains your skepticism?",
        "options": [
            {
                "id": "a",
                "text": "Tests wear out (Pesticide Paradox)"
            },
            {
                "id": "b",
                "text": "The absence of defects fallacy"
            },
            {
                "id": "c",
                "text": "Defects cluster together"
            },
            {
                "id": "d",
                "text": "Exhaustive testing is impossible"
            }
        ],
        "correctAnswer": "a",
        "explanation": "This principle states that, tendentially, repeating the same test cases exhaustively leads to not detecting new defects."
    },
    {
        "id": 4,
        "chapter": 1,
        "text": "You are working in a team developing a mobile food ordering application. In the current iteration, the team decided to implement the payment functionality. Which of the following activities belongs to test analysis?",
        "options": [
            {
                "id": "a",
                "text": "Calculating the estimate that testing the integration with the payment service will take about 8 person-days"
            },
            {
                "id": "b",
                "text": "Deciding if the team should perform testing to verify if it is possible to share payment between multiple users"
            },
            {
                "id": "c",
                "text": "Using boundary value analysis (BVA) to derive test case data verifying correct payment processing for the minimum allowed amount"
            },
            {
                "id": "d",
                "text": "Analyzing the discrepancy between the actual and expected result after executing the test case that verifies the payment process with a credit card and reporting a defect"
            }
        ],
        "correctAnswer": "b",
        "explanation": "Deciding 'what' to test (defining test conditions) belongs to test analysis. (a) is planning, (c) is design, (d) is execution."
    },
    {
        "id": 5,
        "chapter": 1,
        "text": "Which of the following factors (i-v) have a SIGNIFICANT influence on the test process?<br/>i. The SDLC<br/>ii. The number of defects detected in previous projects<br/>iii. Identified product risks<br/>iv. The application of new regulatory requirements<br/>v. The number of certified testers in the organization",
        "options": [
            {
                "id": "a",
                "text": "i, ii have significant influence; iii, iv, v have no influence"
            },
            {
                "id": "b",
                "text": "i, iii, iv have significant influence; ii, v have no influence"
            },
            {
                "id": "c",
                "text": "ii, iv, v have significant influence; i, iii have no influence"
            },
            {
                "id": "d",
                "text": "iii, v have significant influence; i, ii, iv have no influence"
            }
        ],
        "correctAnswer": "b",
        "explanation": "The SDLC (i), product risks (iii), and regulatory requirements (iv) are fundamental factors influencing the process."
    },
    {
        "id": 6,
        "chapter": 1,
        "text": "Which TWO of the following tasks PRIMARILY belong to a testing role? (Select two options)",
        "type": "multiple",
        "options": [
            {
                "id": "a",
                "text": "Setting up test environments"
            },
            {
                "id": "b",
                "text": "Maintaining the product backlog"
            },
            {
                "id": "c",
                "text": "Designing solutions for new requirements"
            },
            {
                "id": "d",
                "text": "Creating the test plan"
            },
            {
                "id": "e",
                "text": "Analyzing the test basis"
            }
        ],
        "correctAnswer": [
            "a",
            "e"
        ],
        "explanation": "Setting up environments (a) and analyzing the test basis (e) are typical tester tasks. Backlog is PO, solutions are Dev, test plan is Test Manager."
    },
    {
        "id": 7,
        "chapter": 1,
        "text": "Which of the following skills (i-v) are the MOST important skills for a tester?<br/>i. Domain knowledge<br/>ii. Creating a product vision<br/>iii. Good team spirit<br/>iv. Planning and organizing team work<br/>v. Critical thinking",
        "options": [
            {
                "id": "a",
                "text": "ii, iv are important"
            },
            {
                "id": "b",
                "text": "i, iii, v are important"
            },
            {
                "id": "c",
                "text": "i, ii, v are important"
            },
            {
                "id": "d",
                "text": "iii, iv are important"
            }
        ],
        "correctAnswer": "b",
        "explanation": "Domain knowledge (i), team spirit (iii), and critical thinking (v) are crucial. Product vision and planning are management/PO tasks."
    },
    {
        "id": 8,
        "chapter": 1,
        "text": "How is the Whole Team Approach present in interactions between testers and business representatives?",
        "options": [
            {
                "id": "a",
                "text": "Business representatives decide on test automation approaches"
            },
            {
                "id": "b",
                "text": "Testers help business representatives define a test strategy"
            },
            {
                "id": "c",
                "text": "Business representatives do not belong to the Whole Team Approach"
            },
            {
                "id": "d",
                "text": "Testers help business representatives create suitable acceptance tests"
            }
        ],
        "correctAnswer": "d",
        "explanation": "Testers collaborate with business representatives to ensure desired quality levels are reached and create acceptance tests."
    },
    {
        "id": 9,
        "chapter": 2,
        "text": "Consider the following rule: 'for every SDLC activity there is a corresponding test activity.' In which SDLC models does this rule apply?",
        "options": [
            {
                "id": "a",
                "text": "Only in SDLCs with sequential development models"
            },
            {
                "id": "b",
                "text": "Only in SDLCs with iterative development models"
            },
            {
                "id": "c",
                "text": "Only in SDLCs with incremental and iterative development models"
            },
            {
                "id": "d",
                "text": "In SDLCs with sequential, incremental, and iterative development models"
            }
        ],
        "correctAnswer": "d",
        "explanation": "This is a fundamental rule that applies to all lifecycle models."
    },
    {
        "id": 10,
        "chapter": 2,
        "text": "Which of the following statements BEST describes the Acceptance Test-Driven Development (ATDD) approach?",
        "options": [
            {
                "id": "a",
                "text": "In ATDD, acceptance criteria are usually created based on the 'Given/When/Then' format"
            },
            {
                "id": "b",
                "text": "In ATDD, test cases are primarily created in component testing and are code-oriented"
            },
            {
                "id": "c",
                "text": "In ATDD, tests are created based on acceptance criteria to drive related software development"
            },
            {
                "id": "d",
                "text": "In ATDD, tests are based on intended software behavior, which simplifies understanding by team members"
            }
        ],
        "correctAnswer": "c",
        "explanation": "In ATDD, tests are designed as part of the design process, before the code."
    },
    {
        "id": 11,
        "chapter": 2,
        "text": "Which of the following answers does NOT correspond to a Shift-Left approach?",
        "options": [
            {
                "id": "a",
                "text": "Reviewing user requirements before they are formally accepted by Stakeholders"
            },
            {
                "id": "b",
                "text": "Designing a component test before writing the corresponding code"
            },
            {
                "id": "c",
                "text": "Performing a performance efficiency test for a component during component testing"
            },
            {
                "id": "d",
                "text": "Writing a test script before defining the configuration management process"
            }
        ],
        "correctAnswer": "d",
        "explanation": "It doesn't make sense to create scripts before configuring the process (not shift-left, just poor management). The others (review, TDD, early non-functional test) are Shift-Left examples."
    },
    {
        "id": 12,
        "chapter": 2,
        "text": "Which of the arguments below can be used to convince your manager to organize retrospectives at the end of each release cycle?",
        "options": [
            {
                "id": "a",
                "text": "Currently, retrospectives are very popular and customers would be pleased to be added to the processes"
            },
            {
                "id": "b",
                "text": "Organizing retrospectives will save the organization money since end representatives/users do not provide immediate feedback on the product"
            },
            {
                "id": "c",
                "text": "Process deficiencies identified during the retrospective can be analyzed and used as a to-do list for the continuous improvement program"
            },
            {
                "id": "d",
                "text": "Retrospectives cover five values, including courage and respect, which are crucial for maintaining the organization's continuous improvement"
            }
        ],
        "correctAnswer": "c",
        "explanation": "Running regular retrospectives is essential for continuous improvement of development and testing."
    },
    {
        "id": 13,
        "chapter": 2,
        "text": "Which types of failures (1-4) BEST fit the test levels (A-D)?<br/>1. Failures in system behavior (deviation from business needs)<br/>2. Failures in communication between components<br/>3. Failures in module logic<br/>4. Failures in incorrectly implemented business rules<br/><br/>A. Component testing<br/>B. Component integration testing<br/>C. System testing<br/>D. Acceptance testing",
        "options": [
            {
                "id": "a",
                "text": "1D, 2B, 3A, 4C"
            },
            {
                "id": "b",
                "text": "1D, 2B, 3C, 4A"
            },
            {
                "id": "c",
                "text": "1B, 2A, 3D, 4C"
            },
            {
                "id": "d",
                "text": "1C, 2B, 3A, 4D"
            }
        ],
        "correctAnswer": "a",
        "explanation": "1-Acceptance (D), 2-Integration (B), 3-Components (A), 4-System (C)."
    },
    {
        "id": 14,
        "chapter": 2,
        "text": "Consider the history: TC1 failed in v1, passed in v2. TC2 passed in v1, failed in v2. TC3 failed in v1 and v2. In v3 (Run 3), all passed. Which tests in Run 3 were REGRESSION tests?",
        "options": [
            {
                "id": "a",
                "text": "Only 4, 7, 8 and 9"
            },
            {
                "id": "b",
                "text": "Only 5 and 7"
            },
            {
                "id": "c",
                "text": "Only 4, 6, 8 and 9"
            },
            {
                "id": "d",
                "text": "Only 5 and 6"
            }
        ],
        "correctAnswer": "b",
        "explanation": "Note: In the original scenario, TC1 passed in v2 (test 4) and TC2 failed in v2 (test 5). Regression tests are those that already passed and we re-execute. TC1 passed in v2, so in v3 (test 7) it is regression. TC2 passed in v1, so in v2 (test 5) it was regression (though it failed)."
    },
    {
        "id": 15,
        "chapter": 3,
        "text": "Which of the following statements is NOT an advantage of static testing?",
        "options": [
            {
                "id": "a",
                "text": "Less expensive defect management due to the ease of detecting defects later in the SDLC"
            },
            {
                "id": "b",
                "text": "Fixing defects found during static testing is usually much less expensive than fixing defects found during dynamic testing"
            },
            {
                "id": "c",
                "text": "Finding defects in the code that might not have been found just by executing dynamic tests"
            },
            {
                "id": "d",
                "text": "Detecting gaps and inconsistencies in requirements"
            }
        ],
        "correctAnswer": "a",
        "explanation": "Option A is false because finding defects 'later' is *more* expensive, not less. The goal is to find them early."
    },
    {
        "id": 16,
        "chapter": 3,
        "text": "Which of the following statements is an advantage of early and frequent feedback?",
        "options": [
            {
                "id": "a",
                "text": "It improves the test process for future projects"
            },
            {
                "id": "b",
                "text": "It forces customers to prioritize requirements based on agreed risks"
            },
            {
                "id": "c",
                "text": "It is the only way to measure the quality of changes"
            },
            {
                "id": "d",
                "text": "It helps avoid misunderstandings about requirements"
            }
        ],
        "correctAnswer": "d",
        "explanation": "Early and frequent feedback enables communicating potential quality issues and misunderstandings earlier."
    },
    {
        "id": 17,
        "chapter": 3,
        "text": "Reviews in the organization have: scribe role, purpose of evaluating quality, meeting led by the author, individual preparation, and report. What is the review type?",
        "options": [
            {
                "id": "a",
                "text": "Informal review"
            },
            {
                "id": "b",
                "text": "Walkthrough"
            },
            {
                "id": "c",
                "text": "Technical review"
            },
            {
                "id": "d",
                "text": "Inspection"
            }
        ],
        "correctAnswer": "b",
        "explanation": "The meeting being led by the author is the key characteristic of Walkingthrough. Inspections are not led by the author."
    },
    {
        "id": 18,
        "chapter": 3,
        "text": "Which of the following statements is NOT a factor contributing to the success of reviews?",
        "options": [
            {
                "id": "a",
                "text": "Participants should dedicate sufficient time for the review"
            },
            {
                "id": "b",
                "text": "It is recommended to split large work products into small parts"
            },
            {
                "id": "c",
                "text": "Participants should avoid behaviors that might indicate boredom or hostility"
            },
            {
                "id": "d",
                "text": "Failures found must be acknowledged, evaluated, and managed objectively"
            }
        ],
        "correctAnswer": "d",
        "explanation": "In reviews, we find 'defects', not 'failures'. Failures occur in dynamic execution."
    },
    {
        "id": 19,
        "chapter": 4,
        "text": "Which of the following statements is a characteristic of experience-based test techniques?",
        "options": [
            {
                "id": "a",
                "text": "Test cases are created based on detailed design information"
            },
            {
                "id": "b",
                "text": "Items tested in the interface code section are used to measure coverage"
            },
            {
                "id": "c",
                "text": "Techniques rely heavily on the tester's knowledge of the software and business domain"
            },
            {
                "id": "d",
                "text": "Test cases are used to identify deviations from requirements"
            }
        ],
        "correctAnswer": "c",
        "explanation": "They rely on the tester's knowledge and intuition (Ex: Error Guessing, Exploratory Testing)."
    },
    {
        "id": 20,
        "chapter": 4,
        "text": "Scenario: Apartments with 'Floor' (4 options: Ground, 1st, 2nd, Top) and 'Garden' (3 options: None, Small, Large). Rule: Only Ground floor can have a garden. What is the minimum number of test cases for 100% valid Equivalence Partitioning (EP) coverage?",
        "options": [
            {
                "id": "a",
                "text": "3"
            },
            {
                "id": "b",
                "text": "4"
            },
            {
                "id": "c",
                "text": "5"
            },
            {
                "id": "d",
                "text": "6"
            }
        ],
        "correctAnswer": "b",
        "explanation": "We need 4 tests: 1) Ground + S.Garden, 2) Ground + L.Garden, 3) 1st + No Garden, 4) 2nd (or Top) + No Garden to cover all valid input partitions."
    },
    {
        "id": 21,
        "chapter": 4,
        "text": "Grading system: 0-50 (Fail), 51-60 (Fair), 61-70 (Satisfactory), 71-80 (Good), 81-90 (Very Good), 91-100 (Excellent).<br/>Test cases executed with values: 91, 50, 81, 60, 70, 80.<br/>What Boundary Value Analysis (2-value BVA) coverage was achieved?",
        "options": [
            {
                "id": "a",
                "text": "50%"
            },
            {
                "id": "b",
                "text": "60%"
            },
            {
                "id": "c",
                "text": "33.3%"
            },
            {
                "id": "d",
                "text": "100%"
            }
        ],
        "correctAnswer": "a",
        "explanation": "Boundaries: 0, 50, 51, 60, 61, 70, 71, 80, 81, 90, 91, 100 (12 boundaries). Values tested (91, 50, 81, 60, 70, 80) cover 6 boundaries. 6/12 = 50%."
    },
    {
        "id": 22,
        "chapter": 4,
        "text": "Decision Table:<br/>Rules: Member? (T/F) | Deadline missed? (T/F) | 15th rental? (T/F)<br/>R4: Member=T, Deadline Missed=F, 15th Rental=T -> Actions: 20% Discount + T-shirt.<br/>R8: Member=F, Deadline Missed=T, 15th Rental=T -> Actions: T-shirt.<br/>Based on 'Members receive t-shirt after 15 rentals', which rule describes an IMPOSSIBLE or wrong situation?",
        "options": [
            {
                "id": "a",
                "text": "R4"
            },
            {
                "id": "b",
                "text": "R2"
            },
            {
                "id": "c",
                "text": "R6"
            },
            {
                "id": "d",
                "text": "R8"
            }
        ],
        "correctAnswer": "d",
        "explanation": "R8 indicates a 'Non-member' receiving a T-shirt. The rule says 'only members receive a gift'. Thus R8 is incorrect."
    },
    {
        "id": 23,
        "chapter": 4,
        "text": "State Transition:<br/>INIT -> (test) -> DEBUG MODE -> (done) -> OFF<br/>INIT -> (run) -> RUNNING <-> (pause/resume) <-> WAITING<br/>RUNNING -> (error) -> DEBUG MODE<br/>WAITING -> (done) -> OFF<br/>What is the MINIMUM number of test cases to cover all valid transitions?",
        "options": [
            {
                "id": "a",
                "text": "4"
            },
            {
                "id": "b",
                "text": "2"
            },
            {
                "id": "c",
                "text": "7"
            },
            {
                "id": "d",
                "text": "3"
            }
        ],
        "correctAnswer": "d",
        "explanation": "Need 3 paths: 1) INIT->Test->Debug->Done. 2) INIT->Run->Error->Debug. 3) INIT->Run->Pause->Resume->Pause->Done (via Waiting)."
    },
    {
        "id": 24,
        "chapter": 4,
        "text": "Your test suite achieves 100% statement coverage. What is the consequence of this fact?",
        "options": [
            {
                "id": "a",
                "text": "Every statement in the code containing a defect has been evaluated at least once"
            },
            {
                "id": "b",
                "text": "Any test suite with more test cases than yours will also achieve 100% statement coverage"
            },
            {
                "id": "c",
                "text": "Every path in the code has been executed at least once"
            },
            {
                "id": "d",
                "text": "Every combination of input values has been tested at least once"
            }
        ],
        "correctAnswer": "a",
        "explanation": "If you covered 100% of statements, all lines of code (including those with bugs) were executed."
    },
    {
        "id": 25,
        "chapter": 4,
        "text": "Which of the following statements is NOT true for white-box testing?",
        "options": [
            {
                "id": "a",
                "text": "During white-box testing, the entire software implementation is considered"
            },
            {
                "id": "b",
                "text": "White-box coverage metrics can help identify additional tests"
            },
            {
                "id": "c",
                "text": "White-box testing techniques can be used in static testing"
            },
            {
                "id": "d",
                "text": "White-box testing can help identify gaps in requirement implementation"
            }
        ],
        "correctAnswer": "d",
        "explanation": "White-box is based on structure, not requirements. It cannot identify missing functionality (gaps in implementation vs requirements)."
    },
    {
        "id": 26,
        "chapter": 4,
        "text": "Which of the following statements BEST describes the concept underlying Error Guessing?",
        "options": [
            {
                "id": "a",
                "text": "Error guessing implies using knowledge and experience of past defects and typical errors made by developers"
            },
            {
                "id": "b",
                "text": "Error guessing implies using personal development experience and errors made while coding"
            },
            {
                "id": "c",
                "text": "Error guessing requires imagining you are the user of the test object and anticipating errors that might be made by that user"
            },
            {
                "id": "d",
                "text": "Error guessing requires quickly duplicating the development task to identify the type of errors that might be made"
            }
        ],
        "correctAnswer": "a",
        "explanation": "It is based on the tester's experience regarding where defects usually appear."
    },
    {
        "id": 27,
        "chapter": 4,
        "text": "Release delay. You have domain knowledge, but requirements are incomplete. Management wants results NOW. What is the best technique?",
        "options": [
            {
                "id": "a",
                "text": "Checklist-based testing"
            },
            {
                "id": "b",
                "text": "Error Guessing"
            },
            {
                "id": "c",
                "text": "Exploratory testing"
            },
            {
                "id": "d",
                "text": "Branch testing"
            }
        ],
        "correctAnswer": "c",
        "explanation": "Exploratory tests are ideal when there is little specification and urgency, leveraging domain knowledge."
    },
    {
        "id": 28,
        "chapter": 4,
        "text": "Which of the following statements BEST describes how acceptance criteria can be documented?",
        "options": [
            {
                "id": "a",
                "text": "Performing retrospectives to determine actual stakeholder needs"
            },
            {
                "id": "b",
                "text": "Using the 'Given/When/Then' format to describe a test condition example"
            },
            {
                "id": "c",
                "text": "Using verbal communication to reduce risk of misinterpretation"
            },
            {
                "id": "d",
                "text": "Documenting risks related to a specific user story in a test plan"
            }
        ],
        "correctAnswer": "b",
        "explanation": "Gherkin (Given/When/Then) is the standard format for documenting acceptance criteria in BDD/ATDD."
    },
    {
        "id": 29,
        "chapter": 4,
        "text": "User Story: 'As an Editor, I want to review content...'. Criteria: Editor can edit, save, reassign to Owner. What is the best ATDD test?",
        "options": [
            {
                "id": "a",
                "text": "Perform a test to verify if the editor can save the document after editing page content"
            },
            {
                "id": "b",
                "text": "Perform a test to verify if the content owner can log in and update content"
            },
            {
                "id": "c",
                "text": "Perform a test to verify if the editor can schedule publication of newly edited content"
            },
            {
                "id": "d",
                "text": "Perform a test to verify if the editor can reassign the update task to another editor"
            }
        ],
        "correctAnswer": "a",
        "explanation": "Directly covers defined acceptance criteria (Edit and Save)."
    },
    {
        "id": 30,
        "chapter": 5,
        "text": "How do testers add value to iteration planning and release planning?",
        "options": [
            {
                "id": "a",
                "text": "Testers determine priority of user stories to develop"
            },
            {
                "id": "b",
                "text": "Testers focus only on functional aspects of the system under test"
            },
            {
                "id": "c",
                "text": "Testers participate in detailed risk identification and risk assessment of user stories"
            },
            {
                "id": "d",
                "text": "Testers ensure high-quality software release through early test design during delivery planning"
            }
        ],
        "correctAnswer": "c",
        "explanation": "Participation in risk analysis of User Stories is a key contribution."
    },
    {
        "id": 31,
        "chapter": 5,
        "text": "Which TWO of the following options are exit criteria for performing system testing? (Select two)",
        "type": "multiple",
        "options": [
            {
                "id": "a",
                "text": "Readiness of test environment"
            },
            {
                "id": "b",
                "text": "Ability of tester to log in to test object"
            },
            {
                "id": "c",
                "text": "Defect density estimate is reached"
            },
            {
                "id": "d",
                "text": "Requirements translated into 'Given/When/Then' format"
            },
            {
                "id": "e",
                "text": "Automated regression tests"
            }
        ],
        "correctAnswer": [
            "c",
            "e"
        ],
        "explanation": "Environment ready (a) is entry criterion. Reaching defect metrics (c) and automation completion (e) are exit criteria."
    },
    {
        "id": 32,
        "chapter": 5,
        "text": "Three-point estimation: Optimistic=2, Most Likely=11, Pessimistic=14. What is the final estimate?",
        "options": [
            {
                "id": "a",
                "text": "9"
            },
            {
                "id": "b",
                "text": "14"
            },
            {
                "id": "c",
                "text": "11"
            },
            {
                "id": "d",
                "text": "10"
            }
        ],
        "correctAnswer": "d",
        "explanation": "Formula: (Optimistic + 4*Likely + Pessimistic) / 6. (2 + 44 + 14) / 6 = 60 / 6 = 10."
    },
    {
        "id": 33,
        "chapter": 5,
        "text": "Dependencies: TC001 -> TC002. TC002 is prerequisite for TC003, TC004, TC005. Priorities: TC003(1), TC004(2), TC005(3). Which should be executed third?",
        "options": [
            {
                "id": "a",
                "text": "TC 003"
            },
            {
                "id": "b",
                "text": "TC 005"
            },
            {
                "id": "c",
                "text": "TC 002"
            },
            {
                "id": "d",
                "text": "TC 001"
            }
        ],
        "correctAnswer": "a",
        "explanation": "Logical order: TC001 (no dep), TC002 (dep on 001). Now we can run the rest. By priority: TC003 is the first of these. So sequence is 001, 002, 003."
    },
    {
        "id": 34,
        "chapter": 5,
        "text": "Agile Quadrants. 1.Usability, 2.Components, 3.Functional, 4.Reliability. Mapping with Q1(Tech/Team), Q2(Business/Team), Q3(Business/Product), Q4(Tech/Product).",
        "options": [
            {
                "id": "a",
                "text": "1C (Q3), 2A (Q1), 3B (Q2), 4D (Q4)"
            },
            {
                "id": "b",
                "text": "1D, 2A, 3C, 4B"
            },
            {
                "id": "c",
                "text": "1C, 2B, 3D, 4A"
            },
            {
                "id": "d",
                "text": "1D, 2B, 3C, 4A"
            }
        ],
        "correctAnswer": "a",
        "explanation": "Components -> Q1 (Tech/Team). Functional -> Q2 (Business/Team). Usability -> Q3 (Business/Product). Reliability -> Q4 (Tech/Product)."
    },
    {
        "id": 35,
        "chapter": 5,
        "text": "Risk: Long response time. Defined action: independent team performs performance testing. What type of measure is this?",
        "options": [
            {
                "id": "a",
                "text": "Risk acceptance"
            },
            {
                "id": "b",
                "text": "Contingency plan"
            },
            {
                "id": "c",
                "text": "Risk mitigation"
            },
            {
                "id": "d",
                "text": "Risk transfer"
            }
        ],
        "correctAnswer": "c",
        "explanation": "Testing to reduce probability or impact (finding problem before production) is mitigation."
    },
    {
        "id": 36,
        "chapter": 5,
        "text": "Which work product can be used by an Agile team to show amount of work already completed and total work remaining for a given iteration?",
        "options": [
            {
                "id": "a",
                "text": "Acceptance criteria"
            },
            {
                "id": "b",
                "text": "Defect report"
            },
            {
                "id": "c",
                "text": "Test completion report"
            },
            {
                "id": "d",
                "text": "Burndown chart"
            }
        ],
        "correctAnswer": "d",
        "explanation": "Burndown chart is the standard visual tool for progress in Agile iterations."
    },
    {
        "id": 37,
        "chapter": 5,
        "text": "One of the automated test scripts needs to be updated to comply with a new requirement. Which process indicates you created a version of the test script in the repository?",
        "options": [
            {
                "id": "a",
                "text": "Traceability management"
            },
            {
                "id": "b",
                "text": "Maintenance testing"
            },
            {
                "id": "c",
                "text": "Configuration management"
            },
            {
                "id": "d",
                "text": "Requirements engineering"
            }
        ],
        "correctAnswer": "c",
        "explanation": "Configuration management deals with versions, repositories, and artifact integrity."
    },
    {
        "id": 38,
        "chapter": 5,
        "text": "You received a defect report: 'App hangs after input X. Defect rejected by devs (not reproducible)'. Report has logs, steps, author. What critical info is MISSING?",
        "options": [
            {
                "id": "a",
                "text": "Expected result and observed result"
            },
            {
                "id": "b",
                "text": "References and defect status"
            },
            {
                "id": "c",
                "text": "Test environment and test item"
            },
            {
                "id": "d",
                "text": "Priority and severity"
            }
        ],
        "correctAnswer": "c",
        "explanation": "Without knowing the exact software version (item) and environment (OS, Browser, Config), the developer cannot reproduce the error."
    },
    {
        "id": 39,
        "chapter": 6,
        "text": "A test data preparation tool supports which test activity?",
        "options": [
            {
                "id": "a",
                "text": "Test monitoring and control"
            },
            {
                "id": "b",
                "text": "Test analysis"
            },
            {
                "id": "c",
                "text": "Test design and implementation"
            },
            {
                "id": "d",
                "text": "Test completion"
            }
        ],
        "correctAnswer": "c",
        "explanation": "Creating or acquiring test data occurs during test implementation."
    },
    {
        "id": 40,
        "chapter": 6,
        "text": "Which of the following statements correctly identifies a potential risk of performing test automation?",
        "options": [
            {
                "id": "a",
                "text": "It may introduce unknown regressions in production"
            },
            {
                "id": "b",
                "text": "Insufficient effort may be allocated to maintain testware"
            },
            {
                "id": "c",
                "text": "Test tools and associated testware may not be reliable enough"
            },
            {
                "id": "d",
                "text": "It may reduce time allocated for manual testing"
            }
        ],
        "correctAnswer": "b",
        "explanation": "Maintenance of test code is often underestimated, making automation unsustainable in the long run."
    },
    {
        "id": 41,
        "chapter": 3,
        "text": "What is the main difference between static testing and dynamic testing?",
        "options": [
            {
                "id": "a",
                "text": "Static testing finds failures by executing code, while dynamic testing finds defects without executing code."
            },
            {
                "id": "b",
                "text": "Static testing focuses on verifying requirements and design without execution, while dynamic testing requires software execution."
            },
            {
                "id": "c",
                "text": "Static testing is performed only by developers, while dynamic testing is performed only by customers."
            },
            {
                "id": "d",
                "text": "Static testing is used only to measure code coverage, while dynamic testing validates usability."
            }
        ],
        "correctAnswer": "b",
        "explanation": "Static testing does not involve software execution (e.g. reviews), whereas dynamic testing requires running the code to observe failures."
    },
    {
        "id": 42,
        "chapter": 3,
        "text": "In a formal review, what is the main role of the 'Moderator' (or Facilitator)?",
        "options": [
            {
                "id": "a",
                "text": "To document all defects found during the meeting."
            },
            {
                "id": "b",
                "text": "To fix the defects found in the work product."
            },
            {
                "id": "c",
                "text": "To ensure the smooth running of meetings and mediate discussions."
            },
            {
                "id": "d",
                "text": "To write the code that is being reviewed."
            }
        ],
        "correctAnswer": "c",
        "explanation": "The Moderator (Facilitator) leads the review, manages time, and ensures the meeting follows the agenda. The Scribe (Recorder) documents the findings."
    },
    {
        "id": 43,
        "chapter": 4,
        "text": "Consider an input field that accepts integers from 1 to 100 (inclusive). Using 2-value Boundary Value Analysis (BVA), what are the correct test values?",
        "options": [
            {
                "id": "a",
                "text": "0, 1, 100, 101"
            },
            {
                "id": "b",
                "text": "1, 50, 100"
            },
            {
                "id": "c",
                "text": "0, 1, 2, 99, 100, 101"
            },
            {
                "id": "d",
                "text": "-1, 1, 100, 102"
            }
        ],
        "correctAnswer": "a",
        "explanation": "In 2-value BVA, we test the boundary value (valid) and the immediate value outside (invalid). For 1 to 100: Min(1), Min-1(0), Max(100), Max+1(101)."
    },
    {
        "id": 44,
        "chapter": 4,
        "text": "Which of the following statements about State Transition Testing is TRUE?",
        "options": [
            {
                "id": "a",
                "text": "It is a white-box technique used to test loops in the code."
            },
            {
                "id": "b",
                "text": "It is most effective for systems that have a linear process flow with no defined states."
            },
            {
                "id": "c",
                "text": "It is used to test the system's ability to enter and exit defined states through valid and invalid transitions."
            },
            {
                "id": "d",
                "text": "It guarantees 100% statement and branch coverage."
            }
        ],
        "correctAnswer": "c",
        "explanation": "State transition focuses on system behavior based on states and events. It is a black-box technique."
    },
    {
        "id": 45,
        "chapter": 4,
        "text": "What does 'Statement Coverage' measure?",
        "options": [
            {
                "id": "a",
                "text": "The percentage of decisions (branches) executed."
            },
            {
                "id": "b",
                "text": "The percentage of executable code instructions that were exercised by tests."
            },
            {
                "id": "c",
                "text": "The amount of defects found per hour."
            },
            {
                "id": "d",
                "text": "The percentage of user requirements validated."
            }
        ],
        "correctAnswer": "b",
        "explanation": "Statement coverage measures what percentage of executable lines of code were run. It is a white-box metric."
    },
    {
        "id": 46,
        "chapter": 1,
        "text": "What is one of the main benefits of independence in testing?",
        "options": [
            {
                "id": "a",
                "text": "Independent testers are cheaper than developers."
            },
            {
                "id": "b",
                "text": "Independent testers can see other types of defects and are unbiased as they did not create the code."
            },
            {
                "id": "c",
                "text": "Independence ensures there are no project delays."
            },
            {
                "id": "d",
                "text": "Independent testers know the code better than developers."
            }
        ],
        "correctAnswer": "b",
        "explanation": "Independence helps find defects that the code author might ignore due to confirmation bias."
    },
    {
        "id": 47,
        "chapter": 5,
        "text": "In the context of product risks vs. project risks, which of the examples below is a PROJECT RISK?",
        "options": [
            {
                "id": "a",
                "text": "The software might fail to calculate taxes correctly."
            },
            {
                "id": "b",
                "text": "The system response time is too slow for the end user."
            },
            {
                "id": "c",
                "text": "The test team does not have the test environment ready on time."
            },
            {
                "id": "d",
                "text": "The user interface is confusing and difficult to navigate."
            }
        ],
        "correctAnswer": "c",
        "explanation": "Project risks affect the ability to deliver (deadlines, resources, tools). The others are product risks (software quality)."
    },
    {
        "id": 48,
        "chapter": 4,
        "text": "What is the main objective of a 'Test Charter' in exploratory testing?",
        "options": [
            {
                "id": "a",
                "text": "To completely replace formal test cases."
            },
            {
                "id": "b",
                "text": "To define the mission, scope, and objectives of an exploratory testing session."
            },
            {
                "id": "c",
                "text": "To list step-by-step all actions the tester must perform."
            },
            {
                "id": "d",
                "text": "To automate the execution of regression tests."
            }
        ],
        "correctAnswer": "b",
        "explanation": "The Test Charter guides the exploratory testing session, defining what to test and how, without prescribing exact steps."
    },
    {
        "id": 49,
        "chapter": 6,
        "text": "Which of the following tools would be most useful to support Continuous Integration (CI/CD)?",
        "options": [
            {
                "id": "a",
                "text": "Defect management tool."
            },
            {
                "id": "b",
                "text": "Build automation and unit test execution tool."
            },
            {
                "id": "c",
                "text": "Data modeling tool."
            },
            {
                "id": "d",
                "text": "Usability testing tool."
            }
        ],
        "correctAnswer": "b",
        "explanation": "In CI/CD, tools that compile code and run tests automatically on every commit (like Jenkins or GitLab CI) are essential."
    },
    {
        "id": 50,
        "chapter": 2,
        "text": "What distinguishes 'Confirmation Testing' from 'Regression Testing'?",
        "options": [
            {
                "id": "a",
                "text": "Confirmation testing verifies if a defect was fixed; regression testing verifies if the fix introduced new problems."
            },
            {
                "id": "b",
                "text": "Confirmation testing is always automated; regression testing is always manual."
            },
            {
                "id": "c",
                "text": "Confirmation testing is done on the whole system; regression testing is done only on the changed module."
            },
            {
                "id": "d",
                "text": "There is no difference, they are synonyms."
            }
        ],
        "correctAnswer": "a",
        "explanation": "Confirmation = re-testing the original failure. Regression = testing the rest of the system to ensure nothing broke inadvertently."
    },
    {
        "id": 51,
        "chapter": 1,
        "text": "What is a potential drawback of having a fully independent test team?",
        "options": [
            {
                "id": "a",
                "text": "Independent testers are too optimistic about software quality."
            },
            {
                "id": "b",
                "text": "There may be a lack of communication and isolation between the test team and the development team."
            },
            {
                "id": "c",
                "text": "Independent testers cannot find defects in documentation."
            },
            {
                "id": "d",
                "text": "Independence prevents the use of automation tools."
            }
        ],
        "correctAnswer": "b",
        "explanation": "Although independence brings objectivity, the risk of isolation ('us vs them') and delayed communication is a recognized disadvantage."
    },
    {
        "id": 52,
        "chapter": 2,
        "text": "Which of the following is an example of a Non-Functional Test?",
        "options": [
            {
                "id": "a",
                "text": "Verifying if the 'Save' button correctly records data in the database."
            },
            {
                "id": "b",
                "text": "Verifying if the system calculates the correct 23% VAT."
            },
            {
                "id": "c",
                "text": "Measuring how many concurrent users the system supports before becoming slow."
            },
            {
                "id": "d",
                "text": "Ensuring the login flow redirects to the home page."
            }
        ],
        "correctAnswer": "c",
        "explanation": "Load/performance tests (how the system behaves) are non-functional. The others (a, b, d) validate what the system *does* (functional)."
    },
    {
        "id": 53,
        "chapter": 2,
        "text": "In the 'Test Pyramid' structure (often used in Agile), which layer should have the largest number of tests?",
        "options": [
            {
                "id": "a",
                "text": "System Tests (UI / End-to-End)."
            },
            {
                "id": "b",
                "text": "User Acceptance Tests."
            },
            {
                "id": "c",
                "text": "Unit Tests (Components)."
            },
            {
                "id": "d",
                "text": "Manual Exploratory Tests."
            }
        ],
        "correctAnswer": "c",
        "explanation": "The pyramid suggests having a broad base of unit tests (fast and cheap) and a smaller number of UI/System tests (slow and expensive) at the top."
    },
    {
        "id": 54,
        "chapter": 4,
        "text": "If we have a code block with a single decision: `IF (Age > 18) THEN Access=Granted ELSE Access=Denied`. How many test cases are needed to achieve 100% Branch/Decision Coverage?",
        "options": [
            {
                "id": "a",
                "text": "1"
            },
            {
                "id": "b",
                "text": "2"
            },
            {
                "id": "c",
                "text": "3"
            },
            {
                "id": "d",
                "text": "4"
            }
        ],
        "correctAnswer": "b",
        "explanation": "To cover branches, we need to test the TRUE result (Age > 18) and the FALSE result (Age <= 18). Therefore, 2 tests."
    },
    {
        "id": 55,
        "chapter": 5,
        "text": "During test execution, a tester finds a discrepancy between the expected result and the actual result. What is the first action they should take?",
        "options": [
            {
                "id": "a",
                "text": "Immediately write a detailed defect report."
            },
            {
                "id": "b",
                "text": "Investigate and try to reproduce the failure to ensure it is not an error in the test itself or the environment."
            },
            {
                "id": "c",
                "text": "Call the developer to fix the code."
            },
            {
                "id": "d",
                "text": "Stop all tests until the problem is resolved."
            }
        ],
        "correctAnswer": "b",
        "explanation": "Before reporting, one must confirm the failure (reproduce) to avoid 'false positives' caused by wrong data, environment, or tester error."
    },
    {
        "id": 56,
        "chapter": 5,
        "text": "What is the main purpose of the 'Test Plan'?",
        "options": [
            {
                "id": "a",
                "text": "To describe step-by-step how to execute each test."
            },
            {
                "id": "b",
                "text": "To record the results of test execution."
            },
            {
                "id": "c",
                "text": "To document the strategy, scope, resources, schedule, and risks of test activities."
            },
            {
                "id": "d",
                "text": "To list all defects found in the previous project."
            }
        ],
        "correctAnswer": "c",
        "explanation": "The Test Plan is the management document that defines 'what', 'how', 'when', and 'who' will test (Planning)."
    },
    {
        "id": 57,
        "chapter": 6,
        "text": "What does the term 'Probe Effect' mean in testing?",
        "options": [
            {
                "id": "a",
                "text": "When the test tool is too expensive for the project."
            },
            {
                "id": "b",
                "text": "When the test tool alters the behavior or performance of the system being tested."
            },
            {
                "id": "c",
                "text": "When the tool finds defects that do not exist."
            },
            {
                "id": "d",
                "text": "When manual testers refuse to use the tool."
            }
        ],
        "correctAnswer": "b",
        "explanation": "The probe effect occurs when the act of measuring itself (e.g., performance or coverage tools) affects the test outcome."
    },
    {
        "id": 58,
        "chapter": 5,
        "text": "Which of the following options correctly describes the difference between 'Acceptance Criteria' and 'Exit Criteria'?",
        "options": [
            {
                "id": "a",
                "text": "There is no difference, they are the same concept."
            },
            {
                "id": "b",
                "text": "Acceptance Criteria define when a User Story is 'Done'; Exit Criteria define when a test phase (e.g., System Testing) is complete."
            },
            {
                "id": "c",
                "text": "Acceptance Criteria are for developers; Exit Criteria are for customers."
            },
            {
                "id": "d",
                "text": "Exit Criteria are defined at the start of the project; Acceptance Criteria are defined at the end."
            }
        ],
        "correctAnswer": "b",
        "explanation": "Acceptance focuses on functionality/requirement (product). Exit focuses on the test process (whether we have tested enough to stop)."
    },
    {
        "id": 59,
        "chapter": 5,
        "text": "In a risk-based approach, how is the 'Risk Level' determined?",
        "options": [
            {
                "id": "a",
                "text": "By the complexity of the source code."
            },
            {
                "id": "b",
                "text": "By the combination of the Probability of occurrence and the Impact (Harm) if the risk materializes."
            },
            {
                "id": "c",
                "text": "By the time available to test."
            },
            {
                "id": "d",
                "text": "By the number of testers available."
            }
        ],
        "correctAnswer": "b",
        "explanation": "Risk = Probability x Impact. This is the standard formula for assessing and prioritizing risks."
    },
    {
        "id": 60,
        "chapter": 5,
        "text": "Which of these activities belongs to the 'Test Completion' phase?",
        "options": [
            {
                "id": "a",
                "text": "Creating test data for execution."
            },
            {
                "id": "b",
                "text": "Writing automated test cases."
            },
            {
                "id": "c",
                "text": "Checking if all defect reports are closed or deferred and creating the Test Summary Report."
            },
            {
                "id": "d",
                "text": "Prioritizing test cases based on risk."
            }
        ],
        "correctAnswer": "c",
        "explanation": "Completion occurs at the end. It involves verifying if work is finished, archiving testware, and reporting the final summary."
    },
    {
        "id": 61,
        "chapter": 1,
        "text": "What is the main difference between 'Quality Assurance' (QA) and 'Testing'?",
        "options": [
            {
                "id": "a",
                "text": "Testing focuses on defect prevention, while QA focuses on defect detection."
            },
            {
                "id": "b",
                "text": "QA focuses on implementing proper processes (prevention), while Testing focuses on execution to find failures (detection)."
            },
            {
                "id": "c",
                "text": "QA is performed only by managers, while Testing is performed by interns."
            },
            {
                "id": "d",
                "text": "There is no difference; they are interchangeable terms for the same activity."
            }
        ],
        "correctAnswer": "b",
        "explanation": "QA is process-oriented/prevention (confidence quality will be achieved). Testing is product-oriented/detection of problems."
    },
    {
        "id": 62,
        "chapter": 2,
        "text": "When performing an impact analysis during maintenance testing, what are we trying to determine?",
        "options": [
            {
                "id": "a",
                "text": "How many developers are needed to fix a defect."
            },
            {
                "id": "b",
                "text": "Which part of the system was changed and which unchanged parts may have been affected (side effects)."
            },
            {
                "id": "c",
                "text": "The total cost of the initial project."
            },
            {
                "id": "d",
                "text": "The root cause of a defect found in production."
            }
        ],
        "correctAnswer": "b",
        "explanation": "Impact analysis identifies intended and unintended consequences of a change to select appropriate regression tests."
    },
    {
        "id": 63,
        "chapter": 5,
        "text": "Which of the following is a key benefit of traceability between the test basis (requirements) and test cases?",
        "options": [
            {
                "id": "a",
                "text": "It allows assessing requirement coverage and analyzing the impact of changes in requirements."
            },
            {
                "id": "b",
                "text": "It ensures code is written without syntax errors."
            },
            {
                "id": "c",
                "text": "It reduces the need for documentation in the project."
            },
            {
                "id": "d",
                "text": "It allows developers to fix defects automatically."
            }
        ],
        "correctAnswer": "a",
        "explanation": "Traceability links requirements to tests, allowing us to know what has been tested and what needs re-testing if a requirement changes."
    },
    {
        "id": 64,
        "chapter": 2,
        "text": "In which test level is the main focus on interactions between different systems or between hardware and software?",
        "options": [
            {
                "id": "a",
                "text": "Component Testing."
            },
            {
                "id": "b",
                "text": "System Integration Testing."
            },
            {
                "id": "c",
                "text": "Alpha Acceptance Testing."
            },
            {
                "id": "d",
                "text": "Unit Testing."
            }
        ],
        "correctAnswer": "b",
        "explanation": "System Integration Testing focuses on interfaces and interactions between distinct systems or microservices."
    },
    {
        "id": 65,
        "chapter": 2,
        "text": "What term is used to describe the test that confirms that a reported defect has been successfully fixed?",
        "options": [
            {
                "id": "a",
                "text": "Regression Testing."
            },
            {
                "id": "b",
                "text": "Confirmation Testing (Re-testing)."
            },
            {
                "id": "c",
                "text": "Sanity Testing."
            },
            {
                "id": "d",
                "text": "Static Testing."
            }
        ],
        "correctAnswer": "b",
        "explanation": "Confirmation testing serves specifically to validate a defect repair. Regression is for the rest of the system."
    },
    {
        "id": 66,
        "chapter": 4,
        "text": "In a Decision Table, if we have 3 boolean conditions (Yes/No), what is the maximum number of rules (columns) possible before any simplification?",
        "options": [
            {
                "id": "a",
                "text": "6"
            },
            {
                "id": "b",
                "text": "8"
            },
            {
                "id": "c",
                "text": "9"
            },
            {
                "id": "d",
                "text": "3"
            }
        ],
        "correctAnswer": "b",
        "explanation": "The calculation is 2 raised to the power of conditions (2^3). 2 * 2 * 2 = 8 possible rules."
    },
    {
        "id": 67,
        "chapter": 6,
        "text": "Which of the following tools is typically used to store and manage test cases, test plans, and execution results?",
        "options": [
            {
                "id": "a",
                "text": "Static Analysis Tool."
            },
            {
                "id": "b",
                "text": "Test Management Tool."
            },
            {
                "id": "c",
                "text": "Unit Testing Framework."
            },
            {
                "id": "d",
                "text": "Performance Testing Tool."
            }
        ],
        "correctAnswer": "b",
        "explanation": "Test Management Tools (like Jira with Xray, TestRail, ALM) serve to organize the entire testing process."
    },
    {
        "id": 68,
        "chapter": 4,
        "text": "What characterizes the 'Use Case Testing' technique?",
        "options": [
            {
                "id": "a",
                "text": "Testing transactions and process flows from start to end, based on actor interactions with the system."
            },
            {
                "id": "b",
                "text": "Testing the internal structure of source code."
            },
            {
                "id": "c",
                "text": "Testing only random inputs without a defined scenario."
            },
            {
                "id": "d",
                "text": "Reviewing code line by line."
            }
        ],
        "correctAnswer": "a",
        "explanation": "It relies on real usage scenarios (actors and system) to validate business flows and error handling predicted in use cases."
    },
    {
        "id": 69,
        "chapter": 1,
        "text": "Which of the following statements about test psychology is TRUE?",
        "options": [
            {
                "id": "a",
                "text": "Testers and developers think exactly the same way."
            },
            {
                "id": "b",
                "text": "A certain degree of independence avoids author confirmation bias, making testing more effective."
            },
            {
                "id": "c",
                "text": "The tester's goal should be to prove the developer is incompetent."
            },
            {
                "id": "d",
                "text": "Developers should never test their own code."
            }
        ],
        "correctAnswer": "b",
        "explanation": "The tester mindset (curiosity, professional pessimism, attention to detail) differs from the creator's (constructive), helping find faults the author ignores."
    },
    {
        "id": 70,
        "chapter": 4,
        "text": "If we have 100% 'Branch Coverage' (Decision Coverage), what percentage of 'Statement Coverage' do we automatically guarantee?",
        "options": [
            {
                "id": "a",
                "text": "0%"
            },
            {
                "id": "b",
                "text": "50%"
            },
            {
                "id": "c",
                "text": "100%"
            },
            {
                "id": "d",
                "text": "There is no relationship between the two."
            }
        ],
        "correctAnswer": "c",
        "explanation": "Branch coverage is stronger (subsumes) statement coverage. If you tested all branches (True/False), you necessarily executed all instructions."
    },
    {
        "id": 71,
        "chapter": 2,
        "text": "What is the main purpose of 'Smoke Tests'?",
        "options": [
            {
                "id": "a",
                "text": "To find deep defects in system logic."
            },
            {
                "id": "b",
                "text": "To verify if critical system functions work minimally before starting deeper tests (Accept or Reject the build)."
            },
            {
                "id": "c",
                "text": "To test hardware heat resistance."
            },
            {
                "id": "d",
                "text": "To test maximum system performance."
            }
        ],
        "correctAnswer": "b",
        "explanation": "Smoke tests are superficial, quick tests to ensure the 'build' is stable enough to proceed with the test cycle."
    },
    {
        "id": 72,
        "chapter": 5,
        "text": "In a defect report, what information is CRITICAL for the developer to fix the problem?",
        "options": [
            {
                "id": "a",
                "text": "The Project Manager's name."
            },
            {
                "id": "b",
                "text": "Steps to Reproduce and the test environment."
            },
            {
                "id": "c",
                "text": "The expected release date."
            },
            {
                "id": "d",
                "text": "The salary of the tester who found the defect."
            }
        ],
        "correctAnswer": "b",
        "explanation": "Without exact steps to reproduce the failure and environment context, the developer will struggle to understand or fix the error."
    },
    {
        "id": 73,
        "chapter": 6,
        "text": "In which situation is 'Test Automation' LEAST recommended?",
        "options": [
            {
                "id": "a",
                "text": "Regression tests executed frequently."
            },
            {
                "id": "b",
                "text": "Load and Performance Testing."
            },
            {
                "id": "c",
                "text": "Tests executed only once (ad-hoc) or where requirements change constantly (instability)."
            },
            {
                "id": "d",
                "text": "Complex mathematical calculations prone to human error."
            }
        ],
        "correctAnswer": "c",
        "explanation": "If a test runs only once or functionality changes daily, the cost of creating and maintaining the script exceeds the benefit."
    },
    {
        "id": 74,
        "chapter": 4,
        "text": "Which of the following is a White-Box testing technique?",
        "options": [
            {
                "id": "a",
                "text": "Equivalence Partitioning."
            },
            {
                "id": "b",
                "text": "Boundary Value Analysis."
            },
            {
                "id": "c",
                "text": "Statement Testing."
            },
            {
                "id": "d",
                "text": "State Transition Testing."
            }
        ],
        "correctAnswer": "c",
        "explanation": "White-box implies looking at internal structure (code). The other options (A, B, D) are Black-box techniques (behavioral)."
    },
    {
        "id": 75,
        "chapter": 1,
        "text": "What is a 'Test Oracle'?",
        "options": [
            {
                "id": "a",
                "text": "An AI tool that writes code."
            },
            {
                "id": "b",
                "text": "A source used to determine the expected result and compare it with the actual result (e.g., requirements, legacy system, expert)."
            },
            {
                "id": "c",
                "text": "An Oracle database."
            },
            {
                "id": "d",
                "text": "The test manager who decides everything."
            }
        ],
        "correctAnswer": "b",
        "explanation": "The oracle is the source of truth. It can be a document, legacy system, or expert knowledge, used to validate if the test passed."
    },
    {
        "id": 76,
        "chapter": 1,
        "text": "What is the main difference between a 'Mistake' (Error), a 'Defect' (Bug/Fault), and a 'Failure'?",
        "options": [
            {
                "id": "a",
                "text": "The user makes a mistake, which creates a failure in code, leading to a defect in execution."
            },
            {
                "id": "b",
                "text": "A human makes a mistake, which introduces a defect in code; if executed, the defect may cause a failure."
            },
            {
                "id": "c",
                "text": "There is no difference, they are synonyms."
            },
            {
                "id": "d",
                "text": "Failure is in code, defect is in documentation, and mistake is in hardware."
            }
        ],
        "correctAnswer": "b",
        "explanation": "Correct causal chain: Human Action (Mistake) -> Bug in Software (Defect) -> Incorrect Visible Behavior (Failure)."
    },
    {
        "id": 77,
        "chapter": 5,
        "text": "What should happen if the Exit Criteria of a test level are not met?",
        "options": [
            {
                "id": "a",
                "text": "Testing must stop immediately and the project canceled."
            },
            {
                "id": "b",
                "text": "The software must be released anyway."
            },
            {
                "id": "c",
                "text": "Testing continues, or if release is forced, the risk associated with uncompleted tests must be communicated to stakeholders."
            },
            {
                "id": "d",
                "text": "Criteria should be deleted from the test plan."
            }
        ],
        "correctAnswer": "c",
        "explanation": "If criteria are not met, one simply shouldn't blindly proceed. Testing should extend, or stakeholders must approve accepting the risk."
    },
    {
        "id": 78,
        "chapter": 2,
        "text": "In Agile methods, what is the advantage of 'Continuous Integration' for testing?",
        "options": [
            {
                "id": "a",
                "text": "Allows rapid feedback on code quality with every change, facilitating immediate defect detection and correction."
            },
            {
                "id": "b",
                "text": "Eliminates the need for manual testers."
            },
            {
                "id": "c",
                "text": "Ensures the customer accepts the product automatically."
            },
            {
                "id": "d",
                "text": "Increases the time needed to release software."
            }
        ],
        "correctAnswer": "a",
        "explanation": "CI runs automated tests with every commit, alerting the developer immediately if they 'broke' something."
    },
    {
        "id": 79,
        "chapter": 3,
        "text": "What is the objective of a 'Technical Review'?",
        "options": [
            {
                "id": "a",
                "text": "Only finding spelling errors."
            },
            {
                "id": "b",
                "text": "Evaluation by qualified peers (technical) to detect defects, gain consensus, and make technical decisions about the work product."
            },
            {
                "id": "c",
                "text": "Training junior participants (main objective of Walkthrough)."
            },
            {
                "id": "d",
                "text": "Collecting statistical metrics for management (objective of Inspection)."
            }
        ],
        "correctAnswer": "b",
        "explanation": "Technical reviews are less formal than inspections but focus on technical conformity and consensus among experts."
    },
    {
        "id": 80,
        "chapter": 4,
        "text": "What is a common strategy for testing legacy systems with little documentation?",
        "options": [
            {
                "id": "a",
                "text": "Refuse to test until documentation is written."
            },
            {
                "id": "b",
                "text": "Use only white-box tests."
            },
            {
                "id": "c",
                "text": "Use Exploratory Testing to learn about the system while testing and gradually create test cases."
            },
            {
                "id": "d",
                "text": "Assume the system works well because it is old."
            }
        ],
        "correctAnswer": "c",
        "explanation": "Exploratory tests are ideal for learning application behavior and discovering defects when specifications are scarce."
    },
    {
        "id": 81,
        "chapter": 1,
        "text": "What is the fundamental difference between 'Debugging' and 'Testing'?",
        "options": [
            {
                "id": "a",
                "text": "Testing is done by machines; Debugging is done by humans."
            },
            {
                "id": "b",
                "text": "Testing shows failures caused by defects; Debugging finds, analyzes, and removes the cause of those failures (the defect)."
            },
            {
                "id": "c",
                "text": "Testing removes defects; Debugging only locates them."
            },
            {
                "id": "d",
                "text": "Testing is done in the coding phase; Debugging is done in the acceptance phase."
            }
        ],
        "correctAnswer": "b",
        "explanation": "Testing is the activity of verifying the system to find failures. Debugging is the development activity to fix the code."
    },
    {
        "id": 82,
        "chapter": 1,
        "text": "Which of the following activities is typically the responsibility of a 'Test Manager'?",
        "options": [
            {
                "id": "a",
                "text": "Preparing and acquiring test data."
            },
            {
                "id": "b",
                "text": "Writing automation scripts."
            },
            {
                "id": "c",
                "text": "Defining test strategy, planning activities, and monitoring progress."
            },
            {
                "id": "d",
                "text": "Executing manual regression tests."
            }
        ],
        "correctAnswer": "c",
        "explanation": "The Manager plans, monitors, and controls. The Tester executes, creates data, and writes scripts."
    },
    {
        "id": 83,
        "chapter": 4,
        "text": "A field accepts integer values from 10 to 20 (inclusive). Using Equivalence Partitioning, what are the minimum values to test all partitions (valid and invalid)?",
        "options": [
            {
                "id": "a",
                "text": "15 (Valid)"
            },
            {
                "id": "b",
                "text": "9, 15, 21"
            },
            {
                "id": "c",
                "text": "10, 20"
            },
            {
                "id": "d",
                "text": "5, 15, 25, 30"
            }
        ],
        "correctAnswer": "b",
        "explanation": "Partitions: Invalid Low (<10), Valid (10-20), Invalid High (>20). Representative values: 9, 15, 21 cover the three partitions."
    },
    {
        "id": 84,
        "chapter": 2,
        "text": "What does the 'Incremental Integration' approach consist of?",
        "options": [
            {
                "id": "a",
                "text": "Integrating all components at once (Big Bang)."
            },
            {
                "id": "b",
                "text": "Integrating components one by one (or in small groups), testing interfaces as you go."
            },
            {
                "id": "c",
                "text": "Testing only the graphical interface."
            },
            {
                "id": "d",
                "text": "Testing the system only when installed at the client site."
            }
        ],
        "correctAnswer": "b",
        "explanation": "Incremental (Top-down or Bottom-up) allows isolating failures in interfaces more easily than the Big Bang approach."
    },
    {
        "id": 85,
        "chapter": 2,
        "text": "When should 'Maintenance Testing' occur?",
        "options": [
            {
                "id": "a",
                "text": "Only when a new system is built from scratch."
            },
            {
                "id": "b",
                "text": "After changes (fixes/improvements), platform migration, or system retirement."
            },
            {
                "id": "c",
                "text": "Before writing requirements."
            },
            {
                "id": "d",
                "text": "Daily at 9 AM."
            }
        ],
        "correctAnswer": "b",
        "explanation": "Maintenance testing is triggered by modifications, migrations, or discontinuation of software in production."
    },
    {
        "id": 86,
        "chapter": 6,
        "text": "Which of these tools is classified as a 'Test Execution Tool'?",
        "options": [
            {
                "id": "a",
                "text": "Jira (Defect management)."
            },
            {
                "id": "b",
                "text": "Selenium or Cypress (Automated script execution)."
            },
            {
                "id": "c",
                "text": "Git (Configuration management)."
            },
            {
                "id": "d",
                "text": "SonarQube (Static analysis)."
            }
        ],
        "correctAnswer": "b",
        "explanation": "Tools like Selenium/Cypress run scripts simulating actions on software, classifying them as execution tools."
    },
    {
        "id": 87,
        "chapter": 1,
        "text": "The principle 'Testing is context dependent' means that:",
        "options": [
            {
                "id": "a",
                "text": "We should always test the same way, regardless of the project."
            },
            {
                "id": "b",
                "text": "Safety-critical software (avionics) is tested differently from an e-commerce site."
            },
            {
                "id": "c",
                "text": "Context does not matter, only code matters."
            },
            {
                "id": "d",
                "text": "Automated tests are always better than manual ones."
            }
        ],
        "correctAnswer": "b",
        "explanation": "The strategy, rigor, and techniques used vary depending on risk and business type (Principle 6)."
    },
    {
        "id": 88,
        "chapter": 3,
        "text": "What is the main characteristic of an 'Informal Review'?",
        "options": [
            {
                "id": "a",
                "text": "It follows a defined process with entry and exit metrics."
            },
            {
                "id": "b",
                "text": "It is led by a trained moderator."
            },
            {
                "id": "c",
                "text": "It has no formal documented process and is often based on 'Buddy Check' or 'Pair Programming'."
            },
            {
                "id": "d",
                "text": "It is used only for high-risk documents."
            }
        ],
        "correctAnswer": "c",
        "explanation": "Informal reviews are fast, cheap, and require no formal documentation or defined roles."
    },
    {
        "id": 89,
        "chapter": 4,
        "text": "What distinguishes a 'Black-Box' test from a 'White-Box' test?",
        "options": [
            {
                "id": "a",
                "text": "The color of the user interface."
            },
            {
                "id": "b",
                "text": "Black-Box is based on specification/behavior without seeing code; White-Box is based on internal code structure."
            },
            {
                "id": "c",
                "text": "Black-Box is done by developers; White-Box by testers."
            },
            {
                "id": "d",
                "text": "White-Box is for functional requirements only."
            }
        ],
        "correctAnswer": "b",
        "explanation": "The main distinction is visibility: Black-Box (Input/Output) vs. White-Box (Internal Logic/Structure)."
    },
    {
        "id": 90,
        "chapter": 5,
        "text": "In a defect report, what is the difference between 'Severity' and 'Priority'?",
        "options": [
            {
                "id": "a",
                "text": "They are the same thing."
            },
            {
                "id": "b",
                "text": "Severity is technical impact on the system; Priority is urgency of repair for the business."
            },
            {
                "id": "c",
                "text": "Severity is decided by the client; Priority by the developer."
            },
            {
                "id": "d",
                "text": "Priority is technical; Severity is political."
            }
        ],
        "correctAnswer": "b",
        "explanation": "A spelling error in the company logo has Low Severity (system doesn't crash) but High Priority (damage to image)."
    },
    {
        "id": 91,
        "chapter": 4,
        "text": "What happens in a Decision Table when we collapse/simplify rules?",
        "options": [
            {
                "id": "a",
                "text": "We remove test cases that failed."
            },
            {
                "id": "b",
                "text": "We combine columns where actions are the same and condition differences do not affect the result."
            },
            {
                "id": "c",
                "text": "We delete even-numbered columns."
            },
            {
                "id": "d",
                "text": "We transform the table into a state graph."
            }
        ],
        "correctAnswer": "b",
        "explanation": "If the result is the same regardless of whether a condition is True or False, we can simplify those columns."
    },
    {
        "id": 92,
        "chapter": 2,
        "text": "What is the main objective of 'User Acceptance Testing' (UAT)?",
        "options": [
            {
                "id": "a",
                "text": "To find bugs in code that developers missed."
            },
            {
                "id": "b",
                "text": "To build confidence that the system is ready for use and meets business requirements."
            },
            {
                "id": "c",
                "text": "To test maximum server load."
            },
            {
                "id": "d",
                "text": "To check the syntax of SQL queries."
            }
        ],
        "correctAnswer": "b",
        "explanation": "The focus of UAT is validation by the end user and confidence for 'Go-Live', not technical defect detection."
    },
    {
        "id": 93,
        "chapter": 4,
        "text": "If a program has the code: `IF (A > 5 OR B < 3) THEN Print('Hello')`. How many minimum test cases are needed for 100% Statement Coverage?",
        "options": [
            {
                "id": "a",
                "text": "1"
            },
            {
                "id": "b",
                "text": "2"
            },
            {
                "id": "c",
                "text": "3"
            },
            {
                "id": "d",
                "text": "4"
            }
        ],
        "correctAnswer": "a",
        "explanation": "Just ONE test where A=6 (True) is enough to enter the IF and execute 'Print'. This guarantees 100% executable statements run."
    },
    {
        "id": 94,
        "chapter": 5,
        "text": "What is 'Timeboxing' in exploratory testing?",
        "options": [
            {
                "id": "a",
                "text": "Testing only at night."
            },
            {
                "id": "b",
                "text": "Defining a fixed, uninterrupted time period (e.g., 60 to 120 mins) to focus on a specific test session."
            },
            {
                "id": "c",
                "text": "Measuring how long the system takes to respond."
            },
            {
                "id": "d",
                "text": "A technique for estimating costs."
            }
        ],
        "correctAnswer": "b",
        "explanation": "Timeboxing helps maintain focus and manage effort in exploratory test sessions (Session-Based Testing)."
    },
    {
        "id": 95,
        "chapter": 5,
        "text": "Why is 'Configuration Management' important for testing?",
        "options": [
            {
                "id": "a",
                "text": "To know the exact version of software and testware being used, ensuring integrity."
            },
            {
                "id": "b",
                "text": "To configure testers' monitors."
            },
            {
                "id": "c",
                "text": "To manage team vacations."
            },
            {
                "id": "d",
                "text": "It is not important; it is an optional administrative task."
            }
        ],
        "correctAnswer": "a",
        "explanation": "Without configuration management, we don't know if we are testing the correct version or if results are reproducible."
    },
    {
        "id": 96,
        "chapter": 6,
        "text": "What is a common risk in introducing test tools (e.g., automation)?",
        "options": [
            {
                "id": "a",
                "text": "Tools reduce repetitive work."
            },
            {
                "id": "b",
                "text": "Underestimating time, cost, and effort needed to maintain test artifacts (maintenance)."
            },
            {
                "id": "c",
                "text": "Tools are always free."
            },
            {
                "id": "d",
                "text": "The tool improves test consistency."
            }
        ],
        "correctAnswer": "b",
        "explanation": "Many projects fail because they ignore that test code needs as much maintenance as production code."
    },
    {
        "id": 97,
        "chapter": 1,
        "text": "What is 'Verification' vs 'Validation'?",
        "options": [
            {
                "id": "a",
                "text": "Verification: 'Are we building the product correctly?'; Validation: 'Are we building the correct product?'"
            },
            {
                "id": "b",
                "text": "Verification is done by the client; Validation by the developer."
            },
            {
                "id": "c",
                "text": "Verification is dynamic testing; Validation is static testing."
            },
            {
                "id": "d",
                "text": "They are exact synonyms."
            }
        ],
        "correctAnswer": "a",
        "explanation": "Verification confirms compliance with requirements (technical). Validation confirms satisfying user needs (business)."
    },
    {
        "id": 98,
        "chapter": 1,
        "text": "In an Agile lifecycle, who is responsible for quality?",
        "options": [
            {
                "id": "a",
                "text": "Only testers."
            },
            {
                "id": "b",
                "text": "Only the Product Owner."
            },
            {
                "id": "c",
                "text": "The whole team (Whole Team Approach)."
            },
            {
                "id": "d",
                "text": "The Scrum Master."
            }
        ],
        "correctAnswer": "c",
        "explanation": "In Agile, quality is a shared responsibility of everyone (devs, testers, PO, etc.)."
    },
    {
        "id": 99,
        "chapter": 4,
        "text": "Which of these is NOT a structure-based (White-Box) test technique?",
        "options": [
            {
                "id": "a",
                "text": "Statement Coverage."
            },
            {
                "id": "b",
                "text": "State Transition Testing."
            },
            {
                "id": "c",
                "text": "Decision Coverage."
            },
            {
                "id": "d",
                "text": "Path Coverage."
            }
        ],
        "correctAnswer": "b",
        "explanation": "State Transition relies on observable system behavior (Black-Box), not internal structure."
    },
    {
        "id": 100,
        "chapter": 5,
        "text": "What is the main criterion for deciding to stop testing (Exit Criterion)?",
        "options": [
            {
                "id": "a",
                "text": "When time runs out, regardless of quality."
            },
            {
                "id": "b",
                "text": "When exit criteria defined in the plan (e.g., coverage, risk, defects) are reached."
            },
            {
                "id": "c",
                "text": "When the tester is tired."
            },
            {
                "id": "d",
                "text": "When all tests have passed 100% without exception."
            }
        ],
        "correctAnswer": "b",
        "explanation": "Stopping tests is based on agreed criteria (risk mitigated, budget, coverage). Waiting for 100% success is often unrealistic."
    }
];
