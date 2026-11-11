import { createContext, useContext, useState } from 'react'

const DemoContext = createContext(null)
const initialUsers = [
  { id: 1, nome: 'Marina Almeida', email: 'marina@lume.demo', perfil: 'Administrador', status: 'Ativo' },
  { id: 2, nome: 'Lucas Ferreira', email: 'lucas@lume.demo', perfil: 'Recepcionista', status: 'Ativo' },
  { id: 3, nome: 'Clara Oliveira', email: 'clara@lume.demo', perfil: 'Dentista', status: 'Ativo' },
]
export function DemoProvider({ children }) {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(sessionStorage.getItem('lume-demo-session')) } catch { return null }
  })
  const [users, setUsers] = useState(() => {
    try { return JSON.parse(localStorage.getItem('lume-demo-users')) || initialUsers } catch { return initialUsers }
  })
  function login(email) {
    const match = users.find(item => item.email.toLowerCase() === email.trim().toLowerCase())
    const next = match || { nome: 'Visitante', email: email.trim(), perfil: 'Administrador' }
    sessionStorage.setItem('lume-demo-session', JSON.stringify(next))
    setUser(next)
  }
  function logout() { sessionStorage.removeItem('lume-demo-session'); setUser(null) }
  function addUser(data) {
    if (users.some(item => item.email.toLowerCase() === data.email.trim().toLowerCase())) return false
    const next = [...users, { ...data, id: Date.now(), status: 'Ativo' }]
    setUsers(next); localStorage.setItem('lume-demo-users', JSON.stringify(next)); return true
  }
  function removeUser(id) {
    const next = users.filter(item => item.id !== id)
    setUsers(next); localStorage.setItem('lume-demo-users', JSON.stringify(next))
  }
  return <DemoContext.Provider value={{ user, users, login, logout, addUser, removeUser }}>{children}</DemoContext.Provider>
}
export function useDemo() { return useContext(DemoContext) }
