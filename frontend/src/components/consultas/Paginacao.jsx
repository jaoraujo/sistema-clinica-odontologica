function Paginacao({ paginaAtual, setPaginaAtual, totalPaginas }) {
    return (
        <div>
            <button
                onClick={() => setPaginaAtual(paginaAtual - 1)}
                disabled={paginaAtual === 1}
            >
                Anterior
            </button>

            <span>
            Página {paginaAtual} de {totalPaginas}
            </span>

            <button
                onClick={() => setPaginaAtual(paginaAtual + 1)}
                disabled={paginaAtual === totalPaginas}
            >
                Próxima
            </button>
        </div>
    );
}

export default Paginacao;