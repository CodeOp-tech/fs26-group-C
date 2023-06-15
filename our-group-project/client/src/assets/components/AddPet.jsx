import { useState, useContext } from 'react';
import AuthContext from '../contexts/AuthContext';


export default function AddPet() {
  const auth = useContext(AuthContext);
  return (
    <div>{auth.userId}</div>
  )
}
