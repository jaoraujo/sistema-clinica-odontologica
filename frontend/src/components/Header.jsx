import Icon from './Icon'

export default function Header({ menuOpen, menuButtonRef, onToggleMenu, user, onLogout, demo }) {
  return (
    <header className="lume-header">
      <button ref={menuButtonRef} type="button" className="lume-menu-button"
        aria-controls="lume-sidebar" aria-expanded={menuOpen}
        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} onClick={onToggleMenu}>
        <Icon name={menuOpen ? 'close' : 'menu'} />
      </button>
      <p className="lume-header-name">Lume Odontologia</p>
      <div className="lume-header-actions">
        {demo && <span className="lume-badge">Demonstração</span>}
        {user?.nome && <span className="lume-user" title={user.nome}>{user.nome}</span>}
        {onLogout && <button type="button" className="lume-logout" onClick={onLogout}>Sair</button>}
      </div>
    </header>
  )
}
