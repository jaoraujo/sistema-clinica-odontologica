import { Link } from 'react-router-dom'
import Icon from '../../components/Icon'
import { useDemo } from '../../contexts/DemoSession'
import './dashboard.css'
const stats = [
  { label: 'Pacientes cadastrados', value: '08', icon: 'patients', note: 'Base ilustrativa' },
  { label: 'Consultas agendadas', value: '12', icon: 'calendar', note: 'Exemplo de indicador' },
  { label: 'Atendimentos hoje', value: '04', icon: 'dashboard', note: 'Dados de demonstração' },
  { label: 'Consultas pendentes', value: '03', icon: 'calendar', note: 'Dados de demonstração' },
]
const appointments = [
  { time: '09:00', name: 'Ana Beatriz Souza', type: 'Avaliação inicial', status: 'Confirmada' },
  { time: '10:30', name: 'Bruno Carvalho Lima', type: 'Limpeza', status: 'Agendada' },
  { time: '14:00', name: 'Camila Ferreira Alves', type: 'Retorno', status: 'Confirmada' },
]
export default function Dashboard() {
  const { user } = useDemo()
  return <section className="dash-page" aria-labelledby="page-title">
    <div className="dash-heading"><div><p className="lume-eyebrow">Visão geral · demonstração</p><h1 id="page-title">Dashboard</h1><p>Olá, {user?.nome?.split(' ')[0] || 'equipe'}! Veja o resumo da sua clínica.</p></div><Link to="/consultas" className="dash-action">Ver consultas <span>→</span></Link></div>
    <div className="dash-banner"><div><span className="dash-banner-tag">PAINEL DA CLÍNICA</span><h2>Um dia mais organizado começa aqui.</h2><p>Acompanhe pacientes, agendamentos e atividades em um só lugar.</p></div><span className="dash-banner-shape" aria-hidden="true">✳</span></div>
    <div className="dash-section-heading"><h2>Resumo da clínica</h2><span>Indicadores ilustrativos</span></div>
    <div className="dash-stats">{stats.map(stat => <article className="dash-stat" key={stat.label}><span className="dash-stat-icon"><Icon name={stat.icon}/></span><strong>{stat.value}</strong><span className="dash-stat-label">{stat.label}</span><small>{stat.note}</small></article>)}</div>
    <div className="dash-lower"><section className="dash-appointments"><div className="dash-panel-heading"><div><h2>Próximos atendimentos</h2><p>Exemplo de agenda para visualização</p></div><Link to="/consultas">Ver agenda →</Link></div><div className="dash-table-wrap"><table><thead><tr><th>Horário</th><th>Paciente</th><th>Procedimento</th><th>Status</th></tr></thead><tbody>{appointments.map(item => <tr key={item.time}><td className="dash-time">{item.time}</td><td>{item.name}</td><td>{item.type}</td><td><span className={'dash-status '+(item.status==='Confirmada'?'is-confirmed':'')}>{item.status}</span></td></tr>)}</tbody></table></div></section>
    <section className="dash-links"><h2>Acesso rápido</h2><p>Continue de onde precisa.</p>{[{to:'/pacientes',title:'Pacientes',icon:'patients',desc:'Cadastros e informações'},{to:'/consultas',title:'Consultas',icon:'calendar',desc:'Agenda e atendimentos'},{to:'/usuarios',title:'Usuários',icon:'users',desc:'Equipe da clínica'}].map(item=><Link to={item.to} className="dash-quick" key={item.to}><span className="dash-quick-icon"><Icon name={item.icon}/></span><span><strong>{item.title}</strong><small>{item.desc}</small></span><span className="dash-quick-arrow">→</span></Link>)}</section></div>
    <p className="dash-disclaimer">Os números e agendamentos exibidos neste painel são fictícios. A integração com o backend será realizada posteriormente.</p>
  </section>
}
