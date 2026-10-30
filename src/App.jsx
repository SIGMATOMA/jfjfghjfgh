import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function Card() {
  
  return (

    <h1>Hey</h1>

  )

}



function App() {
  
  return (
    <div>

      <p style={{color:'yellow',

        width:'300px',height:'150px',
        background:'green'}}>Альберт Эйнштейн: «Стремитесь не к успеху, а к ценностям, которые он дает».
        
        </p>

      <p style={{color:'white',

        width:'300px',height:'150px',
        background:'blue'}}>Джордж Бернард Шоу: «Жизнь состоит не в том, чтобы найти себя. Жизнь состоит в том, чтобы создать себя».
        
        </p>

      <p style={{color:'pink',

        width:'300px',height:'150px',
        background:'purple'}}>Уинстон Черчилль: «Меняющий мнения не глуп».
        
        </p>

    </div>
    

  )

}
  export default App




