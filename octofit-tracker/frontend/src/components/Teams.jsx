import ResourceTable from './ResourceTable.jsx'

const columns = [
  { key: 'name', label: 'Team' },
  { key: 'description', label: 'About' },
  { key: 'members', label: 'Members', render: (team) => Array.isArray(team.members) ? team.members.length : 0 },
  { key: 'points', label: 'Points' },
]

export default function Teams() {
  return (
    <ResourceTable
      title="Teams"
      description="Find your crew and see what you are accomplishing together."
      path="/api/teams/"
      columns={columns}
      emptyMessage="No teams have been created yet."
    />
  )
}
