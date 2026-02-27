import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../App'

const API_BASE = 'https://express-t4.onrender.com/api'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { setIsLoggedIn } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch(`${API_BASE}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: email,
          password,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.message || 'Login failed')
        return
      }

      setIsLoggedIn(true)
      navigate('/users')
    } catch (err) {
      setError(err.message || 'Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Welcome Back</h1>
        <p className="subtitle">Sign in to view user profiles</p>

        <form onSubmit={handleSubmit} className="login-form">
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={loading}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              disabled={loading}
            />
          </label>
          {error && <p className="error">{error}</p>}
          <button type="submit" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="hint">Use testemail@dal.ca / Test@123 for demo</p>
      </div>
    </div>
  )
}
