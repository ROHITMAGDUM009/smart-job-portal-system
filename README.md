# smart-job-portal-system
MCA Final Year Mejor Project
Below is a **complete, exam-ready explanation** of your **Smart Job Portal System** in the exact order you requested:

**1) Database → 2) Backend → 3) UI**

This explanation is written so you can:

* Implement it practically
* Write documentation
* Confidently explain it in viva/interview

---

# 1️⃣ DATABASE DESIGN (MySQL)

![Image](https://media.geeksforgeeks.org/wp-content/uploads/20240224114331/DBmodel-for-Online-Job-Search-and-Recruitment-Platforms.png)

![Image](https://svg.template.creately.com/hl6qam9i1)

![Image](https://i.sstatic.net/2SLc7.jpg)

![Image](https://svg.template.creately.com/itz6w3wa1)

## 1.1 Database Overview

The database stores:

* Users (job seekers, recruiters, admin)
* Jobs
* Applications
* AI-extracted skills
* Matching scores
* Search & recommendation data

Relational design ensures **data consistency + AI processing efficiency**.

---

## 1.2 Core Tables & Structure

### 🔹 1. `users`

Stores all system users.

| Attribute  | Type             | Description                    |
| ---------- | ---------------- | ------------------------------ |
| id         | BIGINT (PK)      | Unique user ID                 |
| name       | VARCHAR          | Full name                      |
| email      | VARCHAR (UNIQUE) | Login email                    |
| password   | VARCHAR          | Encrypted password             |
| role       | ENUM             | JOB_SEEKER / RECRUITER / ADMIN |
| created_at | TIMESTAMP        | Account creation               |

---

### 🔹 2. `job_seeker_profile`

Extended profile for candidates.

| Attribute     | Type          | Description           |
| ------------- | ------------- | --------------------- |
| id            | BIGINT (PK)   | Profile ID            |
| user_id       | FK → users.id | Owner                 |
| experience    | INT           | Years                 |
| education     | VARCHAR       | Degree                |
| resume_url    | VARCHAR       | Resume path           |
| location      | VARCHAR       | City                  |
| profile_score | INT           | AI completeness score |

---

### 🔹 3. `skills`

Master skill list (used by AI).

| Attribute  | Type        | Description      |
| ---------- | ----------- | ---------------- |
| id         | BIGINT (PK) | Skill ID         |
| skill_name | VARCHAR     | Java, React, etc |

---

### 🔹 4. `job_seeker_skills`

AI-extracted skills from resumes.

| Attribute     | Type        |
| ------------- | ----------- |
| id            | BIGINT (PK) |
| job_seeker_id | FK          |
| skill_id      | FK          |
| confidence    | INT (0–100) |

---

### 🔹 5. `jobs`

Job postings by recruiters.

| Attribute           | Type               |
| ------------------- | ------------------ |
| id                  | BIGINT (PK)        |
| recruiter_id        | FK                 |
| title               | VARCHAR            |
| description         | TEXT               |
| experience_required | INT                |
| location            | VARCHAR            |
| created_at          | TIMESTAMP          |
| status              | ENUM (OPEN/CLOSED) |

---

### 🔹 6. `job_skills`

Required skills per job.

| Attribute | Type        |
| --------- | ----------- |
| id        | BIGINT (PK) |
| job_id    | FK          |
| skill_id  | FK          |
| priority  | INT (1–5)   |

---

### 🔹 7. `applications`

Tracks job applications.

| Attribute     | Type        |
| ------------- | ----------- |
| id            | BIGINT (PK) |
| job_id        | FK          |
| job_seeker_id | FK          |
| status        | ENUM        |
| applied_at    | TIMESTAMP   |

---

### 🔹 8. `job_match_scores` (AI CORE TABLE ⭐)

| Attribute     | Type        | Description |
| ------------- | ----------- | ----------- |
| id            | BIGINT      |             |
| job_id        | FK          |             |
| job_seeker_id | FK          |             |
| match_score   | INT (0–100) |             |
| generated_at  | TIMESTAMP   |             |

This table powers **AI job ranking & suggestions**.

---

# 2️⃣ BACKEND (Spring Boot)

![Image](https://miro.medium.com/0%2AqTIkBrhl90wcE6oK.png)

![Image](https://miro.medium.com/v2/resize%3Afit%3A1400/1%2ArBtr2mhym4IhyfHXkau47Q.png)

![Image](https://miro.medium.com/v2/resize%3Afit%3A1400/1%2AaeEOWxFY5TZYtzJA2XY6SA.png)

![Image](https://dz2cdn1.dzone.com/storage/temp/8227566-capture.png)

## 2.1 Backend Architecture (Industry Standard)

```
Controller Layer
Service Layer
AI / Matching Engine
Repository Layer
Database (MySQL)
```

---

## 2.2 Backend Package Structure

```
com.smartjobportal
 ├── controller
 ├── service
 ├── ai
 ├── repository
 ├── entity
 ├── dto
 ├── security
 └── config
```

---

## 2.3 Entities (JPA Models)

### Example: User Entity

```java
@Entity
public class User {
  @Id
  @GeneratedValue
  private Long id;

  private String name;
  private String email;
  private String password;

  @Enumerated(EnumType.STRING)
  private Role role;
}
```

---

### Example: Job Entity

```java
@Entity
public class Job {
  @Id
  private Long id;

  private String title;
  private String description;
  private String location;

  @ManyToOne
  private User recruiter;
}
```

---

## 2.4 AI / Matching Engine (Key Layer ⭐)

### Responsibilities

* Resume skill extraction
* Job–candidate matching
* Ranking & scoring
* Recommendations

### Example Workflow

```
Resume Upload
→ Text Extraction
→ Skill Mapping
→ Store Skills
→ Calculate Match Score
→ Save to job_match_scores
```

---

## 2.5 Backend Workflow (End-to-End)

### Job Seeker Flow

1. Register & login (JWT)
2. Upload resume
3. AI extracts skills
4. AI generates job matches
5. UI fetches ranked jobs

---

### Recruiter Flow

1. Post job
2. Define required skills
3. AI ranks candidates
4. View best-fit profiles

---

### Admin Flow

1. Monitor analytics
2. Manage users & jobs
3. View AI insights

---

# 3️⃣ UI (React + Tailwind)

![Image](https://mir-s3-cdn-cf.behance.net/project_modules/fs/70c35f152151493.6318c4c47cc34.png)

![Image](https://cdn.dribbble.com/userupload/40860558/file/original-8196850df8c1c1e58bcfd7ed4863adce.png?format=webp\&resize=400x300\&vertical=center)

![Image](https://cdn.dribbble.com/userupload/10775795/file/original-f3ad6ec83166c1fe5a8a625dfab1502a.jpg?resize=752x\&vertical=center)

![Image](https://adminkit.io/static/91ffbe0f58e35a5fc15edb464129ee3f/3a874/bootstrap-analytics-dashboard.png)

## 3.1 UI Structure

```
src/
 ├── pages
 ├── components
 ├── services
 ├── context
 ├── hooks
 └── utils
```

---

## 3.2 Pages (Screens)

### 🔹 Public Pages

* Login
* Register
* Forgot Password

---

### 🔹 Job Seeker Pages

* Dashboard
* Job Search (AI-based)
* Job Details
* Resume Upload
* AI Suggestions
* Skill Gap View
* Applications Tracker

---

### 🔹 Recruiter Pages

* Recruiter Dashboard
* Post Job
* Manage Jobs
* Candidate Ranking
* Applicant Details

---

### 🔹 Admin Pages

* Admin Dashboard
* User Management
* Job Analytics
* Skill Trends

---

## 3.3 Reusable Components

| Component      | Purpose         |
| -------------- | --------------- |
| Navbar         | Role-based menu |
| JobCard        | Job preview     |
| SkillTag       | Skill display   |
| MatchScoreBar  | AI score        |
| ResumeUploader | File upload     |
| Charts         | Analytics       |

---

## 3.4 Frontend Workflow (RTC)

```
User Action
→ React Component
→ API Service (Axios)
→ Spring Boot API
→ Response
→ UI Update
```

---

## 3.5 AI Data Flow in UI

* Match scores displayed visually
* Jobs sorted automatically
* “Recommended for You” section
* Skill gap alerts

---

# ✅ FINAL SUMMARY (Viva Ready)

> “Our system uses a relational database for structured hiring data, a Spring Boot backend with an AI matching engine for intelligent job recommendations, and a React-based UI to deliver personalized, role-based job experiences.”

---

### 🔜 What should I give next?

Choose one:
1️⃣ **Exact SQL schema (CREATE TABLE)**
2️⃣ **AI matching pseudo-code**
3️⃣ **Resume parsing logic**
4️⃣ **System architecture diagram explanation**
5️⃣ **Final-year documentation chapters**

Say the number — I’ll continue step-by-step.
