import { useEffect, useRef, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import './layout.css'

export default function Layout({ user, isAdmin = false, onLogout, demo = false }) {
  const [openLocation, setOpenLocation] = useState(null)
  const location = useLocation()
  const menuOpen = openLocation === location.key
  const menuButtonRef = useRef(null)

  useEffect(() => {
    if (!menuOpen) return

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setOpenLocation(null)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [menuOpen])

  function closeMenu() {
    if (menuOpen && menuButtonRef.current?.getClientRects().length) {
      menuButtonRef.current.focus()
    }
    setOpenLocation(null)
  }

  return (
    <div className="lume-layout">
      <a className="lume-skip" href="#lume-content">Pular para o conteúdo</a>
      <Header menuOpen={menuOpen} menuButtonRef={menuButtonRef}
        onToggleMenu={() => setOpenLocation(menuOpen ? null : location.key)}
        user={user} onLogout={onLogout} demo={demo} />
      <Sidebar isOpen={menuOpen} isAdmin={isAdmin} onNavigate={closeMenu} />
      <main id="lume-content" className="lume-content" tabIndex={-1}>
        <Outlet />
      </main>
      <footer className="lume-footer">
        <strong>Lume Odontologia</strong>
        <span>Gestão da clínica odontológica</span>
      </footer>
    </div>
  )
}
