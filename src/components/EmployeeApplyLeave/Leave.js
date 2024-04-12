import React from 'react'
import { useState } from 'react';
import './Leave.css';
import { useDispatch } from 'react-redux';
import { addLeave } from '../../redux/actions/Employee';
import { jwtDecode } from "jwt-decode";


function Leave() {
  const id = jwtDecode(localStorage.getItem("token")).user._id;
  const handleChange = (e) => {
      setNewLeave({ ...newLeave, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const [newLeave, setNewLeave] = useState({ Employee: id });
  const submitLeave = () => {
      dispatch(addLeave(newLeave));
  };
  
  return (
  <div className='pp'>
    <div className='con'>
       
        <form>
      <div className='eya'>
        <label>Date de début:</label>
        <input 
         className="input-fiel"
          type="date" 
          // value={startDate} 
          // onChange={(e) => setStartDate(e.target.value)} 
          required 
        />
      </div>
      <div className='eya'>
        <label>Date de fin:</label>
        <input 
        className="input-fiel"
          type="date" 
          // value={endDate} 
          // onChange={(e) => setEndDate(e.target.value)} 
          required 
        />
      </div>
      <div className='eya'>
        <label >Type de congé:</label>
        <select 
        className="input-fiel"
          // value={leaveType} 
          // onChange={(e) => setLeaveType(e.target.value)} 
          required
        >
          <option value="">Sélectionnez le type de congé</option>
          <option value="Congé payé">Congé payé</option>
          <option value="Congé maladie">Congé maladie</option>
          <option value="Congé sans solde">Congé sans solde</option>
          {/* Ajoutez d'autres options de congé selon votre besoin */}
        </select>
      </div>
      <div className='eya'>
        <label>Raison:</label>
        <textarea 
        className="input-fiel"
          // value={reason} 
          // onChange={(e) => setReason(e.target.value)} 
          required 
        />
      </div>
      <div className='btn'>
      <button id="hh" type="submit"  
      
      // onClick={submitLeave}
      >Soumettre</button>
      </div>
    </form>
    </div>
    </div>
  )
}

export default Leave