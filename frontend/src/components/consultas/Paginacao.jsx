
function Paginacao({ paginaAtual, setPaginaAtual, totalPaginas }) {
    return (
        <div className="consultas-pagination">
            <button
                className="lume-btn lume-btn--sm"
                onClick={() => setPaginaAtual(paginaAtual - 1)}
                disabled={paginaAtual === 1}
            >
                Anterior
            </button>

            <span>
        Página {paginaAtual} de {totalPaginas}
      </span>

            <button
                className="lume-btn lume-btn--sm"
                onClick={() => setPaginaAtual(paginaAtual + 1)}
                disabled={paginaAtual === totalPaginas}
            >
                Próxima
            </button>
        </div>
    );
}

export default Paginacao;
