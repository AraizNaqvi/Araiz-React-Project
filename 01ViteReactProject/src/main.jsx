import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

let reactElement = React.createElement(
  'a',
  {href:"https://github.com", target: '_blank'},
  'Click me to visit Github'
)

function MyFunc(){
  return(
    <h1>Araiz Here</h1>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* reactElement */}
    <App />
    < MyFunc />
  </React.StrictMode>,
)
