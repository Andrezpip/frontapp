import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://localhost:8000/api/user/'

const EditUser = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`,{
            name:name,
            email:email,
            password:password,
            phone:phone
        })
        navigate('/showUsers')
    }

    useEffect( () => {
        const getUserById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setName(response.data.name)
            setEmail(response.data.email)
            setPassword(response.data.password)
            setPhone(response.data.phone)
        }
        getUserById()
    }, [])

    return (
        <div>
        <h3>Editar Usuario</h3>
        <form onSubmit={update}>
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
                    type="text"
                    className='form-control' 
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Contraseña:</label>
                <input
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                    type="text"
                    className='form-control' 
                />
            </div>
            <button type='submit' className='btn btn-primary'>Guardar</button>
        </form>
    </div>
    )
}

export default EditUser