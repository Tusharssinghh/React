import { useState } from "react"

// import { useState } from "react"


// function App() {

//   const [color, setcolor] = useState('grey')

//   return (
//     <div className = "w-full h-screen duration-200" style = {{backgroundColor : color}}>
//       <div className = "fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
//         <div className = "flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl"> 
//             <button onClick = {() => setcolor("red")} className = "outline-none px-4 py-1 rounded-full text-white shadow-lg" style = {{backgroundColor : "red"}}>
//                 Red
//             </button>
//             <button  onClick = {() => setcolor("yellow")} className = "outline-none px-4 py-1 rounded-full text-white shadow-lg" style = {{backgroundColor : "yellow"}}>
//             yellow
//             </button>
//             <button onClick = {() => setcolor("blue")}className = "outline-none px-4 py-1 rounded-full text-white shadow-lg" style = {{backgroundColor : "blue"}}>
//             blue
//             </button>
//             <button onClick = {() => setcolor("green")} className = "outline-none px-4 py-1 rounded-full text-white shadow-lg" style = {{backgroundColor : "green"}}>
//             green
//             </button>
//             <button onClick = {() => setcolor("purple")} className = "outline-none px-4 py-1 rounded-full text-white shadow-lg" style = {{backgroundColor : "purple"}}>
//             purple
//             </button>
//             <button onClick = {() => setcolor("pink")} className = "outline-none px-4 py-1 rounded-full text-white shadow-lg" style = {{backgroundColor : "pink"}}>
//             pink
//             </button>
//             <button onClick = {() => setcolor("black")} className = "outline-none px-4 py-1 rounded-full text-white shadow-lg" style = {{backgroundColor : "black"}}>
//             black
//             </button>
//             <button onClick = {() => setcolor("magentae1")} className = "outline-none px-4 py-1 rounded-full text-white shadow-lg" style = {{backgroundColor : "magenta"}}>
//             magenta
//             </button>
//         </div>
//       </div>
//     </div>

//   )
// }

// export default App


function App() {
  const [color, setcolor] = useState('grey')
  return (
    <div className = "w-full h-screen duration-200" style = {{backgroundColor:color}}>
      <div className = "fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className = "flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button onClick = {() => setcolor("red")} className = "outline-none px-4 py-1 rounded-full text-white shadow-lg" style = {{backgroundColor : "red"}}> 
            Red
          </button>

          <button onClick = {() => setcolor("green")} className = "outline-none px-4 py-1 rounded-full text-white shadow-lg" style = {{backgroundColor : "green"}}> 
            Green
          </button>

          <button onClick = {() => setcolor("yellow")} className = "outline-none px-4 py-1 rounded-full text-white shadow-lg" style = {{backgroundColor : "yellow"}}> 
            Yellow
          </button>

          <button onClick = {() => setcolor("blue")} className = "outline-none px-4 py-1 rounded-full text-white shadow-lg" style = {{backgroundColor : "blue"}}> 
            Blue
          </button>

          <button onClick = {() => setcolor("blue")} className = "outline-none px-4 py-1 rounded-full text-white shadow-lg" style = {{backgroundColor : "blue"}}> 
            Blue
          </button>

          <button onClick = {() => setcolor("magenta")} className = "outline-none px-4 py-1 rounded-full text-white shadow-lg" style = {{backgroundColor : "magenta"}}> 
            Magenta
          </button>

          <button onClick = {() => setcolor("grey")} className = "outline-none px-4 py-1 rounded-full text-white shadow-lg" style = {{backgroundColor : "grey"}}> 
            Grey
          </button>

          <button onClick = {() => setcolor("black")} className = "outline-none px-4 py-1 rounded-full text-white shadow-lg" style = {{backgroundColor : "black"}}> 
            Black
          </button>

        </div>

      </div>
    
    </div>
  )
}

export default App



