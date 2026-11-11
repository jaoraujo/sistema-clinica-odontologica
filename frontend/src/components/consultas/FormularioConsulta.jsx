
function FormularioConsulta({
                                pacientes,
                                pacienteId,
                                setPacienteId,
                                dataConsulta,
                                setDataConsulta,
                                horarioConsulta,
                                setHorarioConsulta,
                                status,
                                setStatus,
                                observacao,
                                setObservacao,
                                agendarConsulta
                            }) {
    return (
        <div className="consultas-form">
            <h3>Nova consulta</h3>

            <div className="consultas-field">
                <label htmlFor="paciente">Paciente</label>
                <select
                    id="paciente"
                    className="lume-input"
                    value={pacienteId}
                    onChange={(e) => setPacienteId(e.target.value)}
                >
                    <option value="">Selecione um paciente</option>

                    {pacientes.map((paciente) => (
                        <option key={paciente._id} value={paciente._id}>
                            {paciente.nome}
                        </option>
                    ))}
                </select>
            </div>

            <div className="consultas-field">
                <label htmlFor="dataConsulta">Data da consulta</label>
                <input
                    id="dataConsulta"
                    className="lume-input"
                    type="date"
                    value={dataConsulta}
                    onChange={(e) => setDataConsulta(e.target.value)}
                />
            </div>

            <div className="consultas-field">
                <label htmlFor="horarioConsulta">Horário</label>
                <input
                    id="horarioConsulta"
                    className="lume-input"
                    type="time"
                    value={horarioConsulta}
                    onChange={(e) => setHorarioConsulta(e.target.value)}
                />
            </div>

            <div className="consultas-field">
                <label htmlFor="statusConsulta">Status da consulta</label>
                <select
                    id="statusConsulta"
                    className="lume-input"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="agendada">Agendada</option>
                    <option value="concluida">Concluída</option>
                    <option value="cancelada">Cancelada</option>
                </select>
            </div>

            <div className="consultas-field">
                <label htmlFor="observacao">Observação</label>
                <textarea
                    id="observacao"
                    className="lume-input"
                    value={observacao}
                    onChange={(e) => setObservacao(e.target.value)}
                    placeholder="Ex.: Avaliação inicial"
                />
            </div>

            <button
                type="button"
                className="lume-btn lume-btn--primary"
                onClick={agendarConsulta}
            >
                Agendar consulta
            </button>
        </div>
    );
}

export default FormularioConsulta;
