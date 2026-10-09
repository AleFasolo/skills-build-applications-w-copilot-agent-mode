import express, { type RequestHandler } from 'express';
import './config/database';
import Activity from './models/Activity';
import Leaderboard from './models/Leaderboard';
import Team from './models/Team';
import User from './models/User';
import Workout from './models/Workout';

const app = express();
const codespaceName = process.env.CODESPACE_NAME;
export const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

app.use(express.json());

function listResource(model: typeof User): RequestHandler {
  return async (_request, response, next) => {
    try {
      const resources = await model.find().lean().exec();
      response.json(resources);
    } catch (error) {
      next(error);
    } 
  };
}
//sds
app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', baseUrl });
});
app.get('/api/users/', listResource(User));
app.get('/api/teams/', listResource(Team));
app.get('/api/activities/', listResource(Activity));
app.get('/api/leaderboard/', listResource(Leaderboard));
app.get('/api/workouts/', listResource(Workout));

app.use((error: Error, _request: express.Request, response: express.Response, _next: express.NextFunction) => {
  console.error('API request failed:', error);
  response.status(500).json({ error: 'Internal server error' });
});

app.listen(8000, '0.0.0.0', () => {
  console.log(`OctoFit API listening at ${baseUrl}`);
});
