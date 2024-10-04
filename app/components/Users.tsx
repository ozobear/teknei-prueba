"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../utils/constants';
import { User } from '../utils/types';

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser   , setSelectedUser   ] = useState<User | null>(null);
  const [editedUser  , setEditedUser  ] = useState<User | null>(null);

  useEffect(() => {
    axios.get(API_URL).then((response) => {
      setUsers(response.data.results);
    });
  }, []);

  const handleGetUser = () => {
    axios.get(API_URL).then((response) => {
      setUsers((prevUsers) => [...prevUsers, response.data.results[0]]);
    });
  };

  const handleSelectUser = (user: User) => {
    setSelectedUser   (user);
    setEditedUser ({ ...user });
  };

  const handleUpdateUser  = (field: keyof User, value: string | number) => {
    if (editedUser ) {
      const updatedUser  = { ...editedUser  };
  
      if (field.includes('.')) {
        const [parentField, childField] = field.split('.');
        updatedUser [parentField] = { ...updatedUser [parentField], [childField]: value };
      } else {
        updatedUser [field] = value;
      }
  
      setEditedUser (updatedUser );
    }
  };

  const handleSaveChanges = () => {
    if (editedUser) {
      const index = users.findIndex((user) => user.email === editedUser   .email);
      if (index !== -1) {
        const updatedUsers = [...users];
        updatedUsers[index] = editedUser   ;
        setUsers(updatedUsers);
      }
      setSelectedUser (null);
      setEditedUser (null);
    }
  };

  return (
    <div className='text-center p-5'>
      <h1>Usuarios</h1>
      <button onClick={handleGetUser   }>Obtener usuario</button>
      <table className='mx-auto block'>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Ciudad</th>
            <th>Estado</th>
            <th>País</th>
            <th>Código postal</th>
            <th>Correo</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.email}>
              <td>{user.name.title}</td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.location.city}</td>
              <td>{user.location.state}</td>
              <td>{user.location.country}</td>
              <td>{user.location.postcode}</td>
              <td>{user.email}</td>
              <td>
                <button className='bg-yellow-300 mx-2 p-2 text-black rounded' onClick={() => handleSelectUser(user)}>Editar Usuario</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUser && (
        <div>
            <h2>Editar usuario</h2>
            <form>
                <label>
                    Título:
                    <input type="text" value={editedUser   ?.name.title} onChange={(e) => handleUpdateUser   ('name.title', e.target.value)} />
                </label>
                <br />
                <label>
                    Nombre:
                    <input type="text" value={editedUser   ?.name.first} onChange={(e) => handleUpdateUser   ('name.first', e.target.value)} />
                </label>
                <br />
                <label>
                    Apellido:
                    <input type="text" value={editedUser   ?.name.last} onChange={(e) => handleUpdateUser   ('name.last', e.target.value)} />
                </label>
                <br />
                <label>
                    Ciudad:
                    <input type="text" value={editedUser   ?.location.city} onChange={(e) => handleUpdateUser   ('location.city', e.target.value)} />
                </label>
                <br />
                <label>
                    Estado:
                    <input type="text" value={editedUser   ?.location.state} onChange={(e) => handleUpdateUser   ('location.state', e.target.value)} />
                </label>
                <br />
                <label>
                    País:
                    <input type="text" value={editedUser   ?.location.country} onChange={(e) => handleUpdateUser   ('location.country', e.target.value)} />
                </label>
                <br />
                <label>
                    Código postal:
                    <input type="number" value={editedUser   ?.location.postcode} onChange={(e) => handleUpdateUser   ('location.postcode', e.target.value)} />
                </label>
                <br />
                <label>
                    Correo:
                    <input type="email" value={editedUser  ?.email} onChange={(e) => handleUpdateUser  ('email', e.target.value)} />
                </label>
                <br />
                <button onClick={handleSaveChanges}>Guardar cambios</button>
            </form>
        </div>
      )}
    </div>
  );
};

export default Users;