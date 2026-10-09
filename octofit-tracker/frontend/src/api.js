const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()

if (codespaceName && !/^[a-z0-9-]+$/i.test(codespaceName)) {
  throw new Error('VITE_CODESPACE_NAME must contain only letters, numbers, and hyphens.')
}

export const API_BASE_URL = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000'

export function getItems(payload) {
  if (Array.isArray(payload)) return payload
  if (payload && Array.isArray(payload.results)) return payload.results
  if (payload && Array.isArray(payload.items)) return payload.items
  if (payload && Array.isArray(payload.data)) return payload.data
  if (payload?.data && Array.isArray(payload.data.results)) return payload.data.results

  throw new TypeError('The API response did not contain a list of items.')
}

export async function fetchItems(path, signal) {
  const response = await fetch(`${API_BASE_URL}${path}`, { signal })
  const payload = await response.json()

  if (!response.ok) {
    const message = payload?.error || payload?.detail || `Request failed with status ${response.status}.`
    throw new Error(message)
  }

  return getItems(payload)
}
