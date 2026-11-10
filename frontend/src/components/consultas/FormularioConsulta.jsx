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
        <div>
            <h3>Nova consulta</h3>

            <label htmlFor="paciente">Paciente</label>
            <select
                id="paciente"
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

            <label>Data da consulta</label>
            <input
                type="date"
                value={dataConsulta}
                onChange={(e) => setDataConsulta(e.target.value)}
            />

            <label>Horário</label>
            <input
                type="time"
                value={horarioConsulta}
                onChange={(e) => setHorarioConsulta(e.target.value)}
            />

            <label>Status da consulta</label>
            <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
            >
                <option value="agendada">Agendada</option>
                <option value="concluida">Concluída</option>
                <option value="cancelada">Cancelada</option>
            </select>

            <label>Observação</label>
            <textarea
                value={observacao}
                onChange={(e) => setObservacao(e.target.value)}
                placeholder="Ex.: Avaliação inicial"
            />

            <button onClick={agendarConsulta}>
                Agendar consulta
            </button>
        </div>
    );
}

export default FormularioConsulta;