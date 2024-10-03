import React, { useState } from 'react'

const App = () => {
  const [input,setInput]=useState('');
  const [city,setCity]=useState('');
  const [data,setData]=useState([]);
  const handlevalue=async(e)=>{
    e.preventDefault();
    setInput(e.target.value);

  }
  const handleCity=async(e)=>{
    setCity(e.target.value);
  }
const handleClick=async(e)=>{
  e.preventDefault();
  setData([...data,{item:input,city}])
  setInput('');
  setCity('')

}
const handleDel=(index)=>{
const datas=data.filter((_,t)=>t!==index);
setData(datas)
}
  return (
    <>
      <div>
       
        <div>
          <input type='text' value={input} onChange={handlevalue}  placeholder='Enter a input'/>
          <select value={city} onChange={handleCity}>
          <option value=''> select</option>
          <option value='hyd'>Hyderabad</option>
          <option value='del'>Delhi</option>
          </select>
          <button onClick={handleClick}>Add</button>
        </div>
        {data.map((item,index)=>(
          <ul key={index}>
            <li>{item.item} {item.city}</li>
            <button onClick={()=> handleDel(index)}>Del</button>
          </ul>

        
        ))}
      
      </div>
    </>
  )
}

export default App;