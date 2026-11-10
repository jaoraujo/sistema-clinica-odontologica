function FiltrosConsultas({
                              filtroStatus,
                              setFiltroStatus,
                              filtroData,
                              setFiltroData
                          }) {
    return (
        <div>
            <label htmlFor="filtroStatus">Filtrar por status:</label>
            <select
                id="filtroStatus"
                value={filtroStatus}
                onChange={(e) => setFiltroStatus(e.target.value)}
            >
                <option value="todos">Todas</option>
                <option value="agendada">Agendadas</option>
                <option value="concluida">Concluídas</option>
                <option value="cancelada">Canceladas</option>
            </select>

            <label htmlFor="filtroData">Filtrar por data:</label>
            <input
                id="filtroData"
                type="date"
                value={filtroData}
                onChange={(e) => setFiltroData(e.target.value)}
            />
        </div>
    );
}

export default FiltrosConsultas;