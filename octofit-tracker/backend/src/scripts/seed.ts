import mongoose from 'mongoose';
import Activity from '../models/Activity';
import Leaderboard from '../models/Leaderboard';
import Team from '../models/Team';
import User from '../models/User';
import Workout from '../models/Workout';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

async function seedDatabase() {
  // Seed the octofit_db database with test data.
  console.log('Seed the octofit_db database with test data');
  try {
    await mongoose.connect(connectionString);
    console.log('Connected to octofit_db');

    const userIds = [
      new mongoose.Types.ObjectId('670000000000000000000001'),
      new mongoose.Types.ObjectId('670000000000000000000002'),
      new mongoose.Types.ObjectId('670000000000000000000003'),
    ];
    const teamIds = [
      new mongoose.Types.ObjectId('670000000000000000000011'),
      new mongoose.Types.ObjectId('670000000000000000000012'),
    ];
    const activityIds = [
      new mongoose.Types.ObjectId('670000000000000000000021'),
      new mongoose.Types.ObjectId('670000000000000000000022'),
      new mongoose.Types.ObjectId('670000000000000000000023'),
      new mongoose.Types.ObjectId('670000000000000000000024'),
      new mongoose.Types.ObjectId('670000000000000000000025'),
    ];
    const leaderboardIds = [
      new mongoose.Types.ObjectId('670000000000000000000031'),
      new mongoose.Types.ObjectId('670000000000000000000032'),
      new mongoose.Types.ObjectId('670000000000000000000033'),
    ];
    const workoutIds = [
      new mongoose.Types.ObjectId('670000000000000000000041'),
      new mongoose.Types.ObjectId('670000000000000000000042'),
      new mongoose.Types.ObjectId('670000000000000000000043'),
      new mongoose.Types.ObjectId('670000000000000000000044'),
    ];

    await Promise.all([
      User.deleteMany({ _id: { $in: userIds } }),
      Team.deleteMany({ _id: { $in: teamIds } }),
      Activity.deleteMany({ _id: { $in: activityIds } }),
      Leaderboard.deleteMany({ _id: { $in: leaderboardIds } }),
      Workout.deleteMany({ _id: { $in: workoutIds } }),
    ]);

    await User.insertMany([
      { _id: userIds[0], username: 'maya.moves', email: 'maya@example.com', displayName: 'Maya Chen', team: teamIds[0] },
      { _id: userIds[1], username: 'leo.runs', email: 'leo@example.com', displayName: 'Leo Martinez', team: teamIds[0] },
      { _id: userIds[2], username: 'amina.active', email: 'amina@example.com', displayName: 'Amina Okafor', team: teamIds[1] },
    ]);
    await Team.insertMany([
      { _id: teamIds[0], name: 'Trail Blazers', description: 'Outdoor miles and steady progress.', members: userIds.slice(0, 2), points: 2450 },
      { _id: teamIds[1], name: 'Core Crew', description: 'Strength, mobility, and consistency.', members: [userIds[2]], points: 1980 },
    ]);
    await Activity.insertMany([
      { _id: activityIds[0], user: userIds[0], type: 'Run', durationMinutes: 35, distanceKm: 5.2, calories: 340, completedAt: new Date('2026-10-02T08:00:00Z') },
      { _id: activityIds[1], user: userIds[1], type: 'Cycling', durationMinutes: 50, distanceKm: 18.4, calories: 410, completedAt: new Date('2026-10-03T07:30:00Z') },
      { _id: activityIds[2], user: userIds[2], type: 'Strength training', durationMinutes: 40, calories: 260, completedAt: new Date('2026-10-03T17:00:00Z') },
      { _id: activityIds[3], user: userIds[0], type: 'Yoga', durationMinutes: 25, calories: 120, completedAt: new Date('2026-10-05T18:00:00Z') },
      { _id: activityIds[4], user: userIds[1], type: 'Run', durationMinutes: 42, distanceKm: 6.1, calories: 395, completedAt: new Date('2026-10-06T08:15:00Z') },
    ]);
    await Leaderboard.insertMany([
      { _id: leaderboardIds[0], user: userIds[0], team: teamIds[0], points: 1280, rank: 1, period: '2026-10' },
      { _id: leaderboardIds[1], user: userIds[1], team: teamIds[0], points: 1170, rank: 2, period: '2026-10' },
      { _id: leaderboardIds[2], user: userIds[2], team: teamIds[1], points: 980, rank: 3, period: '2026-10' },
    ]);
    await Workout.insertMany([
      { _id: workoutIds[0], title: 'Easy 5K Builder', description: 'A relaxed aerobic run with a gentle finish.', category: 'cardio', difficulty: 'beginner', durationMinutes: 35 },
      { _id: workoutIds[1], title: 'Full-body Foundations', description: 'A balanced circuit focused on controlled movement.', category: 'strength', difficulty: 'beginner', durationMinutes: 30 },
      { _id: workoutIds[2], title: 'Tempo Ride', description: 'Build cycling endurance with steady tempo intervals.', category: 'cycling', difficulty: 'intermediate', durationMinutes: 45 },
      { _id: workoutIds[3], title: 'Mobility Reset', description: 'Restore range of motion with a guided mobility flow.', category: 'recovery', difficulty: 'beginner', durationMinutes: 20 },
    ]);

    console.log('Database seeding complete');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

seedDatabase();
