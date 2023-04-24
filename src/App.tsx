import React from 'react'

function App() {
  const [count, setCount] = React.useState(0)

  return (
    <div className="App">
      <h2>{count}</h2>
      <button
        type="button"
        onClick={() => setCount(prevCount => prevCount + 1)}
      >
        click me
      </button>
    </div >
  )
}

export default App
