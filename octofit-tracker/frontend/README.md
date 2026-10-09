# OctoFit Tracker presentation tier

The React 19 and Vite frontend uses React Router for the activities, leaderboard,
teams, members, and workouts views. It requests data from the API on port 8000.

## Configure the API URL

When running in a Codespace, define `VITE_CODESPACE_NAME` in
`octofit-tracker/frontend/.env.local` using the Codespace name (not the full
forwarded URL):

```dotenv
VITE_CODESPACE_NAME=your-codespace-name
```

Vite uses this to build the API base URL
`https://<VITE_CODESPACE_NAME>-8000.app.github.dev`. This variable must be
defined in a Codespace so the browser can reach its forwarded API port. If it
is unset, the app safely falls back to `http://localhost:8000` for local
development. Restart the Vite server after changing `.env.local`.

## Run locally

```bash
npm install --prefix octofit-tracker/frontend
npm run dev --prefix octofit-tracker/frontend
```

The frontend calls `/api/activities/`, `/api/leaderboard/`, `/api/teams/`,
`/api/users/`, and `/api/workouts/` on the configured API base URL.
