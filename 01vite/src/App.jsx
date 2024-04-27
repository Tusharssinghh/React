import Hello from './script'


function App() {

  const hello = "My ghar ka naam is pappu"

  return (
  //  <h1>Learning React with the help of vite</h1>
  // <Hello/>
  // <h1>Hello buddy</h1>

  <>
  <hello/>
  <h1> {hello}, Heyy Tushar</h1>
  <h2>Singh</h2>
  <h2>is in</h2>
  <h2>App</h2>
   
  {/* This is called Evaluated expression and here we give the last evaluated value and can't apply  if else statements*/}

  {/* ******************************IMPORTANT***********************************   */}
  </>
  )
}

export default App
