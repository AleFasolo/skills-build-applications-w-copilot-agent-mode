import ResourceTable from './ResourceTable.jsx'

const columns = [
  { key: 'title', label: 'Workout' },
  { key: 'description', label: 'Details' },
  { key: 'category', label: 'Category' },
  { key: 'difficulty', label: 'Difficulty' },
  { key: 'durationMinutes', label: 'Duration', render: (workout) => `${workout.durationMinutes} min` },
]

export default function Workouts() {
  return (
    <ResourceTable
      title="Workouts"
      description="Choose a session that fits your goals and energy."
      path="/api/workouts/"
      columns={columns}
      emptyMessage="No workouts are available right now."
    />
  )
}
