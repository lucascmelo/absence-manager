class Absence {
  id: number;

  userId: number;

  employee: string;

  startDate: Date;

  endDate: Date;

  type: 'vacation' | 'sickness';

  memberNote: string;

  adminNote: string;

  constructor({
    id,
    userId,
    employee,
    startDate,
    endDate,
    type,
    memberNote,
    adminNote,
  }: Absence) {
    this.id = id;
    this.userId = userId;
    this.employee = employee;
    this.startDate = startDate;
    this.endDate = endDate;
    this.type = type;
    this.memberNote = memberNote;
    this.adminNote = adminNote;
  }
}

export default Absence;
