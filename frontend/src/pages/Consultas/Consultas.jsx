import {useState} from "react";

function Consultas() {

    const [formularioAberto, setFormularioAberto] = useState(false);
    const [pacienteId, setPacienteId] = useState('');
    const [dataConsulta, setDataConsulta] = useState('');
    const [horarioConsulta, setHorarioConsulta] = useState('');
    const [consultas, setConsultas] = useState([])
    const [status, setStatus] = useState('agendada');
    const [observacao, setObservacao] = useState('');


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

            <h2>Consultas cadastradas</h2>
            <table>
                <thead>
                    <tr>
                        <th>Paciente</th>
                        <th>Data e horário</th>
                        <th>Status</th>
                        <th>Observação</th>
                    </tr>
                </thead>

                <tbody> {/* aqui ainda mostra o id e não o nome do paciente */}
                    {consultas.map((consulta, index) => (
                        <tr key={index}>
                            <td>{pacientes.find(
                                (paciente) => paciente._id ===  consulta.pacienteId
                            ) ?.nome || 'Paciente não encontrado'}
                            </td>
                            <td>{consulta.dataHora}</td>
                            <td>{consulta.status}</td>
                            <td>{consulta.observacao}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    );
}

export default Consultas;