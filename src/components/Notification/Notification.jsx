import React from 'react'
import { Alert } from 'react-bootstrap'
import './notification.css'

const Notification = ({ message, onClose }) => {
  return (
    <div 
        className='notification d-flex justify-content-center align-items-center position-fixed top-0 start-50 translate-middle-x '
        style={{ zIndex: 2 }}
    >
        <Alert
        variant = "dark"
        onClose = {onClose}
        className='m-3 fs-3 text-center w-100'
        style={{ zIndex: 1 }}
        >
            { message }
        </Alert>
    </div>
  )
}

export default Notification