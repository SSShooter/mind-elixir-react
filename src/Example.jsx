import MindElixirReact from './MindElixirReact'
// import MindElixirReact from 'mind-elixir-react'
import MindElixir from 'mind-elixir'
import exportXmind from '@mind-elixir/export-xmind'
import React, { useRef, useState } from 'react'

export default function App() {
  const plugins = [exportXmind]
  const [data, setData] = useState(MindElixir.new('new topic'))
  const [options, setOptions] = useState({
    direction: MindElixir.SIDE,
  })
  const changeDirection = () => {
    options.direction = MindElixir.LEFT
    setOptions({ ...options })
  }
  const inputEl = useRef(null)
  const ME = useRef(null)
  console.log('App render', ME)
  const handleOperate = (operation) => {
    console.log('handleOperate', operation)
  }
  const handleSelectNode = (operation) => {
    console.log('handleSelectNode', operation)
  }
  const handleExpandNode = (operation) => {
    console.log('handleExpandNode', operation)
  }
  const center = () => {
    // access mind-elixir instance
    ME.current.instance.toCenter()
  }
  const download = () => {
    ME.current.instance.exportXmindFile()
  }
  return (
    <div className="showcase">
      <h2>Render</h2>
      <div className="block">
        <MindElixirReact
          ref={ME}
          data={data}
          options={options}
          plugins={plugins}
          style={{ height: '75vh', width: '100%' }}
          onOperate={handleOperate}
          onSelectNode={handleSelectNode}
          onExpandNode={handleExpandNode}
        />
      </div>
      <div className="block">
        <input placeholder="Paste data here" ref={inputEl}></input>
        <button onClick={() => setData(JSON.parse(inputEl.current.value))}>
          Set data
        </button>
        <button onClick={changeDirection}>Set options</button>
        <button onClick={center}>Center</button>
        <button onClick={download}>Download Xmind File</button>
      </div>
    </div>
  )
}
