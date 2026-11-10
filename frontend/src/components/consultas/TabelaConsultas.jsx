function TabelaConsultas({
                             consultasPaginadas,
                             pacientes,
                             setConsultaEmEdicao,
                             cancelarConsulta
                         }) {
    return (
        <table>
            <thead>
            <tr>
                <th>Paciente</th>
                <th>Data e horário</th>
                <th>Status</th>
                <th>Observação</th>
                <th>Ações</th>
            </tr>
            </thead>

            <tbody>
            {consultasPaginadas.map((consulta) => (
                <tr key={consulta.id}>
                    <td>
                        {pacientes.find(
                            (paciente) => paciente._id === consulta.pacienteId
                        )?.nome || 'Paciente não encontrado'}
                    </td>

                    <td>{consulta.dataHora}</td>
                    <td>{consulta.status}</td>
                    <td>{consulta.observacao}</td>

                    <td>
                        <button onClick={() => setConsultaEmEdicao(consulta)}>
                            Editar
                        </button>

                        <button
                            onClick={() => cancelarConsulta(consulta.id)}
                            disabled={consulta.status === 'cancelada'}
                        >
                            Cancelar
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default TabelaConsultas;