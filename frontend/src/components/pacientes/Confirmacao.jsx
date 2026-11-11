import Dialog from './Dialog'

export default function Confirmacao({ message, onConfirm, onCancel }) {
  return (
    <Dialog size="sm" onClose={onCancel}>
      <div className="lume-dialog-content">
        <header className="lume-dialog-header">
          <h2 id="confirm-title">Aviso!</h2>
        </header>
        <div className="lume-dialog-body">
          <p id="confirm-desc">{message}</p>
        </div>
        <footer className="lume-dialog-footer">
          <button type="button" className="lume-btn" onClick={onCancel}>Cancelar</button>
          <button type="button" className="lume-btn lume-btn--danger-solid" onClick={onConfirm}>
            Confirmar
          </button>
        </footer>
      </div>
    </Dialog>
  )
}
