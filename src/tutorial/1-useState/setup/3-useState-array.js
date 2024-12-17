import React from 'react';
import { data } from '../../../data';
import { useState} from 'react';

const UseStateArray = () => {
  const [people,setPeople]=useState(data);
  const removeItem=(id)=>{
    let newPeople=people.filter((person)=>person.id!==id)
    setPeople(newPeople)
  }
  
  return (
  <>
    {people.map((person)=>{
      const {id,name}=person;
      return (
        <div className="item" key={id}>
          {name}
          <button className="btn" onClick={()=>removeItem(id)}>remove</button>

        </div>
      )
    })}
    <button className="btn" onClick={()=>setPeople([])}>clear items</button>

  </>);
};

export default UseStateArray;
