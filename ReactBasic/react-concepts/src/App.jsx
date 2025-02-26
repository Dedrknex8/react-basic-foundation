import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassbasedComponent from './componenets/classbased-components'
import FunctionalComponent from './componenets/functional-component'
import ProductList from './componenets/products/product-list'
function App() {
  const [count, setCount] = useState(0)
   const dummyProjectData = ['Product 1','Product 2','Product 3'];

  return (
    <div>
      <h1>Learing React</h1>
     {/*  <ClassbasedComponent></ClassbasedComponent>
      <FunctionalComponent></FunctionalComponent> */}
  <ProductList dummyProjectData={dummyProjectData} />
    </div>
      
  )
}

export default App
