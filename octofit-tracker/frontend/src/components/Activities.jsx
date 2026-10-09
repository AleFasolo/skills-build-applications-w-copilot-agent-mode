import ResourceTable from './ResourceTable.jsx'
import useFetchApiResource from './useFetchApiResource.js'

function formatDate(value) {
  if (!value) return '-'
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? String(value) : date.toLocaleDateString()
}

const columns = [
  { key: 'type', label: 'Activity' },
  { key: 'user', label: 'User' },
  { key: 'durationMinutes', label: 'Duration', render: (activity) => `${activity.durationMinutes} min` },
  { key: 'distanceKm', label: 'Distance', render: (activity) => activity.distanceKm == null ? '-' : `${activity.distanceKm} km` },
  { key: 'calories', label: 'Calories' },
  { key: 'completedAt', label: 'Completed', render: (activity) => formatDate(activity.completedAt) },
]

export default function Activities() {
  const path = '/api/activities/'
  const { items, loading, error } = useFetchApiResource(path)

  return (
    <ResourceTable
      title="Activities"
      description="Recent movement logged by your community."
      path={path}
      columns={columns}
      emptyMessage="No activities have been logged yet."
      items={items}
      loading={loading}
      error={error}
    />
  )
}
