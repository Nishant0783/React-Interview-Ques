import React, { useState } from 'react'
import Folder from './components/Folder'
import explorer from './data/folderData'
import useTraverseData from './hook/useTraverseData';


const App = () => {
  const [data, setData] = useState(explorer);
  const { insertNode } = useTraverseData();
  
  const handleInsertNode = (folderId, item, isFolder) => {
    console.log("handleInsertNode")
    console.log(folderId)
    console.log("data id: ", data.id)
    const finalTree = insertNode(data, folderId, item, isFolder)
    setData(finalTree)
    console.log("Final tree")
  }
  return (
    <div>
      <Folder handleInsertNode={handleInsertNode} explorerData={data} />
    </div>
  )
}

export default App

