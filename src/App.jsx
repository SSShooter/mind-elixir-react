import ReactPrismjs from '@uiw/react-prismjs'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-json'
import Example from './Example'
import ExampleText from './Example?raw'
import example from 'mind-elixir/dist/example1'
import './App.scss'

export default function App() {
  return (
    <div className="App">
      <Example />
      <div className="code">
        <h2>How To Use</h2>
        <ReactPrismjs className="block" language="jsx" source={ExampleText} />
        <h2>Data structure</h2>
        <ReactPrismjs
          className="block"
          language="json"
          source={JSON.stringify(example, null, 2)}
        />
      </div>
    </div>
  )
}
