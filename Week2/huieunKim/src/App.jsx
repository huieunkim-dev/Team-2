import { useState } from 'react'
import Header from './components/Header';
import About from './components/About';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <main>
        <About></About>
      </main>
    </>

  );
}

export default App
