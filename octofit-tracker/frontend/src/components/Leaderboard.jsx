import ResourceTable from './ResourceTable.jsx'
import useFetchApiResource from './useFetchApiResource.js'

const columns = [
  { key: 'rank', label: 'Rank' },
  { key: 'user', label: 'User' },
  { key: 'team', label: 'Team' },
  { key: 'points', label: 'Points' },
  { key: 'period', label: 'Period' },
]

export default function Leaderboard() {
  const path = '/api/leaderboard/'
  const { items, loading, error } = useFetchApiResource(path)

  return (
    <ResourceTable
      title="Leaderboard"
      description="Celebrate the members and teams earning the most points."
      path={path}
      columns={columns}
      emptyMessage="The leaderboard is ready for its first results."
      items={items}
      loading={loading}
      error={error}
    />
  )
}
