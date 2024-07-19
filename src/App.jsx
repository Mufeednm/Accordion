import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

const [result,setResult]=useState(null)
  const data =[
    {
      "heading": "Document 1",
      "id": 1,
      "details": "This is the first document. It contains a comprehensive overview of the initial project requirements and specifications. Please review all sections thoroughly."
    },
    {
      "heading": "Document 2",
      "id": 2,
      "details": "This is the second document. It includes detailed design diagrams and architecture blueprints. Ensure you understand the proposed design before proceeding."
    },
    {
      "heading": "Document 3",
      "id": 3,
      "details": "This is the third document. It outlines the implementation plan, including timelines, milestones, and resource allocation. Adherence to this plan is crucial for project success."
    }
  ]
const buttonclick=(id)=>{
  console.log(id);

setResult(id)
  
}
console.log(result,"babu");

  return (
  <div>
 {
  data.map((value, index) => {
    return(
      <>
      <button onClick={()=>{buttonclick(value.id)}} key={index}>{value.id}</button>
{
  result==value.id?(
    <div>
      <h2>{value.heading}</h2>
      <p>{value.details}</p>
    </div>
  ):null
}
      </>
    )
  })
 }
  </div>

  )}
export default App
