import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import { useState, createContext, useContext } from 'react'
import Login from './components/Login'
import UserList from './components/UserList'
import UserDetail from './components/UserDetail'

export const AuthContext = createContext(null)

export function useAuth() {
  const ctx = useContext(AuthContext)
  return ctx
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <div className="app">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/users" element={
            isLoggedIn ? <UserList /> : <Navigate to="/" replace />
          } />
          <Route path="/users/:id" element={
            isLoggedIn ? <UserDetail /> : <Navigate to="/" replace />
          } />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  )
}

export default App
