class AbsencesRepository {
  private absences: [];

  constructor() {
    this.absences = [];
  }

  public find({ userId, startDate, endDate }) {
    const absences = [
      {
        admitterId: null,
        admitterNote: '',
        confirmedAt: '2016-12-12T18:03:55.000+01:00',
        createdAt: '2016-12-12T14:17:01.000+01:00',
        crewId: 352,
        endDate: '2017-01-13',
        id: 2351,
        memberNote: '',
        rejectedAt: null,
        startDate: '2017-01-13',
        type: 'sickness',
        userId: 644,
      },
    ];
    const members = [
      {
        crewId: 352,
        id: 709,
        image: 'http://place-hoff.com/300/400',
        name: 'Max',
        userId: 644,
      },
    ];

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

    return this.absences;
  }
}

export default AbsencesRepository;
