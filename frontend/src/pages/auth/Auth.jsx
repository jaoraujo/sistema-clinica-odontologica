import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDemo } from '../../contexts/DemoSession'
import logo from '../../assets/lume-logo.svg'
import './auth.css'

export default function Auth({ mode = 'login' }) {
  const register = mode === 'register'
  const navigate = useNavigate()
  const { login, addUser } = useDemo()
  const [form, setForm] = useState({ nome: '', email: '', senha: '', confirmar: '', perfil: 'Recepcionista' })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  function change(event) { setForm(old => ({ ...old, [event.target.name]: event.target.value })); setError('') }
  function submit(event) {
    event.preventDefault()
    if (!form.email.trim() || !form.senha) { setError('Preencha o e-mail e a senha.'); return }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { setError('Informe um e-mail válido.'); return }
    if (register) {
      if (form.nome.trim().length < 3) { setError('Informe seu nome completo.'); return }
      if (form.senha.length < 6) { setError('A senha deve ter pelo menos 6 caracteres.'); return }
      if (form.senha !== form.confirmar) { setError('As senhas não coincidem.'); return }
      if (!addUser({ nome: form.nome.trim(), email: form.email.trim(), perfil: form.perfil })) { setError('Este e-mail já foi cadastrado na demonstração.'); return }
      setSuccess('Usuário de demonstração cadastrado! Redirecionando para o login…')
      setTimeout(() => navigate('/login'), 900)
    } else { login(form.email); navigate('/dashboard') }
  }
  return (
    <main className="auth-screen">
      <div className="auth-art" aria-hidden="true">
        <div className="auth-art-inner"><img src={logo} alt="" /><span className="auth-art-line" /><h2>Um cuidado mais humano começa com uma boa gestão.</h2><p>Organização e tranquilidade para o dia a dia da sua clínica.</p><div className="auth-orbit auth-orbit-one"/><div className="auth-orbit auth-orbit-two"/></div>
      </div>
      <div className="auth-side"><div className="auth-panel">
        <div className="auth-mobile-brand"><img src={logo} alt="Lume Odontologia" /></div>
        <span className="auth-overline">ÁREA DE ACESSO · DEMONSTRAÇÃO</span>
        <h1>{register ? 'Criar usuário' : 'Bem-vindo de volta'}</h1>
        <p className="auth-intro">{register ? 'Preencha os dados para cadastrar um usuário de demonstração.' : 'Entre para acessar o painel da Lume Odontologia.'}</p>
        <div className="auth-demo-note">Modo demonstração: nenhuma senha é verificada ou enviada a um servidor.</div>
        <form onSubmit={submit} noValidate>
          {register && <label>Nome completo<input name="nome" value={form.nome} onChange={change} placeholder="Ex.: Maria Silva" autoComplete="name" required /></label>}
          <label>E-mail<input name="email" type="email" value={form.email} onChange={change} placeholder="seuemail@exemplo.com" autoComplete="email" required /></label>
          <label>Senha<div className="auth-password"><input name="senha" type={showPassword ? 'text' : 'password'} value={form.senha} onChange={change} placeholder="Digite sua senha" autoComplete={register ? 'new-password' : 'current-password'} required /><button type="button" onClick={() => setShowPassword(v => !v)} aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}>{showPassword ? 'Ocultar' : 'Mostrar'}</button></div></label>
          {register && <><label>Confirmar senha<input name="confirmar" type="password" value={form.confirmar} onChange={change} placeholder="Repita sua senha" autoComplete="new-password" required /></label><label>Perfil<select name="perfil" value={form.perfil} onChange={change}><option>Recepcionista</option><option>Dentista</option><option>Administrador</option></select></label></>}
          {error && <p role="alert" className="auth-alert">{error}</p>}
          {success && <p role="status" className="auth-success">{success}</p>}
          <button className="auth-submit" type="submit">{register ? 'Cadastrar usuário' : 'Entrar na demonstração'} <span aria-hidden="true">→</span></button>
        </form>
        <p className="auth-switch">{register ? 'Já possui uma conta?' : 'Precisa cadastrar um usuário?'} <Link to={register ? '/login' : '/cadastro'}>{register ? 'Fazer login' : 'Criar usuário'}</Link></p>
        <p className="auth-foot">© Lume Odontologia · Interface demonstrativa</p>
      </div></div>
    </main>
  )
}
