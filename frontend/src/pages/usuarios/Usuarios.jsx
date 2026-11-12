
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDemo } from '../../contexts/DemoSession'
import './usuarios.css'

export default function Usuarios() {
  const { users, removeUser } = useDemo()

  const [search, setSearch] = useState('')
  const [profile, setProfile] = useState('Todos')
  const [page, setPage] = useState(1)

  const filtered = users.filter(item =>
    (item.nome + ' ' + item.email)
      .toLowerCase()
      .includes(search.toLowerCase()) &&
    (profile === 'Todos' || item.perfil === profile)
  )

  const pages = Math.max(1, Math.ceil(filtered.length / 5))

  const visible = filtered.slice(
    (Math.min(page, pages) - 1) * 5,
    Math.min(page, pages) * 5
  )

  function del(item) {
    if (window.confirm(`Excluir ${item.nome} da lista demonstrativa?`)) {
      removeUser(item.id)
    }
  }

  return (
    <section className="users-page" aria-labelledby="page-title">
      <div className="users-heading">
        <div>
          <p className="lume-eyebrow">Administração</p>
          <h1 id="page-title">Usuários</h1>
          <p>Organize os membros da equipe e seus perfis de acesso.</p>
        </div>

        <Link className="users-add" to="/cadastro">
          + Novo usuário
        </Link>
      </div>

      <div className="users-summary">
        <span className="users-summary-icon">♙</span>

        <div>
          <strong>{users.length} usuários cadastrados</strong>
          <p>
            Lista local de demonstração. Nenhum dado é enviado ao servidor.
          </p>
        </div>
      </div>

      <div className="users-filters">
        <label>
          Buscar usuário

          <input
            placeholder="Nome ou e-mail"
            value={search}
            onChange={event => {
              setSearch(event.target.value)
              setPage(1)
            }}
          />
        </label>

        <label>
          Perfil

          <select
            value={profile}
            onChange={event => {
              setProfile(event.target.value)
              setPage(1)
            }}
          >
            <option>Todos</option>
            <option>Administrador</option>
            <option>Recepcionista</option>
            <option>Dentista</option>
          </select>
        </label>
      </div>

      <div className="users-table-wrap">
        <table>
          <thead>
            <tr>
              <th>USUÁRIO</th>
              <th>PERFIL</th>
              <th>STATUS</th>
              <th>AÇÕES</th>
            </tr>
          </thead>

          <tbody>
            {visible.length ? (
              visible.map(item => (
                <tr key={item.id}>
                  <td>
                    <span className="users-person">
                      <span className="users-avatar">
                        {item.nome.charAt(0)}
                      </span>

                      <span>
                        <strong>{item.nome}</strong>
                        <small>{item.email}</small>
                      </span>
                    </span>
                  </td>

                  <td>{item.perfil}</td>

                  <td>
                    <span className="users-active">
                      {item.status}
                    </span>
                  </td>

                  <td>
                    <button
                      className="users-remove"
                      type="button"
                      onClick={() => del(item)}
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="users-empty">
                  Nenhum usuário encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="users-pagination">
        <span>
          Exibindo {visible.length} de {filtered.length} usuários
        </span>

        <div>
          <button
            disabled={page <= 1}
            onClick={() => setPage(value => value - 1)}
          >
            Anterior
          </button>

          <span>
            Página {Math.min(page, pages)} de {pages}
          </span>

          <button
            disabled={page >= pages}
            onClick={() => setPage(value => value + 1)}
          >
            Próxima
          </button>
        </div>
      </div>
    </section>
  )
}
