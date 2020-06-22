import fs from 'fs';
import path from 'path';
import moment from 'moment';
import Absence from '../models/Absence';

class AbsencesRepository {
  private absences: Absence[];

  constructor() {
    this.absences = [];
  }

  public async find({ userId, startDate, endDate }: Absence): Absence[] {
    const ABSENCES_PATH = path.join(
      __dirname,
      '../json_files',
      'absences.json',
    );
    const MEMBERS_PATH = path.join(__dirname, '../json_files', 'members.json');

    const readJsonFile = path =>
      new Promise(resolve =>
        fs.readFile(path, 'utf8', (_, data) => resolve(data)),
      )
        .then(data => JSON.parse(data))
        .then(data => data.payload);

    const absences = await readJsonFile(ABSENCES_PATH);
    const members = await readJsonFile(MEMBERS_PATH);

    console.log(absences, members);

    this.absences = absences.map(absence => {
      const member = members.find(member => member.userId === absence.userId);
      return {
        ...absence,
        employee: member.name,
      };
    });

    if (userId) {
      this.absences = this.absences.filter(
        absence => absence.userId === parseInt(userId),
      );
    }

    if (startDate && endDate) {
      this.absences = this.absences.filter(
        absence =>
          moment(startDate).isBetween(absence.startDate, absence.endDate) ||
          moment(endDate).isBetween(absence.startDate, absence.endDate),
      );
    }

    console.log(this.absences);

    return this.absences;
  }
}

export default AbsencesRepository;
