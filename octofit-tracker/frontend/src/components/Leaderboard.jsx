import ResourceTable from './ResourceTable.jsx'

const columns = [
  { key: 'rank', label: 'Rank' },
  { key: 'user', label: 'User' },
  { key: 'team', label: 'Team' },
  { key: 'points', label: 'Points' },
  { key: 'period', label: 'Period' },
]

export default function Leaderboard() {
  return (
    <ResourceTable
      title="Leaderboard"
      description="Celebrate the members and teams earning the most points."
      path="/api/leaderboard/"
      columns={columns}
      emptyMessage="The leaderboard is ready for its first results."
    />
  )
}
