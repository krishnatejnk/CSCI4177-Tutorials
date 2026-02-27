import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const API_BASE = 'https://express-t4.onrender.com/api'

export default function UserDetail() {
  const { id } = useParams()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch(`${API_BASE}/users/${id}`)
        if (!res.ok) throw new Error('User not found')
        const data = await res.json()
        setUser(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchUser()
  }, [id])

  if (loading) return <div className="center"><p>Loading profile...</p></div>
  if (error || !user) return (
    <div className="center">
      <p className="error-msg">{error || 'User not found'}</p>
      <Link to="/users">← Back to users</Link>
    </div>
  )

  return (
    <div className="user-detail-page">
      <Link to="/users" className="back-link">← Back to users</Link>

      <div className="profile-card">
        <div className="profile-header">
          <img
            src={user.picture || 'https://placehold.it/128x128'}
            alt={user.name}
            className="profile-avatar"
          />
          <div>
            <h1>{user.name}</h1>
            <p className="greeting">{user.greeting}</p>
          </div>
        </div>

        <div className="profile-details">
          <h3>Details</h3>
          <dl>
            <dt>Email</dt>
            <dd>{user.email}</dd>
            <dt>Phone</dt>
            <dd>{user.phone}</dd>
            <dt>Company</dt>
            <dd>{user.company}</dd>
            <dt>Address</dt>
            <dd>{user.address}</dd>
            <dt>Balance</dt>
            <dd>{user.balance}</dd>
            <dt>Age</dt>
            <dd>{user.age}</dd>
            <dt>Gender</dt>
            <dd>{user.gender}</dd>
            <dt>Eye Color</dt>
            <dd>{user.eyeColor}</dd>
            <dt>Favorite Fruit</dt>
            <dd>{user.favoriteFruit}</dd>
            <dt>Registered</dt>
            <dd>{user.registered}</dd>
          </dl>

          {user.about && (
            <>
              <h3>About</h3>
              <p className="about">{user.about}</p>
            </>
          )}

          {user.friends && user.friends.length > 0 && (
            <>
              <h3>Friends</h3>
              <ul>
                {user.friends.map((f) => (
                  <li key={f.id}>{f.name}</li>
                ))}
              </ul>
            </>
          )}

          {user.tags && user.tags.length > 0 && (
            <>
              <h3>Tags</h3>
              <div className="tags">
                {user.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
