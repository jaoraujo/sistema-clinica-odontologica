import { useEffect, useMemo, useState } from 'react'
import Confirmacao from '../../components/pacientes/Confirmacao'
import FormPaciente from '../../components/pacientes/FormPaciente'
import Paginacao from '../../components/pacientes/Paginacao'
import { calcularIdade, formatarData, normalizar } from '../../utils/formatters'
import '../preview.css'
import './pacientes.css'

// Dados fictícios
const PACIENTES = [
  { _id: '1', nome: 'Ana Beatriz Souza', email: 'ana.souza@email.com', telefone: '(83) 99812-3456', dataNascimento: '1992-04-18' },
  { _id: '2', nome: 'Bruno Carvalho Lima', email: 'bruno.lima@email.com', telefone: '(83) 98745-1020', dataNascimento: '1985-11-02' },
  { _id: '3', nome: 'Camila Ferreira Alves', email: 'camila.alves@email.com', telefone: '(83) 99634-7788', dataNascimento: '2001-07-25' },
  { _id: '4', nome: 'Eduarda Martins', email: 'eduarda.martins@email.com', telefone: '(83) 99120-3344', dataNascimento: '2012-09-14' },
  { _id: '5', nome: 'Fábio Henrique Gomes', email: 'fabio.gomes@email.com', telefone: '(83) 98876-9012', dataNascimento: '1964-06-08' },
  { _id: '6', nome: 'Gabriela Nunes Barbosa', email: 'gabriela.barbosa@email.com', telefone: '(83) 99555-2181', dataNascimento: '1995-12-21' },
  { _id: '7', nome: 'Karina Duarte Melo', email: 'karina.melo@email.com', telefone: '(83) 98190-4467', dataNascimento: '1971-10-13' },
  { _id: '8', nome: 'Natália Correia Santos', email: 'natalia.santos@email.com', telefone: '(83) 99066-8854', dataNascimento: '1958-09-29' },
]

const FAIXAS = [
  { value: 'todas', label: 'Todas as idades', test: () => true },
  { value: '0-17', label: 'Até 17 anos', test: (i) => i <= 17 },
  { value: '18-39', label: '18 a 39 anos', test: (i) => i >= 18 && i <= 39 },
  { value: '40-59', label: '40 a 59 anos', test: (i) => i >= 40 && i <= 59 },
  { value: '60+', label: '60 anos ou mais', test: (i) => i >= 60 },
]

const ORDENACOES = {
  'nome-asc': { label: 'Nome (A–Z)', fn: (a, b) => a.nome.localeCompare(b.nome, 'pt-BR') },
  'nome-desc': { label: 'Nome (Z–A)', fn: (a, b) => b.nome.localeCompare(a.nome, 'pt-BR') },
  'nasc-desc': { label: 'Mais jovens primeiro', fn: (a, b) => b.dataNascimento.localeCompare(a.dataNascimento) },
  'nasc-asc': { label: 'Mais velhos primeiro', fn: (a, b) => a.dataNascimento.localeCompare(b.dataNascimento) },
}

