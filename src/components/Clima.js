import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({respuestaAPI}) => {

    const {name,main} = respuestaAPI;

    if(!name) return null;

    //Kelvin to ºC
    const kelvin = 273.15;

    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2> El clima de {name} es: </h2>
                <p className="temperatura">
                    {parseFloat(main.temp - kelvin,10).toFixed(2)} <span> &#x2103; </span>
                </p>
                <p> Temperatura MAX:
                    {parseFloat(main.temp_max - kelvin,10).toFixed(2)} <span> &#x2103; </span>
                </p>
                <p> Tempereatura MIN:
                    {parseFloat(main.temp_min - kelvin,10).toFixed(2)} <span> &#x2103; </span>
                </p>
            </div>
        </div>
     );
}

Clima.propTypes = {
    respuestaAPI: PropTypes.object.isRequired
}

export default Clima;