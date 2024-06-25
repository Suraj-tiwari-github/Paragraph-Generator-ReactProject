import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount]=useState(0);
  const [text, setText]=useState([]); 
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log("Hello World");\
    let amount=parseInt(count);
    
    if(count<=0) amount=1;

    if(count>8) amount=8;

    setText(data.slice(0,amount));
  }
  return (
  <section className='section-center'>
    <h3>tired of boring lorem ipsum?</h3>  
    <form action="" className='lorem-form' onSubmit={handleSubmit}>
      <label htmlFor="amount">
        paragraphs:
      </label>
      <input type="number" name='amount' id='amount' value={count} onChange={(e)=> setCount(e.target.value)} />
      <button type='submit' className='btn'>Generate</button>
    </form>
      <p class=''>max 8 paragraph at once</p>

    <article className='lorem-text'>
       {text.map((info,index)=>{
        return <p key={index}>{info}</p>
       })}
    </article>
    </section>

    
    )
}

export default App;
