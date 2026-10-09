import ResourceTable from './ResourceTable.jsx'

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
  return (
    <ResourceTable
      title="Activities"
      description="Recent movement logged by your community."
      path="/api/activities/"
      columns={columns}
      emptyMessage="No activities have been logged yet."
    />
  )
}
