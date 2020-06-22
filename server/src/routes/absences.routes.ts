import { Router } from 'express';
import AbsencesRepository from '../repositories/AbsencesRepository';

const absencesRouter = Router();

const absencesRepository = new AbsencesRepository();

absencesRouter.get('/absences', async (request, response) => {
  try {
    const { userId = null, startDate = null, endDate = null } = request.query;
    const absences = await absencesRepository.find({
      userId,
      startDate,
      endDate,
    });

    return response.status(200).json(absences);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default absencesRouter;
