import './App.css';
import { str } from './helper';
import { useState } from 'react';
function App() {
  const [ captcha, setCaptcha ] = useState('')
  const [ verified, setVerified ] = useState('')
  const [ theme, setTheme ] = useState(false)

  const handleCaptcha = (e) => {
    setCaptcha(e.target.value)
    console.log(captcha)
  }

  const handleCheck = () => {
    if(captcha===str){
      setVerified(true)
      alert('Verified')
    }else {
      setVerified(false)
      alert('Failed')
    }
  }

  const handleTheme = () => {
    setTheme(!theme)
    
    // style={{backgrounColor:'black'}}
  }

  return (
    <div className={theme ? 'dark' : 'light'}>
      {/* <div className='dark'> */}

      <button onClick={()=>{handleTheme()}}>Theme Toggle</button>

      <form className='form' onSubmit={(e)=>e.preventDefault()}>
        <div> <label>First Name</label> <input/></div>
        <div> <label>Last Name</label> <input/></div>
        <div> <label>Email</label> <input/></div>
        <div> <label >Captcha</label> <input value={captcha} onChange={(e) => handleCaptcha(e)}/>  </div> <span className='captcha'>{str}</span>
        <button onClick={()=>{ handleCheck()}}>SIGN UP</button>
      </form>

      </div>
  );
}

export default App;
