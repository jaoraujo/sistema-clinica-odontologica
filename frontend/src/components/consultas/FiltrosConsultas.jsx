
function FiltrosConsultas({
                              filtroStatus,
                              setFiltroStatus,
                              filtroData,
                              setFiltroData
                          }) {
    return (
        <div className="consultas-toolbar">
            <div className="consultas-field">
                <label htmlFor="filtroStatus">Filtrar por status:</label>
                <select
                    id="filtroStatus"
                    className="lume-input"
                    value={filtroStatus}
                    onChange={(e) => setFiltroStatus(e.target.value)}
                >
                    <option value="todos">Todas</option>
                    <option value="agendada">Agendadas</option>
                    <option value="concluida">Concluídas</option>
                    <option value="cancelada">Canceladas</option>
                </select>
            </div>

            <div className="consultas-field">
                <label htmlFor="filtroData">Filtrar por data:</label>
                <input
                    id="filtroData"
                    type="date"
                    className="lume-input"
                    value={filtroData}
                    onChange={(e) => setFiltroData(e.target.value)}
                />
            </div>
        </div>
    );
}

export default FiltrosConsultas;
