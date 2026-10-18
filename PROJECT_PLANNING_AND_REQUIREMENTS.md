# BacZone: Project Planning and Requirements

> **Document type:** Project Planning and Requirements Specification
> **Project:** BacZone, an online educational platform for Egyptian secondary school students
> **Status:** Draft for team review
> **Scope of this document:** Documentation only. No application code is described as implemented.

---

## How to Read This Document

Because this document mixes information from the project description with proposals made to complete the plan, every item carries one of the following labels.

| Label | Meaning |
|-------|---------|
| **[Confirmed]** | Stated directly in the BacZone project description provided by the team. |
| **[Proposed]** | A suggested feature, rule, or approach that is consistent with the project description but has not yet been approved by the team. |
| **[Assumption]** | Something treated as true for planning purposes until the team confirms it. |
| **[Open]** | Missing information. It is listed in [Section 23: Open Questions](#23-open-questions). |

Requirement priorities use **MoSCoW**: **Must** (essential), **Should** (important), **Could** (desirable if time permits).

---

## Table of Contents

**Part 1: Project Planning**

1. [Project Overview and Background](#1-project-overview-and-background)
2. [Problem Statement](#2-problem-statement)
3. [Project Objectives and Goals](#3-project-objectives-and-goals)
4. [Project Scope](#4-project-scope)
5. [Target Users and Stakeholders](#5-target-users-and-stakeholders)
6. [Project Team Roles and Responsibilities](#6-project-team-roles-and-responsibilities)
7. [Project Development Phases](#7-project-development-phases)
8. [Proposed Timeline and Milestones](#8-proposed-timeline-and-milestones)
9. [Main Deliverables](#9-main-deliverables)
10. [Risks, Challenges, and Possible Solutions](#10-risks-challenges-and-possible-solutions)
11. [Assumptions and Constraints](#11-assumptions-and-constraints)

**Part 2: Project Requirements**

12. [Functional Requirements](#12-functional-requirements)
13. [Non-Functional Requirements](#13-non-functional-requirements)
14. [User Roles and Permissions](#14-user-roles-and-permissions)
15. [Main User Flows and Use Cases](#15-main-user-flows-and-use-cases)
16. [Business Rules](#16-business-rules)
17. [System Requirements](#17-system-requirements)
18. [Data and Database Requirements (High Level)](#18-data-and-database-requirements-high-level)
19. [Security and Authentication Requirements](#19-security-and-authentication-requirements)
20. [Interface and Usability Requirements](#20-interface-and-usability-requirements)
21. [Responsive Design Requirements](#21-responsive-design-requirements)
22. [Dependencies and External Services](#22-dependencies-and-external-services)

**Final Section**

23. [Open Questions](#23-open-questions)

---

# Part 1: Project Planning

## 1. Project Overview and Background

### 1.1 Overview **[Confirmed]**

BacZone is an online educational platform designed for Egyptian secondary school students. It connects students with teachers and offers educational courses and books in one place.

Students can:

- Explore courses by grade and subject.
- Browse teacher profiles.
- View course details.
- Purchase educational courses and books.

The platform also includes a shopping cart, discounts, user authentication, and user profiles. Teacher profiles display names, photos, subjects, and educational content.

### 1.2 Main Pages **[Confirmed]**

| # | Page | Purpose |
|---|------|---------|
| 1 | Home Page | Introduces the platform, highlights featured courses and teachers, and provides navigation to the main sections. |
| 2 | Courses Page | Displays courses organized by secondary school grade and subject, with search and filtering options. |
| 3 | Teachers Page | Displays teacher profiles and lets students search for teachers and explore their courses. |
| 4 | About Us Page | Explains the platform's mission, vision, goals, and educational value. |
| 5 | Login/Register Page | Lets users create accounts and log in. |

### 1.3 Supporting Features and Pages **[Confirmed]**

Teacher profiles, course details, educational books, a shopping cart, purchases, and user profiles.

### 1.4 Background **[Assumption]**

The project is developed by a student team as a university project, and the repository is intended to be public on GitHub. Exact course name, institution, and supervisor are not provided (see Open Questions).

---

## 2. Problem Statement

**[Proposed wording, based on the confirmed project purpose]**

Secondary school students in Egypt often need to find suitable teachers and learning resources, and these resources are commonly spread across different places. Students may find it difficult to compare teachers, locate courses for their specific grade and subject, and buy materials in one place.

BacZone addresses this by providing a single platform where students can discover teachers, browse courses and books organized by grade and subject, and purchase them online.

> The statement above describes the problem in general terms. The team may refine it with evidence such as surveys or interviews, if available (see Open Questions).

---

## 3. Project Objectives and Goals

### 3.1 Main Goal **[Confirmed]**

Make it easier for Egyptian secondary school students to find suitable teachers and access educational resources in one place.

### 3.2 Objectives

| ID | Objective | Status |
|----|-----------|--------|
| OBJ-01 | Provide a platform where courses are organized by secondary school grade and subject. | [Confirmed] |
| OBJ-02 | Provide teacher profiles so students can find and compare teachers. | [Confirmed] |
| OBJ-03 | Allow students to purchase courses and books online using a shopping cart. | [Confirmed] |
| OBJ-04 | Support user accounts with registration, login, and profiles. | [Confirmed] |
| OBJ-05 | Support discounts on courses and books. | [Confirmed] |
| OBJ-06 | Communicate the platform's mission, vision, and educational value through an About Us page. | [Confirmed] |
| OBJ-07 | Deliver a usable, responsive, and well-documented project suitable for a university submission and a public GitHub repository. | [Proposed] |

### 3.3 Success Indicators **[Proposed]**

- All five main pages are available and navigable.
- A new user can register, log in, find a course, add it to the cart, and complete a purchase flow.
- All "Must" requirements in this document pass their acceptance checks.
- The repository contains clear documentation for setup and use.

---

## 4. Project Scope

### 4.1 In Scope

| Item | Status |
|------|--------|
| Home, Courses, Teachers, About Us, and Login/Register pages | [Confirmed] |
| Browsing courses by grade and subject, with search and filtering | [Confirmed] |
| Teacher profiles (name, photo, subjects, educational content) and teacher search | [Confirmed] |
| Course details page | [Confirmed] |
| Educational books listing and purchase | [Confirmed] |
| Shopping cart | [Confirmed] |
| Discounts | [Confirmed] |
| User authentication (register, login) | [Confirmed] |
| User profile | [Confirmed] |
| Purchases (including a way to view purchased items) | [Confirmed, details Proposed] |
| Responsive layout for common screen sizes | [Proposed] |
| Project documentation | [Confirmed] (this task) |

### 4.2 Out of Scope **[Proposed]**

These items are not mentioned in the project description. They are listed as excluded to keep the project realistic, unless the team decides otherwise.

- Live video classes or video conferencing.
- Native mobile applications (iOS or Android).
- Real-money payment processing with a live payment provider (see Open Questions).
- Student-to-teacher chat or messaging.
- Exams, quizzes, grading, or certificates.
- Physical book delivery and shipping logistics.
- AI-based recommendations.
- Support for languages beyond those decided by the team (see Open Questions).
- Support for school levels other than Egyptian secondary school.

### 4.3 Scope Boundary Note

Whether purchased courses are delivered as videos, files, or other formats is **not stated** in the project description. Content delivery is therefore treated as an Open Question and is not assumed in the requirements.

---

## 5. Target Users and Stakeholders

### 5.1 Target Users

| User Group | Description | Status |
|------------|-------------|--------|
| Students | Egyptian secondary school students who browse and buy courses and books. | [Confirmed] |
| Teachers | Educators with profiles showing name, photo, subjects, and content. | [Confirmed] |
| Administrators | Staff who manage content, users, and discounts. | [Proposed] |
| Visitors (guests) | Unregistered users who can browse public pages. | [Proposed] |

> Parents are a possible secondary audience but are not mentioned in the description (see Open Questions).

### 5.2 Stakeholders

| Stakeholder | Interest |
|-------------|----------|
| Students | Easy discovery of suitable teachers, courses, and books. |
| Teachers | Visibility of their profile and content. |
| Project team members | Delivering a complete, high-quality project. |
| Course instructor / supervisor | Evaluating the project against academic requirements. |
| Platform administrators | Managing the platform's content. |
| Public GitHub audience | Understanding and possibly reusing the project. |

---

## 6. Project Team Roles and Responsibilities

The project description does **not** list team members, their names, or their roles. The table below proposes **generic roles** only. Names must be filled in by the team.

| Role | Proposed Responsibilities | Assigned To |
|------|---------------------------|-------------|
| Project Manager / Team Lead | Planning, task tracking, meetings, coordination, final submission. | _To be assigned_ |
| Business Analyst / Documentation Lead | Requirements, documentation, user flows, keeping this document current. | _To be assigned_ |
| UI/UX Designer | Wireframes, visual design, usability and responsive layouts. | _To be assigned_ |
| Frontend Developer(s) | Implementing pages and user interface. | _To be assigned_ |
| Backend Developer(s) | Business logic, authentication, APIs, data handling. | _To be assigned_ |
| Database Designer | Data model and database setup. | _To be assigned_ |
| QA / Tester | Test cases, testing, bug reports. | _To be assigned_ |

> One person may hold several roles. The team size is unknown (see Open Questions).

---

## 7. Project Development Phases

The phases below are **[Proposed]** and follow a common iterative approach for student projects.

| Phase | Name | Main Activities | Output |
|-------|------|-----------------|--------|
| 1 | Planning and Requirements | Define scope, goals, roles, requirements, and risks. | This document |
| 2 | Design | Wireframes, UI design, data model, page navigation structure. | Wireframes, mockups, ER diagram |
| 3 | Core Development | Authentication, home, courses, teachers, About Us pages. | Working core pages |
| 4 | Commerce Features | Course details, books, cart, discounts, purchases, profile. | Working purchase flow |
| 5 | Integration and Testing | Combine modules, test, fix defects, responsive checks. | Test results, bug fixes |
| 6 | Finalization and Release | Polish, final documentation, repository cleanup, demo. | Final submission |

---

## 8. Proposed Timeline and Milestones

The description gives **no deadlines**. The timeline is therefore expressed in **relative weeks**, not calendar dates, and is a **[Proposed]** template. The total length must be adjusted to the actual academic schedule.

| Phase | Proposed Duration | Milestone |
|-------|-------------------|-----------|
| 1. Planning and Requirements | Weeks 1 to 2 | **M1:** Requirements document approved. |
| 2. Design | Weeks 3 to 4 | **M2:** Wireframes and data model approved. |
| 3. Core Development | Weeks 5 to 7 | **M3:** Five main pages and authentication working. |
| 4. Commerce Features | Weeks 8 to 10 | **M4:** Cart, discounts, and purchase flow working. |
| 5. Integration and Testing | Weeks 11 to 12 | **M5:** Testing complete, major defects fixed. |
| 6. Finalization and Release | Week 13 | **M6:** Final documentation and demo ready. |

> Total proposed duration: 13 weeks. Phases may overlap. Time buffers should be added around the final deadline.

---

## 9. Main Deliverables

| ID | Deliverable | Phase |
|----|-------------|-------|
| DEL-01 | Project Planning and Requirements document (this file) | 1 |
| DEL-02 | Wireframes / UI mockups for the five main pages and supporting pages | 2 |
| DEL-03 | Database design (high-level ER diagram and data description) | 2 |
| DEL-04 | Working Home, Courses, Teachers, About Us, and Login/Register pages | 3 |
| DEL-05 | Course details, books, cart, discount, purchase, and profile functionality | 4 |
| DEL-06 | Test plan and test results | 5 |
| DEL-07 | README with setup and usage instructions | 6 |
| DEL-08 | Final source code in the GitHub repository | 6 |
| DEL-09 | Final presentation or demo (if required by the course) | 6 |

---

## 10. Risks, Challenges, and Possible Solutions

| ID | Risk / Challenge | Likelihood | Impact | Possible Solution |
|----|------------------|-----------|--------|-------------------|
| RSK-01 | Scope too large for the available time. | High | High | Prioritize "Must" requirements first; treat "Could" items as optional. |
| RSK-02 | Unclear or changing requirements. | Medium | Medium | Review this document regularly; track changes; resolve Open Questions early. |
| RSK-03 | Team members have uneven skills or availability. | Medium | Medium | Assign tasks by skill, pair on difficult tasks, hold regular check-ins. |
| RSK-04 | Merge conflicts and code integration problems. | Medium | Medium | Use a Git branching strategy, pull requests, and code reviews. |
| RSK-05 | Payment handling is complex and sensitive. | High | High | Decide early whether payment is simulated; never store card data. |
| RSK-06 | Lack of real course, book, and teacher content for testing. | High | Medium | Prepare clearly labelled sample data. |
| RSK-07 | Security weaknesses in authentication. | Medium | High | Use hashed passwords, input validation, and proven libraries. |
| RSK-08 | Poor performance or layout problems on mobile devices. | Medium | Medium | Test responsive layouts early and often. |
| RSK-09 | Copyright or privacy issues with teacher photos and educational content. | Medium | High | Use only content with permission or sample content; state this in the README. |
| RSK-10 | Documentation falls behind the project. | Medium | Low | Assign a documentation owner and update docs at each milestone. |

---

## 11. Assumptions and Constraints

### 11.1 Assumptions **[Assumption]**

| ID | Assumption |
|----|------------|
| ASM-01 | The platform is a web application accessed through a browser. |
| ASM-02 | Users have internet access and a modern web browser. |
| ASM-03 | Initial content (courses, books, teachers) is added by the team or administrators as sample or real data. |
| ASM-04 | The project is developed within one academic term by a small student team. |
| ASM-05 | Students are the primary buyers; teacher self-service content management is not required unless the team decides otherwise. |
| ASM-06 | The primary interface language will be decided by the team (see Open Questions). |
| ASM-07 | Real payment processing may be simulated for the university project. |

### 11.2 Constraints

| ID | Constraint | Status |
|----|-----------|--------|
| CON-01 | The platform targets Egyptian secondary school students. | [Confirmed] |
| CON-02 | The project must be suitable for a university team project and a public GitHub repository. | [Confirmed] |
| CON-03 | Limited time, budget, and team size typical of a student project. | [Assumption] |
| CON-04 | No sensitive real user data or secrets may be committed to the public repository. | [Proposed] |
| CON-05 | Technology choices have not been specified and must be decided by the team. | [Open] |

---

# Part 2: Project Requirements

## 12. Functional Requirements

Priority uses MoSCoW. **Source** shows whether the requirement comes from the project description (**Confirmed**) or is a **Proposed** detail added to make it testable.

### 12.1 User Accounts and Authentication

| ID | Requirement | Priority | Source |
|----|-------------|----------|--------|
| FR-01 | The system shall allow a visitor to create an account through the Register form. | Must | Confirmed |
| FR-02 | The system shall allow a registered user to log in with valid credentials. | Must | Confirmed |
| FR-03 | The system shall display a clear error message when login credentials are invalid. | Must | Proposed |
| FR-04 | The system shall reject registration with an email address that is already registered. | Must | Proposed |
| FR-05 | The system shall validate required registration fields before creating an account. | Must | Proposed |
| FR-06 | The system shall allow a logged-in user to log out. | Must | Proposed |
| FR-07 | The system shall provide Login and Register on a single Login/Register page. | Must | Confirmed |
| FR-08 | The system shall allow users to reset a forgotten password. | Could | Proposed |

### 12.2 User Profile

| ID | Requirement | Priority | Source |
|----|-------------|----------|--------|
| FR-09 | The system shall provide a user profile page for each logged-in user. | Must | Confirmed |
| FR-10 | The system shall allow a user to view and edit their basic profile information. | Should | Proposed |
| FR-11 | The system shall allow a student to view their purchase history from the profile area. | Should | Proposed |

### 12.3 Home Page

| ID | Requirement | Priority | Source |
|----|-------------|----------|--------|
| FR-12 | The Home page shall introduce the platform. | Must | Confirmed |
| FR-13 | The Home page shall highlight featured courses. | Must | Confirmed |
| FR-14 | The Home page shall highlight featured teachers. | Must | Confirmed |
| FR-15 | The Home page shall provide navigation to the main sections of the platform. | Must | Confirmed |

### 12.4 Courses

| ID | Requirement | Priority | Source |
|----|-------------|----------|--------|
| FR-16 | The Courses page shall display courses organized by secondary school grade and subject. | Must | Confirmed |
| FR-17 | The Courses page shall allow users to search courses by keyword. | Must | Confirmed |
| FR-18 | The Courses page shall allow users to filter courses by grade. | Must | Confirmed |
| FR-19 | The Courses page shall allow users to filter courses by subject. | Must | Confirmed |
| FR-20 | The system shall show a message when no course matches the search or filter. | Should | Proposed |
| FR-21 | The system shall provide a course details page showing information about a selected course. | Must | Confirmed |
| FR-22 | The course details page shall show the course title, subject, grade, teacher, and price. | Must | Proposed |
| FR-23 | The course details page shall provide an "Add to Cart" action. | Must | Proposed |
| FR-24 | The course details page shall link to the profile of the teacher who offers the course. | Should | Proposed |

### 12.5 Teachers

| ID | Requirement | Priority | Source |
|----|-------------|----------|--------|
| FR-25 | The Teachers page shall display teacher profiles. | Must | Confirmed |
| FR-26 | The Teachers page shall allow users to search for teachers (for example by name or subject). | Must | Confirmed |
| FR-27 | Each teacher profile shall display the teacher's name, photo, and subject(s). | Must | Confirmed |
| FR-28 | Each teacher profile shall display the teacher's educational content, such as their courses. | Must | Confirmed |
| FR-29 | The system shall let a student open a teacher's profile and explore that teacher's courses. | Must | Confirmed |

### 12.6 Educational Books

| ID | Requirement | Priority | Source |
|----|-------------|----------|--------|
| FR-30 | The system shall display a list of educational books. | Must | Confirmed |
| FR-31 | The system shall allow users to view details of a book (for example title, subject, grade, and price). | Should | Proposed |
| FR-32 | The system shall allow a user to add a book to the cart. | Must | Confirmed |

### 12.7 Shopping Cart, Discounts, and Purchases

| ID | Requirement | Priority | Source |
|----|-------------|----------|--------|
| FR-33 | The system shall provide a shopping cart that holds selected courses and books. | Must | Confirmed |
| FR-34 | The system shall allow users to remove an item from the cart. | Must | Proposed |
| FR-35 | The system shall display the cart total and update it when items change. | Must | Proposed |
| FR-36 | The system shall support discounts on courses and books. | Must | Confirmed |
| FR-37 | The system shall show the original price, the discount, and the final price where a discount applies. | Should | Proposed |
| FR-38 | The system shall allow a logged-in student to complete a purchase of the items in the cart. | Must | Confirmed |
| FR-39 | The system shall require a user to be logged in before completing a purchase. | Must | Proposed |
| FR-40 | The system shall record each completed purchase. | Must | Confirmed |
| FR-41 | The system shall show a confirmation after a successful purchase. | Should | Proposed |
| FR-42 | The system shall prevent a user from buying the same course twice. | Should | Proposed |

### 12.8 About Us and Navigation

| ID | Requirement | Priority | Source |
|----|-------------|----------|--------|
| FR-43 | The About Us page shall explain the platform's mission, vision, goals, and educational value. | Must | Confirmed |
| FR-44 | All pages shall include a consistent navigation menu linking the five main pages. | Must | Confirmed |
| FR-45 | The navigation shall show the cart and a Login or Profile option depending on login state. | Should | Proposed |

### 12.9 Administration **[Proposed, not confirmed]**

| ID | Requirement | Priority | Source |
|----|-------------|----------|--------|
| FR-46 | The system shall allow an administrator to add, edit, and remove courses. | Should | Proposed |
| FR-47 | The system shall allow an administrator to add, edit, and remove books. | Should | Proposed |
| FR-48 | The system shall allow an administrator to add, edit, and remove teacher profiles. | Should | Proposed |
| FR-49 | The system shall allow an administrator to create and manage discounts. | Should | Proposed |
| FR-50 | The system shall allow an administrator to manage user accounts. | Could | Proposed |

---

## 13. Non-Functional Requirements

All values below are **[Proposed]** targets for a student project, unless stated otherwise. They should be adjusted by the team.

### 13.1 Performance

| ID | Requirement | Priority |
|----|-------------|----------|
| NFR-01 | Main pages shall load within 3 seconds on a standard broadband connection under normal load. | Should |
| NFR-02 | Search and filter results on the Courses and Teachers pages shall be displayed within 2 seconds. | Should |
| NFR-03 | Images shall be optimized to avoid unnecessarily large downloads. | Should |

### 13.2 Usability

| ID | Requirement | Priority |
|----|-------------|----------|
| NFR-04 | A new student shall be able to find a course by grade and subject without instructions. | Should |
| NFR-05 | Navigation shall be consistent on every page. | Must |
| NFR-06 | Error messages shall be clear and describe how to fix the problem. | Must |
| NFR-07 | Forms shall show which fields are required. | Must |

### 13.3 Reliability and Availability

| ID | Requirement | Priority |
|----|-------------|----------|
| NFR-08 | The system shall not lose cart or purchase data during normal operation. | Must |
| NFR-09 | The system shall handle invalid input without crashing. | Must |

### 13.4 Security

| ID | Requirement | Priority |
|----|-------------|----------|
| NFR-10 | Passwords shall never be stored in plain text. | Must |
| NFR-11 | The system shall validate and sanitize all user input to reduce injection and cross-site scripting risks. | Must |
| NFR-12 | The system shall protect pages and actions that require login. | Must |
| NFR-13 | The system shall use HTTPS when deployed publicly. | Should |
| NFR-14 | Secrets, keys, and credentials shall not be committed to the public repository. | Must |

### 13.5 Compatibility

| ID | Requirement | Priority |
|----|-------------|----------|
| NFR-15 | The system shall work on the latest versions of Google Chrome, Microsoft Edge, Mozilla Firefox, and Safari. | Should |
| NFR-16 | The layout shall remain usable on mobile, tablet, and desktop screens. | Must |

### 13.6 Maintainability

| ID | Requirement | Priority |
|----|-------------|----------|
| NFR-17 | Source code shall follow a consistent structure and naming convention. | Should |
| NFR-18 | The repository shall include a README with setup and run instructions. | Must |
| NFR-19 | Project documentation shall be kept in the repository and updated at each milestone. | Should |

### 13.7 Accessibility

| ID | Requirement | Priority |
|----|-------------|----------|
| NFR-20 | Text shall have sufficient contrast against its background. | Should |
| NFR-21 | Images shall have descriptive alternative text. | Should |
| NFR-22 | Interactive elements shall be reachable and usable with a keyboard. | Could |

### 13.8 Localization

| ID | Requirement | Priority |
|----|-------------|----------|
| NFR-23 | The system shall support the language(s) chosen by the team. If Arabic is supported, the layout shall support right-to-left text. | Open |

---

## 14. User Roles and Permissions

Roles are **[Proposed]** based on the user groups in the description. **Y** = allowed, **N** = not allowed, **Own** = only their own data.

| Capability | Visitor | Student | Teacher | Admin |
|------------|:------:|:-------:|:-------:|:-----:|
| View Home and About Us pages | Y | Y | Y | Y |
| Browse courses, teachers, and books | Y | Y | Y | Y |
| View course and teacher details | Y | Y | Y | Y |
| Register and log in | Y | N | N | N |
| Add items to the cart | Y/N* | Y | N | N |
| Purchase courses and books | N | Y | N | N |
| View and edit own profile | N | Own | Own | Own |
| View own purchase history | N | Own | N | N |
| Manage own teacher profile and content | N | N | Own** | Y |
| Manage courses, books, and teacher profiles | N | N | N | Y |
| Manage discounts | N | N | N | Y |
| Manage users | N | N | N | Y |

\* Whether visitors can use the cart before logging in is an Open Question.
\*\* Whether teachers can log in and manage their own content is an Open Question.

---

## 15. Main User Flows and Use Cases

### 15.1 Use Case Summary **[Proposed]**

| ID | Use Case | Actor |
|----|----------|-------|
| UC-01 | Register an account | Visitor |
| UC-02 | Log in | Registered user |
| UC-03 | Browse and filter courses | Visitor, Student |
| UC-04 | Search and view teacher profiles | Visitor, Student |
| UC-05 | View course details | Visitor, Student |
| UC-06 | Add a course or book to the cart | Student |
| UC-07 | Purchase items in the cart | Student |
| UC-08 | View and edit profile | Student |
| UC-09 | Manage platform content | Administrator |

### 15.2 UC-01: Register an Account

| Field | Description |
|-------|-------------|
| Actor | Visitor |
| Precondition | The visitor is not logged in. |
| Main flow | 1. The visitor opens the Login/Register page. 2. Selects Register. 3. Enters the required details. 4. Submits the form. 5. The system validates the data and creates the account. 6. The system confirms success. |
| Alternative flow | Invalid or missing data: the system shows errors and does not create the account. Email already registered: the system shows an error (FR-04). |
| Postcondition | A new account exists. |

### 15.3 UC-02: Log In

| Field | Description |
|-------|-------------|
| Actor | Registered user |
| Main flow | 1. The user opens the Login/Register page. 2. Enters credentials. 3. The system verifies them. 4. The user is logged in and redirected. |
| Alternative flow | Invalid credentials: the system shows an error message (FR-03). |
| Postcondition | The user has an active session. |

### 15.4 UC-03: Find a Course by Grade and Subject

| Field | Description |
|-------|-------------|
| Actor | Visitor or Student |
| Main flow | 1. The user opens the Courses page. 2. Selects a grade and a subject. 3. Optionally searches by keyword. 4. The system shows matching courses. 5. The user opens a course. |
| Alternative flow | No matches: the system shows a "no results" message (FR-20). |

### 15.5 UC-04: Explore a Teacher

| Field | Description |
|-------|-------------|
| Actor | Visitor or Student |
| Main flow | 1. The user opens the Teachers page. 2. Searches or browses teachers. 3. Opens a teacher profile. 4. Views the teacher's name, photo, subjects, and courses. 5. Opens one of the teacher's courses. |

### 15.6 UC-06 and UC-07: Add to Cart and Purchase

| Field | Description |
|-------|-------------|
| Actor | Student |
| Precondition | The student is logged in (for purchase). |
| Main flow | 1. The student opens a course or book. 2. Selects Add to Cart. 3. Opens the cart and reviews items, discounts, and the total. 4. Confirms the purchase. 5. The system records the purchase and shows a confirmation. |
| Alternative flow | The user is not logged in: the system redirects to Login/Register (FR-39). The cart is empty: the purchase action is unavailable. |
| Postcondition | The purchase is recorded and appears in purchase history. |

### 15.7 High-Level Navigation Flow

```
Home ──► Courses ──► Course Details ──► Cart ──► Purchase
  │          │
  │          └──► Teacher Profile
  ├──► Teachers ──► Teacher Profile ──► Course Details
  ├──► About Us
  └──► Login / Register ──► User Profile
```

---

## 16. Business Rules

| ID | Rule | Status |
|----|------|--------|
| BR-01 | Courses are organized by secondary school grade and subject. | Confirmed |
| BR-02 | Each course is associated with a teacher. | Proposed |
| BR-03 | Each course and book has a price. | Proposed |
| BR-04 | A purchase requires a logged-in account. | Proposed |
| BR-05 | A user cannot purchase a course they already own. | Proposed |
| BR-06 | A discount reduces the price of a course or book; the final price shall never be below zero. | Proposed |
| BR-07 | Discount rules (percentage or fixed, duration, eligibility, stacking) are not defined. | Open |
| BR-08 | The cart total equals the sum of the final prices of all items in the cart. | Proposed |
| BR-09 | A user can only view and edit their own profile and purchases. | Proposed |
| BR-10 | Only administrators can create or change courses, books, teachers, and discounts. | Proposed |
| BR-11 | Prices are shown in a single currency; which one is not defined. | Open |

---

## Requirements Topic Index

The topics requested for Part 2 are covered in the following sections.

| Topic | Where |
|-------|-------|
| Functional requirements | Section 12 |
| Non-functional requirements | Section 13 |
| User roles and permissions | Section 14 |
| Main user flows and use cases | Section 15 |
| Business rules | Section 16 |
| System requirements | Section 17 |
| Data and database requirements | Section 18 |
| Security and authentication requirements | Section 19 |
| Interface and usability requirements | Section 20 |
| Responsive design requirements | Section 21 |
| Dependencies and external services | Section 22 |

---

## 17. System Requirements

No technology stack has been specified. The requirements below are technology-neutral **[Proposed]**.

| ID | Requirement |
|----|-------------|
| SYS-01 | The system shall be a web application accessible through a standard web browser. |
| SYS-02 | The system shall consist of a user interface, application logic, and a persistent data store. |
| SYS-03 | End users shall not need to install any software besides a modern browser. |
| SYS-04 | The system shall be runnable on a developer's local machine using the steps in the README. |
| SYS-05 | The source code shall be managed with Git and hosted in a GitHub repository. |
| SYS-06 | The team shall choose and document the frontend, backend, and database technologies (see Open Questions). |

**Client requirements [Assumption]:** a device with internet access and the latest version of a major browser.

---

## 18. Data and Database Requirements (High Level)

### 19.1 Main Data Entities **[Proposed]**

| Entity | Description (high level) |
|--------|--------------------------|
| User | Account information, role, and profile details. |
| Teacher | Name, photo, subject(s), and description. |
| Subject | A school subject. |
| Grade | A secondary school grade level. |
| Course | Title, description, price, grade, subject, and teacher. |
| Book | Title, description, price, grade, and subject. |
| Discount | Discount value and the items it applies to. |
| Cart / Cart Item | Items a user intends to buy. |
| Order / Purchase | A completed purchase and its items. |

### 19.2 Key Relationships **[Proposed]**

- A teacher can have many courses; a course belongs to one teacher (to be confirmed).
- A course belongs to one grade and one subject (to be confirmed).
- A user can have one cart and many purchases.
- A purchase contains one or more courses and/or books.
- A discount can apply to courses and/or books.

### 19.3 Data Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| DATA-01 | The system shall persistently store users, teachers, courses, books, discounts, and purchases. | Must |
| DATA-02 | Each record shall have a unique identifier. | Must |
| DATA-03 | Email addresses shall be unique across user accounts. | Must |
| DATA-04 | The database shall enforce relationships between records (for example a course must reference a valid teacher). | Should |
| DATA-05 | Purchase records shall store the price actually paid at the time of purchase. | Should |
| DATA-06 | The team shall provide a sample dataset for development and demonstration, clearly marked as sample data. | Should |
| DATA-07 | An ER diagram shall be produced and stored in the repository. | Should |

---

## 19. Security and Authentication Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| SEC-01 | Users shall authenticate with credentials (for example email and password) before accessing protected features. | Must |
| SEC-02 | Passwords shall be stored only as salted hashes created with a recognized algorithm. | Must |
| SEC-03 | The system shall maintain a user session after login and end it on logout or expiry. | Must |
| SEC-04 | Protected pages (profile, purchase, and admin functions) shall be inaccessible to unauthorized users, enforced on the server side. | Must |
| SEC-05 | Role-based access control shall be applied according to Section 14. | Must |
| SEC-06 | The system shall validate input on the server, not only in the browser. | Must |
| SEC-07 | The system shall protect against common web threats, including SQL injection, cross-site scripting, and cross-site request forgery. | Should |
| SEC-08 | Error messages shall not reveal sensitive technical information. | Should |
| SEC-09 | Payment card details shall not be stored by the system. | Must |
| SEC-10 | Personal data collected shall be limited to what the platform needs. | Should |
| SEC-11 | Secrets and credentials shall be kept out of the repository (for example through environment variables). | Must |

> Privacy and parental-consent requirements for users who may be under 18 have not been defined (see Open Questions).

---

## 20. Interface and Usability Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| UI-01 | The platform shall have a consistent visual style across all pages (colors, fonts, buttons, spacing). | Must |
| UI-02 | A persistent header shall provide navigation to Home, Courses, Teachers, About Us, and Login/Register. | Must |
| UI-03 | The cart shall be reachable from every page. | Should |
| UI-04 | Course and teacher listings shall use clear cards showing the key information (for example title, price, teacher name, photo). | Must |
| UI-05 | Prices and discounts shall be displayed clearly and unambiguously. | Must |
| UI-06 | Search and filter controls shall be easy to find on the Courses and Teachers pages. | Must |
| UI-07 | The interface shall use clear labels and simple language suitable for secondary school students. | Should |
| UI-08 | The interface shall give feedback after user actions (for example item added to cart). | Should |
| UI-09 | Loading and empty states shall be handled with clear messages. | Should |
| UI-10 | Wireframes shall be created and approved before implementation of each page. | Should |

---

## 21. Responsive Design Requirements

Students commonly use mobile phones, so responsive behavior is a **[Proposed]** priority.

| ID | Requirement | Priority |
|----|-------------|----------|
| RWD-01 | All pages shall display correctly on mobile (about 360 px wide and above), tablet, and desktop screens. | Must |
| RWD-02 | The layout shall adapt automatically (for example columns reduce on smaller screens) without horizontal scrolling. | Must |
| RWD-03 | The navigation shall collapse into a mobile-friendly menu on small screens. | Must |
| RWD-04 | Buttons and links shall be large enough to tap comfortably on touch screens. | Should |
| RWD-05 | Images shall scale to fit their containers. | Must |
| RWD-06 | The cart and purchase flow shall be fully usable on a mobile phone. | Must |
| RWD-07 | Text shall remain readable without zooming. | Should |

---

## 22. Dependencies and External Services

The description does not name any external services. The items below are **possible** dependencies, and none is confirmed.

| ID | Dependency | Purpose | Status |
|----|-----------|---------|--------|
| DEP-01 | GitHub | Source hosting and collaboration. | Proposed |
| DEP-02 | Web hosting / deployment service | Making the platform publicly accessible. | Open |
| DEP-03 | Database system | Persistent data storage. | Open |
| DEP-04 | Payment provider or payment simulation | Handling purchases. | Open |
| DEP-05 | Email service | Verification and password-reset emails. | Open |
| DEP-06 | Content hosting for course materials and book files or covers | Storing and delivering educational content. | Open |
| DEP-07 | Front-end and back-end frameworks and libraries | Application development. | Open |

---

## 23. Open Questions

### A. Project and Team

| ID | Question |
|----|----------|
| OQ-01 | Who are the team members, and what is each person's role? |
| OQ-02 | What are the official deadlines and submission dates? |
| OQ-03 | What are the course name, institution, and supervisor or evaluation criteria? |
| OQ-04 | Is there a required project methodology (for example Agile or Waterfall)? |
| OQ-05 | Are there required deliverables such as a presentation, report, or demo? |

### B. Product and Content

| ID | Question |
|----|----------|
| OQ-06 | What exactly is a "course" (video lessons, files, live sessions, or something else), and how do students access it after purchase? |
| OQ-07 | What are "educational books" (digital downloads, physical books, or both)? If physical, how are they delivered? |
| OQ-08 | Which grades and subjects are covered at launch? |
| OQ-09 | Who creates and manages teacher profiles and content: administrators, teachers, or both? |
| OQ-10 | Do teachers have their own accounts and dashboards? |
| OQ-11 | Is the cart available to guests, or only to logged-in users? |
| OQ-12 | Is there a reviews or ratings feature? |

### C. Business and Payment

| ID | Question |
|----|----------|
| OQ-13 | Will real payments be supported, simulated, or excluded? Which payment methods are intended? |
| OQ-14 | What currency is used? |
| OQ-15 | How do discounts work (percentage or fixed, coupon codes or automatic, time limits, stacking)? |
| OQ-16 | Is there a refund or cancellation policy? |
| OQ-17 | How are teachers paid or compensated, if at all? |

### D. Technical

| ID | Question |
|----|----------|
| OQ-18 | Which technologies (frontend, backend, database) will the team use? |
| OQ-19 | Where will the platform be hosted or demonstrated? |
| OQ-20 | Is there an existing codebase or design that this document should be aligned with? (No repository files were available when this document was prepared.) |

### E. Users, Language, and Privacy

| ID | Question |
|----|----------|
| OQ-21 | Which interface language(s) are required: Arabic, English, or both? |
| OQ-22 | What information is collected at registration? |
| OQ-23 | How should privacy and consent be handled for users under 18? |
| OQ-24 | Are parents expected to use the platform in any way? |
| OQ-25 | Is the platform content or its photos subject to any licensing restrictions? |

---

## Document Control

| Item | Value |
|------|-------|
| Document | PROJECT_PLANNING_AND_REQUIREMENTS.md |
| Version | 0.1 (Draft) |
| Source | BacZone project description provided by the team |
| Repository inspection | No existing project files were available when this document was prepared. |
| Next review | After the team answers the Open Questions |
