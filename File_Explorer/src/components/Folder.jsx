import React, { useState } from 'react'
import styles from './folder.module.css'

const Folder = ({ handleInsertNode = () => { }, explorerData }) => {
  const [expand, setExpand] = useState(false);
  const [input, setInput] = useState({
    isFolder: false,
    visible: false
  })

  const handleInput = (e, isFolder) => {
    console.log("handleInput")
    e.stopPropagation()
    setExpand(true)
    setInput({
      isFolder: isFolder,
      visible: true
    })
  }

  const addFolder = (e) => {
    // console.log(e.target.value)
    if (e.keyCode === 13 && e.target.value) {
      console.log("addFolder")
      console.log("Explorer id: ", explorerData.id)
      handleInsertNode(explorerData.id, e.target.value, input.isFolder)
      setInput({ ...input, visible: false })
    }
  }

  if (explorerData.isFolder) {
    return (
      <div style={{ marginTop: 10 }}>
        <div className={`${styles.folder}`} onClick={() => { setExpand(!expand) }}>
          <span>📁 {explorerData.name}</span>
          <div className={`${styles.buttons}`}>
            <button className={`${styles.button}`} onClick={(e) => handleInput(e, true)}>
              Folder +
            </button>
            <button className={`${styles.button}`} onClick={(e) => handleInput(e, false)}>
              File +
            </button>
          </div>
        </div>

        <div style={{ display: expand ? 'block' : 'none', paddingLeft: 25 }}>
          {
            input.visible && (
              <div>
                <span>{input.isFolder ? '📁' : '📃'}</span>
                <input
                  autoFocus
                  type='text'
                  onKeyDown={addFolder}
                  onBlur={() => setInput({ ...input, visible: false })}
                />
              </div>
            )
          }

          {
            explorerData.items.map((item) => {
              return (
                <Folder
                  handleInsertNode={handleInsertNode}
                  key={item.id}
                  explorerData={item}
                />
              )
            })
          }
        </div>

      </div>
    )

  } else {
    return (
      <div className={`${styles.file}`}>
        <span>📃 {explorerData.name}</span>
      </div>
    )
  }

}

export default Folder

