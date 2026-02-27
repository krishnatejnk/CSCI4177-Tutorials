import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const API_BASE = 'https://express-t4.onrender.com/api'

export default function UserList() {
  const [users, setUsers] = useState([])
  const [filtered, setFiltered] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch(`${API_BASE}/users`)
        if (!res.ok) throw new Error('Failed to fetch users')
        const data = await res.json()
        setUsers(data)
        setFiltered(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])

  useEffect(() => {
    const term = search.trim().toLowerCase()
    if (!term) {
      setFiltered(users)
      return
    }
    const filteredUsers = users.filter((u) => {
      const parts = (u.name || '').split(' ')
      const firstName = (parts[0] || '').toLowerCase()
      const lastName = (parts.slice(1).join(' ') || '').toLowerCase()
      return firstName.includes(term) || lastName.includes(term)
    })
    setFiltered(filteredUsers)
  }, [search, users])

  if (loading) return <div className="center"><p>Loading users...</p></div>
  if (error) return <div className="center error-msg"><p>{error}</p></div>

  return (
    <div className="user-list-page">
      <header className="user-list-header">
        <h1>User Profiles</h1>
        <input
          type="search"
          placeholder="Search by First Name or Last Name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-box"
        />
      </header>

      <div className="user-grid">
        {filtered.map((user) => (
          <Link
            key={user._id}
            to={`/users/${user._id}`}
            className="user-card"
          >
            <img
              src={user.picture || 'https://placehold.it/64x64'}
              alt={user.name}
              className="user-avatar"
            />
            <div className="user-info">
              <h3>{user.name}</h3>
              <p>{user.company}</p>
              <p className="email">{user.email}</p>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="no-results">No users match your search.</p>
      )}
    </div>
  )
}
