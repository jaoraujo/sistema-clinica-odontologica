import './paginacao.css'

export default function Paginacao({ pagina, totalPaginas, totalItens, porPagina, onPagina, onPorPagina }) {
  const inicio = totalItens === 0 ? 0 : (pagina - 1) * porPagina + 1
  const fim = Math.min(pagina * porPagina, totalItens)
  const numeros = Array.from({ length: totalPaginas }, (_, i) => i + 1)

  return (
    <nav className="lume-pagination">
      <p>Mostrando {inicio}–{fim} de {totalItens}</p>

      <label className="lume-pagination-size">
        Itens por página
        <select className="lume-input" value={porPagina} onChange={(e) => onPorPagina(Number(e.target.value))}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </label>

      <ul>
        <li>
          <button type="button" className="lume-btn lume-btn--sm" disabled={pagina === 1}
            onClick={() => onPagina(pagina - 1)}>
            Anterior
          </button>
        </li>

        {numeros.map((n) => (
          <li key={n}>
            <button type="button" className="lume-btn lume-btn--sm lume-btn--num"
              onClick={() => onPagina(n)}>
              {n}
            </button>
          </li>
        ))}

        <li>
          <button type="button" className="lume-btn lume-btn--sm" disabled={pagina === totalPaginas}
            onClick={() => onPagina(pagina + 1)}>
            Próxima
          </button>
        </li>
      </ul>
    </nav>
  )
}
