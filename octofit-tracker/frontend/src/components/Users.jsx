import ResourceTable from './ResourceTable.jsx'
import useFetchApiResource from './useFetchApiResource.js'

const columns = [
  { key: 'displayName', label: 'Name' },
  { key: 'username', label: 'Username' },
  { key: 'email', label: 'Email' },
  { key: 'team', label: 'Team' },
]

export default function Users() {
  const path = '/api/users/'
  const { items, loading, error } = useFetchApiResource(path)

  return (
    <ResourceTable
      title="Members"
      description="Meet the people building healthy habits together."
      path={path}
      columns={columns}
      emptyMessage="No members have joined yet."
      items={items}
      loading={loading}
      error={error}
    />
  )
}
