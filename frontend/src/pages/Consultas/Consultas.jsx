import {useState} from "react";

function Consultas() {

    const [formularioAberto, setFormularioAberto] = useState(false);
    const [pacienteId, setPacienteId] = useState('');
    const [dataConsulta, setDataConsulta] = useState('');
    const [horarioConsulta, setHorarioConsulta] = useState('');
    const [consultas, setConsultas] = useState([])
    const [status, setStatus] = useState('agendada');
    const [observacao, setObservacao] = useState('');
    const [filtroStatus, setFiltroStatus] = useState('todos');
    const [filtroData, setFiltroData] = useState('');
    const [paginaAtual, setPaginaAtual] = useState(1);
    const consultasPorPagina = 5;
    const [consultaEmEdicao, setConsultaEmEdicao] = useState(null);


    const pacientes = [
        { _id: 'paciente-teste-1', nome: 'Maria Silva' },
        { _id: 'paciente-teste-2', nome: 'João Santos' }
    ];


    function agendarConsulta() {

        if (!pacienteId) {
            alert('Selecione um paciente!');
            return;
        }

        if (!dataConsulta || !horarioConsulta) {
            alert('Preencha a data e o horário da consulta!');
            return;
        }


        const novaConsulta = {
            id: Date.now(),
            pacienteId: pacienteId,
            dataHora: `${dataConsulta}T${horarioConsulta}`,
            status: status,
            observacao: observacao
        };

        setConsultas([...consultas, novaConsulta]);
        setPacienteId('');
        setDataConsulta('');
        setHorarioConsulta('');
        setStatus('agendada');
        setObservacao('');

        console.log(novaConsulta);

    }


    function salvarEdicao() {
        setConsultas(
            consultas.map((consulta) =>
                consulta.id === consultaEmEdicao.id
                    ? consultaEmEdicao
                    : consulta
            )
        );

        setConsultaEmEdicao(null);
    }

    function cancelarConsulta(id) {
        setConsultas(
            consultas.map((consulta) =>
                consulta.id === id
                    ? { ...consulta, status: 'cancelada' }
                    : consulta
            )
        );
    }


    const consultasFiltradas = consultas.filter((consulta) => {
        const correspondeStatus =
            filtroStatus === 'todos' || consulta.status === filtroStatus;

        const dataConsulta = consulta.dataHora.split('T')[0];

        const correspondeData =
            filtroData === '' || dataConsulta === filtroData;

        return correspondeStatus && correspondeData;
    });


    const indiceInicial = (paginaAtual - 1) * consultasPorPagina;

    const consultasPaginadas = consultasFiltradas.slice(
        indiceInicial,
        indiceInicial + consultasPorPagina
    );

    const totalPaginas = Math.ceil(
        consultasFiltradas.length / consultasPorPagina
    );

    return (
        <>

            <h1>Minhas Consultas</h1>
            <h2>Gerencie os agendamentos dos pacientes</h2>

            <button onClick={() => setFormularioAberto(!formularioAberto)}>
                {formularioAberto ? 'Fechar formulário' : 'Nova consulta'}
            </button>

            {formularioAberto && (
                <div>

                    <h3>Nova consulta</h3>

                    <label htmlFor='paciente'>Paciente</label>
                    <select
                        id='paciente'
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


                    <label htmlFor='date'>Data da consulta</label>
                    <input
                        type='date'
                        value={dataConsulta}
                        onChange={(e) => setDataConsulta(e.target.value)}
                    />


                    <label htmlFor='time'>Horário</label>
                    <input
                        type='time'
                        value={horarioConsulta}
                        onChange={(e) => setHorarioConsulta(e.target.value)}
                    />


                    <label htmlFor='status'>Status da consulta</label>
                    <select
                        id='status'
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value='agendada'>Agendada</option>
                        <option value='concluida'>Concluída</option>
                        <option value='cancelada'>Cancelada</option>
                    </select>


                    <label htmlFor='observacao'>Observação</label>
                    <textarea
                        id='observacao'
                        value={observacao}
                        onChange={(e) => setObservacao(e.target.value)}
                        placeholder='Ex.: Avaliação inicial'
                    />


                    <button onClick={agendarConsulta}>
                        Agendar consulta
                    </button>

                </div>
            )}

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




            <h2>Consultas cadastradas</h2>

            <label htmlFor='filtroStatus'>Filtrar por status:</label>
            <select
                id='filtroStatus'
                value={filtroStatus}
                onChange={(e) => setFiltroStatus(e.target.value)}
            >
                <option value='todos'>Todas</option>
                <option value='agendada'>Agendadas</option>
                <option value='concluida'>Concluídas</option>
                <option value='cancelada'>Canceladas</option>
            </select>


            <label htmlFor='filtroData'>Filtrar por data:</label>
            <input
                id='filtroData'
                type='date'
                value={filtroData}
                onChange={(e) => setFiltroData(e.target.value)}
            />

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

                <tbody> {/* aqui ainda mostra o id e não o nome do paciente */}
                    {consultasPaginadas.map((consulta) => (
                        <tr key={consulta.id}>
                            <td>{pacientes.find(
                                (paciente) => paciente._id ===  consulta.pacienteId
                            ) ?.nome || 'Paciente não encontrado'}
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

        </>
    );
}

export default Consultas;