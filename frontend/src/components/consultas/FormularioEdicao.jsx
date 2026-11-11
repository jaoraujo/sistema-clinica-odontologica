
function FormularioEdicao({
                              consultaEmEdicao,
                              setConsultaEmEdicao,
                              pacientes,
                              salvarEdicao
                          }) {
    return (
        <>
            {consultaEmEdicao && (
                <div className="consultas-form">
                    <h3>Editando consulta</h3>

                    <div className="consultas-field">
                        <label>Paciente:</label>
                        <p>
                            {pacientes.find(
                                (paciente) => paciente._id === consultaEmEdicao.pacienteId
                            )?.nome}
                        </p>
                    </div>

                    <div className="consultas-field">
                        <label htmlFor="dataEdicao">Data:</label>
                        <input
                            id="dataEdicao"
                            className="lume-input"
                            type="date"
                            value={consultaEmEdicao.dataHora.split("T")[0]}
                            onChange={(e) =>
                                setConsultaEmEdicao({
                                    ...consultaEmEdicao,
                                    dataHora: `${e.target.value}T${consultaEmEdicao.dataHora.split("T")[1]}`
                                })
                            }
                        />
                    </div>

                    <div className="consultas-field">
                        <label htmlFor="horarioEdicao">Horário:</label>
                        <input
                            id="horarioEdicao"
                            className="lume-input"
                            type="time"
                            value={consultaEmEdicao.dataHora.split("T")[1]}
                            onChange={(e) =>
                                setConsultaEmEdicao({
                                    ...consultaEmEdicao,
                                    dataHora: `${consultaEmEdicao.dataHora.split("T")[0]}T${e.target.value}`
                                })
                            }
                        />
                    </div>

                    <div className="consultas-field">
                        <label htmlFor="statusEdicao">Status:</label>
                        <select
                            id="statusEdicao"
                            className="lume-input"
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
                    </div>

                    <div className="consultas-field">
                        <label htmlFor="observacaoEdicao">Observação:</label>
                        <textarea
                            id="observacaoEdicao"
                            className="lume-input"
                            value={consultaEmEdicao.observacao}
                            onChange={(e) =>
                                setConsultaEmEdicao({
                                    ...consultaEmEdicao,
                                    observacao: e.target.value
                                })
                            }
                        />
                    </div>

                    <button
                        className="lume-btn lume-btn--primary"
                        onClick={salvarEdicao}
                    >
                        Salvar alterações
                    </button>

                    <button
                        className="lume-btn"
                        onClick={() => setConsultaEmEdicao(null)}
                    >
                        Cancelar
                    </button>
                </div>
            )}
        </>
    );
}

export default FormularioEdicao;
