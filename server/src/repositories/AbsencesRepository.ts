import fs from 'fs';
import path from 'path';
import moment from 'moment';
import Absence from '../models/Absence';

const ics = require('ics');

class AbsencesRepository {
  private absences: Absence[];

  constructor() {
    this.absences = [];
  }

  public async find({ id, userId, startDate, endDate }: Absence): Absence[] {
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

    this.absences = absences.map(absence => {
      const member = members.find(member => member.userId === absence.userId);
      return {
        ...absence,
        employee: member.name,
      };
    });

    if (id) {
      this.absences = this.absences.filter(
        absence => absence.id === parseInt(id),
      );

      return this.absences;
    }

    if (userId) {
      this.absences = this.absences.filter(
        absence => absence.userId === parseInt(userId),
      );
    }

    if (startDate) {
      this.absences = this.absences.filter(absence =>
        moment(absence.startDate).isSameOrAfter(startDate),
      );
    }

    if (endDate) {
      this.absences = this.absences.filter(absence =>
        moment(absence.startDate).isSameOrBefore(endDate),
      );
    }

    this.absences = this.absences.sort((a, b) => {
      return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
    });

    return this.absences;
  }

  public async download(absence: Absence) {
    const EVENT_PATH = path.join(__dirname, '../files', 'event.ics');
    const startDate = moment(absence.startDate).format('YYYY-M-D').split('-');
    const endDate = moment(absence.endDate).format('YYYY-M-D').split('-');
    const type = absence.type === 'sickness' ? 'is sick' : 'is on vacation';

    const event = {
      start: startDate,
      end: endDate,
      title: `${absence.employee} - ${type}`,
      description: `Admin note: ${absence.admitterNote}\nMember note: ${absence.memberNote}`,
    };

    ics.createEvent(event, (error, value) => {
      if (error) {
        throw new Error(error);
      }

      fs.writeFileSync(EVENT_PATH, value, { flag: 'w' });
    });

    return {
      file: EVENT_PATH,
      absence: this.absences,
    };
  }
}

export default AbsencesRepository;
