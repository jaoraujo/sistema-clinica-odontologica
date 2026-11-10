function FormularioEdicao({
                              consultaEmEdicao,
                              setConsultaEmEdicao,
                              pacientes,
                              salvarEdicao
                          }) {
    return (
        <>
            {consultaEmEdicao && (
                <div>
                    <h3>Editando consulta</h3>

                    <label>Paciente:</label>
                    <p>
                        {pacientes.find(
                            (paciente) => paciente._id === consultaEmEdicao.pacienteId
                        )?.nome}
                    </p>

                    <label>Data:</label>
                    <input
                        type="date"
                        value={consultaEmEdicao.dataHora.split('T')[0]}
                        onChange={(e) =>
                            setConsultaEmEdicao({
                                ...consultaEmEdicao,
                                dataHora: `${e.target.value}T${consultaEmEdicao.dataHora.split('T')[1]}`
                            })
                        }
                    />

                    <label>Horário:</label>
                    <input
                        type="time"
                        value={consultaEmEdicao.dataHora.split('T')[1]}
                        onChange={(e) =>
                            setConsultaEmEdicao({
                                ...consultaEmEdicao,
                                dataHora: `${consultaEmEdicao.dataHora.split('T')[0]}T${e.target.value}`
                            })
                        }
                    />

                    <label>Status:</label>
                    <select
                        value={consultaEmEdicao.status}
                        onChange={(e) =>
                            setConsultaEmEdicao({
                                ...consultaEmEdicao,
                                status: e.target.value
                            })
                        }
                    >
                        <option value="agendada">Agendada</option>
                        <option value="concluida">Concluída</option>
                        <option value="cancelada">Cancelada</option>
                    </select>

                    <label>Observação:</label>
                    <textarea
                        value={consultaEmEdicao.observacao}
                        onChange={(e) =>
                            setConsultaEmEdicao({
                                ...consultaEmEdicao,
                                observacao: e.target.value
                            })
                        }
                    />

                    <button onClick={salvarEdicao}>
                        Salvar alterações
                    </button>

                    <button onClick={() => setConsultaEmEdicao(null)}>
                        Cancelar
                    </button>
                </div>
            )}
        </>
    );
}

export default FormularioEdicao;