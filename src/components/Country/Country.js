import React from 'react';
import './Country.css'
const Country = (props) => {
    // console.log(props)
    const {area, region, flags, name} = props.country;
    return (
        <div className='country'>
           <h2>Country Name: {name.common}</h2>
           <h4>Area: {area}</h4>
           <h4>Region: {region}</h4>
           <img src={flags.png} alt="" /> 
        </div>
    );
};

export default Country;