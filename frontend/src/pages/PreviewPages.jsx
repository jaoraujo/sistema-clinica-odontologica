import { Link } from 'react-router-dom'
import logo from '../assets/lume-logo.svg'
import Icon from '../components/Icon'
import './preview.css'

const shortcuts = [
  { title: 'Pacientes', description: 'Consulte o cadastro de pacientes da clínica.', to: '/pacientes', icon: 'patients' },
  { title: 'Consultas', description: 'Acesse a agenda e organize os atendimentos.', to: '/consultas', icon: 'calendar' },
  { title: 'Usuários', description: 'Acesse a gestão de usuários da clínica.', to: '/usuarios', icon: 'users', adminOnly: true },
]

export function PreviewDashboard({ isAdmin }) {
  return (
    <section aria-labelledby="page-title">
      <div className="lume-hero">
        <p className="lume-eyebrow">Painel da clínica</p>
        <h1 id="page-title">Dashboard</h1>
        <p>Bem-vinda à área de trabalho da Lume Odontologia.</p>
      </div>
      <h2 className="lume-section-title">Acesso rápido</h2>
      <div className="lume-card-grid">
        {shortcuts.filter(({ adminOnly }) => !adminOnly || isAdmin).map(({ title, description, to, icon }) => (
          <Link key={to} className="lume-card lume-shortcut" to={to}>
            <span className="lume-card-icon"><Icon name={icon} /></span>
            <h3>{title}</h3>
            <p>{description}</p>
            <span className="lume-card-arrow"><Icon name="arrow" /></span>
          </Link>
        ))}
      </div>
    </section>
  )
}

export function PreviewPage({ title, section, action, backTo = '/dashboard', backLabel = 'Voltar ao dashboard' }) {
  return (
    <section aria-labelledby="page-title">
      <p className="lume-eyebrow">{section}</p>
      <div className="lume-page-heading">
        <h1 id="page-title">{title}</h1>
        {action && <Link className="lume-primary" to={action.to}>{action.label}</Link>}
      </div>
      <div className="lume-card lume-empty">
        <p>Esta rota já pode ser acessada. A tela definitiva será integrada pela equipe.</p>
        <Link to={backTo}>{backLabel}</Link>
      </div>
    </section>
  )
}

export function PreviewLogin() {
  return (
    <main className="lume-login">
      <div className="lume-card">
        <img src={logo} alt="Lume Odontologia" width="176" height="51" />
        <h1>Entrar</h1>
        <p>O fluxo de autenticação será integrado pela equipe. Você pode explorar a navegação na demonstração.</p>
        <Link className="lume-primary" to="/dashboard">Abrir demonstração</Link>
      </div>
    </main>
  )
}
