import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Currency = () => {
  const {dispatch, currency} = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }

    let title = "";
    if(currency === "$"){
        title = "Currency ($ Dollar)"
    }

    if(currency === "£"){
        title = "Currency (£ Pound)"
    }

    if(currency === "€"){
        title = "Currency (€ Euro)"
    }

    if(currency === "₹"){
        title = "Currency (₹ Ruppee)"
    }
    

  return (
    <DropdownButton id="dropdown-item-button" size="lg" title={title}>
      <Dropdown.Item as="button" value="$" onClick={event=>changeCurrency(event.target.value)}>$ Dollar</Dropdown.Item>
      <Dropdown.Item as="button" value="£" onClick={event=>changeCurrency(event.target.value)}>£ Pound</Dropdown.Item>
      <Dropdown.Item as="button" value="€" onClick={event=>changeCurrency(event.target.value)}>€ Euro</Dropdown.Item>
      <Dropdown.Item as="button" value="₹" onClick={event=>changeCurrency(event.target.value)}>₹ Ruppee</Dropdown.Item>
    </DropdownButton>

    );
};

export default Currency;