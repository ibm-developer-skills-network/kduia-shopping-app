import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
  const {dispatch } = useContext(AppContext);

    const changeLocation = (val)=>{
            dispatch({
                type: 'CHG_LOCATION',
                payload: val,
            })
    }
    

  return (
        <div className='alert alert-secondary'> Currency {
      <select name="Location" id="Location" onChange={event=>changeLocation(event.target.value)}>
        <option value="£">$ Dollar</option>
        <option value="₹">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="CAD">₹ Rupee</option>
      </select>	
      }	
    </div>
    );
};

export default Location;