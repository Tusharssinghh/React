import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function fun(){
  return (
    <div>
      <h1>Hello Tushar! how are you doing ??</h1>
    </div>
  )
}

// const ReactElement =  {
//   type: 'a', 
//   props: {
//       href: 'https://www.google.com',
//       target: 'blank'
//   },
//   children: 'click me to visit google'
// }

const anotherelement  = (
  <a href = "https://www.google.com" target = "_blank">Visit Google</a>
)

const myvar = "hello this is my new variable"

const reactElement = React.createElement(
  'a', 
  {href: 'https://www.google.com', target : "_blank"},
  'click me to visit google',
  myvar
) 

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // {/* <App /> */}
    // <fun/>
    // <ReactElement/>
    reactElement
    // <App />
    // fun()
  // {/* </React.StrictMode>, */}
)
