import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/user'

const CreateUser = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {name:name,email:email,password:password,phone:phone})
        navigate('/showUsers')
    }
  return (
    <div>
        <h3>Crear Usuario</h3>
        <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'>Nombre:</label>
                <input
                    value = {name}
                    onChange = {(e) => setName(e.target.value)}
                    type="text"
                    className='form-control' 
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Correo:</label>
                <input
                    value = {email}
                    onChange = {(e) => setEmail(e.target.value)}
                    type="text"
                    className='form-control' 
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Teléfono:</label>
                <input
                    value = {phone}
                    onChange = {(e) => setPhone(e.target.value)}
                    type="number"
                    className='form-control' 
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Contraseña:</label>
                <input
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                    type="password"
                    className='form-control' 
                />
            </div>
            <button type='submit' className='btn btn-primary'>Guardar</button>
        </form>
    </div>
  )
}

export default CreateUser