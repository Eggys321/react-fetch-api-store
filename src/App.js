import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([])
  console.log(data);
  useEffect( ()=>{
    getData()
    

  },[] )

  const getData = async()=>{
    const response = await fetch('https://fakestoreapi.com/products')
    // console.log(response)
    const jsonData = await response.json()
    // console.log(jsonData);
    setData(jsonData)

  }

  
  return (
    <div className='App'>
      <h1>React Fetch Api</h1>
      <div >
        {data.map((values)=>{
          return (
            <div className='text'>
              <h1> {values.title} </h1>
              <h1> {values.description} </h1>
              <img src={values.image} alt="" />
            </div>
          )

        } )}
        {/* <h4>Title</h4> */}
        {/* <h4>Title</h4>
        <h4>Title</h4>
        <h4>Title</h4>
        <h4>Title</h4> comment 4 ..once i fetch data,d data wud be created in dt fashion */}
      </div>
    </div>
  )
}

export default App;
