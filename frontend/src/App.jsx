import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import { PreviewDashboard, PreviewLogin, PreviewPage } from './pages/PreviewPages'
import Pacientes from './pages/pacientes/Pacientes'
import Consultas from "./pages/Consultas/Consultas.jsx";

// A demonstração usa um perfil administrativo para exibir todas as rotas.
const demoIsAdmin = true

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<PreviewLogin />} />
      <Route element={<Layout demo isAdmin={demoIsAdmin} />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<PreviewDashboard isAdmin={demoIsAdmin} />} />
        
        <Route path="pacientes" element={<Pacientes />} />

        <Route path="consultas" element={<Consultas />} />
        
        {demoIsAdmin && <Route path="usuarios" element={<PreviewPage title="Usuários" section="Administração" />} />}
        <Route path="*" element={
          <section aria-labelledby="page-title">
            <h1 id="page-title">Página não encontrada</h1>
            <p>Confira o endereço ou escolha uma opção no menu.</p>
          </section>
        } />
      </Route>
    </Routes>
  )
}
