import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import { PreviewDashboard, PreviewLogin, PreviewPage } from './pages/PreviewPages'

// A demonstração usa um perfil administrativo para exibir todas as rotas.
const demoIsAdmin = true

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<PreviewLogin />} />
      <Route element={<Layout demo isAdmin={demoIsAdmin} />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<PreviewDashboard isAdmin={demoIsAdmin} />} />
        <Route path="pacientes" element={<PreviewPage title="Pacientes" section="Cadastro"
          action={{ label: 'Novo paciente', to: '/pacientes/novo' }} />} />
        <Route path="pacientes/novo" element={<PreviewPage title="Novo paciente" section="Pacientes"
          backTo="/pacientes" backLabel="Voltar a pacientes" />} />
        <Route path="pacientes/:id/editar" element={<PreviewPage title="Editar paciente" section="Pacientes"
          backTo="/pacientes" backLabel="Voltar a pacientes" />} />
        <Route path="consultas" element={<PreviewPage title="Consultas" section="Agenda"
          action={{ label: 'Nova consulta', to: '/consultas/nova' }} />} />
        <Route path="consultas/nova" element={<PreviewPage title="Nova consulta" section="Consultas"
          backTo="/consultas" backLabel="Voltar a consultas" />} />
        <Route path="consultas/:id/editar" element={<PreviewPage title="Editar consulta" section="Consultas"
          backTo="/consultas" backLabel="Voltar a consultas" />} />
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