export default function Pacientes() {
  const [busca, setBusca] = useState('')
  const [faixa, setFaixa] = useState('todas')
  const [ordem, setOrdem] = useState('nome-asc')
  const [porPagina, setPorPagina] = useState(5)
  const [pagina, setPagina] = useState(1)
  const [dialogo, setDialogo] = useState(null) // null = fechado | { mode: 'create' | 'view' | 'edit', paciente }
  const [paraExcluir, setParaExcluir] = useState(null)
  const [aviso, setAviso] = useState(null) // notificação

  // Comportamento da notificação
  useEffect(() => {
    if (!aviso) return
    const timer = setTimeout(() => setAviso(null), 4000)
    return () => clearTimeout(timer)
  }, [aviso])

  const filtrados = useMemo(() => {
    const termo = normalizar(busca.trim())
    const faixaAtual = FAIXAS.find((f) => f.value === faixa)
    return PACIENTES
      .filter((p) => !termo || normalizar(`${p.nome} ${p.email} ${p.telefone}`).includes(termo))
      .filter((p) => faixaAtual.test(calcularIdade(p.dataNascimento)))
      .sort(ORDENACOES[ordem].fn)
  }, [busca, faixa, ordem])

  const totalPaginas = Math.max(1, Math.ceil(filtrados.length / porPagina))
  const paginaAtual = Math.min(pagina, totalPaginas)
  const visiveis = filtrados.slice((paginaAtual - 1) * porPagina, paginaAtual * porPagina)
  const filtrosAtivos = busca !== '' || faixa !== 'todas' || ordem !== 'nome-asc'

  const alterar = (setter) => (event) => {
    setter(event.target.value)
    setPagina(1)
  }

  function limparFiltros() {
    setBusca('')
    setFaixa('todas')
    setOrdem('nome-asc')
    setPagina(1)
  }

  function salvar() {
    setAviso(dialogo.mode === 'create' ? 'Paciente cadastrado com sucesso.' : 'Alterações salvas com sucesso.')
    setDialogo(null)
  }

  function excluir() {
    setAviso('Paciente excluído com sucesso.')
    setParaExcluir(null)
    setDialogo(null)
  }

  return (
    <section>
      <div className="lume-page-heading">
        <div>
          <h1 id="page-title">Pacientes</h1>
          <p className="pacientes-subtitle">Consulte, cadastre e atualize os pacientes da clínica.</p>
        </div>
        <button type="button" className="lume-btn lume-btn--primary"
          onClick={() => setDialogo({ mode: 'create', paciente: null })}>
          Novo paciente
        </button>
      </div>

      <div className="pacientes-toolbar">
        <div className="pacientes-field pacientes-search">
          <label htmlFor="busca">Buscar paciente</label>
          <input id="busca" type="search" className="lume-input" value={busca}
            placeholder="Nome, e-mail ou telefone" onChange={alterar(setBusca)} />
        </div>
        <div className="pacientes-field">
          <label htmlFor="faixa">Faixa etária</label>
          <select id="faixa" className="lume-input" value={faixa} onChange={alterar(setFaixa)}>
            {FAIXAS.map((f) => <option key={f.value} value={f.value}>{f.label}</option>)}
          </select>
        </div>
        <div className="pacientes-field">
          <label htmlFor="ordem">Ordenar por</label>
          <select id="ordem" className="lume-input" value={ordem} onChange={alterar(setOrdem)}>
            {Object.entries(ORDENACOES).map(([valor, { label }]) => (
              <option key={valor} value={valor}>{label}</option>
            ))}
          </select>
        </div>
        {filtrosAtivos && (
          <button type="button" className="lume-btn pacientes-clear" onClick={limparFiltros}>
            Limpar filtros
          </button>
        )}
      </div>

      <div className="pacientes-table-wrap" tabIndex={0}>
        <table className="pacientes-table">
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">E-mail</th>
              <th scope="col">Telefone</th>
              <th scope="col">Nascimento</th>
              <th scope="col" className="pacientes-col-acoes">Ações</th>
            </tr>
          </thead>
          <tbody>
            {visiveis.length === 0 ? (
              <tr>
                <td colSpan={5} className="pacientes-vazio">Nenhum paciente encontrado.</td>
              </tr>
            ) : (
              visiveis.map((p) => (
                <tr key={p._id}>
                  <td>{p.nome}</td>
                  <td>{p.email}</td>
                  <td>{p.telefone}</td>
                  <td>{formatarData(p.dataNascimento)}</td>
                  <td className="pacientes-col-acoes">
                    <button type="button" className="lume-btn lume-btn--sm"
                      onClick={() => setDialogo({ mode: 'view', paciente: p })}>
                      Exibir
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <Paginacao pagina={paginaAtual} totalPaginas={totalPaginas} totalItens={filtrados.length}
        porPagina={porPagina} onPagina={setPagina}
        onPorPagina={(n) => { setPorPagina(n); setPagina(1) }} />

      {dialogo && (
        <FormPaciente
          key={`${dialogo.mode}-${dialogo.paciente?._id ?? 'novo'}`}
          mode={dialogo.mode}
          paciente={dialogo.paciente}
          onClose={() => setDialogo(null)}
          onCancel={() =>
            dialogo.mode === 'edit'
              ? setDialogo({ mode: 'view', paciente: dialogo.paciente })
              : setDialogo(null)
          }
          onEdit={() => setDialogo({ mode: 'edit', paciente: dialogo.paciente })}
          onDelete={() => setParaExcluir(dialogo.paciente)}
          onSave={salvar}
        />
      )}

      {paraExcluir && (
        <Confirmacao
          message={`O cadastro de ${paraExcluir.nome} será removido. Esta ação não poderá ser desfeita.`}
          onConfirm={excluir}
          onCancel={() => setParaExcluir(null)}
        />
      )}

      <div className="lume-toast-area">
        {aviso && <div className="lume-toast">{aviso}</div>}
      </div>
    </section>
  )
}
