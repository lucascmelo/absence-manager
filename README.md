## How to use

1. `git clone https://github.com/lucascmelo/absence-manager`
2. `cd absence-manager/client && yarn && yarn start`
3. Open new terminal tab
4. `cd absence-manager/server && yarn && yarn dev:server`
5. Go to: `http://localhost:3000/`

## Preview
![Layout](https://hospedagem.lucascavalcanti.com.br/layout2.gif)



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
  - [x] Define layout
    - [x] Header
    - [x] Report Filter
    - [x] Report Table
    - [x] Footer
    - [x] Responsive
  - [x] Component Header. Nav: Home, Report
  - [x] Page Report
    - [x] Component Filter by Name, startDate, endDate, Types, Status
    - [x] Component Grid: Columns: Employee, Type, Status, startDate, endDate, download ics, see note
    - [x] Modal with more details admin/members note, Employee, type, startDate, end Date
    - [x] Pagination
  - [ ] Create Tests

- [ ] Backend (Server)
  - [x] Initialize node project with typescript
  - [x] Config project: eslint, prettier, folders
  - [x] Create route to find absences
  - [x] Absence Repository: GetAll filtered by userID or userName, startDate, endDate
  - [x] Absence Repository: Read json files and merge datas
  - [x] Generate and save ONE ics file on specific folder. Find by absence id
  - [x] Create route to download ics from specific absence. (Return path)
  - [ ] Create Tests
