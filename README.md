## User Story

As owner of a crew I want to be able to export my employees absences so 
that I can import them into outlook.

## Acceptance Criteria

- I can get a list of absences including the names of the employee (using api.js or api.rb)
- I can generate an iCal file and import it into outlook (maybe use a gem or npm package)
- I can see vacations of my employees as "#{member.name} is on vacation" 
- I can see sickness of my employees as "#{member.name} is sick" 
- (Bonus) I can go to http://localhost:3000 and download the iCal file
- (Bonus) I can go to http://localhost:3000?userId=123 and only receive the absences of the given user
- (Bonus) I can go to http://localhost:3000?startDate=2017-01-01&endDate=2017-02-01 and only receive the absences in the given date range
- (Bonus) Build the first 4 acceptance criteria in the other language (for backend candidates in js and for frontend candidates in ruby)

## TODO
- [ ] Frontend (Client)
  - [x] Initialize react project with typescript
  - [ ] Define layout
    - [x] Header
    - [ ] Report Filter
    - [ ] Report Table
    - [ ] Footer
  - [x] Component Header. Nav: Home, Report
  - [ ] Page Report
    - [ ] Component Filter by userID or Name, startDate, and endDate
    - [x] Component Grid: Columns: Employee, Type, startDate, endDate, download ics, see note
    - [ ] Modal with more details admin/members note, Employee, type, startDate, end Date
    - [x] Pagination
  = [ ] Create Tests

- [ ] Backend (Server)
  - [x] Initialize node project with typescript
  - [x] Config project: eslint, prettier, folders
  - [x] Create route to find absences
  - [x] Absence Repository: GetAll filtered by userID or userName, startDate, endDate
  - [x] Absence Repository: Read json files and merge datas
  - [x] Generate and save ONE ics file on specific folder. Find by absence id
  - [x] Create route to download ics from specific absence. (Return path)
  - [ ] Create Tests
