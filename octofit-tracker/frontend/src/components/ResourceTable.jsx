import useApiResource from './useApiResource.js'

function valueFor(row, column) {
  if (column.render) return column.render(row)

  const value = row[column.key]
  if (value === null || value === undefined || value === '') return '-'
  if (typeof value === 'object') {
    return value.displayName || value.username || value.name || value.title || value._id || '-'
  }
  return String(value)
}

export default function ResourceTable({ title, description, path, columns, emptyMessage }) {
  const { items, loading, error } = useApiResource(path)

  return (
    <section aria-labelledby={`${path}-heading`} className="resource-section">
      <div className="resource-heading">
        <div>
          <p className="section-kicker">OctoFit community</p>
          <h2 id={`${path}-heading`}>{title}</h2>
          <p className="text-secondary">{description}</p>
        </div>
        {!loading && !error && (
          <span className="badge rounded-pill text-bg-light">{items.length} total</span>
        )}
      </div>

      {loading && <p className="resource-message" role="status">Loading {title.toLowerCase()}...</p>}
      {error && (
        <p className="alert alert-danger" role="alert">
          Could not load {title.toLowerCase()}: {error}
        </p>
      )}
      {!loading && !error && items.length === 0 && (
        <p className="alert alert-light border">{emptyMessage}</p>
      )}
      {!loading && !error && items.length > 0 && (
        <div className="table-responsive resource-table-wrap">
          <table className="table table-hover align-middle mb-0">
            <thead>
              <tr>
                {columns.map((column) => <th key={column.key} scope="col">{column.label}</th>)}
              </tr>
            </thead>
            <tbody>
              {items.map((row, index) => (
                <tr key={row._id || row.id || `${path}-${index}`}>
                  {columns.map((column) => (
                    <td key={column.key}>{valueFor(row, column)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}
