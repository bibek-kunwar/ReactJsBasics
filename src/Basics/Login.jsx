import React,{useState} from 'react'
import './Css/Form.css'

const Login = () => {
  const [name, setName] = useState();
  const[fullName,setFullname]=useState();
  const inputEvent = (event) => {
    console.log(event.target.value)
    setName(event.target.value)
  };
  const onSubmit = () => {
    setFullname(name);
  }
  return (
    <>
      <div className="Cointainer">
        <h1>Hellow { fullName}</h1>
      <input type="text" className='input' placeholder="Enter your Name " onChange={inputEvent} value={name}></input>
        <button className='button' onClick={onSubmit}> click me   </button>

     </div>

    </>
  )
}

export default Login