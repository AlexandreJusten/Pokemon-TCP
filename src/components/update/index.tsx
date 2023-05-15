import { ipcRenderer } from 'electron'
import type { ProgressInfo } from 'electron-updater'
import { useCallback, useEffect, useState } from 'react'
import Modal from '@/components/update/Modal'
import Progress from '@/components/update/Progress'
import styles from './update.module.scss'
import { enviarMensagem } from '@/controller/conection/cliente';
const Update = () => {
  const [checking, setChecking] = useState(false)
  const [updateAvailable, setUpdateAvailable] = useState(false)
  const [versionInfo, setVersionInfo] = useState<VersionInfo>()
  const [updateError, setUpdateError] = useState<ErrorType>()
  const [progressInfo, setProgressInfo] = useState<Partial<ProgressInfo>>()
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [modalBtn, setModalBtn] = useState<{
    cancelText?: string
    okText?: string
    onCancel?: () => void
    onOk?: () => void
  }>({
    onCancel: () => setModalOpen(false)
    
  })

  const checkUpdate = async () => {
    setChecking(true)
   
    setProgressInfo({ percent: 0 })
    setChecking(false)
    setModalOpen(true)
   
  }
  const [itemName, setItemName] = useState("");
  
    function testeConect(){
      setItemName(enviarMensagem('Conect'));
    }
    
  return (
    <>
      <Modal
        open={modalOpen}
        cancelText={modalBtn?.cancelText}
        okText={modalBtn?.okText}
        onCancel={modalBtn?.onCancel}
        onOk={modalBtn?.onOk}
        footer={updateAvailable ? null : undefined}
      >
      <button onClick={testeConect} >Testar Conexao</button>
      <span style={{color: itemName === 'erro' ? 'red' : 'green'}}>{itemName}</span>
      </Modal>
      <button disabled={checking} onClick={checkUpdate}>
       Check connection
      </button>
    </>
  )
}

export default Update
