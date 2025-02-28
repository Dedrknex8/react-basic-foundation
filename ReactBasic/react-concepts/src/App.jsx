import { useEffect, useState } from 'react'
import './App.css'
import ClassbasedComponent from './componenets/classbased-components'
import FunctionalComponent from './componenets/functional-component'
import ProductList from './componenets/products/product-list'
function App() {
   const dummyProjectData = ['Product 1','Product 2','Product 3'];
   const[flag,setFlag]= useState(false);
   //use State contain the initial state
   const handleState =() =>{
    setFlag(!flag) // this will change the state
   }

   useEffect(()=>{
    console.log("Running only once page load");
    
   },[]) //this will only run on page load



  return (
    <div>
      <h1>Learing React</h1>
      <button onClick={handleState}>Toggle list</button>
     {
      flag ?<ProductList dummyProjectData={dummyProjectData} />:<h4>hello</h4>     }
    </div>
      
  )
}

export default App
