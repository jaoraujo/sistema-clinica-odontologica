import { NavLink } from 'react-router-dom'
import logo from '../assets/lume-logo-claro.svg'
import Icon from './Icon'

const navigation = [
  { to: '/dashboard', label: 'Dashboard', icon: 'dashboard', end: true },
  { to: '/pacientes', label: 'Pacientes', icon: 'patients' },
  { to: '/consultas', label: 'Consultas', icon: 'calendar' },
  { to: '/usuarios', label: 'Usuários', icon: 'users', adminOnly: true },
]

export default function Sidebar({ isOpen, isAdmin, onNavigate }) {
  return (
    <aside id="lume-sidebar" className={`lume-sidebar${isOpen ? ' is-open' : ''}`}>
      <NavLink to="/dashboard" className="lume-brand" onClick={onNavigate} aria-label="Lume Odontologia, início">
        <img src={logo} alt="" width="176" height="51" />
      </NavLink>
      <nav className="lume-nav" aria-label="Menu principal">
        <p className="lume-nav-label">Área de trabalho</p>
        {navigation.filter(({ adminOnly }) => !adminOnly || isAdmin).map(({ to, label, icon, end }) => (
          <NavLink key={to} to={to} end={end} className="lume-nav-link" onClick={onNavigate}>
            <Icon name={icon} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
