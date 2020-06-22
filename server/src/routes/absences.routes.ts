import { Router } from 'express';

const absencesRouter = Router();

absencesRouter.get('/absences', async (request, response) => {
  try {
    const { userId = null, startDate = null, endDate = null } = request.query;
    const absences = await find({ userId, startDate, endDate }); // create repository

    return response.status(200).json(absences);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default absencesRouter;
