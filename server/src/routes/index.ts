import express, { Router } from 'express';
import absencesRouter from './absences.routes';

const routes = Router();
routes.use(express.json());

routes.use('/', absencesRouter);

export default routes;
