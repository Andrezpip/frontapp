import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'

const ShowUsers = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getAllUsers()
    }, [])

    const getAllUsers = async () => {
        const response = await axios.get(`${endpoint}/users`)
        setUsers(response.data)
    }

    const deleteUser = async (id) => {
        const response = await axios.delete(`${endpoint}/user/${id}`)
        getAllUsers()
    }
    return (
        <div>
            <div className='d-grid gap-2'>
                <div>
                    <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Crear</Link>
                </div>
            </div>
            <table className='table table-dark table-striped'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Teléfono</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>
                                <Link to={`/edit/${user.id}`} className='btn btn-warning'>Editar</Link>
                                <button onClick={() => deleteUser(user.id)} className='btn btn-danger'>Eliminar</button>                            
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ShowUsers