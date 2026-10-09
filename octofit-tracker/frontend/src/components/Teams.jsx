import ResourceTable from './ResourceTable.jsx'
import useFetchApiResource from './useFetchApiResource.js'

const columns = [
  { key: 'name', label: 'Team' },
  { key: 'description', label: 'About' },
  { key: 'members', label: 'Members', render: (team) => Array.isArray(team.members) ? team.members.length : 0 },
  { key: 'points', label: 'Points' },
]

export default function Teams() {
  const path = '/api/teams/'
  const { items, loading, error } = useFetchApiResource(path)

  return (
    <ResourceTable
      title="Teams"
      description="Find your crew and see what you are accomplishing together."
      path={path}
      columns={columns}
      emptyMessage="No teams have been created yet."
      items={items}
      loading={loading}
      error={error}
    />
  )
}
