import ResourceTable from './ResourceTable.jsx'
import useFetchApiResource from './useFetchApiResource.js'

const columns = [
  { key: 'title', label: 'Workout' },
  { key: 'description', label: 'Details' },
  { key: 'category', label: 'Category' },
  { key: 'difficulty', label: 'Difficulty' },
  { key: 'durationMinutes', label: 'Duration', render: (workout) => `${workout.durationMinutes} min` },
]

export default function Workouts() {
  const path = '/api/workouts/'
  const { items, loading, error } = useFetchApiResource(path)

  return (
    <ResourceTable
      title="Workouts"
      description="Choose a session that fits your goals and energy."
      path={path}
      columns={columns}
      emptyMessage="No workouts are available right now."
      items={items}
      loading={loading}
      error={error}
    />
  )
}
