import React,{useState} from 'react'
import NavBar from '../Components/NavBar';
import Slab from '../Components/Slab'



export default function Account() {

    const [state, setState] = useState({
        email: '',
        password: ''
      });

    const handleChange = (e) => {
        setState({
          [e.target.id]: e.target.value
        })
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
      }
    return (
        <>
        <NavBar/>
        <Slab header="Account" para="Home"/>
        <div className="account-container">
        <form className="white" onSubmit={handleSubmit}>
          <h1 className="grey-text text-darken-3">Log In</h1>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
      </>
    )
}
