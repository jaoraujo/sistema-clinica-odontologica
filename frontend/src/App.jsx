import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Auth from './pages/auth/Auth'
import Dashboard from './pages/dashboard/Dashboard'
import Usuarios from './pages/usuarios/Usuarios'
import Pacientes from './pages/pacientes/Pacientes'
import Consultas from './pages/Consultas/Consultas'
import { DemoProvider, useDemo } from './contexts/DemoSession'

function DemoRoutes() {
  const { user, logout } = useDemo()
  return <Routes>
    <Route path="/login" element={<Auth />} />
    <Route path="/cadastro" element={<Auth mode="register" />} />
    <Route element={<Layout demo user={user} onLogout={user ? logout : undefined} isAdmin />}>
      <Route index element={<Navigate to="/dashboard" replace />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="pacientes" element={<Pacientes />} />
      <Route path="consultas" element={<Consultas />} />
      <Route path="usuarios" element={<Usuarios />} />
      <Route path="*" element={<section><h1>Página não encontrada</h1><p>Escolha uma opção no menu para continuar.</p></section>} />
    </Route>
  </Routes>
}
export default function App() { return <DemoProvider><DemoRoutes /></DemoProvider> }
