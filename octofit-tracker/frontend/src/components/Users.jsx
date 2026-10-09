import ResourceTable from './ResourceTable.jsx'

const columns = [
  { key: 'displayName', label: 'Name' },
  { key: 'username', label: 'Username' },
  { key: 'email', label: 'Email' },
  { key: 'team', label: 'Team' },
]

export default function Users() {
  return (
    <ResourceTable
      title="Members"
      description="Meet the people building healthy habits together."
      path="/api/users/"
      columns={columns}
      emptyMessage="No members have joined yet."
    />
  )
}
