import { useState } from 'react'
import Dialog from './Dialog'
import { mascararTelefone } from '../../utils/formatters'

const VAZIO = { nome: '', email: '', telefone: '', dataNascimento: '' }

const TITULOS = {
  create: { titulo: 'Novo paciente', subtitulo: 'Preencha os dados para cadastrar um paciente.' },
  view: { titulo: 'Dados do paciente', subtitulo: 'Visualização do cadastro.' },
  edit: { titulo: 'Editar paciente', subtitulo: 'Atualize os dados e salve as alterações.' },
}

function validar(campos) {
  const erros = {}
  const hoje = new Date().toISOString().slice(0, 10)
  if (!campos.nome.trim()) erros.nome = 'Informe o nome completo.'
  if (!campos.email.trim()) erros.email = 'Informe o e-mail.'
  else if (!/^\S+@\S+\.\S+$/.test(campos.email)) erros.email = 'Informe um e-mail válido.'
  if (campos.telefone.replace(/\D/g, '').length < 10) erros.telefone = 'Informe um telefone com DDD.'
  if (!campos.dataNascimento) erros.dataNascimento = 'Informe a data de nascimento.'
  else if (campos.dataNascimento > hoje) erros.dataNascimento = 'A data não pode ser futura.'
  return erros
}

function Campo({ id, label, erro, className = '', ...props }) {
  return (
    <div className={`lume-field ${className}`}>
      <label htmlFor={id}>
        {label}
        {!props.readOnly && <span> *</span>}
      </label>
      <input
        id={id}
        name={id}
        className="lume-input"
        {...props}
      />
      {erro && <p id={`${id}-erro`} className="lume-field-error">{erro}</p>}
    </div>
  )
}

export default function FormPaciente({ mode, paciente, onClose, onCancel, onEdit, onDelete, onSave }) {
  const [campos, setCampos] = useState(paciente ?? VAZIO)
  const [erros, setErros] = useState({})
  const somenteLeitura = mode === 'view'
  const { titulo, subtitulo } = TITULOS[mode]

  function handleChange(event) {
    const { name, value } = event.target
    setCampos((atual) => ({
      ...atual,
      [name]: name === 'telefone' ? mascararTelefone(value) : value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const novosErros = validar(campos)
    setErros(novosErros)
    if (Object.keys(novosErros).length === 0) onSave()
  }

  return (
    <Dialog onClose={onClose}>
      <form className="lume-dialog-content" onSubmit={handleSubmit} noValidate>
        <header className="lume-dialog-header">
          <div>
            <h2 id="paciente-dialog-title">{titulo}</h2>
            <p id="paciente-dialog-desc">{subtitulo}</p>
          </div>
          <button type="button" className="lume-dialog-close" onClick={onClose}>X</button>
        </header>

        <div className="lume-dialog-body">
          <div className="lume-form-grid">
            <Campo id="nome" label="Nome completo" className="lume-field--full" value={campos.nome}
              onChange={handleChange} readOnly={somenteLeitura} erro={erros.nome} autoComplete="off" />
            <Campo id="email" label="E-mail" type="email" className="lume-field--full" value={campos.email}
              onChange={handleChange} readOnly={somenteLeitura} erro={erros.email} autoComplete="off" />
            <Campo id="telefone" label="Telefone" type="tel" inputMode="tel" placeholder="(00) 00000-0000"
              value={campos.telefone} onChange={handleChange} readOnly={somenteLeitura} erro={erros.telefone} />
            <Campo id="dataNascimento" label="Data de nascimento" type="date"
              max={new Date().toISOString().slice(0, 10)} value={campos.dataNascimento}
              onChange={handleChange} readOnly={somenteLeitura} erro={erros.dataNascimento} />
          </div>
        </div>

        <footer className="lume-dialog-footer">
          {somenteLeitura ? (
            <>
              <button type="button" className="lume-btn lume-btn--danger" onClick={onDelete}>Excluir</button>
              <button type="button" className="lume-btn lume-btn--primary" onClick={onEdit}>Editar</button>
            </>
          ) : (
            <>
              <button type="button" className="lume-btn" onClick={onCancel}>Cancelar</button>
              <button type="submit" className="lume-btn lume-btn--primary">
                {mode === 'create' ? 'Cadastrar' : 'Salvar'}
              </button>
            </>
          )}
        </footer>
      </form>
    </Dialog>
  )
}
