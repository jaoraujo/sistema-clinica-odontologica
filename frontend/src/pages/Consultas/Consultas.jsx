import {useState} from "react";
import FormularioConsulta from "../../components/consultas/FormularioConsulta.jsx";
import FormularioEdicao from "../../components/consultas/FormularioEdicao.jsx";
import FiltrosConsultas from "../../components/consultas/FiltrosConsultas.jsx";
import TabelaConsultas from "../../components/consultas/TabelaConsultas.jsx";
import Paginacao from "../../components/consultas/Paginacao.jsx";
import './consultas.css';


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

        const dataHoraConsulta = new Date(`${dataConsulta}T${horarioConsulta}`);

        if (dataHoraConsulta <= new Date()) {
            alert('A consulta precisa ser agendada para uma data futura!');
            return;
        }

        const novaDataHora = new Date(`${dataConsulta}T${horarioConsulta}`);

        const horarioOcupado = consultas.some((consulta) => {
            if (consulta.status === 'cancelada') {
                return false;
            }

            const dataExistente = new Date(consulta.dataHora);

            const diferencaMinutos =
                Math.abs(novaDataHora - dataExistente) / (1000 * 60);

            return diferencaMinutos < 30;
        });

        if (horarioOcupado) {
            alert('Já existe uma consulta nesse intervalo de horário!');
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

        const dataHoraConsulta = new Date(consultaEmEdicao.dataHora);

        if (dataHoraConsulta <= new Date()) {
            alert('A consulta precisa ser agendada para uma data futura!');
            return;
        }

        const horarioOcupado = consultas.some((consulta) => {
            if (
                consulta.id === consultaEmEdicao.id ||
                consulta.status === 'cancelada'
            ) {
                return false;
            }

            const dataExistente = new Date(consulta.dataHora);
            const dataEditada = new Date(consultaEmEdicao.dataHora);

            const diferencaMinutos =
                Math.abs(dataEditada - dataExistente) / (1000 * 60);

            return diferencaMinutos < 30;
        });

        if (horarioOcupado) {
            alert('Já existe uma consulta nesse intervalo de horário!');
            return;
        }

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

            <section className="consultas-page">
                <div className="lume-page-heading">
                    <div>
                        <h1 id="page-title">Minhas Consultas</h1>
                        <p className="consultas-subtitle">
                            Gerencie os agendamentos dos pacientes.
                        </p>
                    </div>

                    <button
                        type="button"
                        className="lume-btn lume-btn--primary"
                        onClick={() => setFormularioAberto(!formularioAberto)}
                    >
                        {formularioAberto ? 'Fechar formulário' : 'Nova consulta'}
                    </button>
                </div>


            {formularioAberto && (
                <FormularioConsulta
                    pacientes={pacientes}
                    pacienteId={pacienteId}
                    setPacienteId={setPacienteId}
                    dataConsulta={dataConsulta}
                    setDataConsulta={setDataConsulta}
                    horarioConsulta={horarioConsulta}
                    setHorarioConsulta={setHorarioConsulta}
                    status={status}
                    setStatus={setStatus}
                    observacao={observacao}
                    setObservacao={setObservacao}
                    agendarConsulta={agendarConsulta}
                />
            )}

            <FormularioEdicao
                consultaEmEdicao={consultaEmEdicao}
                setConsultaEmEdicao={setConsultaEmEdicao}
                pacientes={pacientes}
                salvarEdicao={salvarEdicao}
            />




            <h2>Consultas cadastradas</h2>

            <FiltrosConsultas
                filtroStatus={filtroStatus}
                setFiltroStatus={setFiltroStatus}
                filtroData={filtroData}
                setFiltroData={setFiltroData}
            />

            <TabelaConsultas
                consultasPaginadas={consultasPaginadas}
                pacientes={pacientes}
                setConsultaEmEdicao={setConsultaEmEdicao}
                cancelarConsulta={cancelarConsulta}
            />

            <Paginacao
                paginaAtual={paginaAtual}
                setPaginaAtual={setPaginaAtual}
                totalPaginas={totalPaginas}
            />
                
            </section>
        </>
    );
}

export default Consultas;