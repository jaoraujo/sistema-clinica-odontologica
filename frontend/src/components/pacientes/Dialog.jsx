import { useEffect, useRef } from 'react'
import './dialog.css'

export default function Dialog({
  onClose,
  size = 'md',
  children,
}) {
  const ref = useRef(null)

  useEffect(() => {
    const dialog = ref.current
    if (dialog && !dialog.open) dialog.showModal()
  }, [])

  return (
    <dialog
      ref={ref}
      className={`lume-dialog lume-dialog--${size}`}
      onClose={onClose}
    >
      {children}
    </dialog>
  )
}
