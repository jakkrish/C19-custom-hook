import './App.css'
import useWidth from './hooks/useWidth'

function App() {

  const width = useWidth();
  
  return (
    <>
      {width}
    </>
  )
}

export default App
